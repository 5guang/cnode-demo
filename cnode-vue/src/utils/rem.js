(function (doc, win) {
    // var f = win.screen.width / 750 / win.devicePixelRatio;
  
    // doc.querySelector("meta[name=viewport]").setAttribute("content", "target-densitydpi=device-dpi,width=" + 750 + ",user-scalable=no,initial-scale=" + f);
  
    var dpr = window.devicePixelRatio || 1;
    // 分辨率Resolution适配
  
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (document.body) {
                document.body.style.fontSize = (12 * dpr) + 'px';
            }
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
  
    // Abort if browser does not support addEventListener
  
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    win.addEventListener('pageshow', recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  
    // detect 0.5px supports
  
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
  })(document, window);
  