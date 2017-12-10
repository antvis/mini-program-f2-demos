import MyF2 from '@antv/my-f2';
const app = getApp();

Page({
  data: {},
  onReady() {
    const context = my.createCanvasContext('canvas');
    const data = [
        { time: '2016-08-08 00:00:00', tem: 10},
        { time: '2016-08-08 00:10:00', tem: 22},
        { time: '2016-08-08 00:30:00', tem: 16},
        { time: '2016-08-09 00:35:00', tem: 26},
        { time: '2016-08-09 01:00:00', tem: 12},
        { time: '2016-08-09 01:20:00', tem: 26},
        { time: '2016-08-10 01:40:00', tem: 18},
        { time: '2016-08-10 02:00:00', tem: 26},
        { time: '2016-08-10 02:20:00', tem: 12}
    ];
    const chart = new MyF2.Chart({
        el: context,
        width: 600,
        height: 600
    });
    chart.source(data, {
        time: {
        type: 'timeCat',
        tickCount: 3,
        range: [ 0, 1 ]
        },
        tem: {
        tickCount: 5,
        min: 0
        }
    });
        // 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
    chart.axis('tem', {
        label: {
        fontSize: 28
        }
    });
        // 配置time刻度文字样式
    chart.axis('time', {
        label(text, index, total) {
        const cfg = {
            fill: '#979797',
            fontSize: 30,
            offset: 6
        };
            // 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐
        if (index === 0) {
            cfg.textAlign = 'start';
        }
        if (index > 0 && index === total - 1) {
            cfg.textAlign = 'end';
        }
        return cfg;
        }
    });
    const grd = context.createLinearGradient(0, 0, 600, 0);

    grd.addColorStop(0,"#293c55");
    grd.addColorStop(1,"#f7f7f7")
    context.setFillStyle(grd);
    
    chart.area().position('time*tem')
        .color(grd)
        .shape('smooth')
        .style({
        opacity: 0.6
    });
    chart.line().position('time*tem').color('#000')
        .shape('smooth');
    chart.render();
  }
});
