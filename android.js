// ==UserScript==
// @name         android.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Ronald Y
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?domain=android.com
// @grant        none
// ==/UserScript==


(function() {
  'use strict';
  /**************************************
  * drag text and drop to google search *
  ***************************************/
  document.body.addEventListener("drop", (e) => console.log(e.dataTransfer.getData("Text")));
  document.addEventListener('dragend', function(e) {
      if (e.clientY < 0 && window.getSelection().toString()) {
          window.open('https://www.google.com/search?q=' + encodeURIComponent(window.getSelection().toString()));
      }
  });
  /*******************
  * right click menu *
  ********************/
  var contextMenu;
  var target;
  var menuFunctions = {
      'Copy Text Only': { check: () => !window.getSelection().isCollapsed || window.getSelection().toString(), action: () => navigator.clipboard.writeText(window.getSelection().toString()) },
      'Copy': { check: () => !window.getSelection().isCollapsed || window.getSelection().toString(), action: () => document.execCommand('Copy') },
      'Cut': { check: () => Boolean(target.closest('input[type="text"]') || target.closest('textarea')) && window.getSelection().toString(), action: () => { target.focus(); document.execCommand("cut"); } },
      'Edit with Pixlr': { check: () => Boolean(target.closest('img')), action: () => { window.open('https://pixlr.com/e/?image=' + encodeURIComponent(target.closest('img').src)) } },
      'Open with Office': { check: () => Boolean(target.closest('a')), action: () => { window.open('https://view.officeapps.live.com/op/view.aspx?src=' + encodeURIComponent(target.closest('a').href)) } },
      'Open with GDocs': { check: () => Boolean(target.closest('a')), action: () => { window.open('https://docs.google.com/gview?url=' + encodeURIComponent(target.closest('a').href)) } },
      'Scroll to Top': { check: () => true, action: () => { document.body.scrollTop = 0; document.documentElement.scrollTop = 0; } },
      'Print Page': { check: () => true, action: () => window.print() },
  };

  document.addEventListener("contextmenu",function(e){
      target = e.target || e.srcElement;
      /* make menu */
      if (!contextMenu) {
          contextMenu = document.createElement('div');
          contextMenu.style.all = 'initial';
          Object.assign(contextMenu.style, { position: 'fixed', zIndex: 2147483647, width:'150px', background: '#1b1a1a', borderRadius:'5px' });
          Object.keys(menuFunctions).filter(i => menuFunctions[i].check()).forEach(i => {
              var menuItem = document.createElement('div');
              menuItem.innerHTML = i;
              Object.assign(menuItem.style, {all: 'initial', padding: '8px 10px', fontFamily: 'calibri, sans-serif', fontSize: '15px', color: '#eee', borderRadius: 'inherit', display: 'block', cursor: 'pointer', userSelect: 'none' });
              menuItem.addEventListener('mousedown', menuFunctions[i].action);
              contextMenu.appendChild(menuItem);
          });
          document.body.appendChild(contextMenu);
      }
      contextMenu.style.top = e.clientY + "px";
      contextMenu.style.left = e.clientX + "px";
  });
  document.addEventListener("mousedown", function(e){
      if (contextMenu) contextMenu.remove();
      contextMenu = null;
  });
  /************
  * href hint *
  *************/
  var hrefHint = document.createElement('div');
  Object.assign(hrefHint.style, { all: 'initial', display: 'none', padding: '3px', position: 'fixed', bottom: '0px', zIndex: 2147483647, background: '#1b1a1aaa', fontFamily: 'calibri, sans-serif', fontSize: '12px', color: '#eee', userSelect: 'none' });
  document.body.appendChild(hrefHint);
  document.addEventListener("mouseover",function(e){
      var t = e.target || e.srcElement;
      if (t && t.closest && t.closest('a')) {
          hrefHint.innerHTML = t.closest('a').href;
          hrefHint.style.display = 'block';
      } else {
          hrefHint.innerHTML = '';
          hrefHint.style.display = 'none';
      }
  });
  /**********
  * Tooltip *
  ***********/
  var tooltip = document.createElement('div');
  Object.assign(tooltip.style, { all: 'initial', display: 'none', padding: '6px', border: '1px solid #222', position: 'fixed', zIndex: 2147483647, background: '#ffffef', fontFamily: 'calibri, sans-serif', fontSize: '12px', color: '#222', userSelect: 'none' });
  document.body.appendChild(tooltip);
  document.addEventListener("mouseover",function(e){
      var t0 = e.target || e.srcElement, t = e.target || e.srcElement;
      while (t && !t.title && !(t instanceof HTMLAnchorElement)) { t = t.parentNode; }
      if (t && t0.title || (t && t.title && t.closest && t.closest('a'))) {
          tooltip.innerHTML = t0.title || t.title;
          tooltip.style.display = 'block';
          tooltip.style.top = e.clientY + 5 + "px";
          tooltip.style.left = e.clientX + 5 + "px";
      } else {
          tooltip.innerHTML = '';
          tooltip.style.display = 'none';
      }
  });
  /**************************
  * Disable pull to refresh *
  ***************************/
  document.body.style.overscrollBehaviorY = "contain";
})();
