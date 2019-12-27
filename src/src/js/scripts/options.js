function save() {
    $('input,select').each(function (index, element) {
        let key = $(element).attr('name');
        let type = $(element).attr('type');
        let value = null;
        if (type === 'checkbox') {
            value = $(element).prop('checked');
        } else {
            value = $(element).val();
        }

        chrome.storage.sync.set({[key]: value},
            function () {

            });
    });
    updateState('Yep, everything saved.');
}

function updateState(message) {
    $('#status').append('<p>' + message + '</p>');
    setTimeout(function () {
        $('#status').html('');
    }, 2000);
}

function restore() {
    chrome.storage.sync.get(null,
        function (items) {
            $('input,select').each(function (index, element) {
                let key = $(element).attr('name');
                let type = $(element).attr('type');
                if (items[key]) {
                    if (type === 'checkbox') {
                        $(element).prop('checked', items[key]);
                    } else {
                        $(element).val(items[key]);
                    }
                }
            });
        });
}

document.addEventListener('DOMContentLoaded', restore);
document.getElementById('save').addEventListener('click', save);