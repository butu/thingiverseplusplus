chrome.storage.sync.get(['infinitescrolling', 'scrollThreshold', 'itemsPerPage'], function (options) {
        if (options.infinitescrolling) {

            let itemsPerPage = 20;
            let scrollThreshold = 700;
            if (options.itemsPerPage) {
                itemsPerPage = options.itemsPerPage;
            }
            if (options.scrollThreshold) {
                scrollThreshold = options.scrollThreshold;
            }

            let scrollSettings = {
                append: '.thing',
                scrollThreshold: scrollThreshold,
                history: false,
                prefill: true,
                hideNav: '.pagination',
                status: '.page-load-status',
                button: '.view-more-button',
            };
            let infiniteScroll = null;

            document.addEventListener("DOMContentLoaded", function () {

                if ($('.explore').length > 0) {

                    let type = $('select[name=type]').val();
                    let cat = $('select[name=cat]').val();
                    let subcat = $('select[name=subcat]:not(.hidden)').val();

                    infiniteScroll = $('.item-container .items-page').infiniteScroll(Object.assign(scrollSettings, {
                        path: function () {
                            let page = this.pageIndex + 1;
                            return 'https://www.thingiverse.com/ajax/things/paginate'
                                + '?page=' + page
                                + '&per_page=' + itemsPerPage
                                + '&type=' + type
                                + '&cat=' + cat
                                + '&subcat=' + subcat;
                        },
                    }));
                } else if ($('#search-page-form').length > 0) {
                    infiniteScroll = $('.item-container').infiniteScroll(Object.assign(scrollSettings, {
                        path: function () {
                            let page = this.pageIndex + 1;
                            return 'https://www.thingiverse.com/ajax/search/results/'
                                + window.location.search
                                + '&page=' + page
                                + '&per_page=' + itemsPerPage;
                        },
                    }))
                } else if ($('.thingcollection-page').length > 0) {

                    let id = $('.justify .icon-like').data('id');
                    infiniteScroll = $('.item-container .result-page').infiniteScroll(Object.assign(scrollSettings, {
                        path: function () {
                            let page = this.pageIndex + 1;
                            return 'https://www.thingiverse.com/ajax/thingcollection/list_collected_things'
                                + '?id=' + id
                                + '&page=' + page
                                + '&per_page=' + itemsPerPage;
                        },
                    }));
                }


                // jQuery
                $(document).on('request.infiniteScroll', function (event, path) {
                    showLoadingIcon();
                });
                $(document).on('append.infiniteScroll', function (event, response, path, items) {
                    if (items.length > 0) {
                        $('.thing > a').attr('target', '_blank');
                    } else {
                        $(infiniteScroll).infiniteScroll('destroy');
                        $('.pagination').hide();
                        showInfoMessage('End of Results', 'these were all the things :(');
                    }
                    hideLoadingIcon();
                });
                $(document).on('error.infiniteScroll', function (event, path) {
                });
            });

        }
    }
);
