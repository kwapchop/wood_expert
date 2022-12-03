document.addEventListener('DOMContentLoaded', function () {
    $('[data-pagination]').on('click', function (e) {
        e.stopPropagation();
        const list = $($(e.currentTarget).next()[0]);
        list.toggleClass('show');
    })
    $(document).on('click', function (e) {
        console.log($('[data-pagination]'))
        const list = $($($('[data-pagination]')).next()[0]);
        list.removeClass('show');
    })

});