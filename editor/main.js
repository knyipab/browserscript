var editor;

function fFormat(cs, thn, x, y, pr, em, od=false, os={}) {
  // comment the return line below using "//" and edit
  return (`${em ? '' : 'javascript:'}
  /* cs = code snippets = library, th = theme, od = online data */
  ((od=`+od+`, os=`+JSON.stringify(os)+`) => {
    var fr, 
    /* thn = theme names = current_theme, pr = parent, em = edit_mode */
    thn = `+JSON.stringify(thn)+`, 
    pr = `+pr+`, 
    em = `+em+`, 
    /* ce = createElement, as = assign style, el = addEventListener, ac = appendChild, pe = pr.appendChild + ce */
    ce = x => document.createElement(x),
    as = (x, y) => oa(x.style, y), 
    el = (e, ...x) => {var f = x.pop(); x.map(i => e.addEventListener(i, f)); }, 
    ac = (e, x) => e.appendChild(x), 
    pe = (...x) => x.map(i => pr.appendChild(ce(i))), 
    /* oa = Object.assign(), ok = Object.keys() */
    oa = (x, y) => Object.assign(x, y), 
    ok = x => Object.keys(x?x:{});
    /******************
     * main - offline *
     ******************/
    !od && coder(`+(od?'{}':JSON.stringify(cs))+`, `+(od?'""':JSON.stringify(themes[thn]))+`);
    /*****************
     * main - online *
     *****************/
    if (od) {
      fr = pe('iframe')[0];
      as(fr, {display: 'none'});
      fr.onload = _ => { fr.contentWindow.postMessage({thn}, '*'); };
      fr.src = os.url;
    }
    var oms = e => {
      od && e.data.cs && e.data.th && (fr.remove(), coder(e.data.cs, e.data.th));
      window.removeEventListener('message', oms);
    };
    window.addEventListener('message', oms);
    /******************
     *  coder(cs, th) *
     ******************/
    function coder(cs, th) {
      var
      /* st = style set */
      st = (x, h) => { for (i in x) {x[i].style.all = 'initial'; x[i].style.cssText += th[i] + (h?th[i+'h']:''); } },
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
      ax = 0, ay = 0, bx = `+x+`, by = `+y+`, dx = 0, dy = 0, 
      xy = e => (t = e.touches) ? [t[0].pageX, t[0].pageY] : [e.clientX, e.clientY], 
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
        sf(); dx = bx; dy = by; [ax, ay] = xy(e);
        de('mouseup', 'touchend', ode);
        de('mousemove', 'touchmove', odm);
        e.preventDefault();
      }, odm = e => {
        var [x, y] = xy(e);
        dx = bx + (x - ax); dy = by + (y - ay);
        as(we, {left: dx+'px', top: dy+'px'});
        !e.touches && frs(0);
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
            us(ca + (fo.value = s).length);
          }
        }
        frs(0);
      }, frs = i => { while (se.length > i) se.pop().remove(); } ,
      /**
       * fme, fmi, fsm, fsi correspond to me, mi, sm, si
       */
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
        var si = ce('li'); st({[s]:si}); si.innerHTML = k;
        el(si, 'mouseover', e => {
          st({[s]:si},1); sf(); frs(p.length); 
          (!(p.length === 1 && p[0] === pl)) && (o = pa(p)[k]) && typeof o === 'object' &&
          fsm(p.concat([k]), [si.parentElement.offsetLeft + si.offsetLeft + si.offsetWidth - 1, si.parentElement.offsetTop + si.offsetTop]);
        });
        el(si, 'mouseup', 'touchend', e => { fo && fo.focus(); (p.length === 1 && p[0] === pl)
          ? (fo.focus(), fme(k)) : (o = pa(p)[k]) && typeof o === 'string' && !em && fis(o); }
        );
        el(si, 'mouseleave', _ => st({[s]:si}) );
        el(si, 'mousedown', 'touchstart', _ => sf());
        return si;
      }, fme = (l = pl) => {
        pl = l; we.innerHTML = '';
        var me = ce('ul'); st({me});
        ac(me, fmi(['→', '←'][ie], 'mc', _ => {ie = [1, 0][ie]; fme();}));
        if (ie) {
          ac(me, fmi(pl, 'ml'));
          for (var k in cs[pl]) ac(me, fmi(k));
          !em && ac(me, fmi('✎', 'mi', fed)) && ac(me, fmi('❌', 'mi', _ => we.remove()));
        }
        ac(we, me);
      }, fmi = (k, s='mi', g) => {
        var li = ce('li'), f = _ => fsm([k], [li.offsetLeft, li.style.height]);
        st({[s]:li});
        li.innerHTML = k;
        el(li, 'mouseover', _ => {st({[s]:li},1); sf(); frs(0); f(); });
        el(li, 'mouseup', 'touchend', e => {g && g(); fo && fo.focus(); (((bx != dx || by != dy) && !e.touches) || (e.touches && bx == dx && by == dy)) && (frs(0), f()); } );
        el(li, 'mouseleave', _ => st({[s]:li}) );
        !em && el(li, 'mousedown', 'touchstart', ods);
        return li;
      }, 
      /**
       * fed = initialize editor
       */
      fed = _ => {
        var a = [bg, ed, ex] = pe('div', 'iframe', 'div'); st({bg, ed, ex});
        ed.onload = _ => { ed.contentWindow.postMessage({cs, thn, bx, by}, '*'); };
        ed.src = 'https://knyipab.github.io/Code-Library/editor/';
        ex.innerHTML = '❌';
        el(ex, 'mouseup', 'touchend', _ => a.map(i => i.remove()));
      };
  
      /**
       * init coder
       */
      var [we] = pe('div'); st({we});
      as(we, {left: bx+'px', top: by+'px'});
      `+(em?"we.style.position = '';":'')+`
      el(we, 'mouseleave', _ => frs(0));
      fme();
    };
  })();
  //`).replaceAll(/[\n\t]/g, '').replaceAll(/\/\*.*?\*\//g, '').replaceAll(/\s+/g, ' ');
}


window.addEventListener("message", function(event) {
  console.log(event.data);
  // read from coder.js postMessage
  if (event.data.cs)              library = event.data.cs;
  if (event.data.thn)             current_theme = event.data.thn;
  if (event.data.bx)              x_pos = event.data.bx;
  if (event.data.by)              y_pos = event.data.by;
  if (event.data.od)              online_data = event.data.od;
  if (event.data.os)              online_settings = event.data.os;
  // backward compatibility
  if (event.data.library)         library = event.data.library;
  if (event.data.current_theme)   current_theme = event.data.current_theme;
  if (event.data.x_pos)           x_pos = event.data.x_pos;
  if (event.data.y_pos)           y_pos = event.data.y_pos;

  fInit();
  document.getElementById('theme_select_box').value = current_theme;
}, false);

if (typeof current_theme === 'undefined')   current_theme = Object.keys(themes)[0];
if (typeof x_pos === 'undefined')           x_pos = 0;
if (typeof y_pos === 'undefined')           y_pos = 0;
if (typeof online_data === 'undefined')     online_data = false;
if (typeof online_settings === 'undefined') online_settings = {
  url: 'https://knyipab.github.io/Code-Library/editor/data', 
  git: {}
};

function fThemeSelect(theme, parent, initialization) {
  current_theme = theme;
  var parent = document.getElementById('theme_demo');
  if (!initialization)
    document.getElementById('theme_demo').lastChild.remove();
  eval(fFormat(library_demo, theme, 0, 48, 'parent', true));
}

// Drag and drop JSON
var dragcounter = 0;
window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('dragover', e => e.preventDefault());
  ['dragenter'].forEach(t => window.addEventListener(t, e => {
    e.preventDefault();
    dragcounter++;
    document.getElementById('drag').style.display = 'inline';
  }));
  ['dragleave', 'drop'].forEach(t => window.addEventListener(t, e => {
    e.preventDefault();
    dragcounter--;
    if (dragcounter == 0) {
      document.getElementById('drag').style.display = 'none';
    }
  }));
  window.addEventListener('drop', async e => {
    e.preventDefault();
    if (e.dataTransfer.items[0].kind === 'file') {
      const text = await e.dataTransfer.items[0].getAsFile().text();
      try {
        library = JSON.parse(text);
        editor.set(library);
      } catch {}
    }
  });
});


function fCopy() {
  navigator.clipboard.write(JSON.stringify(editor.get()));
}

function fExport() {
  document.getElementById('output').style.display = 'inline-block';
  for (let i = 0; i < 6; i++) { setTimeout(() => document.getElementById('output').style.display = i % 2 ? 'inline-block' : 'none', 100 * (i + 1)); }
  document.getElementById('coder').href = fFormat(editor.get(), current_theme, x_pos, y_pos, 'document.body', false);
  document.getElementById('coderX').href = fFormat(editor.get(), current_theme, x_pos, y_pos, 'document.body', false, true, online_settings);
  document.getElementById('cs').href = URL.createObjectURL(new File([JSON.stringify(editor.get())], 'cs.json', {type: 'application/json'}));
}

function fInit() {
  editor.set(library);
  fThemeSelect(current_theme, true);
}

window.onload = function (){
  editor = new JSONEditor(document.getElementById('jsoneditor'), {enableTransform: false, enableSort: false});
  for (key in themes) {
    var option = document.createElement('option');
    option.value = key;
    option.innerHTML = key;
    document.getElementById('theme_select_box').appendChild(option);
  }
  fInit();
};
