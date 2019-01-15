$(document).ready(function() {
    var lightbulb = $('.lightbulb');
    var range = -500;

    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop(),
            height = lightbulb.outerHeight(),
            offset = height / 2,
            calc = 1 - (scrollTop - offset + range) / range;
        
        lightbulb.css({'opacity': calc});

        if (calc > '1') {
            lightbulb.css({'opacity': 1});
        }else if (calc < '0') {
            lightbulb.css({'opacity': 0});
        }
    });
});