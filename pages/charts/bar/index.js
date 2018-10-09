import F2 from '../../../lib/my-f2.js';
const app = getApp();

let chart = null;

function drawChart(canvas, width, height) {
  var Global = F2.Global;
  var data = [
    { country: '巴西', population: 18203 },
    { country: '印尼', population: 23489 },
    { country: '美国', population: 29034 },
    { country: '印度', population: 104970 },
    { country: '中国', population: 131744 }
  ];
  var chart = new F2.Chart({
    el: canvas,
    width,
    height
  });

  chart.source(data, {
    population: {
      tickCount: 5
    }
  });
  chart.coord({
    transposed: true
  });
  chart.axis('country', {
    line: Global._defaultAxis.line,
    grid: null
  });
  chart.axis('population', {
    line: null,
    grid: Global._defaultAxis.grid,
    label: function(text, index, total) {
      var textCfg = {};
      if (index === 0) {
        textCfg.textAlign = 'left';
      } else if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    }
  });
  chart.interval().position('country*population');
  chart.render();
  return chart;
}

Page({
  data: {},
  onReady() {
    my.createSelectorQuery()
      .select('#bar')
      .boundingClientRect()
      .exec((res) => {
        const myCtx = my.createCanvasContext('bar', {
          enableNative: true
        });
        const canvas = new F2.Renderer(myCtx);
        this.canvas = canvas;
        drawChart(canvas, res[0].width, res[0].height);
      });
  }
});
