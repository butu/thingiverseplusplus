chrome.storage.sync.get(['gallery'], function (options) {
    if (options.gallery) {
        injectCss('src/css/gallery.css');
        document.addEventListener("DOMContentLoaded", function () {

            // console.log($('div[data-large]'));
// $(document).bind("DOMSubtreeModified", function(event) {
//     $('div[data-large]').each(function (index, element) {
//         $(element).find('img').attr('src', $(element).attr('data-large'));
//     });
// });
// $('.toggle-fullsize').click(function(event) {
//     $('div[data-large]').each(function (index, element) {
//         $(element).find('img').attr('src', $(element).attr('data-large'));
//     });
// });
            $('.gallery-main div[data-large]').each(function (index, element) {
                if ($(element).data('full')) {
                    $(element).find('img').attr('src', $(element).data('large'));
                    $(element).find('img').attr('data-src', $(element).data('large'));
                    $(element).find('img').attr('data-img', $(element).data('large'));
                } else {
                    $(element).find('img').attr('src', $(element).data('full'));
                    $(element).find('img').attr('data-src', $(element).data('full'));
                    $(element).find('img').attr('data-img', $(element).data('full'));
                }
            });
            $(document).on('click', '.modal .gallery-main div[data-large] img', function (event) {
                $(this).attr('data-src', $(this).parent().data('full'));
                $(this).attr('data-img', $(this).parent().data('full'));
                $(this).attr('src', $(this).parent().data('full'));

            });

            $('.modal .gallery-main div[data-large]').each(function (index, element) {
                if ($(element).data('full')) {
                    $(element).find('img').attr('src', $(element).data('full'));
                    $(element).find('img').attr('data-src', $(element).data('full'));
                    $(element).find('img').attr('data-img', $(element).data('full'));
                } else {
                    $(element).find('img').attr('src', $(element).data('large'));
                    $(element).find('img').attr('data-src', $(element).data('large'));
                    $(element).find('img').attr('data-img', $(element).data('large'));
                }
            });
        });

    }
});
