var Util = require('../../util/common');
var Shape = require('./shape');
var Smooth = require('../../graphic/util/smooth');
var Global = require('../../global');

// 是否相等
function equals(v1, v2) {
  return Math.abs(v1 - v2) < 0.00001;
}

// 是否等于圆心的点
function equalsCenter(points, center) {
  var eqls = true;
  Util.each(points, function (point) {
    if (!equals(point.x, center.x) || !equals(point.y, center.y)) {
      eqls = false;
      return false;
    }
  });
  return eqls;
}

function drawCircleArea(topPoints, bottomPoints, container, style, isSmooth) {
  var shape = container.addShape('Polyline', {
    className: 'area',
    attrs: Util.mix({
      points: topPoints,
      smooth: isSmooth
    }, style)
  });
  if (bottomPoints.length) {
    var bottomShape = container.addShape('Polyline', {
      className: 'area',
      attrs: Util.mix({
        points: bottomPoints,
        smooth: isSmooth
      }, style)
    });
    return [shape, bottomShape];
  }
  return shape;
}

function drawRectShape(topPoints, bottomPoints, container, style, isSmooth) {
  var shape = void 0;
  if (isSmooth) {
    shape = container.addShape('Custom', {
      className: 'area',
      attrs: Util.mix({
        points: topPoints.concat(bottomPoints)
      }, style),
      createPath: function createPath(context) {
        var constaint = [// 范围
        [0, 0], [1, 1]];
        var points = this._attrs.attrs.points;
        var topSps = Smooth.smooth(points.slice(0, points.length / 2), false, constaint);
        var bottomSps = Smooth.smooth(points.slice(points.length / 2, points.length), false, constaint);

        context.beginPath();
        context.moveTo(topPoints[0].x, topPoints[0].y);
        for (var i = 0, n = topSps.length; i < n; i++) {
          var sp = topSps[i];
          context.bezierCurveTo(sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]);
        }
        context.lineTo(bottomPoints[0].x, bottomPoints[0].y);
        for (var _i = 0, _n = bottomSps.length; _i < _n; _i++) {
          var _sp = bottomSps[_i];
          context.bezierCurveTo(_sp[1], _sp[2], _sp[3], _sp[4], _sp[5], _sp[6]);
        }
        context.closePath();
      }
    });
  } else {
    topPoints = topPoints.concat(bottomPoints);
    shape = container.addShape('Polyline', {
      className: 'area',
      attrs: Util.mix({
        points: topPoints
      }, style)
    });
  }
  return shape;
}

function drawShape(cfg, container, isSmooth) {
  var self = this;
  var points = cfg.points;
  var topPoints = []; // 区域图上面的点
  var bottomPoints = []; // 区域图下面的点
  Util.each(points, function (point) {
    bottomPoints.push(point[0]);
    topPoints.push(point[1]);
  });
  var style = Util.mix({
    fillStyle: cfg.color
  }, Global.shape.area, cfg.style);
  bottomPoints.reverse(); // 下面
  topPoints = self.parsePoints(topPoints);
  bottomPoints = self.parsePoints(bottomPoints);
  if (cfg.isInCircle) {
    if (equalsCenter(bottomPoints, cfg.center)) {
      // 如果内部点等于圆心，不绘制
      bottomPoints = [];
    }
    return drawCircleArea(topPoints, bottomPoints, container, style, isSmooth);
  }

  return drawRectShape(topPoints, bottomPoints, container, style, isSmooth);
}

var Area = Shape.registerFactory('area', {
  defaultShapeType: 'area',
  // 如果存在多个点，分割成单个的点, 不考虑多个x对应一个y的情况
  getDefaultPoints: function getDefaultPoints(obj) {
    var x = obj.x;
    var y = obj.y;
    var y0 = obj.y0; // 最小值
    y = Util.isArray(y) ? y : [y0, y];

    var points = [];
    points.push({
      x: x,
      y: y[0]
    }, {
      x: x,
      y: y[1]
    });
    return points;
  }
});

var SHAPES = ['area', 'smooth'];
Util.each(SHAPES, function (shapeType) {
  Shape.registerShape('area', shapeType, {
    draw: function draw(cfg, container) {
      var smooth = shapeType === 'smooth';
      return drawShape.call(this, cfg, container, smooth);
    }
  });
});

module.exports = Area;