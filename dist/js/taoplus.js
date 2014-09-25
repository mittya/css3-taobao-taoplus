(function() {
  var addClass, btn, hasClass, overlay, removeClass, taoPlus, toggleClass;

  btn = document.querySelector("#btn");

  taoPlus = document.querySelector("#taoPlus");

  overlay = document.querySelector("#overlay");

  hasClass = function(element, name) {
    var reg;
    reg = new RegExp("\\b" + name + "\\b");
    return reg.test(element.className);
  };

  addClass = function(element, name) {
    if (!hasClass(element, name)) {
      element.className += " " + name;
    }
  };

  removeClass = function(element, name) {
    var reg;
    if (hasClass(element, name)) {
      reg = new RegExp("\\b" + name + "\\b");
      element.className = element.className.replace(reg, "").trim();
    }
  };

  toggleClass = function(element, name) {
    if (hasClass(element, name)) {
      removeClass(element, name);
    } else {
      addClass(element, name);
    }
  };

  btn.addEventListener("click", function() {
    toggleClass(btn, "on");
    toggleClass(taoPlus, "on");
    toggleClass(overlay, "on");
  });

  overlay.addEventListener("click", function() {
    removeClass(btn, "on");
    removeClass(taoPlus, "on");
    removeClass(overlay, "on");
  });

  return;

}).call(this);
