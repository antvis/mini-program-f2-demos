import F2 from '@antv/my-f2';
const app = getApp();

let chart = null;

function drawChart(canvas, width, height) {
  var data = [
    { State: 'WY', 年龄段 : '小于5岁', 人口数量: 25635 },
    { State: 'WY', 年龄段 : '5至13岁', 人口数量: 1890 },
    { State: 'WY', 年龄段 : '14至17岁', 人口数量: 9314 },
    { State: 'DC', 年龄段 : '小于5岁', 人口数量: 30352 },
    { State: 'DC', 年龄段 : '5至13岁', 人口数量: 20439 },
    { State: 'DC', 年龄段 : '14至17岁', 人口数量: 10225 },
    { State: 'VT', 年龄段 : '小于5岁', 人口数量: 38253 },
    { State: 'VT', 年龄段 : '5至13岁', 人口数量: 42538 },
    { State: 'VT', 年龄段 : '14至17岁', 人口数量: 15757 },
    { State: 'ND', 年龄段 : '小于5岁', 人口数量: 51896 },
    { State: 'ND', 年龄段 : '5至13岁', 人口数量: 67358 },
    { State: 'ND', 年龄段 : '14至17岁', 人口数量: 18794 },
    { State: 'AK', 年龄段 : '小于5岁', 人口数量: 72083 },
    { State: 'AK', 年龄段 : '5至13岁', 人口数量: 85640 },
    { State: 'AK', 年龄段 : '14至17岁', 人口数量: 22153 }
  ];
  var chart = new F2.Chart({
    el: canvas,
    width,
    height
  });

  chart.source(data, {
    '人口数量': {
      tickCount: 5
    }
  });
  chart.coord({
    transposed: true
  });
  chart.axis('State', {
    line: F2.Global._defaultAxis.line,
    grid: null
  });
  chart.axis('人口数量', {
    line: null,
    grid: F2.Global._defaultAxis.grid,
    label: function(text, index, total) {
      var textCfg = {
        text: text / 1000 + ' k'
      };
      if (index === 0) {
        textCfg.textAlign = 'left';
      } else if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    }
  });
  chart.tooltip({
    custom: true, // 自定义 tooltip 内容框
    onChange: function(obj) {
      var legend = chart.get('legendController').legends.top[0];
      var tooltipItems = obj.items;
      var legendItems = legend.items;
      var map = {};
      legendItems.map(function(item) {
        map[item.name] = Object.assign({}, item);
      });
      tooltipItems.map(function(item) {
        var name = item.name;
        var value = item.value;
        if (map[name]) {
          map[name].value = (value);
        }
      });
      legend.setItems(Object.values(map));
    },
    onHide: function() {
      var legend = chart.get('legendController').legends.top[0];
      legend.setItems(chart.getLegendItems().country);
    }
  });
  chart.interval().position('State*人口数量').color('年龄段').adjust('stack');

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
        // 获取分辨率
        const pixelRatio = my.getSystemInfoSync().pixelRatio;
        // 获取画布实际宽高
        const canvasWidth = res[0].width;
        const canvasHeight = res[0].height;
        this.setData({
          width: canvasWidth * pixelRatio,
          height: canvasHeight * pixelRatio
        });
        const myCtx = my.createCanvasContext('stackBar');
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
