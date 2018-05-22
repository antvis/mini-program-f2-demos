function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = require('../../util/common');
var Global = require('../../global');
var Vector2 = require('../../graphic/util/vector2');

var Abastract = function () {
  Abastract.prototype._initDefaultCfg = function _initDefaultCfg() {
    /**
     * 坐标点
     * @type {Array}
     */
    this.ticks = [];
    /**
     * tick 的配置信息
     * @type {Object}
     */
    this.tickLine = {};
    /**
     * 文本、tick跟坐标轴线的方向，默认是顺时针方向
     * @type {Number}
     */
    this.offsetFactor = 1;
    /**
     * 上层图层
     * @type {container}
     */
    this.frontContainer = null;
    /**
     * 下层图层
     * @type {[type]}
     */
    this.backContainer = null;
    /**
     * 绘制栅格的点
     * @type {Array}
     */
    this.gridPoints = [];
  };

  function Abastract(cfg) {
    _classCallCheck(this, Abastract);

    this._initDefaultCfg();
    Util.mix(this, cfg);
    this.draw();
  }

  Abastract.prototype.draw = function draw() {
    var line = this.line,
        tickLine = this.tickLine,
        label = this.label,
        grid = this.grid;


    grid && this.drawGrid(grid); // 渲染网格
    tickLine && this.drawTicks(tickLine); // 渲染刻度线
    line && this.drawLine(line); // 渲染轴线
    label && this.drawLabels(); // 渲染坐标轴文本
  };

  Abastract.prototype.drawTicks = function drawTicks(tickCfg) {
    var self = this;
    var ticks = self.ticks;
    var length = tickCfg.length; // Change: value 改为 length， 同 G2 统一
    var container = self.getContainer(tickCfg.top);
    Util.each(ticks, function (tick) {
      var start = self.getOffsetPoint(tick.value);
      var end = self.getSidePoint(start, length);
      var shape = container.addShape('line', {
        className: 'axis-tick',
        attrs: Util.mix({
          x1: start.x,
          y1: start.y,
          x2: end.x,
          y2: end.y
        }, tickCfg)
      });
      shape._id = self._id + '-ticks';
    });
  };

  Abastract.prototype.drawLabels = function drawLabels() {
    var self = this;
    var labelOffset = self.labelOffset;
    var labels = self.labels;
    Util.each(labels, function (labelShape) {
      var container = self.getContainer(labelShape.get('top'));
      var start = self.getOffsetPoint(labelShape.get('value'));

      var _self$getSidePoint = self.getSidePoint(start, labelOffset),
          x = _self$getSidePoint.x,
          y = _self$getSidePoint.y;

      labelShape.attr(Util.mix({
        x: x,
        y: y
      }, self.getTextAlignInfo(start, labelOffset), labelShape.get('textStyle')));
      labelShape._id = self._id + '-' + labelShape.attr('text');
      container.add(labelShape);
    });
  };

  Abastract.prototype.drawLine = function drawLine() {};

  Abastract.prototype.drawGrid = function drawGrid(grid) {
    var self = this;
    var gridPoints = self.gridPoints,
        ticks = self.ticks;

    var gridCfg = grid;
    var count = gridPoints.length;

    Util.each(gridPoints, function (subPoints, index) {
      if (Util.isFunction(grid)) {
        var tick = ticks[index] || {};
        gridCfg = Util.mix({}, Global._defaultAxis.grid, grid(tick.text, index, count));
      }

      if (gridCfg) {
        var type = gridCfg.type; // grid 的类型，包含 'line' 以及 'arc'
        var points = subPoints.points;
        var container = self.getContainer(gridCfg.top);
        var shape = void 0;

        if (type === 'arc') {
          var center = self.center,
              startAngle = self.startAngle,
              endAngle = self.endAngle;

          var radius = Vector2.length([points[0].x - center.x, points[0].y - center.y]);
          shape = container.addShape('Arc', {
            className: 'axis-grid',
            attrs: Util.mix({
              x: center.x,
              y: center.y,
              startAngle: startAngle,
              endAngle: endAngle,
              r: radius
            }, gridCfg)
          });
        } else {
          shape = container.addShape('Polyline', {
            className: 'axis-grid',
            attrs: Util.mix({
              points: points
            }, gridCfg)
          });
        }

        shape._id = subPoints._id;
      }
    });
  };

  // 获取坐标轴上的点


  Abastract.prototype.getOffsetPoint = function getOffsetPoint() {};

  // 获取坐标轴上点的向量，极坐标下覆盖此方法


  Abastract.prototype.getAxisVector = function getAxisVector() {};

  // 获取偏移位置的向量


  Abastract.prototype.getOffsetVector = function getOffsetVector(point, offset) {
    var self = this;
    var axisVector = self.getAxisVector(point);
    var normal = Vector2.normalize([], axisVector);
    var factor = self.offsetFactor;
    var verticalVector = [normal[1] * -1 * factor, normal[0] * factor];
    return Vector2.scale([], verticalVector, offset);
  };

  // 获取坐标轴边上的点


  Abastract.prototype.getSidePoint = function getSidePoint(point, offset) {
    var self = this;
    var offsetVector = self.getOffsetVector(point, offset);
    return {
      x: point.x + offsetVector[0],
      y: point.y + offsetVector[1]
    };
  };

  // 获取文本，水平和垂直方向的对齐方式


  Abastract.prototype.getTextAlignInfo = function getTextAlignInfo(point, offset) {
    var self = this;
    var offsetVector = self.getOffsetVector(point, offset);
    var align = void 0;
    var baseLine = void 0;
    if (offsetVector[0] > 0) {
      align = 'left';
    } else if (offsetVector[0] < 0) {
      align = 'right';
    } else {
      align = 'center';
    }
    if (offsetVector[1] > 0) {
      baseLine = 'top';
    } else if (offsetVector[1] < 0) {
      baseLine = 'bottom';
    } else {
      baseLine = 'middle';
    }
    return {
      textAlign: align,
      textBaseline: baseLine
    };
  };

  Abastract.prototype.getContainer = function getContainer(isTop) {
    var frontContainer = this.frontContainer,
        backContainer = this.backContainer;

    return isTop ? frontContainer : backContainer;
  };

  return Abastract;
}();

module.exports = Abastract;