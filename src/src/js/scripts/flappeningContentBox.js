chrome.storage.sync.get(['flappeningContentBox'], function (options) {
    if (options.flappeningContentBox) {
        document.addEventListener("DOMContentLoaded", function () {
            $('.thing-contents').remove();
        });
    }
});