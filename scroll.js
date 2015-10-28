$(window).scroll(function() {
    var height = $(window).scrollTop();
    var windowHeight = $(window).height();

    /*if(height > 50) {
      $(".menu").css({"background-color": "#eee", "border-bottom": "solid 1px #d8d8d8", "margin-top": "0", "color": "blue", "font-size": "22px"});
      $(".menu-links").css({"margin-top": "15px"});
      $(".logo-title").css({"margin-top": "15px"});
      $("a:link, a:active").css({"color": "blue"});
      $(".logo").css({"background": "url('img/watercolor-boat-logov3.png')", "background-size": "70px 70px", "height": "70px", "width": "70px", "opacity": "1"})
    }

    if (height < 50) {
      $(".menu").css({"background": "none", "border-bottom": "none", "margin-top": "0", "color": "black", "font-size": "25px"});
      $(".menu-links").css({"margin-top": "25px"});
      $(".logo-title").css({"margin-top": "25px"});
      $("a:link, a:active").css({"color": "black"});
      $(".logo").css({"background": "url('img/watercolor-boat-logov3.png')", "background-size": "95px 95px", "height": "95px", "width": "95px", "opacity": ".4"})
    }*/

    if (height > windowHeight) {
      $(".menu").css({"top": "0px", "position": "fixed"})
    }

    if (height < windowHeight) {
      $(".menu").css({"top": "100%", "position": "absolute"});
    }
});
