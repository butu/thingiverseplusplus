chrome.storage.sync.get(['fixedHeader'], function (options) {
    if (options.fixedHeader) {
        document.addEventListener("DOMContentLoaded", function () {
            injectCss('src/css/fixedHeader.css');
        });
    }
});