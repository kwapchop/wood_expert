let modal = MicroModal.init();

(function ($) {
    $('[data-send]').on('click', function () {
            $.ajax({
            url: '/index.php',
            method: 'post',
            dataType: 'html',
            data: {text: 'Текст'},
            success: function(data){
                MicroModal.close('modal-2');
                MicroModal.show('modal-1');
            }
        })
    });
})(jQuery);
const buttonContactUs = document.querySelector('.header__call')
buttonContactUs?.addEventListener('click', function (e) {
    $('[data-elements]').hide();
    $('[data-sub-elements]').hide();
    $('.header__menu-burger').removeClass('active');
    $('.header__burger').removeClass('open');
    MicroModal.show('modal-2');
})


document.querySelector('[data-contact-us]')?.addEventListener('click', function (e) {
    MicroModal.show('modal-2');
})
