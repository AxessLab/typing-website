(function ($) {
    'use strict';

    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    $(".js-scroll-to-content").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
})(jQuery);