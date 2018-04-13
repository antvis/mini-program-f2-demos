/**
 * 动画工具
 */
var _require = require('../graphic/index'),
    Shape = _require.Shape,
    Matrix = _require.Matrix;

var Util = require('../util/common');

var Helpers = {
  getCoordInfo: function getCoordInfo(coord) {
    var start = coord.start;
    var end = coord.end;
    return {
      start: start,
      end: end,
      width: end.x - start.x,
      height: Math.abs(end.y - start.y)
    };
  },
  getScaledMatrix: function getScaledMatrix(shape, v, direct) {
    var scaledMatrix = void 0;

    shape.apply(v); // shape 原先可能做了变化
    var x = v[0];
    var y = v[1];

    if (direct === 'x') {
      shape.transform([['t', x, y], ['s', 0.01, 1], ['t', -x, -y]]);
      var matrix = shape.getMatrix();
      scaledMatrix = Matrix.transform(matrix, [['t', x, y], ['s', 100, 1], ['t', -x, -y]]);
    } else if (direct === 'y') {
      shape.transform([['t', x, y], ['s', 1, 0.01], ['t', -x, -y]]);
      var _matrix = shape.getMatrix();
      scaledMatrix = Matrix.transform(_matrix, [['t', x, y], ['s', 1, 100], ['t', -x, -y]]);
    } else if (direct === 'xy') {
      shape.transform([['t', x, y], ['s', 0.01, 0.01], ['t', -x, -y]]);
      var _matrix2 = shape.getMatrix();
      scaledMatrix = Matrix.transform(_matrix2, [['t', x, y], ['s', 100, 100], ['t', -x, -y]]);
    }
    return scaledMatrix;
  },
  getClip: function getClip(coord) {
    var _Helpers$getCoordInfo = Helpers.getCoordInfo(coord),
        start = _Helpers$getCoordInfo.start,
        end = _Helpers$getCoordInfo.end,
        width = _Helpers$getCoordInfo.width,
        height = _Helpers$getCoordInfo.height;

    var margin = 200;
    var clip = void 0;

    if (coord.isPolar) {
      var circleRadius = coord.circleRadius,
          center = coord.center,
          startAngle = coord.startAngle,
          endAngle = coord.endAngle;

      clip = new Shape.Sector({
        attrs: {
          x: center.x,
          y: center.y,
          r: circleRadius + margin,
          r0: 0,
          startAngle: startAngle,
          endAngle: startAngle
        }
      });
      clip.endState = {
        endAngle: endAngle
      };
    } else {
      clip = new Shape.Rect({
        attrs: {
          x: start.x - margin,
          y: end.y - margin,
          width: coord.isTransposed ? width + margin * 2 : 0,
          height: coord.isTransposed ? 0 : height + margin * 2
        }
      });

      if (coord.isTransposed) {
        clip.endState = {
          height: height + margin * 2
        };
      } else {
        clip.endState = {
          width: width + margin * 2
        };
      }
    }
    clip.isClip = true;
    return clip;
  },
  getAnimateParam: function getAnimateParam(animateCfg, index, id) {
    var result = {};
    if (animateCfg.delay) {
      result.delay = Util.isFunction(animateCfg.delay) ? animateCfg.delay(index, id) : animateCfg.delay;
    }
    result.easing = animateCfg.easing;
    result.duration = animateCfg.duration;
    result.delay = animateCfg.delay;
    // result.onStart = animateCfg.onStart;
    // result.onUpdate = animateCfg.onUpdate;
    // result.onEnd = animateCfg.onEnd;
    return result;
  },
  doAnimation: function doAnimation(shape, endState, animateCfg, callback) {
    var id = shape._id;
    var index = shape.get('index');

    var _Helpers$getAnimatePa = Helpers.getAnimateParam(animateCfg, index, id),
        easing = _Helpers$getAnimatePa.easing,
        delay = _Helpers$getAnimatePa.delay,
        duration = _Helpers$getAnimatePa.duration;

    var anim = shape.animate().to({
      attrs: endState,
      duration: duration,
      delay: delay,
      easing: easing
    });

    if (callback) {
      anim.onEnd(function () {
        callback();
      });
    }
  }
};

module.exports = Helpers;