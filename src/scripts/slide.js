$(document).ready(function () {
    $('[data-slider]').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        prevArrow: '[data-prev]',
        nextArrow: '[data-next]',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]

    });
});