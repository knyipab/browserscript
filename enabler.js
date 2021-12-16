javascript:
/* allow copy, right-click and select */
(function() {
    var cleanEvents = (el,     ...types) => {
        types.forEach(type => {
            el['on' + type] = null;
            el.addEventListener(type, e => {
                e.returnValue = true;
                (typeof e.stopPropagation === 'function') && e.stopPropagation();
                (typeof e.cancelBubble === 'function') && e.cancelBubble();
                /* for (var n = e.originalTarget; n; n = n.parentNode) n['on' + type] = null; */
            }, true);
        });
    };
    document.onkeydown = null;
    [document, window, document.body].forEach(el => cleanEvents(el, 'copy'));
    document.querySelectorAll('*').forEach(el => cleanEvents(el, 'copy'));
    [document, window, document.body].forEach(el => cleanEvents(el, 'contextmenu'/*, 'click'*/, 'mousedown', 'mouseup', 'selectstart', 'dragstart'));
    document.querySelectorAll('img').forEach(el => cleanEvents(el, 'contextmenu', 'click', 'mousedown', 'mouseup', 'selectstart', 'dragstart'));
    document.querySelectorAll('td').forEach(el => cleanEvents(el, 'contextmenu', 'click', 'mousedown', 'mouseup', 'selectstart', 'dragstart'));
})();