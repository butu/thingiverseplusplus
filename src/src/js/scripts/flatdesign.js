chrome.storage.sync.get(['flatdesign'], function (options) {
    if (options.flatdesign) {
        injectCss('src/css/flatdesign.css');
        document.addEventListener("DOMContentLoaded", function () {
            let searchField = $('.refine-results-fields input[type=text]');
            $(searchField).after($('.show-results-for button'));
            $(searchField).after('<button id="toggle-search-filter">Filter</button>');
            $('#toggle-search-filter').on('click', function (e) {
                e.preventDefault();
                $('.search-page').toggleClass('show-filter');
                return false;
            });
        });
    }
});
