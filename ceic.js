
// selected IDs
javascript:
(function () {
  var selected_items = Array.from(document.querySelectorAll('li.series-list-item__selected'));
  var textField = document.createElement('textarea');
  textField.innerText = JSON.stringify(selected_items.map(li => parseInt(li.getAttribute('data-id').match(/([0-9]*)_/)[1])));
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
})();

// expend nodes
javascript:
document.querySelectorAll('div.tree-node.active div.tree-node:not(.open)').forEach(node => node.querySelector('div.toggle').click());


// count nodes
javascript:
if (document.querySelector('div.tree-node.active > div.child-container > div > ul')) {
  alert(document.querySelector('div.tree-node.active > div.child-container > div > ul').childElementCount);
} else {
  alert(document.querySelector('div.tree-node.active > div.child-container').childElementCount);
}

//enable check
javascript:
document.body.addEventListener('click', event => {
  if (event.target.classList.contains('series-list-item--container') && event.target.closest('li').classList.contains('series-list-item__view-only')) {
    event.target.closest('li').classList.toggle('series-list-item__selected');
  }
});
