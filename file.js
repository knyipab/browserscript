/* file handler: office */
(function() {
  'use strict';
  document.addEventListener("click", function(e) {
      var target = e.target || e.srcElement;
      if (target) target = target.closest('a');
      if (!target) return;
      if ((e.button == 0 || e.button == 1) && target.href != null) {
          var href = target.href;
          if (target.href.match(/^.*\.(doc|docx|xls|xlsx|ppt|pptx)([?#].*)?$/)) {
              target.href = "https://view.officeapps.live.com/op/view.aspx?src=" + encodeURIComponent(href);
              console.log(target.href);
              setTimeout(() => {target.href = href}, 200);
          } else if (target.href.match(/^.*\.(csv|tsv)([?#].*)?$/)) {
              target.href = "https://products.aspose.app/cells/viewer/csv#url=" + escape(href);
              setTimeout(() => {target.href = href}, 200);
          }
      }
   });
  /* read params */
  if (window.location.host === 'products.aspose.app') {
      document.querySelector('#UploadFile input[type="text"]').value = new URL(document.location.href.replace('#url', '?url')).searchParams.get('url');
      document.querySelector('#UploadFile div.btn').click();
  }
})();