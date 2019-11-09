chrome.storage.sync.get(['username', 'password', 'autologin'], function (options) {
    if (options.username && options.password && options.autologin) {
        document.addEventListener("DOMContentLoaded", function () {
            if ($('.login-join').length > 0) {
                showInfoMessage('Auto-Login', 'logging in to the thingiverse');
                $.ajax({
                    url: 'https://accounts.thingiverse.com/login',
                    headers: {
                        'Host': 'accounts.thingiverse.com',
                        'Origin': 'https://accounts.thingiverse.com',
                        'Referer': 'https://accounts.thingiverse.com/'
                    },
                    method: 'POST',
                    dataType: 'jsonp',
                    jsonp: false,
                    data: {
                        'username': options.username,
                        'password': options.password,
                        'rememberme': 1
                    },
                    jsonpCallback: 'autologinCallback',
                    complete: function (data) {
                        showSuccessMessage('Auto-Login', 'you are successfully logged in');
                        window.location.href = window.location.href;

                    },
                    done: function (data) {
                        showErrorMessage('Auto-Login', 'you can not be logged in, please check username and password');
                    }
                });
            }
        });
    } else {
        if (options.autologin) {
            showErrorMessage('Auto-Login Error', 'Username or Password are empty.');
        }
    }
});