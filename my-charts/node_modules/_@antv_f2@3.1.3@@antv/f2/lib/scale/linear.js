function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview The measurement of linear data scale function
 * @author dxq613@gmail.com
 */
var Base = require('./base');
var Util = require('../util/common');
var numberAuto = require('./auto/number');

/**
 * 线性度量
 * @class Scale.Linear
 */

var Linear = function (_Base) {
  _inherits(Linear, _Base);

  function Linear() {
    _classCallCheck(this, Linear);

    return _possibleConstructorReturn(this, _Base.apply(this, arguments));
  }

  Linear.prototype._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'linear';
    this.isLinear = true;
    /**
      * min value of the scale
      * @type {Number}
      * @default null
      */
    this.min = null;
    /**
      * max value of the scale
      * @type {Number}
      * @default null
      */
    this.max = null;
    /**
      * 是否为了用户习惯，优化min,max和ticks，如果进行优化，则会根据生成的ticks调整min,max，否则舍弃(min,max)范围之外的ticks
      * @type {Boolean}
      * @default false
      */
    this.nice = true;
    /**
      * 自动生成标记时的个数
      * @type {Number}
      * @default null
      */
    this.tickCount = null;
    /**
      * 坐标轴点之间的间距，指的是真实数据的差值
      * @type {Number}
      * @default null
      */
    this.tickInterval = null;
    /**
     * 格式化函数,输出文本或者tick时的格式化函数
     * @type {Function}
     */
    this.formatter = null;
    /**
     * 输出的值域
     * @type {Array}
     */
    this.range = [0, 1];
    /**
     * 度量的标记
     * @type {Array}
     */
    this.ticks = null;
    /**
     * 参与度量计算的值，可选项
     * @type {Array}
     */
    this.values = [];
  };

  /**
   * @protected
   * @override
   */


  Linear.prototype.init = function init() {
    var self = this;
    if (!self.ticks) {
      self.min = self.translate(self.min);
      self.max = self.translate(self.max);
      self.initTicks();
    } else {
      var ticks = self.ticks;
      var firstValue = self.translate(ticks[0]);
      var lastValue = self.translate(ticks[ticks.length - 1]);
      if (Util.isNil(self.min) || self.min > firstValue) {
        self.min = firstValue;
      }
      if (Util.isNil(self.max) || self.max < lastValue) {
        self.max = lastValue;
      }
    }
  };

  /**
   * 计算坐标点
   * @protected
   * @return {Array} 计算完成的坐标点
   */


  Linear.prototype.calculateTicks = function calculateTicks() {
    var self = this;
    var min = self.min;
    var max = self.max;
    var count = self.tickCount;
    if (count === 1) {
      throw new Error('linear scale\'tickCount should not be 1');
    }
    var interval = self.tickInterval;
    if (max < min) {
      throw new Error('max: ' + max + ' should not be less than min: ' + min);
    }
    var tmp = numberAuto({
      min: min,
      max: max,
      minCount: count,
      maxCount: count,
      interval: interval
    });
    return tmp.ticks;
  };

  // 初始化ticks


  Linear.prototype.initTicks = function initTicks() {
    var self = this;
    var calTicks = self.calculateTicks();
    if (self.nice) {
      // 如果需要优化显示的tick
      self.ticks = calTicks;
      self.min = calTicks[0];
      self.max = calTicks[calTicks.length - 1];
    } else {
      var ticks = [];
      Util.each(calTicks, function (tick) {
        if (tick >= self.min && tick <= self.max) {
          ticks.push(tick);
        }
      });
      self.ticks = ticks;
    }
  };

  /**
   * @override
   */


  Linear.prototype.scale = function scale(value) {
    if (value === null || value === undefined) {
      return NaN;
    }
    var max = this.max;
    var min = this.min;
    if (max === min) {
      return 0;
    }

    var percent = (value - min) / (max - min);
    var rangeMin = this.rangeMin();
    var rangeMax = this.rangeMax();
    return rangeMin + percent * (rangeMax - rangeMin);
  };

  /**
   * @override
   */


  Linear.prototype.invert = function invert(value) {
    var percent = (value - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
    return this.min + percent * (this.max - this.min);
  };

  return Linear;
}(Base);

Base.Linear = Linear;
module.exports = Linear;