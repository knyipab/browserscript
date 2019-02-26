var editor;
var themes = {
  'One White': {
    sub_menu: 'position: absolute; box-shadow: 0 0 24px 0 rgba(0,0,0,0.2),0 0 77px 0 rgba(0,0,0,0.22); margin: 0px; padding: 0px; ',
    sub_menu_lang: 'display: block; font-family: Calibri; font-size: 16px; color: #000000; background-color: #FFFFFF; text-align: center; padding: 0px; margin: 0px; border-bottom: solid #CCCCCC 1px; text-decoration: none; user-select: none; ',
    sub_menu_item: 'display: block; font-family: Calibri; font-size: 16px; color: #000000; background-color: #FFFFFF; text-align: center; padding: 2px 8px 2px 8px; margin: 0px; border-bottom: solid #CCCCCC 1px; text-decoration: none; user-select: none; ',
    sub_menu_item_hover: 'background-color: #AAAAAA; ',
    menu: 'left: 0; box-shadow: 0 0 24px 0 rgba(0,0,0,0.2),0 0 77px 0 rgba(0,0,0,0.22); margin: 0px; padding: 0px; display: table; ',
    menu_collapse: 'display: block; font-family: Calibri; font-size: 16px; color: #000000; background-color: #AAAAAA; height: 40px; text-align: left; vertical-align: middle; padding: 0px 10px 0px 10px; boarder-left: solid #CCCCCC 0.25px; border-right: solid #CCCCCC 0.25px; text-decoration: none; margin: 0px; user-select: none; display: table-cell;',
    menu_collapse_hover: 'background-color: #606060; ',
    menu_item: 'display: block; font-family: Calibri; font-size: 16px; color: #000000; background-color: #FFFFFF; height: 40px; text-align: left; vertical-align: middle; padding: 0px 10px 0px 10px; boarder-left: solid #CCCCCC 0.25px; border-right: solid #CCCCCC 0.25px; text-decoration: none; margin: 0px; user-select: none; display: table-cell;',
    menu_lang: 'display: block; font-family: Calibri; font-size: 16px; color: #000000; background-color: #FFFFFF; height: 40px; text-align: left; vertical-align: middle; padding: 0px; boarder-left: solid #CCCCCC 0.25px; border-right: solid #CCCCCC 0.25px; text-decoration: none; margin: 0px; user-select: none; display: table-cell;',
    menu_item_hover: 'background-color: #AAAAAA; ',
    whole_element: 'position: fixed; z-index: 2147483647; margin: 0px; padding: 0px; ',
  },
  'One Dark': {
    sub_menu: 'position: absolute; box-shadow: 0 0 24px 0 rgba(0,0,0,0.2),0 0 77px 0 rgba(0,0,0,0.22); margin: 0px; padding: 0px; ',
    sub_menu_lang: 'display: block; font-family: Calibri; font-size: 16px; color: #EEEEEE; background-color: #222222; text-align: center; padding: 0px; margin: 0px; border-bottom: solid #CCCCCC 1px; text-decoration: none; user-select: none; ',
    sub_menu_item: 'display: block; font-family: Calibri; font-size: 16px; color: #EEEEEE; background-color: #222222; text-align: center; padding: 2px 8px 2px 8px; margin: 0px; border-bottom: solid #CCCCCC 1px; text-decoration: none; user-select: none; ',
    sub_menu_item_hover: 'background-color: #444444; ',
    menu: 'left: 0; box-shadow: 0 0 24px 0 rgba(0,0,0,0.2),0 0 77px 0 rgba(0,0,0,0.22); margin: 0px; padding: 0px; display: table; ',
    menu_collapse: 'display: block; font-family: Calibri; font-size: 16px; color: #EEEEEE; background-color: #666666; height: 40px; text-align: left; vertical-align: middle; padding: 0px 10px 0px 10px; boarder-left: solid #CCCCCC 0.25px; border-right: solid #CCCCCC 0.25px; text-decoration: none; margin: 0px; user-select: none; display: table-cell;',
    menu_collapse_hover: 'background-color: #AAAAAA; ',
    menu_item: 'display: block; font-family: Calibri; font-size: 16px; color: #EEEEEE; background-color: #222222; height: 40px; text-align: left; vertical-align: middle; padding: 0px 10px 0px 10px; boarder-left: solid #CCCCCC 0.25px; border-right: solid #CCCCCC 0.25px; text-decoration: none; margin: 0px; user-select: none; display: table-cell;',
    menu_lang: 'display: block; font-family: Calibri; font-size: 16px; color: #EEEEEE; background-color: #222222; height: 40px; text-align: left; vertical-align: middle; padding: 0px; boarder-left: solid #CCCCCC 0.25px; border-right: solid #CCCCCC 0.25px; text-decoration: none; margin: 0px; user-select: none; display: table-cell;',
    menu_item_hover: 'background-color: #444444; ',
    whole_element: 'position: fixed; z-index: 2147483647; margin: 0px; padding: 0px; ',
  }
};

