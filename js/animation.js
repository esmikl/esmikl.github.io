$(document).ready(function () {
    var rellax = new Rellax('.rellax');

    $.fn.isInView = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function() {
        //Code for when section is in view
    });
   $('.logo-link').click(function() {
        $('html').animate({scrollTop: 0});
    });
    /*
    //Hover effects for web design portfolio page
    $('.cbp-so-section').find('img').hover(function () {
        $(this).fadeTo(100, 1);
    }, function() {
        $(this).fadeTo(100, .5);
    });
    
    $('.thumbs').find('img').hover(function () {
        $(this).fadeTo(100, 1);
    }, function() {
        $(this).fadeTo(100, .5);
    });
    
    $('#BloomerGuide').hover(function () {
        $(this).fadeTo(100, 1);
    }, function() {
        $(this).fadeTo(100, .5);
    });*/
    
    //Scrolling effect for main heading photo on homepage
    $('.banner').crossfade({
		threshold: 0.2,
        backgroundPosition: 'left'
	});
});

