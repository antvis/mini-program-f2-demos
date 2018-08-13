import F2 from '../../../lib/my-f2';
const app = getApp();

let chart = null;

function drawChart(canvas, width, height) {
  const data = [
    { item: 'Design', user: '用户 A', score: 70 },
    { item: 'Design', user: '用户 B', score: 30 },
    { item: 'Development', user: '用户 A', score: 60 },
    { item: 'Development', user: '用户 B', score: 70 },
    { item: 'Marketing', user: '用户 A', score: 50 },
    { item: 'Marketing', user: '用户 B', score: 60 },
    { item: 'Users', user: '用户 A', score: 40 },
    { item: 'Users', user: '用户 B', score: 50 },
    { item: 'Test', user: '用户 A', score: 60 },
    { item: 'Test', user: '用户 B', score: 70 },
    { item: 'Language', user: '用户 A', score: 70 },
    { item: 'Language', user: '用户 B', score: 50 },
    { item: 'Technology', user: '用户 A', score: 70 },
    { item: 'Technology', user: '用户 B', score: 40 },
    { item: 'Support', user: '用户 A', score: 60 },
    { item: 'Support', user: '用户 B', score: 40 }
  ];
  chart = new F2.Chart({
    el: canvas,
    width,
    height
  });

  chart.coord('polar');
  chart.source(data, {
    score: {
      min: 0,
      max: 120,
      nice: false,
      tickCount: 4
    }
  });
  chart.legend({
    align: 'center'
  });
  chart.tooltip({
    custom: true, // 自定义 tooltip 内容框
    onChange(obj) {
      const legend = chart.get('legendController').legends.top[0];
      const tooltipItems = obj.items;
      const legendItems = legend.items;
      const map = {};
      legendItems.map(item => {
        map[item.name] = Object.assign({}, item);
      });
      tooltipItems.map(item => {
        const { name, value } = item;
        if (map[name]) {
          map[name].value = value;
        }
      });
      legend.setItems(Object.values(map));
    },
    onHide() {
      const legend = chart.get('legendController').legends.top[0];
      legend.setItems(chart.getLegendItems().country);
    }
  });
  chart.axis('score', {
    label(text, index, total) {
      if (index === total - 1) {
        return null;
      }
      return {
        top: true
      };
    },
    grid(text) {
      if (text === '120') {
        return {
          lineDash: null
        };
      }
    },
    line: {
      top: false
    }
  });
  chart.area().position('item*score').color('user');
  chart.line().position('item*score').color('user');
  chart.point().position('item*score').color('user').style({
    stroke: '#fff',
    lineWidth: 1
  });
  chart.render();
  return chart;
}

Page({
  data: {},
  onReady() {
    my.createSelectorQuery()
      .select('#radar')
      .boundingClientRect()
      .exec((res) => {
        // 获取分辨率
        const pixelRatio = my.getSystemInfoSync().pixelRatio;
        // 获取画布实际宽高
        const canvasWidth = res[0].width;
        const canvasHeight = res[0].height;
        this.setData({
          width: canvasWidth * pixelRatio,
          height: canvasHeight * pixelRatio
        });
        const myCtx = my.createCanvasContext('radar');
        myCtx.scale(pixelRatio, pixelRatio); // 必要！按照设置的分辨率进行放大
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
