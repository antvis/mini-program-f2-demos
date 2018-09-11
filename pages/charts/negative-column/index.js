import F2 from '../../../lib/my-f2.js';
const app = getApp();

let chart = null;

function drawChart(canvas, width, height) {
  function numberToMoney(n) {
    return String(Math.floor(n * 100) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const data = [
    { value: -139255.5, season: '第四季' },
    { value: 51926.5, season: '第三季' },
    { value: -49959.4, season: '第二季' },
    { value: -37099.9, season: '第一季' }
  ];
  chart = new F2.Chart({
    el: canvas,
    width,
    height
  });
  chart.source(data);
  chart.axis('value', false);
  chart.tooltip(false);
  chart.legend({
    custom: 'true',
    items: [
      { name: '净申购', marker: 'circle', fill: '#FC674D' },
      { name: '净赎回', marker: 'circle', fill: '#9AC2AB' },
    ],
    align: 'right',
    itemWidth: null
  });
  chart.interval().position('season*value')
    .color('value', val => {
      return val > 0 ? '#FC674D' : '#9AC2AB';
    });

  // 辅助元素
  data.forEach(function(obj, index) {
    // 文字部分
    const color = obj.value > 0 ? '#FC674D' : '#9AC2AB';
    chart.guide().text({
      position: [ obj.season, obj.value > 0 ? obj.value : 0 ],
      content: numberToMoney(obj.value),
      style: {
        fill: color,
        textBaseline: 'bottom'
      },
      offsetY: -5
    });
  });

  // 绘制坐标轴标题
  chart.guide().text({
    position: [ 'min', 'max' ],
    content: '单位（万元）',
    style: {
      textBaseline: 'middle',
      textAlign: 'start'
    },
    offsetY: -23
  });

  chart.render();
  return chart;
}

Page({
  data: {},
  onReady() {
    my.createSelectorQuery()
      .select('#negativeColumn')
      .boundingClientRect()
      .exec((res) => {
        const myCtx = my.createCanvasContext('negativeColumn', {
          enableNative: true
        });
        const canvas = new F2.Renderer(myCtx);
        this.canvas = canvas;
        drawChart(canvas, res[0].width, res[0].height);
      });
  },
  touchStart(e) {
    if (this.canvas) {
      this.canvas.emitEvent('touchstart', [e]);
    }
  },
  touchMove(e) {
    if (this.canvas) {
      this.canvas.emitEvent('touchmove', [e]);
    }
  },
  touchEnd(e) {
    if (this.canvas) {
      this.canvas.emitEvent('touchend', [e]);
    }
  }
});
