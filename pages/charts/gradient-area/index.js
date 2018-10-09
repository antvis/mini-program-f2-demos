import F2 from '../../../lib/my-f2.js';
const app = getApp();

let chart = null;

function drawChart(canvas, width, height) {
  var data = [{
    time: '2016-08-08 00:00:00',
    tem: 10
  }, {
    time: '2016-08-08 00:10:00',
    tem: 22
  }, {
    time: '2016-08-08 00:30:00',
    tem: 16
  }, {
    time: '2016-08-09 00:35:00',
    tem: 26
  }, {
    time: '2016-08-09 01:00:00',
    tem: 12
  }, {
    time: '2016-08-09 01:20:00',
    tem: 26
  }, {
    time: '2016-08-10 01:40:00',
    tem: 18
  }, {
    time: '2016-08-10 02:00:00',
    tem: 26
  }, {
    time: '2016-08-10 02:20:00',
    tem: 12
  }];
  chart = new F2.Chart({
    el: canvas,
    width,
    height
  });
  chart.source(data, {
    time: {
      type: 'timeCat',
      tickCount: 3,
      range: [0, 1]
    },
    tem: {
      tickCount: 5,
      min: 0
    }
  });

  chart.axis('time', {
    label: function label(text, index, total) {
      var textCfg = {};
      if (index === 0) {
        textCfg.textAlign = 'left';
      } else if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    }
  });
  chart.tooltip({
    showCrosshairs: true
  });

  chart.area().position('time*tem').color('l(90) 0:#1890FF 1:#f7f7f7').shape('smooth');
  chart.line().position('time*tem').color('l(90) 0:#1890FF 1:#f7f7f7').shape('smooth');
  chart.render();

  return chart;
}

Page({
  data: {},
  onReady() {
    my.createSelectorQuery()
      .select('#gradient')
      .boundingClientRect()
      .exec((res) => {
        const myCtx = my.createCanvasContext('gradient', {
          enableNative: true
        });
        const canvas = new F2.Renderer(myCtx);
        this.canvas = canvas;
        drawChart(canvas, res[0].width, res[0].height);
      });
  }
});