function fFormat(library, current_theme, x, y, parent, editor_mode) {
  return `${editor_mode ? '' : 'javascript:'}
  (function (parent, editor_mode){

  var library = ${library};
  var theme = ${JSON.stringify(themes[current_theme])};
  var current_theme = ${JSON.stringify(current_theme)};

  var original_focus;
  var text_cursor = [];
  var is_expended = 1;
  var whole_element;
  var sub_menu_elements = [];
  var coordinates = {clientStartX: 0, clientStartY: 0, beforeDragX: ${x}, beforeDragY: ${y}, draggingX: 0, draggingY: 0};
  var language = Object.keys(library)[0];
  function onAnythingHover() {
    original_focus = document.activeElement;
  }
  function fInsertScript(script){
    if (original_focus) {
      text_cursor[0] = original_focus.selectionStart;
      text_cursor[1] = original_focus.selectionEnd;
    }
    if (text_cursor[0] != null) {
      var v = original_focus.value;
      original_focus.focus();
      original_focus.value = script;
      original_focus.selectionStart = original_focus.selectionEnd = text_cursor[0] + script.length;
    }
    fRemoveAllSubMenus();
  }

  function onDragStart(event){
    var x = event.touches ? event.touches[0].pageX : event.clientX;
    var y = event.touches ? event.touches[0].pageY : event.clientY;
    coordinates.draggingX = coordinates.beforeDragX;
    coordinates.draggingY = coordinates.beforeDragY;
    coordinates.clientStartX = x;
    coordinates.clientStartY = y;
    document.addEventListener('mouseup', onDragEnd);
    document.addEventListener('touchend', onDragEnd);
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('touchmove', onDragMove);
    event.preventDefault();
  }
  function onDragMove(event){
    var x = event.touches ? event.touches[0].pageX : event.clientX;
    var y = event.touches ? event.touches[0].pageY : event.clientY;
    coordinates.draggingX = coordinates.beforeDragX + (x - coordinates.clientStartX);
    coordinates.draggingY = coordinates.beforeDragY + (y - coordinates.clientStartY);
    whole_element.style.left = String(coordinates.draggingX) + 'px';
    whole_element.style.top = String(coordinates.draggingY) + 'px';
    fRemoveAllSubMenus();
  }
  function onDragEnd(event){
    coordinates.beforeDragX = coordinates.draggingX;
    coordinates.beforeDragY = coordinates.draggingY;
    document.removeEventListener('mouseup', onDragEnd);
    document.removeEventListener('touchend', onDragEnd);
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('touchmove', onDragMove);
  }

  function fRemoveAllSubMenus() { fRemoveSubMenusUntil(0); }
  function fRemoveSubMenusUntil(i) { var item; while (sub_menu_elements.length > i && (item = sub_menu_elements.pop())) item.remove(); }
  function fCreateSubMenu(path, x, y){
    sul = document.createElement('ul');
    sul.style.all = 'initial';
    sul.style.cssText += theme.sub_menu;
    if (original_focus) {
      text_cursor[0] = original_focus.selectionStart;
      text_cursor[1] = original_focus.selectionEnd;
    }
    if (text_cursor[0] != null) {
      original_focus.focus();
    }
    if (path.length === 1 && path[0] === language) {
      for (item_key in library)
        if (item_key !== language) {
          var li = fCreateSubMenuItem(path, item_key, theme.sub_menu_lang, theme.sub_menu_item_hover);
          sul.appendChild(li);
        }
    } else {
      var sub_menu = library[language];
      for (var i = 0; i < path.length; i++){
        sub_menu = sub_menu[path[i]];
      }
      for (var item_key in sub_menu)
        sul.appendChild(fCreateSubMenuItem(path, item_key, theme.sub_menu_item, theme.sub_menu_item_hover));
    }
    sub_menu_elements.push(whole_element.appendChild(sul));
    sul.style.top = y + 'px';
    sul.style.left = (path.length === 1 ? x - sul.offsetWidth / 2 : x) + 'px';
  }
  function fCreateSubMenuItem(path, item_key, style, style_hover){
    var li = document.createElement('li');
    li.my_path = path.concat([item_key]);
    li.my_style = style;
    li.my_style_hover = style + style_hover;
    li.innerHTML = item_key;
    li.style.all = 'initial';
    li.style.cssText += style;
    li.addEventListener('mouseover', function(event) {
      fRemoveSubMenusUntil(this.my_path.length - 1);
      this.style.all = 'initial';
      this.style.cssText += this.my_style_hover;
      onAnythingHover();
      var ref = library[language];
      if (!(this.my_path.length === 2 && this.my_path[0] === language)) {
        for (var i = 0; i < this.my_path.length; i++)
          ref = ref[this.my_path[i]];
        if (typeof ref === 'object')
          fCreateSubMenu(this.my_path, this.parentElement.offsetLeft + this.offsetLeft + this.offsetWidth - 1, this.parentElement.offsetTop + this.offsetTop);
      }
    });
    li.addEventListener('mouseup', function(event) {
      if (this.my_path.length === 2 && this.my_path[0] === language) {
        original_focus.focus();
        fUpdateMenu(this.my_path[1]);
      } else {
        var ref = library[language];
        for (var i = 0; i < this.my_path.length; i++)
          ref = ref[this.my_path[i]];
        if (typeof ref === 'string' && !editor_mode)
            fInsertScript(ref);
      }
    });
    li.addEventListener('mouseleave', function(event) { this.style.all = 'initial'; this.style.cssText += this.my_style; });
    return li;
  }

  function fUpdateMenu(switch_language = null){
    if (switch_language)
      language = switch_language;
    with (whole_element) { while (hasChildNodes()) { removeChild(lastChild); } }

    var ul = document.createElement('ul');
    ul.style.position = 'absolute';
    ul.style.all = 'initial';
    ul.style.cssText += theme.menu;

    var li = document.createElement('li');
    li.innerHTML = ['→', '←'][is_expended];
    li.style.all = 'initial';
    li.style.cssText += theme.menu_collapse;
    li.addEventListener('mouseover', function(event) {this.style.all = 'initial'; this.style.cssText += theme.menu_collapse + theme.menu_collapse_hover;onAnythingHover();fRemoveAllSubMenus();});
    li.addEventListener('mouseup', function(event) {if (coordinates.beforeDragX == coordinates.draggingX && coordinates.beforeDragY == coordinates.draggingY) {is_expended = [1, 0][is_expended]; fUpdateMenu(null);} if (original_focus) {original_focus.focus();}});
    li.addEventListener('touchend', function(event) {if (coordinates.beforeDragX == coordinates.draggingX && coordinates.beforeDragY == coordinates.draggingY) {is_expended = [1, 0][is_expended]; fUpdateMenu(null);} if (original_focus) {original_focus.focus();}});
    li.addEventListener('mouseleave', function(event) {this.style.all = 'initial'; this.style.cssText += theme.menu_collapse;});
    if (!editor_mode) {
      li.addEventListener('mousedown', function(event) {onDragStart(event);});
      li.addEventListener('touchstart', function(event) {onDragStart(event);});
    }
    ul.appendChild(li);
    if (is_expended) {
      ul.appendChild(fCreateMenuItem(language, theme.menu_lang, theme.menu_item_hover));
      for (var key in library[language])
        ul.appendChild(fCreateMenuItem(key, theme.menu_item, theme.menu_item_hover));
      if (!editor_mode) {
        var li_edit = fCreateMenuItem('✎', theme.menu_item, theme.menu_item_hover);
        li_edit.addEventListener('mouseup', function(event) {if (coordinates.beforeDragX == coordinates.draggingX && coordinates.beforeDragY == coordinates.draggingY) { fEditPanel(); } if (original_focus) {original_focus.focus();}});
        li_edit.addEventListener('touchend', function(event) {if (coordinates.beforeDragX == coordinates.draggingX && coordinates.beforeDragY == coordinates.draggingY) { fEditPanel(); } if (original_focus) {original_focus.focus();}});
        ul.appendChild(li_edit);
        var li_close = fCreateMenuItem('❌', theme.menu_item, theme.menu_item_hover);
        li_close.addEventListener('mouseup', function(event) {if (coordinates.beforeDragX == coordinates.draggingX && coordinates.beforeDragY == coordinates.draggingY) { whole_element.remove(); } if (original_focus) {original_focus.focus();}});
        li_close.addEventListener('touchend', function(event) {if (coordinates.beforeDragX == coordinates.draggingX && coordinates.beforeDragY == coordinates.draggingY) { whole_element.remove(); } if (original_focus) {original_focus.focus();}});
        ul.appendChild(li_close);
      }
    }
    whole_element.appendChild(ul);
  }
  function fCreateMenuItem(key, style, style_hover) {
    var li = document.createElement('li');
    li.my_key = key;
    li.innerHTML = key;
    li.my_style = style;
    li.my_style_hover = style + style_hover;
    li.style.all = 'initial';
    li.style.cssText += style;
    li.addEventListener('mouseover', function(event) {this.style.all = 'initial'; this.style.cssText += this.my_style_hover;onAnythingHover();fRemoveAllSubMenus();fCreateSubMenu([this.my_key], this.offsetLeft + this.offsetWidth / 2, this.style.height)});
    li.addEventListener('mouseup', function(event) {if (coordinates.beforeDragX != coordinates.draggingX || coordinates.beforeDragY != coordinates.draggingY) fCreateSubMenu([this.my_key], this.offsetLeft + this.offsetWidth / 2, this.style.height)});
    li.addEventListener('mouseleave', function(event) {this.style.all = 'initial'; this.style.cssText += this.my_style;});
    if (!editor_mode) {
      li.addEventListener('mousedown', function(event) {onDragStart(event);});
      li.addEventListener('touchstart', function(event) {onDragStart(event); fCreateSubMenu([this.my_key], this.offsetLeft + this.offsetWidth / 2, this.style.height)});
    }
    return li;
  }

  function fEditPanel() {
    var background = document.createElement('div');
    background.style.all = 'initial';
    background.style.cssText += 'z-index: 2147483647; background: #000000; position: fixed; left: 0; top: 0; bottom: 0; right: 0; opacity: 0.5;';
    var editor = document.createElement('iframe');
    editor.src = 'https://github.com/knyipab/Code-Library/editor';
    editor.style.all = 'initial';
    editor.style.cssText += 'z-index: 2147483647; background: #FFFFFF; position: fixed; left: 10%; top: 10%; width: 80%; height: 80%;';
    editor.onload = function() { editor.contentWindow.postMessage({library: library, current_theme: current_theme, x_pos: coordinates.beforeDragX, y_pos: coordinates.beforeDragY}, '*'); };
    background.addEventListener('mouseup', function () {editor.remove(); background.remove()});
    background.addEventListener('touchend', function () {editor.remove(); background.remove()});

    parent.appendChild(background);
    parent.appendChild(editor);
  }

  function fCreateWholeElement() {
    whole_element = parent.appendChild(document.createElement('div'));
    whole_element.style.all = 'initial';
    whole_element.style.cssText += theme.whole_element;
    if (editor_mode)
      whole_element.style.position = 'initial';
    whole_element.style.left = coordinates.beforeDragX + 'px';
    whole_element.style.top = coordinates.beforeDragY + 'px';
    whole_element.addEventListener('mouseleave', function(event) {fRemoveAllSubMenus();});
    fUpdateMenu(language);
  }

  fCreateWholeElement();

  })(${parent},${editor_mode});`;
}



