$(document).ready(function() {
    $('.banner h1').hide();
    $('.banner img').hide();
    $('body').css({
        height: '100vh',
        overflow: 'hidden'
    });
    $('.blanket').show().animate({top: '0px', bottom: '0px'}, 3000, function () {
        $(this).find('a').fadeIn(1000).css('display', 'block');
    });
    $('.blanket a').click(function (e) {
        e.preventDefault();
        $('body').css({
            height: 'auto',
            overflow: 'auto'
        });
        $(this).fadeOut(10);
        $('.blanket img').fadeOut(10);
        $('.blanket').css({
            'background-image' : 'radial-gradient(circle at 50% 50%, rgba(37, 50, 113, .9) 21%, rgba(37, 50, 113, .9) 19%, rgba(0, 0, 0, 1) 55%, rgba(0, 0, 0, 1) 100%)'
        }).animate({
            'opacity': 0
        }, 700, function () {
            $('.blanket').css({'display' : 'none'});
            //Fade in main heading wording on page load
            $('.banner h1').fadeIn(1500, function() {
                $(this).next('img').fadeIn(800);
            });

        });

    });
});