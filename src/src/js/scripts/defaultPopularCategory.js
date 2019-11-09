chrome.storage.sync.get(['defaultPopularCategory'], function (options) {
    if (options.defaultPopularCategory) {
        document.addEventListener("DOMContentLoaded", function () {
            if ($('.content_stack .icon-category.stats-item.plain-link').length > 0) {
                $('.content_stack .icon-category.stats-item.plain-link').attr('href',
                    $('.content_stack .icon-category.stats-item.plain-link').attr('href').replace('categories', 'explore/popular')
                );
            }
        });
    }
});
