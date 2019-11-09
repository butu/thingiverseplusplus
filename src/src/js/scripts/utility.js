function injectCss(file) {
    document.head.insertAdjacentHTML('beforeend',
        '<link rel="stylesheet" type="text/css" href="' +
        chrome.runtime.getURL(file) + '">'
    );
}

function showLoadingIcon() {
    if ($('.loader').length === 0) {
        $.ajax({
            url: chrome.extension.getURL("src/html/loading.html"),
            dataType: "html",
            success: function (data) {
                $('body').append(data);
                $('.loader').show();
            }
        });
    } else {
        $('.loader').show();
    }
}

function hideLoadingIcon() {
    $('.loader').hide();
}

function showSuccessMessage(message, subtitle) {
    showMessage(message, subtitle, 5, 'green');
}

function showInfoMessage(message, subtitle) {
    showMessage(message, subtitle, 10, 'blue');
}

function showErrorMessage(message, subtitle) {
    showMessage(message, subtitle, 10, 'red');
}

function showMessage(message, subtitle, timeout, color) {
    $.ajax({
        url: chrome.extension.getURL("src/html/toast.html"),
        dataType: "html",
        success: function (data) {
            let toast = $.parseHTML(data);
            $(toast).find('.toast').addClass('toast--' + color);
            $(toast).find('.toast__type').html(message);
            $(toast).find('.toast__message').html(subtitle);

            if ($('.toast__cell').length === 1) {
                $('.toast__cell').append($(toast).find('.toast'));
            } else {
                $('body').append(toast);
            }

            $('.toast__close').one('click', function (e) {
                e.preventDefault();
                let parent = $(this).parent('.toast');
                parent.fadeOut("slow", function () {
                    $(this).remove();
                });
            });

            setTimeout(function () {
                $('.toast').fadeOut();
            }, timeout * 1000);
        }
    });
}

function setDefaultSettings() {
    chrome.storage.sync.get(null,
        function (items) {
            if (items === undefined) {
                let settings = {
                    autologin: false,
                    defaultPopularCategory: true,
                    defaultPopularSearch: true,
                    enhancedThingFiles: true,
                    exploreFilter: true,
                    fixedHeader: true,
                    flappeningContentBox: true,
                    flatdesign: true,
                    fullWidthFiles: true,
                    gallery: true,
                    infinitescrolling: true,
                    itemsPerPage: 33,
                    scrollThreshold: 700
                };
                chrome.storage.sync.set(settings, function () {
                });
            }
        }
    );
}
