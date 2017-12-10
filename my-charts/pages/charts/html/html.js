import WxParse from '@alipay/my-wxParse';
import MyF2 from '@antv/my-f2';
const app = getApp();
let chart;

Page({
  data: {

  },
  onReady() {
    const context = my.createCanvasContext('canvas');
    const data = [
      { time: '2016-08-08 00:00:00', tem: 10, city: 'beijing' },
      { time: '2016-08-08 00:10:00', tem: 22, city: 'beijing' },
      { time: '2016-08-08 00:30:00', tem: 20, city: 'beijing' },
      { time: '2016-08-09 00:35:00', tem: 26, city: 'beijing' },
      { time: '2016-08-09 01:00:00', tem: 20, city: 'beijing' },
      { time: '2016-08-09 01:20:00', tem: 26, city: 'beijing' },
      { time: '2016-08-10 01:40:00', tem: 28, city: 'beijing' },
      { time: '2016-08-10 02:00:00', tem: 20, city: 'beijing' },
      { time: '2016-08-10 02:20:00', tem: 28, city: 'beijing' },
      { time: '2016-08-09 00:35:00', tem: 25.8, city: 'tokyo' },
      { time: '2016-08-09 01:00:00', tem: 24, city: 'tokyo' },
      { time: '2016-08-09 01:20:00', tem: 28, city: 'tokyo' },
      { time: '2016-08-10 01:40:00', tem: 22, city: 'tokyo' },
      { time: '2016-08-10 02:00:00', tem: 24, city: 'tokyo' },
      { time: '2016-08-10 02:20:00', tem: 20, city: 'tokyo' }
    ];
    chart = new MyF2.Chart({
      el: context,
      width: 600,
      height: 600
    });
    const defs = {
      time: {
        type: 'timeCat',
        tickCount: 3,
        range: [ 0.1, 1 ]
      },
      tem: {
        tickCount: 5,
        min: 0
      }
    };
    chart.axis('tem', {
      label: {
        textAlign: 'start',
        textBaseline: 'bottom',
        offset: 0,
        fontSize: 14
      }
    });
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
    chart.source(data, defs);

    // 创建渐变色
    const linear_gradient = context.createLinearGradient(0, 0, 0, 800);
    linear_gradient.addColorStop(0, 'rgb(15, 141, 232)');
    linear_gradient.addColorStop(0.5, '#fff');
    
    context.setFillStyle(linear_gradient);
    // 绘制渐变色区域图
    chart.area().position('time*tem')
      .color('city', function(city) {
        if (city === 'beijing') {
          return linear_gradient;
        }
        return 'rgba(1, 1, 1, 0)';
      })
      .style({
        opacity: 0.6
      });
    // 绘制线图
    chart.line().position('time*tem')
      .color('city')
      .size('city', function(city) {
        if (city === 'beijing') {
          return 5;
        }
        return 2;
      });
    chart.render();
    
    const position = chart.getPosition({
      time: '2016-08-10 02:20:00', 
      tem: 28
    });
    const top = position.y / 2 - 8;
    const left = position.x / 2 - 8;
    // html字符串
    const pointHtml1 = "<div style='position:absolute;top:" + top + "px;left:" + left + "px;border-radius: 12px;border: none;width: 16px;height: 16px;background-color: rgba(102, 182, 241, 0.5);'></div>";

    WxParse.wxParse('point1', 'html', pointHtml1, this);
  }
});

