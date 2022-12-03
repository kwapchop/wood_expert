let modal = MicroModal.init();

const buttonContactUs = document.querySelector('.header__call')
buttonContactUs?.addEventListener('click', function (e) {
    $('[data-elements]').hide();
    $('[data-sub-elements]').hide();
    $('.header__menu-burger').removeClass('active');
    $('.header__burger').removeClass('open');
    MicroModal.show('modal-2');
})

document.querySelector('[data-contact-us]').addEventListener('click', function (e) {
    MicroModal.show('modal-2');
})
