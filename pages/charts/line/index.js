import F2 from '../../../lib/my-f2.js';
const app = getApp();

let chart = null;

function dateStr(num) {
  let date = new Date(num * 24 * 3600 * 1000);
  let year = date.getFullYear() + 100;
  let month = date.getMonth() + 1;
  month = month < 10 ? ('0' + month) : month;
  let day = date.getDate();
  day = day < 10 ? ('0' + day) : day;
  return year + '-' + month + '-' + day
}

function drawChart(canvas, width, height) {
  const data = Array.from({ length: 5000 }, (item, index) => {
    let obj = {}
    obj.date = dateStr(index + 1)
    obj.value = parseInt(Math.random() * 100)
    return obj
  })
  chart = new F2.Chart({
    el: canvas,
    width,
    height
  });

  chart.source(data, {
    value: {
      max: 300,
      tickCount: 5,
      min: 0
    },
    date: {
      type: 'timeCat',
      range: [0, 1],
      tickCount: 3
    }
  });
  chart.tooltip({
    showItemMarker: false,
    onShow(ev) {
      const { items } = ev;
      items[0].name = items[0].title;
    }
  });
  chart.axis('date', {
    label(text, index, total) {
      const textCfg = {};
      if (index === 0) {
        textCfg.textAlign = 'left';
      }
      if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    }
  });
  chart.line()
    .position('date*value');
  chart.render();
  return chart;
}

Page({
  data: {},
  onReady() {
    my.createSelectorQuery()
      .select('#line')
      .boundingClientRect()
      .exec((res) => {
        const myCtx = my.createCanvasContext('line', {
          enableNative: true
        });
        const canvas = new F2.Renderer(myCtx);
        this.canvas = canvas;
        drawChart(canvas, res[0].width, res[0].height);
      });
  }
});