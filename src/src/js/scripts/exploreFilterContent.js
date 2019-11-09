if (Thingiverse && Thingiverse.Explore) {
    Thingiverse.Explore.View = function (e) {
        $(".menus select.select-menu").on("change", function () {
            let form = $(this).closest('form');
            let action = $(form).attr('action');
            let type = $(form).find('select[name=type]').val();
            let cat = $(form).find('select[name=cat]').val();
            let subcat = $(form).find('select[name=subcat]:not(.hidden)').val();

            let params = [];

            params.push(type);
            params.push(cat);
            params.push(subcat);

            window.location = action + params.join('/');
        })
    };
}
