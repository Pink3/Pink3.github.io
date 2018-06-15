if ($(".instagram").length) {
    require(['/js/photos.js', '/js/jquery.fancybox.js', '/js/jquery.lazyload.js'], function (obj) {
      obj.init();
    });
  }