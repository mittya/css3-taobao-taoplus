(function() {

  var btn = document.querySelector('#btn');
  var taoPlus = document.querySelector('#taoPlus');
  var overlay = document.querySelector('#overlay');

  var hasClass = function (element, name) {
    var reg = new RegExp('\\b' + name + '\\b');
    return reg.test(element.className);
  }

  var addClass = function (element, name) {
    if (!hasClass(element, name)) {
      element.className += ' ' + name;
    }
  }

  var removeClass = function (element, name) {
    if (hasClass(element, name)) {
      var reg = new RegExp('\\b' + name + '\\b');
      element.className = element.className.replace(reg, '').trim();
    }
  }

  var toggleClass = function (element, name) {
    if (hasClass(element, name)) {
      removeClass(element, name);
    } else {
      addClass(element, name);
    }
  }

  btn.addEventListener('click', function() {
    toggleClass(btn, 'on');
    toggleClass(taoPlus, 'on');
    toggleClass(overlay, 'on');
  });

  overlay.addEventListener('click', function() {
    removeClass(btn, 'on');
    removeClass(taoPlus, 'on');
    removeClass(overlay, 'on');
  });

})();
