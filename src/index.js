import './styles/index.scss';
import './assets/fonts/Roboto-Regular.ttf';

document.addEventListener('DOMContentLoaded', function () {
    const scroller = document.querySelector('[data-scroll-up]');
    const tabs = document.querySelectorAll('[data-tab]');
    const tabsBody = document.querySelectorAll('[data-tab-body]');
    const tabsElement = document.querySelectorAll('.tabs-element');
    const tabsCatalog = document.querySelectorAll('[data-tab-catalog]');
    const tabsBodyCatalog = document.querySelectorAll('[data-tab-catalog-body]');

    scroller.addEventListener('click', function () {
        document.querySelector('body').scrollIntoView({block: "start", behavior: 'smooth'});
    })

    tabs.forEach((e, i) => {
        e.addEventListener('click', function (event) {
            event.preventDefault();
            tabs.forEach(tab => {
                tab.classList.remove('active');
            })
            tabsBody.forEach(body => {
                body.classList.remove('active');
            })
            document.querySelector(`[data-tab-body-${i + 1}]`).classList.add('active');
            document.querySelector(`[data-tab-${i + 1}]`).classList.add('active');
        })
    })


    tabsElement.forEach((e, i) => {
        e.addEventListener('click', function (event) {

            tabsBody.forEach(body => {
                body.classList.remove('active');
            })
            document.querySelector('[data-inner-tab-element]')?.classList.add('active');
        })
    })

    tabsCatalog.forEach((e, i) => {
        e.addEventListener('click', function (event) {
            event.preventDefault();
            tabsCatalog.forEach(tab => {
                tab.classList.remove('active');
            })
            tabsBodyCatalog.forEach(body => {
                body.classList.remove('active');
            })
            document.querySelector(`[data-tab-catalog-body-${i + 1}]`).classList.add('active');
            document.querySelector(`[data-tab-catalog-${i + 1}]`).classList.add('active');
        })
    })
});
