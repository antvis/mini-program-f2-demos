Page({
    data: {},
    gotoPage: function(e) {
        var page = e.currentTarget.dataset.page;
        my.navigateTo({
            url: '../charts/' + page + '/' + page
        });
    },
    onLoad: function() {

    }
})