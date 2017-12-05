const F2 = require('../../../util/f2');
const F2Render = require('../../../util/render');
const app = getApp();

Page({
  data: {},
  onReady() {
    const data = [
      { time: '2016-08-08 00:00:00', tem: 10 },
      { time: '2016-08-08 00:10:00', tem: 22 },
      { time: '2016-08-08 00:30:00', tem: 20 },
      { time: '2016-08-09 00:35:00', tem: 26 },
      { time: '2016-08-09 01:00:00', tem: 20 },
      { time: '2016-08-09 01:20:00', tem: 26 },
      { time: '2016-08-10 01:40:00', tem: 28 },
      { time: '2016-08-10 02:00:00', tem: 20 },
      { time: '2016-08-10 02:20:00', tem: 28 }
    ];
    const chart = new F2.Chart({
      el: new F2Render(my.createCanvasContext('canvas'), 600, 600)
    });
    const defs = {
      time: {
        type: 'timeCat',
        tickCount: 3,
        range: [ 0, 1 ]
      },
      tem: {
        tickCount: 5,
        min: 0
      }
    };
    // 配置time刻度文字样式
    const label = {
      fill: '#979797',
      fontSize: 14,
      offset: 6
    };
    chart.axis('time', {
      label(text, index, total) {
        const cfg = label;
        cfg.textAlign = 'center';
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
    // 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
    chart.axis('tem', {
      label: {
        fontSize: 14
      }
    });
    chart.source(data, defs);
    chart.line().position('time*tem').shape('smooth').size(2);
    chart.point().position('time*tem');
    chart.render();
  }
});
