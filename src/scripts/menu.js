(function ($) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    let regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    let buttons = $("[data-form]").find("button");
    $(buttons).attr('disabled', true);
    $('[data-phone]').on('input', function (e) {
        let form = $(this).closest('[data-form]');
        let button = $(form).find("button");
        if (!regex.test(e.target.value)) {
            $(e.target).addClass('error');
            $(button).attr('disabled', true);
        } else {
            $(e.target).removeClass('error');
            $(button).attr('disabled', false);
        }
    });
    $('[data-email]').on('input', function (e) {
        let form = $(this).closest('[data-form]');
        let button = $(form).find("button");
        if (!EMAIL_REGEXP.test(e.target.value)) {
            $(e.target).addClass('error');
            $(button).attr('disabled', true);
        } else {
            $(e.target).removeClass('error');
            $(button).attr('disabled', false);
        }
    })

    $.fn.menumaker = function (options) {
        var cssmenu = $(this), settings = $.extend({
            title: "Menu",
            format: "dropdown",
            sticky: false
        }, options);

        return this.each(function () {
            cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
            $(this).find("#menu-button").on('click', function () {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('.element-list');
                if (mainmenu.hasClass('open')) {
                    mainmenu.hide().removeClass('open');
                } else {
                    mainmenu.show().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('.element-list').show();
                    }
                }
            });

            cssmenu.find('.element-list__menu .element-list').parent().addClass('has-sub');

            multiTg = function () {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                cssmenu.find('.submenu-button').on('click', function () {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('.element-list').hasClass('open')) {
                        $(this).siblings('.element-list').removeClass('open').hide();
                    } else {
                        $(this).siblings('.element-list').addClass('open').show();
                    }
                });
            };

            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');

            if (settings.sticky === true) cssmenu.css('position', 'fixed');

            resizeFix = function () {
                if ($(window).width() > 768) {
                    cssmenu.find('.element-list').show();
                }

                if ($(window).width() <= 768) {
                    cssmenu.find('.element-list').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);

        });
    };
})(jQuery);
(function ($) {
    $(document).ready(function () {
        $("#cssmenu").menumaker({
            title: "Menu",
            format: "multitoggle"
        });
    });
})(jQuery);

$(function () {
    $('main').on('click', () => {
        const burger = $('.header__menu-burger');
        if (burger.hasClass('active')) {
            $('[data-elements]').hide();
            $('[data-sub-elements]').hide();
            $('.header__burger').toggleClass('open');
            burger.toggleClass('active');
        }
    })
    $('.header__burger').click(function () {
        if ($(this).hasClass('open')) {
            $('[data-elements]').hide();
            $('[data-sub-elements]').hide();
        }

        $(this).toggleClass('open');
        $('.header__menu-burger').toggleClass('active');

    });
    if (!window.matchMedia("(min-width: 500px)").matches) {
        $('[data-menu-first] > [data-menu]').on('click', function (e) {
            if (!is_touch_device()) {
                return;
            }
            e.preventDefault();
            const index = $(this).data('menu');

            $(`[data-menu]`).removeClass('active');
            $(this).addClass('active');

            $(`[data-menu-first] [data-submenu]`).removeClass('active show');
            $(`[data-menu-first] [data-subsubmenu]`).removeClass('active show');
            $(`[data-menu-first] [data-submenu-${index}]`).addClass('show');
        })

        $('[data-submenu]').on('click', function (e) {
            e.preventDefault();
            const index = $(this).data('submenu');
            const parentIndex = $(this).parent('.second-menu').prev().data('menu')
            const secondMenu = $(`[data-menu=${parentIndex}]`).next()[0];
            const thirdMenu = $(this).next()[0];

            $(`[data-submenu]`).removeClass('active');
            $(this).addClass('active');

            $(`a[data-submenu]`).removeClass('show active');
            $(`a[data-subsubmenu]`).removeClass('show active');
            $(secondMenu).find(`[data-submenu]`).addClass('show')
            $(secondMenu).find(`[data-submenu="${index}"`).addClass('active');
            $(thirdMenu).find('a').addClass('show');
        })
    } else {
        $('[data-is-mobile]').show();
        $('[data-menu-first] [data-menu]').on('click', function (e) {
            if (!is_touch_device()) {
                return;
            }
            e.preventDefault();
            $('[data-menu-first] [data-menu]').removeClass('active');
            $(e.target).addClass('active');
            const index = $(this).data('menu');
            $('[data-elements]').hide();
            $('[data-sub-elements]').hide();
            $('[data-menu-second]').find(`[data-elements-${index}]`).show();
        })
        $('[data-menu-second] [data-menu]').on('click', function (e) {
            $('[data-menu-second] [data-menu]').removeClass('active');
            $(e.target).addClass('active');
            const index = $(this).data('menu');
            $('[data-sub-elements]').hide();
            $('[data-menu-third]').find(`[data-sub-elements-${index}]`).show();
        })
    }
        $('[data-menu-first] [data-menu]').on('mouseover', function (e) {
            if (is_touch_device()) {
                return;
            }
            e.preventDefault();
            $('[data-menu-first] [data-menu]').removeClass('active');
            $(e.target).addClass('active');
            const index = $(this).data('menu');
            $('[data-elements]').hide();
            $('[data-sub-elements]').hide();
            $('[data-menu-second]').find(`[data-elements-${index}]`).show();
        })
        $('[data-menu-second] [data-menu]').on('mouseover', function (e) {
            if (is_touch_device()) {
                return;
            }
            e.preventDefault();
            $('[data-menu-second] [data-menu]').removeClass('active');
            $(e.target).addClass('active');
            const index = $(this).data('menu');
            $('[data-sub-elements]').hide();
            $('[data-menu-third]').find(`[data-sub-elements-${index}]`).show();
        })


    function is_touch_device() {
        return !!('ontouchstart' in window);
    }
});