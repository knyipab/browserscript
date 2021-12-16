javascript: 
 
(function() {
  'use strict';
  var _ce = x => document.createElement(x), _ac = x => document.body.appendChild(x), _oa = (...x) => Object.assign(...x), _da = (...x) => document.addEventListener(...x),
      _wg = () => window.getSelection(), _dq = (...x) => document.querySelector(...x), _wlh = window.location.hostname,
      _mb = Number(/Android|iPhone|iPad/i.test(navigator.userAgent));

  /* youtube */
  if (_wlh === 'www.youtube.com') {
      /* selectable subtitle */
      var selectableSubtitle = () => {
          document.querySelectorAll('div.caption-window').forEach(div => {
              div.style.cursor = 'auto';
              div.style.userSelect = 'text';
              div.setAttribute('draggable', false);
              div.addEventListener('mousedown', e => {
                  e.returnValue = true;
                  (typeof e.stopPropagation === 'function') && e.stopPropagation();
                  (typeof e.cancelBubble === 'function') && e.cancelBubble();
              }, true);
          });
      };
      var retryYTSubtitle = () => {
          setTimeout(retryYTSubtitle, 1000);
          if (!_dq('div.ytp-caption-window-container') || !_dq('.ytp-subtitles-button')) return;
          new MutationObserver(selectableSubtitle).observe(_dq('div.ytp-caption-window-container'), { childList:true, subtree:true });
          selectableSubtitle();
          /* open subtitle */
          _dq('.ytp-subtitles-button').getAttribute('aria-pressed') === 'false' && _dq('.ytp-subtitles-button').click();
      };
      retryYTSubtitle();
  }

  /* dictionary */
  if (typeof _DICT_F_H_ === 'undefined') {
      var dictFrame = _ce('iframe'), dictChoice = _ce('div'), qmark = String.fromCharCode(63), nsign = String.fromCharCode(35),
          sources = {
              'Cb': `https://dictionary.cambridge.org/dictionary/english-chinese-traditional/{}${nsign}caldcnt-1`,
              'Wt': `https://en.m.wiktionary.org/wiki/{}`,
              'Ur': `https://www.urbandictionary.com/define.php${qmark}term={}${nsign}outer`,
              'Oz': `https://www.ozdic.com/collocation-dictionary/{}`,
              'Oc': `https://m.freecollocation.com/browse/{}`,
              'W': `https://en.m.wikipedia.org/wiki/{}`,
              'b': `https://m.bing.com/search${qmark}q={}`,
              'M': `https://maps.google.com/maps${qmark}q={}&output=embed`,
          }, /* yahoo (finance), google (finance), wolframalpha, duckduckgo were tested not working */
          frameURL = x => dictFrame.contentWindow && dictFrame.contentWindow.location.replace(x),
          dictCheck = () => {
              hide();
              if (word === '') return;
              frameURL(sources[src].replace(/{}/, encodeURIComponent(word)));
              _oa(dictFrame.style, {bottom: '0px', right: '0px', display: ''});
              _oa(dictChoice.style, {bottom: ['80%', '40%'][_mb], right: '0px', display: ''});
          },
          dictCheckSel = () => dictCheck(word = _wg().anchorNode && _wg().getRangeAt(0) && _wg().getRangeAt(0).toString().trim() || ''),
          hide = () => { frameURL('about:blank'); dictFrame.style.display = dictChoice.style.display = 'none'; },
          style = {transformOrigin: ['bottom left', ''][_mb], transform: ['scale(0.8)', ''][_mb], width: ['480px', '100px'][_mb], height: ['100%', '40%'][_mb], position: 'fixed', overflow: 'hidden', zIndex: '99999', border: '1px solid black', backgroundColor: nsign+'fff'},
          word = '', src = 'Cb';
      Object.keys(sources).forEach((i) =>
                                   dictChoice.appendChild(new DOMParser().parseFromString(`<svg style="float: left; width: calc(100%/12); height: 100%; ${['', 'background: lightgrey;'][Number(src == i)]}"><text x="50%" y="70%" text-anchor="middle" font-size="160%" style="pointer-events: none;">${i}</text></svg>`, "text/html").getRootNode().body.firstChild).addEventListener('click', (e) => { if (e.button != 0) return; dictCheck(src = i); dictChoice.querySelectorAll('svg').forEach(s => s.style.backgroundColor = ''); e.target.style.backgroundColor = 'lightgrey'; } )
                                  );
      _oa(dictFrame.style, style);
      _oa(dictChoice.style, style, {'height': '40px'});
      dictCheck();
      _ac(dictFrame);
      _ac(dictChoice);

      if (_mb) _da('selectionchange', e => _wg().anchorNode && !dictChoice.contains(_wg().anchorNode.parentElement) && dictCheckSel())
      else _da('click', e => { if (e.button == 0 && (e.ctrlKey == true || e.detail == 2)) dictCheckSel(); else hide(); }, true);
  }
  var _DICT_F_H_ = true;
})();