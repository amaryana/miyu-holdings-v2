jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 400});

    /* ======= Fixed header when scrolled ======= */

    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 50) {
             $('#header').addClass('navbar-fixed-top');
         }
         else {
             $('#header').removeClass('navbar-fixed-top');
         }
    });

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){

        //store hash
        var target = this.hash;

        e.preventDefault();

		$('body').scrollTo(target, 800, {offset: -70, 'axis':'y', easing:'easeOutQuad'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}

	});

});


// (function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

//   $.fn.visible = function(partial) {
//
//       var $t            = $(this),
//           $w            = $(window),
//           viewTop       = $w.scrollTop(),
//           viewBottom    = viewTop + $w.height(),
//           _top          = $t.offset().top,
//           _bottom       = _top + $t.height(),
//           compareTop    = partial === true ? _bottom : _top,
//           compareBottom = partial === true ? _top : _bottom;
//
//     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
//
//   };
//
// })(jQuery);
//
// var win = $(window);
//
// var allMods = $(".module");
//
// allMods.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-visible");
//   }
// });
//
// win.scroll(function(event) {
//
//   allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("come-in");
//     }
//   });
//
// });
//
// $( document ).ready(function() {
//     var is_mobile = false;

    // if( $('.come-in').css('display')=='none') {
    //     is_mobile = true;
    // }

    // now i can use is_mobile to run javascript conditionally

 //    if (is_mobile === true) {
 //        $('.come-in').css('display')=='none';
 //    }
 // });
