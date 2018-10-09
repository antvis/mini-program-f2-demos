import F2 from '../../../lib/my-f2.js';
const app = getApp();

let chart = null;

function drawChart(canvas, width, height) {
  const data = [
    { name: '股票类', percent: 83.59, a: '1' },
    { name: '债券类', percent: 2.17, a: '1' },
    { name: '现金类', percent: 14.24, a: '1' }
  ];

  const map = {};
  data.map(obj => {
    map[obj.name] = obj.percent + '%';
  });

  chart = new F2.Chart({
    el: canvas,
    width,
    height,
    padding: [ 20, 'auto' ]
  });
  chart.source(data, {
    percent: {
      formatter(val) {
        return val + '%';
      }
    }
  });
  chart.tooltip(false);
  chart.legend({
    position: 'right',
    itemFormatter(val) {
      return val + '    ' + map[val];
    }
  });
  chart.coord('polar', {
    transposed: true,
    innerRadius: 0.7,
    radius: 0.85
  });
  chart.axis(false);
  chart.interval()
    .position('a*percent')
    .color('name', [ '#FE5D4D', '#3BA4FF', '#737DDE'])
    .adjust('stack');

  chart.render();

  return chart;
}

Page({
  data: {},
  onReady() {
    my.createSelectorQuery()
      .select('#ring')
      .boundingClientRect()
      .exec((res) => {
        const myCtx = my.createCanvasContext('ring', {
          enableNative: true
        });
        const canvas = new F2.Renderer(myCtx);
        this.canvas = canvas;
        drawChart(canvas, res[0].width, res[0].height);
      });
  }
});
