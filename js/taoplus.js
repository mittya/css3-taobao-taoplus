(function() {
  window.addEventListener('load', function() {
    var addClass, btn, hasClass, homelink, i, len, link, linkEvent, links, overlay, removeActive, removeClass, taoPlus, toggleClass;
    btn = document.querySelector('#btn');
    taoPlus = document.querySelector('#taoPlus');
    overlay = document.querySelector('#overlay');
    links = document.querySelectorAll('.nav a');
    homelink = document.querySelector('.home a');
    FastClick.attach(document.body);
    hasClass = function(element, name) {
      var reg;
      reg = new RegExp('\\b' + name + '\\b');
      return reg.test(element.className);
    };
    addClass = function(element, name) {
      if (!hasClass(element, name)) {
        element.className += ' ' + name;
      }
    };
    removeClass = function(element, name) {
      var reg;
      if (hasClass(element, name)) {
        reg = new RegExp('\\b' + name + '\\b');
        element.className = element.className.replace(reg, '').trim();
      }
    };
    toggleClass = function(element, name) {
      if (hasClass(element, name)) {
        removeClass(element, name);
      } else {
        addClass(element, name);
      }
    };
    removeActive = function() {
      removeClass(btn, 'on');
      removeClass(taoPlus, 'on');
      removeClass(overlay, 'on');
    };
    btn.addEventListener('click', function() {
      toggleClass(btn, 'on');
      toggleClass(taoPlus, 'on');
      toggleClass(overlay, 'on');
    });
    overlay.addEventListener('click', function() {
      removeActive();
    });
    linkEvent = function(elem) {
      return elem.addEventListener('click', function(e) {
        e.preventDefault();
        removeActive();
      });
    };
    for (i = 0, len = links.length; i < len; i++) {
      link = links[i];
      linkEvent(link);
    }
    linkEvent(homelink);
  });

}).call(this);
