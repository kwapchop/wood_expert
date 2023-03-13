let modal = MicroModal.init();

(function ($) {
    $('[data-send]').on('click', function (e) {
        e.preventDefault();
        let link = $(this).attr('data-send');
        let form = $(this).closest("[data-form]");
        let inputs = $(form).find("input");
        let data = {};
        for (let i = 0; i < inputs.length; i++) {
            let input = $(inputs[i]);
            data[input.attr("name")] = inputs[i].value;
        }
        $.ajax({
            type: 'POST',
            url: link,
            ProcessData: false,
            dataType: 'html',
            data,
            success: function (data) {
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
