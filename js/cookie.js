if (document.cookie.replace(/(?:(?:^|.*;\s*)cookie\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
    $('.banner h1').hide();
    $('.banner img').hide();
    $('body').css({
        height: '100vh',
        overflow: 'hidden'
    });
  $('.blanket').show().animate({top: '0px', bottom: '0px'}, 4000, function () {
            $(this).find('a').fadeIn(1000);
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
                $('.banner h1:first-child').fadeIn(1500, function() {
                    $(this).siblings('h1').fadeIn(800, function() {
                        $(this).siblings('img').fadeIn(800);
                    });
                });

            });

        });
  document.cookie = "cookie=true";
}

