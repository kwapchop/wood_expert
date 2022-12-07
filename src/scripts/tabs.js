document.addEventListener('DOMContentLoaded', function () {
    const scroller = document.querySelector('[data-scroll-up]');
    const tabs = document.querySelectorAll('[data-tab]');
    const tabsMini = document.querySelectorAll('[data-tab-mini]');
    const tabsBody = document.querySelectorAll('[data-tab-body]');
    const tabsElement = document.querySelectorAll('.tabs-element');

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
            tabs[i].classList.add('active');
            tabsBody[i].classList.add('active');
        })
    })

    tabsMini.forEach((e, i) => {
        e.addEventListener('click', function (event) {
            event.preventDefault();
            tabs.forEach(tab => {
                tab.classList.remove('active');
            })
            tabsBody.forEach(body => {
                body.classList.remove('active');
            })
            tabs[i].classList.add('active');
            tabsBody[i].classList.add('active');
            document.querySelector('.pagination-input').value = tabs[i].innerHTML;
        })
    })


    tabsElement.forEach((e, i) => {
        e.addEventListener('click', function (event) {

            tabsBody.forEach(body => {
                body.classList.remove('active');
            })
            document.querySelector('[data-inner-tab-element]').classList.add('active');
        })
    })
});