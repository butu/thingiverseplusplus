document.addEventListener("DOMContentLoaded", function () {
    $('a[href*="&tag=tv-auto-20"]').each(function (index, tag) {
        $(tag).attr('href', $(tag).attr('href').replace('&tag=tv-auto-20', '&tag=thingiverse0fa-21'));
    });
    $('.detail-setting.printer + div a').each(function (index, tag) {
        $(tag).attr('href', 'https://www.amazon.com/s?k=' + encodeURI($(tag).text()) + '&tag=thingiverse0fa-21');
    })
});

