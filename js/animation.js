$(document).ready(function () {
    
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
    });
    
    
    //Use this function if you want to use bw photos and fade in to color
    //Just make sure to change image source in html to bw photo
    /*$('.cbp-so-section').find('img').hover(function () {
    
        colorImage = $(this).attr('data-attr') + '.jpg';
        $(this).attr('src', 'images/' + colorImage).fadeIn('slow').animate({opacity: 1}, 100);

    }, function() {

        bwImage = $(this).attr('data-attr') + 'bw.jpg';
        $(this).attr('src', 'images/' + bwImage).animate({opacity: .7}, 10);

    }); */
    
    
    //Scrolling effect for main heading photo on homepage
    $('.heading').crossfade({
		threshold: 0.2,
        backgroundPosition: 'left'
	});
    

    //Icon hover effects
    //Fade-in hover icon and fade-in corresponding section on hover
    $('#services').find('img').hover(function() {
        data = $(this).attr('data-attr');
        $(this).attr('src', 'images/' + data + 'Hover.png');
        $('#services').find('.' + data + '').fadeIn();
    }, function() {
        $(this).attr('src', 'images/' + data + '.png');
        $('#services').find('.' + data + '').hide();
    });
    
    $('#services').find('a').click(function(e) {
        e.preventDefault();
    });

    
    //For small screen width (360px and under) we need to
    //move the services descriptions up, otherwise the user has to
    //scroll down to view, and by that time it will have disappeared
    
    /*$iconLinks = $('#mobileServices').find('a');
    
    $iconLinks.each(function() {
        data = $(this).children('img').attr('data-attr');
        section = $('.' + data + '').html();
        //$(this).after('<section class=' + data + '>' + section + '</section');
    });*/

    
});

