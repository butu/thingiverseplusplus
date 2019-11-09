document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.sync.get(['exploreFilter'], function (options) {
        if (options.exploreFilter) {
            document.addEventListener("DOMContentLoaded", function () {
                let scriptEl = document.createElement('script');
                scriptEl.src = chrome.extension.getURL(scriptName);
                document.head.appendChild(scriptEl);
            });
        }
    });
});