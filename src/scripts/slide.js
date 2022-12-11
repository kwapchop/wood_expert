$(document).ready(function () {
    $('[data-slider]').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        prevArrow: '[data-prev]',
        nextArrow: '[data-next]',
        appendDots: $('.slider-for'),
        dots: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },

            }
        ]

    });
});