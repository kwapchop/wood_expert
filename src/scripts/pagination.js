document.addEventListener('DOMContentLoaded', function () {
    $('[data-pagination]').on('click', function (e) {
        e.stopPropagation();
        const list = $($(e.currentTarget).next()[0]);
        list.toggleClass('show');
    })
    $('[data-pagination-tabs]').on('click', function (e) {
        e.stopPropagation();
        const list = $($(e.currentTarget).find('.pagination-list'));
        list.toggleClass('show');
    })

    $(document).on('click', function (e) {
        const list = $($($('[data-pagination]')).next()[0]);
        list.removeClass('show');
    })

});