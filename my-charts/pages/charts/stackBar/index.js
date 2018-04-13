import F2 from '@antv/my-f2';
const app = getApp();
const data = require('../../../data/stack-bar');

let chart = null;

function drawChart(canvas, width, height) {
   function formatter(val)  {
    return (val * 100).toFixed(0) + '%';
  }

  const { Shape, Util, G } = F2;
  Shape.registerShape('interval', 'text', {
    draw(cfg, container) {
      const points = this.parsePoints(cfg.points);
      const style = {
        fill: cfg.color,
        z: true, // 需要闭合
      };
      const shapes = [];
      const intervalWidth = points[1].x - points[0].x;
      const interval = container.addShape('rect', {
        attrs: Util.mix({
          x: points[0].x,
          y: points[0].y,
          width: intervalWidth,
          height: points[3].y  - points[0].y
        }, style)
      }); // 绘制柱形
      shapes.push(interval);
      const origin = cfg.origin._origin; // 获取对应的原始数据
      const textOffsetX = 4;

      const text = new G.Shape.Text({
        attrs: {
          x: points[0].x + textOffsetX,
          y: (points[0].y + points[3].y) / 2,
          text: formatter(origin.percent),
          fill: origin.type === '没什么感觉' ? '#000' : '#fff',
          textAlign: 'start',
          textBaseline: 'middle',
          fontSize: 10
        }
      });
      const textWidth = text.getBBox().width;
      if (textWidth + textOffsetX < intervalWidth) {
        container.add(text);
        shapes.push(text);
      }
      return shapes;
    },
  });
  const colors = {
      '非常喜欢': 'rgb(176, 50, 16)',
      '挺喜欢': 'rgb(244, 120, 81)',
      '没什么感觉': 'rgb(218, 218, 218)',
      '不太喜欢': 'rgb(93, 156, 184)',
      '非常讨厌': 'rgb(21, 96, 122)',
    };
  chart = new F2.Chart({
    el: canvas,
    width,
    height
  });
  chart.source(data, {
      percent: {
        min: 0,
        max: 1,
        nice: false,
        formatter
      }
    });
    chart.coord({
      transposed: true
    });
    chart.legend({
      marker: 'square',
      clickable: false
    });
    chart.tooltip(false);
    chart.axis('percent', false);
    chart.axis('candy', { grid: null });
    chart.interval().position('candy*percent')
      .color('type', val => {
        return colors[val];
      }).adjust('stack')
      .shape('text');
    chart.render();

  return chart;
}

Page({
  data: {},
  onReady() {
    my.createSelectorQuery()
      .select('#stackBar')
      .boundingClientRect()
      .exec((res) => {
        const myCtx = my.createCanvasContext('stackBar');
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
