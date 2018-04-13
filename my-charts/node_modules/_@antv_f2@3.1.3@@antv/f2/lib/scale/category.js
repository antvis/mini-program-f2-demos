function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview the scale function to process the categories
 * @author dxq613@gmail.com
 */
var Base = require('./base');
var Util = require('../util/common');
var catAuto = require('./auto/cat');

/**
 * 度量的构造函数
 * @class Scale.Category
 */

var Category = function (_Base) {
  _inherits(Category, _Base);

  function Category() {
    _classCallCheck(this, Category);

    return _possibleConstructorReturn(this, _Base.apply(this, arguments));
  }

  Category.prototype._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'cat';
    /**
     * 自动生成标记时的个数
     * @type {Number}
     * @default null
     */
    this.tickCount = null;
    /**
     * 是否分类度量
     * @type {Boolean}
     */
    this.isCategory = true;
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
   * @override
   */


  Category.prototype.init = function init() {
    var self = this;
    var values = self.values;
    var tickCount = self.tickCount;

    Util.each(values, function (v, i) {
      values[i] = v.toString();
    });
    if (!self.ticks) {
      var ticks = values;
      if (tickCount) {
        var temp = catAuto({
          maxCount: tickCount,
          data: values
        });
        ticks = temp.ticks;
      }
      this.ticks = ticks;
    }
  };

  /**
   * @override
   */


  Category.prototype.getText = function getText(value) {
    if (this.values.indexOf(value) === -1 && Util.isNumber(value)) {
      value = this.values[Math.round(value)];
    }

    return _Base.prototype.getText.call(this, value);
  };

  /**
   * @override
   */


  Category.prototype.translate = function translate(value) {
    var index = this.values.indexOf(value);
    if (index === -1 && Util.isNumber(value)) {
      index = value;
    } else if (index === -1) {
      index = NaN;
    }
    return index;
  };
  /**
   * @override
   */


  Category.prototype.scale = function scale(value) {
    var rangeMin = this.rangeMin();
    var rangeMax = this.rangeMax();
    var percent = void 0;

    if (Util.isString(value) || this.values.indexOf(value) !== -1) {
      value = this.translate(value);
    }
    if (this.values.length > 1) {
      percent = value / (this.values.length - 1);
    } else {
      percent = value;
    }
    return rangeMin + percent * (rangeMax - rangeMin);
  };

  /**
   * @override
   */


  Category.prototype.invert = function invert(value) {
    if (Util.isString(value)) {
      // 如果已经是字符串
      return value;
    }
    var min = this.rangeMin();
    var max = this.rangeMax();

    // 归一到 范围内
    if (value < min) {
      value = min;
    }
    if (value > max) {
      value = max;
    }
    var percent = (value - min) / (max - min);
    var index = Math.round(percent * (this.values.length - 1)) % this.values.length;
    index = index || 0;
    return this.values[index];
  };

  return Category;
}(Base);

Base.Cat = Category;
module.exports = Category;