window.addEventListener("message", function(event) {
  console.log(event.data);
  if (event.data.library)
    library = event.data.library;
  if (event.data.current_theme)
    current_theme = event.data.current_theme;
  if (event.data.x_pos)
    x_pos = event.data.x_pos;
  if (event.data.y_pos)
    y_pos = event.data.y_pos;

  fInit();
  document.getElementById('theme_select_box').value = current_theme;
}, false);

if (typeof current_theme === 'undefined')
  current_theme = Object.keys(themes)[0];
if (typeof x_pos === 'undefined')
  x_pos = 0;
if (typeof y_pos === 'undefined')
  y_pos = 0;

function fThemeSelect(theme, parent, initialization) {
  current_theme = theme;
  var parent = document.getElementById('theme_demo');
  if (!initialization)
    document.getElementById('theme_demo').lastChild.remove();
  eval(fFormat(JSON.stringify({
    '<div style="width: 40px; height: 40px; padding: 10px;">🌐</div>': {
      'Item 1': {'Folder': {'Item 1': '', 'Item 2': ''}, 'Item': ''},
      'Item 2': {'Item': ''},
      'Item 3': {'Item': ''}
    },
    '<div style="width: 40px; height: 40px; padding: 10px;">📙</div>': {
      'Item A': {'Folder': {'Item A': '', 'Item B': ''}, 'Item': ''},
      'Item B': {'Item': ''},
      'Item C': {'Item': ''}
    }
  }), theme, 0, 48, 'parent', true));
}

function fExport() {
  document.getElementById('output').style.display = 'inline-block';
  var url = fFormat(JSON.stringify(editor.get()), current_theme, x_pos, y_pos, 'document.body', false);
  document.getElementById('output_url').href = url;
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
