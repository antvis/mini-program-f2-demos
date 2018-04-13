function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileOverview 数据调整的基类
 * @author dxq613@gmail.com
 */

var Util = require('../../util/common');

var Base = function () {
  Base.prototype._initDefaultCfg = function _initDefaultCfg() {};

  function Base(cfg) {
    _classCallCheck(this, Base);

    this._initDefaultCfg();
    Util.mix(this, cfg);
  }

  Base.prototype.processAdjust = function processAdjust() /* dataArray */{};

  return Base;
}();

module.exports = Base;