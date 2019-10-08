javascript: (
  function () {
    if (typeof cbt_script == 'undefined') {
      cbt_script = document.createElement('SCRIPT');
      cbt_script.type = 'text/javascript';
      cbt_script.src = 'https://crossbrowsertesting.com/cbt_bookmarklet.js.php?random=' +
        (new Date()).getTime();
      document.getElementsByTagName('head')[0].appendChild(cbt_script);
    } else { showCBTbookmarklet(); } })();


javascript: (
    function () {
      var arr = document.getElementsByTagName("div");
      for(var i = 0; i < arr.length; i +=1) {
        arr[i].style.background = "rgba(224, 16, 102, 0.20)";
        arr[i].style.border = "dashed 2px rgba(224, 16, 102, 0.80)"
      }    
    })();