$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height > 50) {
      $(".menu").css({"background-color": "#eee", "border-bottom": "solid 1px #d8d8d8", "margin-top": "0", "color": "blue", "font-size": "22px"});
      $(".menu-links").css({"margin-top": "15px"});
      $(".logo-title").css({"margin-top": "15px"});
      $("a:link, a:active").css({"color": "blue"});
      $(".logo").css({"background": "blue", "height": "70px", "width": "70px", "border": "1px solid #000"})
    }

    if (height < 50) {
      $(".menu").css({"background": "none", "border-bottom": "none", "margin-top": "0", "color": "black", "font-size": "25px"});
      $(".menu-links").css({"margin-top": "25px"});
      $(".logo-title").css({"margin-top": "25px"});
      $("a:link, a:active").css({"color": "black"});
      $(".logo").css({"background": "#000", "height": "95px", "width": "95px", "border": "1px solid #000"})
    }
});
