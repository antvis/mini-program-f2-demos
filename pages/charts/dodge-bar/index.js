import F2 from '../../../lib/my-f2.js';
const app = getApp();

let chart = null;

function drawChart(canvas, width, height) {
  var data = [
    { label: 'Mon.', type: 'series1', value: 2800 },
    { label: 'Mon.', type: 'series2', value: 2260 },
    { label: 'Tue.', type: 'series1', value: 1800 },
    { label: 'Tue.', type: 'series2', value: 1300 },
    { label: 'Wed.', type: 'series1', value: 950 },
    { label: 'Wed.', type: 'series2', value: 900 },
    { label: 'Thu.', type: 'series1', value: 500 },
    { label: 'Thu.', type: 'series2', value: 390 },
    { label: 'Fri.', type: 'series1', value: 170 },
    { label: 'Fri.', type: 'series2', value: 100 }
  ];
  var chart = new F2.Chart({
    el: canvas,
    width,
    height
  });

  chart.source(data.reverse(), {
    value: {
      tickInterval: 750
    }
  });
  chart.coord({
    transposed: true
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
  chart.axis('label', {
    line: F2.Global._defaultAxis.line,
    grid: null
  });
  chart.axis('value', {
    line: null,
    grid: F2.Global._defaultAxis.grid,
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
  chart.interval().position('label*value').color('type').adjust({
    type: 'dodge',
    marginRatio: 1 / 32
  });
  chart.render();
  return chart;
}

Page({
  data: {},
  onReady() {
    my.createSelectorQuery()
      .select('#dodgeBar')
      .boundingClientRect()
      .exec((res) => {
        const myCtx = my.createCanvasContext('dodgeBar', {
          enableNative: true
        });
        const canvas = new F2.Renderer(myCtx);
        this.canvas = canvas;
        drawChart(canvas, res[0].width, res[0].height);
      });
  }
});
