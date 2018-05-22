function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = require('../util/common');

function toScaleString(scale, value) {
  if (Util.isString(value)) {
    return value;
  }
  return scale.invert(scale.scale(value));
}

var AttributeBase = function () {
  function AttributeBase(cfg) {
    _classCallCheck(this, AttributeBase);

    /**
     * 属性的类型
     * @type {String}
     */
    this.type = 'base';

    /**
     * 属性的名称
     * @type {String}
     */
    this.name = null;

    /**
     * 回调函数
     * @type {Function}
     */
    this.method = null;

    /**
     * 备选的值数组
     * @type {Array}
     */
    this.values = [];

    /**
     * 属性内部的度量
     * @type {Array}
     */
    this.scales = [];

    /**
     * 是否通过线性取值, 如果未指定，则根据数值的类型判定
     * @type {Boolean}
     */
    this.linear = null;

    Util.mix(this, cfg);
  }

  // 获取属性值，将值映射到视觉通道


  AttributeBase.prototype._getAttrValue = function _getAttrValue(scale, value) {
    var values = this.values;
    if (scale.isCategory && !this.linear) {
      var index = scale.translate(value);
      return values[index % values.length];
    }
    var percent = scale.scale(value);
    return this.getLinearValue(percent);
  };

  /**
   * 如果进行线性映射，返回对应的映射值
   * @protected
   * @param  {Number} percent 百分比
   * @return {*}  颜色值、形状、大小等
   */


  AttributeBase.prototype.getLinearValue = function getLinearValue(percent) {
    var values = this.values;
    var steps = values.length - 1;
    var step = Math.floor(steps * percent);
    var leftPercent = steps * percent - step;
    var start = values[step];
    var end = step === steps ? start : values[step + 1];
    var rstValue = start + (end - start) * leftPercent;
    return rstValue;
  };

  /**
   * 默认的回调函数
   * @param {*} value 回调函数的值
   * @type {Function}
   * @return {Array} 返回映射后的值
   */


  AttributeBase.prototype.callback = function callback(value) {
    var self = this;
    var scale = self.scales[0];
    var rstValue = null;
    if (scale.type === 'identity') {
      rstValue = scale.value;
    } else {
      rstValue = self._getAttrValue(scale, value);
    }
    return rstValue;
  };

  /**
   * 根据度量获取属性名
   * @return {Array} dims of this Attribute
   */


  AttributeBase.prototype.getNames = function getNames() {
    var scales = this.scales;
    var names = this.names;
    var length = Math.min(scales.length, names.length);
    var rst = [];
    for (var i = 0; i < length; i++) {
      rst.push(names[i]);
    }
    return rst;
  };

  /**
   * 根据度量获取维度名
   * @return {Array} dims of this Attribute
   */


  AttributeBase.prototype.getFields = function getFields() {
    var scales = this.scales;
    var rst = [];
    Util.each(scales, function (scale) {
      rst.push(scale.field);
    });
    return rst;
  };

  /**
   * 根据名称获取度量
   * @param  {String} name the name of scale
   * @return {Scale} scale
   */


  AttributeBase.prototype.getScale = function getScale(name) {
    var scales = this.scales;
    var names = this.names;
    var index = names.indexOf(name);
    return scales[index];
  };

  /**
   * 映射数据
   * @param {*} param1...paramn 多个数值
   * @return {Array} 映射的值组成的数组
   */


  AttributeBase.prototype.mapping = function mapping() {
    var scales = this.scales;
    var callback = this.callback;

    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    var values = params;
    if (callback) {
      for (var i = 0, len = params.length; i < len; i++) {
        params[i] = this._toOriginParam(params[i], scales[i]);
      }
      values = callback.apply(this, params);
    }
    if (!Util.isArray(values)) {
      values = [values];
    }
    return values;
  };

  // 原始的参数


  AttributeBase.prototype._toOriginParam = function _toOriginParam(param, scale) {
    var rst = param;
    if (!scale.isLinear) {
      if (Util.isArray(param)) {
        rst = [];
        for (var i = 0, len = param.length; i < len; i++) {
          rst.push(toScaleString(scale, param[i]));
        }
      } else {
        rst = toScaleString(scale, param);
      }
    }
    return rst;
  };

  return AttributeBase;
}();

module.exports = AttributeBase;