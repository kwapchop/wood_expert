let modal = MicroModal.init();

const buttonContactUs = document.querySelector('.header__call')
buttonContactUs?.addEventListener('click', function (e) {
    console.log(MicroModal, modal);
    MicroModal.show('modal-2');
})
