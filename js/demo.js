(function() {

  var btn = $('#btn');
  var taoPlus = $('#taoPlus');
  var overlay = $('#overlay');

  btn.on('click', function() {
    btn.toggleClass('on');
    taoPlus.toggleClass('on');
    overlay.toggleClass('on');
  });

  overlay.on('click', function() {
    btn.removeClass('on');
    taoPlus.removeClass('on');
    overlay.removeClass('on');
  });

  taoPlus.on('click', 'a', function(e) {
    e.preventDefault();
  });

})();