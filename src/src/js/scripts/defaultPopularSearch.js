chrome.storage.sync.get(['defaultPopularSearch'], function (options) {
    if (options.defaultPopularSearch) {
        document.addEventListener("DOMContentLoaded", function () {
            let hiddenSorting = $('<input type="hidden" value="popular" name="sort"/>');
            $('.header-search form').append(hiddenSorting);
        });
    }
});
