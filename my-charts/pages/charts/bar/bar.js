const F2 = require('../../../util/f2');
const F2Render = require('../../../util/render');
const app = getApp();

Page({
  data: {},
  onReady() {
    const data = [
      { tem: 10, city: 'tokyo' },
      { tem: 4, city: 'newYork' },
      { tem: 3, city: 'berlin' }
    ];
    const chart = new F2.Chart({
      el: new F2Render(my.createCanvasContext('canvas'), 600, 600),
      padding: [ 40, 40, 40, 80]
    });
    chart.source(data);
      chart.coord({
        transposed: true
      });
      // 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
      chart.axis('city', {
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
      chart.interval().position('city*tem').color('city');
      chart.render();
    }
});
