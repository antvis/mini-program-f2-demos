Page({
    data: {
        charts: [
            { name: 'stock', value: '基础股票图' },
            { name: 'line', value: '折线图' },
            { name: 'area', value: '区域图' },
            { name: 'stack-area', value: '层叠区域图' },
            { name: 'column', value: '柱状图' },
            { name: 'dodge', value: '分组柱状图' },
            { name: 'stack-column', value: '层叠柱状图' },
            { name: 'bar', value: '条形图' },
            { name: 'dodge-bar', value: '分组条形图' },
            { name: 'stack-bar', value: '层叠条形图' },
            { name: 'ring', value: '环图' },
            { name: 'pie', value: '饼图' },
            { name: 'rose', value: '玫瑰图' },
            { name: 'radar', value: '雷达图' },
            { name: 'gauge', value: '仪表盘' },
            { name: 'double-axis', value: '双 Y 轴' }
        ],
        interactions: [
            { name: 'selection-for-bar-chart', value: '柱状图选中交互' },
            { name: 'selection-for-pie-chart', value: '饼图选中交互' },
            { name: 'pan-bar-chart', value: '柱状图平移交互' },
            { name: 'pan-line-chart', value: '折线图平移交互' }
        ]
    },
    gotoPage: function(e) {
        var page = e.currentTarget.dataset.page;
        my.navigateTo({
            url: '../charts/' + page + '/index'
        });
    },
    onLoad: function() {

    }
})
