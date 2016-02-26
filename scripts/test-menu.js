$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top -145     //offset b
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

$(window).scroll(function() {

  var height = $(window).scrollTop(); //where the top is currently (returns position of top where the user is)
  var windowHeight = $(window).height(); //how tall the user's window is
  var y = window.scrollY; //the number of pixels they currently are from the top
  var height2 = window.outerHeight;

  //we want menu to display when the top is less than or equal to the window height

/*
    if(height > 50) {
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
    }

    if (height >= windowHeight) {
      $(".menu").css({"top": "0px", "position": "fixed"})
    }

    if (height < windowHeight) {
      $(".menu").css({"top": "100%", "position": "absolute"});
    }*/

    if (height >= windowHeight) {
      $("nav").css({"top": "0", "position": "fixed"})

      /*******************************below = code from demo****************************************/

      /*need to code so that menu will appear at footer and at top of 100% even if scrolling down*/
    }

    if (height < windowHeight) {
      $("nav").css({"top": ($("#splashVid").height() + 'px'), "position": "absolute"});
    }
});

var previousScroll = 0, // previous scroll position
    menuOffset = 54, // height of menu (once scroll passed it, menu is hidden)
    detachPoint = ($('#splashVid').height()) + 70, // point of detach (after scroll passed it, menu is fixed)
    hideShowOffset = 6; // scrolling value after which triggers hide/show menu

    var height = $(window).scrollTop();
    var windowHeight = $(window).height();

// on scroll hide/show menu
$(window).scroll(function() {
  if (!$('nav').hasClass('expanded')) {
    var currentScroll = $(this).scrollTop(), // gets current scroll position
        scrollDifference = Math.abs(currentScroll - previousScroll); // calculates how fast user is scrolling
    // if scrolled past menu
    if (currentScroll > menuOffset) {
      // if scrolled past detach point add class to fix menu
      if (currentScroll > detachPoint) {
        if (!$('nav').hasClass('detached'))
          $('nav').addClass('detached');
      }
      // if scrolling faster than hideShowOffset hide/show menu
      if (scrollDifference >= hideShowOffset) {
        if (currentScroll > previousScroll) {
          // scrolling down; hide menu
          if (!$('nav').hasClass('invisible'))
            $('nav').addClass('invisible');
        } else {
          // scrolling up; show menu
          if ($('nav').hasClass('invisible'))
            $('nav').removeClass('invisible');
        }
      }
    }
		else {
      // only remove “detached” class if user is at the top of document (menu jump fix)
      if (currentScroll <= 0){
        $('nav').removeClass();
      }
    }

		//need to get height of the video, set that to a variable, then change window.outerHeight to the thing
		//jk just get height of video-bac
		//		var video-height = document.getElementById("video-background").offsetHeight;


    // if user is above height of 100%, the menu should be visible
    if ((window.scrollY) <= window.outerHeight) {
      $('nav').removeClass('invisible');
    }


		// if user is near bottom of screen, show menu ;; needed to do -50 because weird glitch where it doesn't detect if it's at bototm when it's at bottom;
		//maybe it's a bootstrap thing?
		if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
			 $('nav').removeClass('invisible');
	  }

    // replace previous scroll position with new one
    previousScroll = currentScroll;
  }


});
