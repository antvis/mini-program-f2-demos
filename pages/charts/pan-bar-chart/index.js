import F2 from '../../../lib/my-f2';
const app = getApp();
let chart = null;

function formatNumber(n) {
  return String(Math.floor(n * 100) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function drawChart(canvas, width, height) {
  const data = [{"date": "2017-11-01","steps": 30529,"first": true},{"date": "2017-11-02","steps": 30193},{"date": "2017-11-03","steps": 20919},{"date": "2017-11-04","steps": 25413},{"date": "2017-11-05","steps": 28461},{"date": "2017-11-06","steps": 22920},{"date": "2017-11-07","steps": 33865},{"date": "2017-11-08","steps": 19357},{"date": "2017-11-09","steps": 16825},{"date": "2017-11-10","steps": 12516},{"date": "2017-11-11","steps": 31490},{"date": "2017-11-12","steps": 2426},{"date": "2017-11-13","steps": 29789},{"date": "2017-11-14","steps": 19578},{"date": "2017-11-15","steps": 28381},{"date": "2017-11-16","steps": 24357},{"date": "2017-11-17","steps": 22865},{"date": "2017-11-18","steps": 885},{"date": "2017-11-19","steps": 14907},{"date": "2017-11-20","steps": 11647},{"date": "2017-11-21","steps": 12275},{"date": "2017-11-22","steps": 4747},{"date": "2017-11-23","steps": 11647},{"date": "2017-11-24","steps": 4926},{"date": "2017-11-25","steps": 4939},{"date": "2017-11-26","steps": 1005},{"date": "2017-11-27","steps": 6569},{"date": "2017-11-28","steps": 4019},{"date": "2017-11-29","steps": 7620},{"date": "2017-11-30","steps": 9878}];
  const originDates = [ '2017-11-25', '2017-11-26', '2017-11-27', '2017-11-28', '2017-11-29', '2017-11-30' ];
  const chart = new F2.Chart({
    el: canvas,
    width,
    height,
    animate: false
  });

  chart.source(data, {
    date: {
      type: 'timeCat',
      tickCount: 5,
      values: originDates,
      mask: 'MM-DD'
    }
  });

  chart.axis('date', {
    tickLine: {
      length: 4,
      stroke: '#cacaca'
    },
    label: {
      fill: '#cacaca'
    },
    line: {
      top: true
    }
  });
  chart.axis('steps', {
    position: 'right',
    gird: null,
    label(text) {
      return {
        text: formatNumber(text * 1),
        fill: '#cacaca'
      };
    },
    grid: {
      stroke: '#d1d1d1'
    }
  });
  chart.tooltip(false);
  chart.interval().position('date*steps').color('#FF5842').style({
    radius: [ 2, 2, 0, 0 ]
  });

  // 定义进度条
  chart.scrollBar({
    mode: 'x',
    xStyle: {
      backgroundColor: '#e8e8e8',
      fillerColor: '#808080',
      offsetY: -2
    }
  });
  chart.interaction('pan');
  chart.render();
  return chart;
}

Page({
  data: {},
  onReady() {
    my.createSelectorQuery()
      .select('#panBar')
      .boundingClientRect()
      .exec((res) => {
        // // 获取分辨率
        const pixelRatio = my.getSystemInfoSync().pixelRatio;
        // // 获取画布实际宽高
        const canvasWidth = res[0].width;
        const canvasHeight = res[0].height;
        this.setData({
          width: canvasWidth * pixelRatio,
          height: canvasHeight * pixelRatio
        });
        const myCtx = my.createCanvasContext('panBar');
        myCtx.scale(pixelRatio, pixelRatio); // 必要！按照设置的分辨率进行放大
        const canvas = new F2.Renderer(myCtx);
        this.canvas = canvas;
        //console.log(res[0].width, res[0].height);
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
