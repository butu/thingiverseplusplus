chrome.storage.sync.get(['enhancedThingFiles'], function (options) {
    if (options.enhancedThingFiles) {
        if (window.location.pathname.includes('/files')) {
            injectCss('src/css/enhancedThingFiles.css');
        }
        document.addEventListener("DOMContentLoaded", function () {
            $('.file-download img').each(function (index, img) {
                let src = $(img).attr('src');
                src = src.replace('_tinycard', '_featured');
                $(img).attr('src', src);
            });
        });
    }
});
