import MicroModal from "micromodal";

MicroModal.init();

const buttonContactUs = document.querySelector('.header__call-text')
buttonContactUs?.addEventListener('click', function (e) {
    MicroModal.show('modal-2');
})
