// ==UserScript==
// @name         coder.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://127.0.0.1:8080
// @icon         https://www.google.com/s2/favicons?domain=code.visualstudio.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
  /* cs = code snippets = library, th = theme, od = online data */
  ((od=true, os={"url":"[YOUR_URL_HERE]"}) => {
    var fr,
    /* thn = theme names = current_theme, pr = parent, em = edit_mode */
    thn = "One White",
    pr = document.body,
    em = false,
    /* ce = createElement, as = assign style, el = addEventListener, ac = appendChild, pe = pr.appendChild + ce */
    ce = x => document.createElement(x),
    as = (x, y) => oa(x.style, y),
    el = (e, ...x) => {var f = x.pop(); x.map(i => e.addEventListener(i, f)); },
    ac = (e, x) => e.appendChild(x),
    pe = (...x) => x.map(i => pr.appendChild(ce(i))),
    /* oa = Object.assign(), ok = Object.keys() */
    oa = (x, y) => Object.assign(x, y),
    ok = x => Object.keys(x?x:{});

    function main() {
      /******************
       * main - offline *
       ******************/
      !od && coder({}, "");
      var th = {"sm":"position: absolute; box-shadow: 0 0 24px 0 rgba(0,0,0,0.2),0 0 77px 0 rgba(0,0,0,0.22); margin: 0px; padding: 0px; ","sl":"display: block; font-family: Calibri; font-size: 16px; color: #000000; background-color: #FFFFFF; text-align: center; padding: 0px; margin: 0px; border-bottom: solid #CCCCCC 1px; text-decoration: none; user-select: none; ","si":"display: block; font-family: Calibri; font-size: 16px; color: #000000; background-color: #FFFFFF; text-align: center; padding: 2px 8px 2px 8px; margin: 0px; border-bottom: solid #CCCCCC 1px; text-decoration: none; user-select: none; ","sih":"background-color: #AAAAAA; ","slh":"background-color: #AAAAAA; ","me":"left: 0; box-shadow: 0 0 24px 0 rgba(0,0,0,0.2),0 0 77px 0 rgba(0,0,0,0.22); margin: 0px; padding: 0px; display: table; ","mc":"display: block; font-family: Calibri; font-size: 16px; color: #000000; background-color: #AAAAAA; height: 40px; text-align: left; vertical-align: middle; padding: 0px 10px 0px 10px; boarder-left: solid #CCCCCC 0.25px; border-right: solid #CCCCCC 0.25px; text-decoration: none; margin: 0px; user-select: none; display: table-cell;","mch":"background-color: #606060; ","mi":"display: block; font-family: Calibri; font-size: 16px; color: #000000; background-color: #FFFFFF; height: 40px; text-align: left; vertical-align: middle; padding: 0px 10px 0px 10px; boarder-left: solid #CCCCCC 0.25px; border-right: solid #CCCCCC 0.25px; text-decoration: none; margin: 0px; user-select: none; display: table-cell;","ml":"display: block; font-family: Calibri; font-size: 16px; color: #000000; background-color: #FFFFFF; height: 40px; text-align: left; vertical-align: middle; padding: 0px; boarder-left: solid #CCCCCC 0.25px; border-right: solid #CCCCCC 0.25px; text-decoration: none; margin: 0px; user-select: none; display: table-cell;","mih":"background-color: #AAAAAA; ","mlh":"background-color: #AAAAAA; ","we":"position: fixed; z-index: 2147483647; margin: 0px; padding: 0px; ","bg":"z-index: 2147483647; background: #000000; position: fixed; left: 0; top: 0; bottom: 0; right: 0; opacity: 0.5;","ed":"z-index: 2147483647; background: #FFFFFF; position: fixed; left: 10%; top: 10%; width: 80%; height: 80%;","ex":"z-index: 2147483647; width: 40px; height: 40px; line-height: 40px; text-align: center; user-select: none; position: fixed; top: calc(10% - 20px); right: calc(10% - 20px); pointer-events: auto; background: #EEEEEE; border-radius: 50%;"};
      /*****************
       * main - online *
       *****************/
      GM_xmlhttpRequest({
        method: "GET",
        url: os.url,
        onload: function(response) {
          var data = JSON.parse(response.responseText);
          console.log(data);
          od && data && th && coder(data, th);
        }
      });
    }
    main();
    /********
     * copy *
     ********/
    window.addEventListener('message', e => {
      e.data && e.data.cmd === 'copy' && e.data.json instanceof String && navigator.clipboard.writeText(e.data.json);
    });
    /******************
     *  coder(cs, th) *
     ******************/
    function coder(cs, th) {
      var
      /* st = style set */
      st = (x, h) => { for (var i in x) {x[i].style.all = 'initial'; x[i].style.cssText += th[i] + (h?th[i+'h']:''); } },
      /**
       * fo = focus, sf = set focus, ca = cursor begin (A), cb = cursor end (B)
       * uc = update cursor, us = update selection
       * ax = clientStartX, ay = clientStartY, bx = beforeDragX, by = beforeDragY
       * dx = draggingX, dy = draggingY, xy = get mouse client X Y
       */
      fo, ca, cb,
      sf = _ => fo = document.activeElement,
      uc = _ => [ca, cb] = [fo.selectionStart, fo.selectionEnd],
      us = x => fo.selectionStart = fo.selectionEnd = x ,
      ax = 0, ay = 0, bx = 0, by = 0, dx = 0, dy = 0,
      xy = e => (t = e.touches) ? [t.pageX, t.pageY] : [e.clientX, e.clientY],
      /* df = is defined?, de = document.addEventListener, dr = document.removeEventListener */
      df = x => window.hasOwnProperty(x),
      de = (...x) => el(document, ...x),
      dr = (...x) => {var f = x.pop(); x.map(i => document.removeEventListener(i, f)); },
      /* pa = path resolves, ie = isExpanded, pl = choice of programming langauge */
      pa = p => p.reduce((o, i) => o[i], cs[pl]),
      ie = 1, we, se = [],
      pl = Object.keys(cs)[0],
      /**
       * ods = onDragStart, odm = onDragMove, ode = onDragEnd
       */
      ods = e => {
        dx = bx; dy = by; [ax, ay] = xy(e);
        de('mouseup', 'touchend', ode);
        de('mousemove', 'touchmove', odm);123
        e.preventDefault();
      }, odm = e => {
        var [x, y] = xy(e);
        dx = bx + (x - ax); dy = by + (y - ay);
        as(we, {left: dx+'px', top: dy+'px'});
        frs(0);
      }, ode = _ => {
        bx = dx; by = dy;
        dr('mouseup', 'touchend', ode);
        dr('mousemove', 'touchmove', odm);
      },
      /**
       * fis = insert snippet, frs = remove se
       */
      fis = s => {
        fo && fo.selectionStart && uc();
        if (ca != null) {
          fo.focus();
          if (df('colab') && (c = colab.global.notebook.focusedCell)) {
            var t = c.getText(), o = c.editor.getOffsetAt(c.editor.getCursor());
            c.setText(t.substr(0, o) + s + t.substr(o + cb - ca));
            c.editor.setCursor(c.editor.getPositionAt(o + s.length));
          } else if (df('$RStudio')) {
            try {ace.edit($RStudio.last_focused_editor_id).insertSnippet(s);} catch {}
          } else {
            /*us(ca + (fo.value = s).length);*/
            document.execCommand('insertText', false, s);
          }
        }
        frs(0);
      }, frs = i => { while (se.length > i) se.pop().remove(); } ,
      /**
       * fme, fmi, fsm, fsi correspond to me, mi, sm, si
       */
      lg = k => '<div style="width: 40px; height: 40px; background-image: url('+k+'); background-repeat: no-repeat; background-position: center; background-size: 24px;"></div>', 
      fsm = (p, xy)=>{
        var sm = ce('ul'); st({sm});
        fo && uc();
        if (ca != null) fo.focus();
        (p.length === 1 && p[0] === pl)
        ? ok(cs).map(k => k !== pl && ac(sm, fsi(p, k, 'sl')))
        : ok(pa(p)).map(k => ac(sm, fsi(p, k)));
        se.push(ac(we, sm));
        as(sm, {top: xy[1]+'px', left: xy[0]+'px'});
      }, fsi = (p, k, s='si')=>{
        var si = ce('li'); st({[s]:si}); si.innerHTML = s == 'sl' ? lg(k) : k;
        el(si, 'mouseover', _ => {
          frs(p.length);
          st({[s]:si},1);
          sf();
          (!(p.length === 1 && p[0] === pl)) && (o = pa(p)[k]) && typeof o === 'object' &&
          fsm(p.concat([k]), [si.parentElement.offsetLeft + si.offsetLeft + si.offsetWidth - 1, si.parentElement.offsetTop + si.offsetTop]);
        });
        el(si, 'mouseup', _ => (p.length === 1 && p[0] === pl)
          ? (fo.focus(), fme(k)) : (o = pa(p)[k]) && typeof o === 'string'  && !em && fis(o)
        );
        el(si, 'mouseleave', _ => st({[s]:si}) );
        return si;
      }, fme = (l = pl) => {
        pl = l;
        while (we.hasChildNodes()) we.removeChild(we.lastChild);

        var me = ce('ul'), mc = ce('li'),
        f = (a) => (bx == dx && by == dy && a(), fo && fo.focus());
        st({me, mc});
        mc.innerHTML = ['→', '←'][ie];
        el(mc, 'mouseover', _ => {st({mc},1); sf(); frs(0);});
        el(mc, 'mouseup', 'touchend', _ => f(_ => {ie = [1, 0][ie]; fme();}));
        el(mc, 'mouseleave', _ => st({mc}));
        !em && el(mc, 'mousedown', 'touchstart', ods);
        ac(me, mc);
        if (ie) {
          ac(me, fmi(pl, 'ml'));
          for (var k in cs[pl]) ac(me, fmi(k));
          if (!em) {
            var le = fmi('✎'), lc = fmi('❌'), rf = fmi('🔄');
            el(le, 'mouseup', 'touchend', _ => f(fed) );
            el(lc, 'mouseup', 'touchend', _ => f(we.remove.bind(we)) );
            el(rf, 'mouseup', 'touchend', _ => [f(main), f(we.remove.bind(we))] );
            ac(me, le); ac(me, lc); ac(me, rf);
          }
        }
        ac(we, me);
      }, fmi = (k, s='mi') => {
        var li = ce('li'), f = _ => fsm([k], [li.offsetLeft, li.style.height]);
        st({[s]:li});
        li.innerHTML = s == 'ml' ? lg(k) : k;
        el(li, 'mouseover', _ => {st({[s]:li},1); sf(); frs(0); f(); });
        el(li, 'mouseup', _ => (bx != dx || by != dy) && f() );
        el(li, 'mouseleave', _ => st({[s]:li}) );
        if (!em) {
          el(li, 'mousedown', ods);
          el(li, 'touchstart', e => {ods(e); f(); });
        }
        return li;
      },
      /**
       * fed = initialize editor
       */
      fed = _ => {
        var a = [bg, ed, ex] = pe('div', 'iframe', 'div'); st({bg, ed, ex});
        ed.onload = _ => { ed.contentWindow.postMessage({cs, thn, bx, by}, '*'); };
        ed.src = 'https://knyipab.github.io/browserscript/coder/';
        ex.innerHTML = '❌';
        [bg, ex].map(i => el(i, 'mouseup', 'touchend', _ => a.map(i => i.remove())));
      };

      /**
       * init coder
       */
      [we] = pe('div'); st({we});
      as(we, {left: bx+'px', top: by+'px'});

      el(we, 'mouseleave', _ => frs(0));
      fme();
    };
  })();
  //
})();
