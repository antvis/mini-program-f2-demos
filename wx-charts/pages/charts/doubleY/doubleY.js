import MyF2 from '../../../util/my-f2.js';
const app = getApp();

Page({
  data: {},
  onLoad() {
    const data = [
      { time: '周一', tem: 6.9, rain: 10 },
      { time: '周二', tem: 9.5, rain: 13 },
      { time: '周三', tem: 14.5, rain: 14 },
      { time: '周四', tem: 18.2, rain: 10 },
      { time: '周五', tem: 21.5, rain: 12 },
      { time: '周六', tem: 25.2, rain: 16 },
      { time: '周日', tem: 26.5, rain: 13 }
    ];
    const chart = new MyF2.Chart({
      el: wx.createCanvasContext('canvas'),
      width: 300,
      height: 300
    });

    chart.source(data, {
      tem: {
        tickCount: 5,
        max: 30,
        min: 0
      },
      rain: {
        tickCount: 5,
        min: 0,
        max: 30
      }
    });

    // 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
    chart.axis('time', {
      label: {
        fontSize: 14
      },
      grid: null
    });
    chart.axis('tem', {
      label: {
        fontSize: 14
      }
    });
    chart.axis('rain', {
      label: {
        fontSize: 14
      }
    });
    chart.interval().position('time*tem');
    chart.line().position('time*rain')
      .color('#5ed470')
      .size(2)
      .shape('smooth');
    chart.point().position('time*rain').color('#5ed470');
    chart.render();
  }
});
