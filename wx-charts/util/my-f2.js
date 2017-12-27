(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["myF2"] = factory();
	else
		root["myF2"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["F2"] = factory();else root["F2"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 23);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports) {

      /**
       * @fileOverview 基础工具类
       * @author dxq613@gmail.com
       */
      var objectPrototype = Object.prototype;
      var toString = objectPrototype.toString;
      var MAX_LEVEL = 5;

      var Util = void 0;

      function _deepMix(dst, src, level) {
        level = level || 0;
        for (var k in src) {
          if (src.hasOwnProperty(k)) {
            var value = src[k];
            if (value !== null && Util.isObject(value)) {
              if (!Util.isObject(dst[k])) {
                dst[k] = {};
              }
              if (level < MAX_LEVEL) {
                _deepMix(dst[k], src[k], level + 1);
              } else {
                dst[k] = src[k];
              }
            } else if (Util.isArray(value)) {
              // if(!Util.isArray(dst[k])){
              dst[k] = [];
              // }
              dst[k] = dst[k].concat(value);
            } else if (value !== undefined) {
              dst[k] = src[k];
            }
          }
        }
      }

      function _mix(dist, obj) {
        for (var k in obj) {
          if (obj.hasOwnProperty(k) && k !== 'constructor' && obj[k] !== undefined) {
            dist[k] = obj[k];
          }
        }
      }

      function isNull(o) {
        return o === undefined || o === null;
      }

      function upperFirst(s) {
        s += '';
        return s.charAt(0).toUpperCase() + s.substring(1);
      }

      /**
       * @class Util
       * @singleton
       * 绘图的工具类
       */
      Util = {
        /**
         * 使第一个字母变成大写
         * @param  {String} s 字符串
         * @return {String} 首字母大写后的字符串
         */
        ucfirst: upperFirst,
        upperFirst: upperFirst,
        lowerFirst: function lowerFirst(s) {
          s += '';
          return s.charAt(0).toLowerCase() + s.substring(1);
        },

        /**
         * 判断是否是字符串
         * @param {*} value 判定的值
         * @return {Boolean} 是否是字符串
         */
        isString: function isString(value) {
          return typeof value === 'string';
        },

        /**
         * 判断是否数字
         * @param {*} value 判定的值
         * @return {Boolean} 是否数字
         */
        isNumber: function isNumber(value) {
          return typeof value === 'number';
        },

        /**
         * 判断是否数字或者数字字符串，由于$.isNumberic方法会把 '123'认为数字
         * @param {*} value 判定的值
         * @return {Boolean} 是否数字
         */
        isNumeric: function isNumeric(value) {
          return !isNaN(parseFloat(value)) && isFinite(value);
        },

        /**
         * 是否是布尔类型
         * @param {Object} value 测试的值
         * @return {Boolean} 是否布尔类型
         */
        isBoolean: function isBoolean(value) {
          return typeof value === 'boolean';
        },

        /**
         * 是否为函数
         * @param  {*} fn 对象
         * @return {Boolean}  是否函数
         */
        isFunction: function isFunction(fn) {
          return typeof fn === 'function';
        },

        /**
         * 是否数组
         * @method
         * @param  {*}  value 是否数组
         * @return {Boolean}  是否数组
         */
        isArray: 'isArray' in Array ? Array.isArray : function (value) {
          return toString.call(value) === '[object Array]';
        },
        /**
         * 是否日期
         * @param  {*}  value 对象
         * @return {Boolean}  是否日期
         */
        isDate: function isDate(value) {
          return toString.call(value) === '[object Date]';
        },

        /**
         * 对象是否为空
         * @param  {*}  o 对象
         * @return {Boolean}  是否不存在
         */
        isNull: isNull,
        // 别名
        isNil: isNull,
        /**
         * 是否是javascript对象
         * @param {Object} value The value to test
         * @return {Boolean} 返回判定结果
         */
        isObject: toString.call(null) === '[object Object]' ? function (value) {
          // check ownerDocument here as well to exclude DOM nodes
          return value !== null && value !== undefined && toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
        } : function (value) {
          return toString.call(value) === '[object Object]';
        },
        /**
         * 转换成数组
         * @param  {*} value 需要转换的对象
         * @return {Array}  数组
         */
        toArray: function toArray(value) {
          if (!value || !value.length) {
            return [];
          }
          return Array.prototype.slice.call(value);
        },
        deepMix: function deepMix() {
          var args = Util.toArray(arguments);
          var rst = args[0];
          for (var i = 1; i < args.length; i++) {
            var source = args[i];
            _deepMix(rst, source);
          }
          return rst;
        },

        /**
         * 合并数据, 简单的合并，仅支持最多3个对象
         * @param {Object} dist 源对象
         * @param {Object} obj1 待复制对象1
         * @param {Object} obj2 待复制对象2
         * @param {Object} obj3 待复制对象3
         * @return {Object} 将数据合并到第一个
         */
        mix: function mix(dist, obj1, obj2, obj3) {

          if (obj1) {
            _mix(dist, obj1);
          }

          if (obj2) {
            _mix(dist, obj2);
          }

          if (obj3) {
            _mix(dist, obj3);
          }
          return dist;
        },
        indexOf: function indexOf(arr, element) {
          return arr.indexOf(element);
        },

        /**
         * 遍历数组或者对象
         * @param {Object|Array} elements 数组中的元素或者对象的值
         * @param {Function} func 遍历的函数 function(elememt,index){} 或者 function(value,key){}
         */
        each: function each(elements, func) {
          if (!elements) {
            return;
          }
          if (elements.length) {
            for (var i = 0; i < elements.length; i++) {
              var rst = func(elements[i], i);
              if (rst === false) {
                break;
              }
            }
          } else {
            for (var k in elements) {
              if (elements.hasOwnProperty(k)) {
                var _rst = func(elements[k], k);
                if (_rst === false) {
                  break;
                }
              }
            }
          }
        },
        fixedBase: function fixedBase(v, base) {
          var str = base.toString();
          var index = str.indexOf('.');
          if (index === -1) {
            return Math.round(v);
          }
          var length = str.substr(index + 1).length;
          if (length > 20) {
            length = 20;
          }
          return parseFloat(v.toFixed(length));
        },
        requestAnimationFrame: function requestAnimationFrame(fn) {
          var method = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
            return setTimeout(fn, 16);
          };

          return method(fn);
        },
        cancelAnimationFrame: function cancelAnimationFrame(id) {
          var method = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || function (id) {
            return clearTimeout(id);
          };
          return method(id);
        }
      };

      Util.Array = {
        merge: function merge(dataArray) {
          var rst = [];
          for (var i = 0; i < dataArray.length; i++) {
            rst = rst.concat(dataArray[i]);
          }
          return rst;
        },
        values: function values(data, name) {
          var rst = [];
          var tmpMap = {};
          for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            var value = obj[name];
            if (!Util.isNil(value)) {
              if (!Util.isArray(value)) {
                if (!tmpMap[value]) {
                  rst.push(value);
                  tmpMap[value] = true;
                }
              } else {
                Util.each(value, function (val) {
                  if (!tmpMap[val]) {
                    rst.push(val);
                    tmpMap[val] = true;
                  }
                });
              }
            }
          }
          return rst;
        },
        firstValue: function firstValue(data, name) {
          var rst = null;
          for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            var value = obj[name];
            if (!Util.isNil(value)) {
              if (Util.isArray(value)) {
                rst = value[0];
              } else {
                rst = value;
              }
              break;
            }
          }
          return rst;
        },
        group: function group(data, condition) {
          if (!condition) {
            return [data];
          }
          var groups = Util.Array.groupToMap(data, condition);
          var array = [];
          for (var i in groups) {
            array.push(groups[i]);
          }
          return array;
        },
        groupToMap: function groupToMap(data, condition) {
          if (!condition) {
            return {
              0: data
            };
          }
          if (!Util.isFunction(condition)) {
            var paramsCondition = Util.isArray(condition) ? condition : condition.replace(/\s+/g, '').split('*');
            condition = function condition(row) {
              var unique = '_'; // 避免出现数字作为Key的情况，会进行按照数字的排序
              for (var i = 0, l = paramsCondition.length; i < l; i++) {
                unique += row[paramsCondition[i]] && row[paramsCondition[i]].toString();
              }
              return unique;
            };
          }

          var groups = {};
          for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var key = condition(row);
            if (groups[key]) {
              groups[key].push(row);
            } else {
              groups[key] = [row];
            }
          }

          return groups;
        },
        remove: function remove(arr, obj) {
          var index = Util.indexOf(arr, obj);
          if (index !== -1) {
            arr.splice(index, 1);
          }
        },
        equals: function equals(a1, a2) {
          if (a1 === a2) {
            return true;
          }
          if (!a1 || !a2) {
            return false;
          }

          if (a1.length !== a2.length) {
            return false;
          }
          var rst = true;
          for (var i = 0; i < a1.length; i++) {
            if (a1[i] !== a2[i]) {
              rst = false;
              break;
            }
          }
          return rst;
        }
      };

      module.exports = Util;

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview 全局配置项
       * @author dxq613@gmail.com
       */

      var Theme = __webpack_require__(31);
      var Util = __webpack_require__(0);

      /**
       * @class 全局配置项
       */
      var Global = {
        // 预先定义的度量
        scales: {
          nice: true
        },
        // 宽度
        widthRatio: { // 宽度所占的分类的比例
          column: 1 / 2, // 一般的柱状图占比 1/2
          rose: 0.999999,
          multiplePie: 3 / 4,
          dodgeMargin: 1 / 2
        },
        // 动画降频倍数
        animateReduceMultiple: 1,
        // 虚线配置
        lineDash: [5, 15]
      };

      Global.setTheme = function (theme) {
        Util.mix(this, theme);
      };

      Global.setTheme(Theme);
      module.exports = Global;

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview 使用 canvas 的api 绘制图表
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);
      var Vector2 = __webpack_require__(5);
      var Smooth = __webpack_require__(41);
      var Global = __webpack_require__(1);

      function _before(canvas, cfg) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.save();
        ctx.globalAlpha = cfg.opacity || 1;
        if (cfg.lineDash && ctx.setLineDash) {
          ctx.setLineDash(cfg.lineDash);
        }
        if (cfg.fill) cfg.fillStyle = cfg.fill;
        delete cfg.fill;
        if (cfg.stroke) cfg.strokeStyle = cfg.stroke;
        delete cfg.stroke;
        if (cfg.fontStyle || cfg.fontVariant || cfg.fontWeight || cfg.fontSize || cfg.fontFamily) {
          var fontCfg = {};
          Util.mix(fontCfg, Global.defaultFont, cfg);
          cfg.font = [fontCfg.fontStyle, fontCfg.fontVariant, fontCfg.fontWeight, fontCfg.fontSize + 'px', fontCfg.fontFamily].join(' ');
        }
        Util.mix(ctx, cfg);
        return ctx;
      }

      function _after(ctx, cfg) {
        var originOpacity = ctx.globalAlpha;
        if (cfg.strokeStyle) {
          if (cfg.strokeOpacity) {
            ctx.globalAlpha = cfg.strokeOpacity;
          }
          ctx.stroke();
          ctx.globalAlpha = originOpacity;
        }
        if (cfg.fillStyle) {
          ctx.globalAlpha = cfg.fillOpacity || ctx.globalAlpha;
          ctx.fill();
          if (cfg.fillOpacity || cfg.strokeOpacity) {
            ctx.strokeStyle = cfg.strokeStyle ? cfg.strokeStyle : cfg.fillStyle;
            ctx.globalAlpha = cfg.strokeOpacity || 1;
            ctx.stroke();
          }
        }

        ctx.restore();
      }

      module.exports = {
        drawLine: function drawLine(start, end, canvas, cfg) {
          var ctx = _before(canvas, cfg);
          ctx.moveTo(start.x, start.y);
          ctx.lineTo(end.x, end.y);
          _after(ctx, cfg);
        },
        drawText: function drawText(text, pos, canvas, cfg) {
          var rotate = void 0;
          if (cfg.rotate) {
            rotate = cfg.rotate * Math.PI / 180;
            delete cfg.rotate;
          }
          var ctx = _before(canvas, cfg);
          if (rotate) {
            ctx.translate(pos.x, pos.y);
            ctx.rotate(rotate);
            ctx.fillText('' + text, 0, 0);
          } else {
            ctx.fillText('' + text, pos.x, pos.y);
          }
          ctx.restore();
        },
        drawCircle: function drawCircle(center, radius, canvas, cfg) {
          var ctx = _before(canvas, cfg);
          ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
          ctx.closePath();
          _after(ctx, cfg);
        },
        drawArc: function drawArc(center, radius, startAngle, endAngle, canvas, cfg) {
          var ctx = _before(canvas, cfg);
          ctx.arc(center.x, center.y, radius, startAngle, endAngle);
          if (cfg.z !== false) {
            ctx.closePath();
          }
          _after(ctx, cfg);
        },
        radiusRect: function radiusRect(x, y, w, h, r, ctx) {
          ctx.moveTo(x + r, y);
          ctx.arcTo(x + w, y, x + w, y + h, r);
          ctx.arcTo(x + w, y + h, x, y + h, r);
          ctx.arcTo(x, y + h, x, y, r);
          ctx.arcTo(x, y, x + w, y, r);
        },
        drawRect: function drawRect(points, canvas, cfg) {
          var ctx = _before(canvas, cfg);
          var minX = points[0].x;
          var minY = points[0].y;
          var maxX = points[1].x;
          var maxY = points[1].y;
          points.forEach(function (point) {
            if (point.x > maxX) {
              maxX = point.x;
            }
            if (point.x < minX) {
              minX = point.x;
            }
            if (point.y > maxY) {
              maxY = point.y;
            }
            if (point.y < minY) {
              minY = point.y;
            }
          });
          var x = minX;
          var y = minY;
          var width = maxX - minX;
          var height = maxY - minY;
          if (cfg.radius) {
            var radius = Math.min(cfg.radius, width / 2, height / 2);
            this.radiusRect(x, y, width, height, radius, ctx);
          } else {
            ctx.rect(x, y, width, height);
          }

          if (cfg.z !== false) {
            ctx.closePath();
          }
          _after(ctx, cfg);
        },
        drawShape: function drawShape(canvas, cfg, shapeFn) {
          var ctx = _before(canvas, cfg);
          shapeFn(ctx);
          if (cfg.z) {
            ctx.closePath();
          }
          _after(ctx, cfg);
        },
        drawLines: function drawLines(points, canvas, cfg) {
          var ctx = _before(canvas, cfg);
          this.lines(points, ctx);
          if (cfg.z) {
            ctx.closePath();
          }
          _after(ctx, cfg);
        },

        // 绘制线，不处理上下文
        lines: function lines(points, ctx, isStart) {
          if (!points.length) {
            return;
          }
          if (isStart !== false) {
            ctx.moveTo(points[0].x, points[0].y);
          }
          for (var i = 1, l = points.length; i < l; i++) {
            var point = points[i];
            ctx.lineTo(point.x, point.y);
          }
        },
        drawFan: function drawFan(points, center, canvas, cfg) {
          var ctx = _before(canvas, cfg);
          var v = new Vector2(1, 0);
          var v0 = new Vector2(points[0].x - center.x, points[0].y - center.y);
          var innerRadius = v0.length();
          var v1 = new Vector2(points[1].x - center.x, points[1].y - center.y);
          var radius = v1.length();
          var v2 = new Vector2(points[2].x - center.x, points[2].y - center.y);

          var startAngle = v.angleTo(v1);
          var endAngle = v.angleTo(v2);
          if (startAngle > endAngle && startAngle - endAngle < 0.0001) {
            ctx.moveTo(center.x + radius, center.y);
            ctx.arc(center.x, center.y, radius, 0, Math.PI);
            ctx.arc(center.x, center.y, radius, Math.PI, Math.PI * 2);
            ctx.moveTo(center.x + innerRadius, center.y);
            ctx.arc(center.x, center.y, innerRadius, Math.PI * 2, Math.PI, true);
            ctx.arc(center.x, center.y, innerRadius, Math.PI, 0, true);
            ctx.closePath();
          } else {
            ctx.moveTo(points[0].x, points[0].y);
            ctx.lineTo(points[1].x, points[1].y);
            ctx.arc(center.x, center.y, radius, startAngle, endAngle);
            ctx.lineTo(points[3].x, points[3].y);
            ctx.arc(center.x, center.y, innerRadius, endAngle, startAngle, true);
            ctx.closePath();
          }
          _after(ctx, cfg);
        },
        drawSmooth: function drawSmooth(points, canvas, cfg) {
          if (points.length === 0) {
            return;
          }
          var ctx = this.before(canvas, cfg);
          this.smooth(points, ctx);
          this.after(ctx, cfg);
        },
        before: function before(canvas, cfg) {
          return _before(canvas, cfg);
        },
        after: function after(ctx, cfg) {
          return _after(ctx, cfg);
        },
        smooth: function smooth(points, ctx, isStart) {
          var constaint = [// 范围
          [0, 0], [1, 1]];
          var sps = Smooth.smooth(points, false, constaint);
          if (isStart !== false) {
            ctx.moveTo(points[0].x, points[0].y);
          }
          for (var i = 0, n = sps.length; i < n; i++) {
            var sp = sps[i];
            ctx.bezierCurveTo(sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]);
          }
        }
      };

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview geometry 的基类
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);
      var Base = __webpack_require__(13);
      var GROUP_ATTRS = ['color', 'size', 'shape'];
      var FIELD_ORIGIN = '_origin';
      var FIELD_ORIGIN_Y = '_originY';
      var Global = __webpack_require__(1);
      var Attr = __webpack_require__(32);
      var Shape = __webpack_require__(4);
      var Adjust = __webpack_require__(9);

      function parseFields(field) {
        if (Util.isArray(field)) {
          return field;
        }
        if (Util.isString(field)) {
          return field.split('*');
        }
        return [field];
      }

      /**
       * 图形的基类
       * @class Geom
       */

      var Geom = function (_Base) {
        _inherits(Geom, _Base);

        function Geom() {
          _classCallCheck(this, Geom);

          return _possibleConstructorReturn(this, _Base.apply(this, arguments));
        }

        Geom.prototype.getDefaultCfg = function getDefaultCfg() {
          return {
            /**
             * core的类型
             * @type {String}
             */
            type: null,
            /**
             * 图形的数据集合
             * @type {Array}
             */
            data: null,
            /**
             * 属性的键值对
             * @type {Object}
             */
            attrs: {},

            scales: {},

            /**
             * 画布
             * @type {Canvas}
             */
            container: null,
            /**
             * 图形样式
             * @type {Object}
             */
            styleOptions: null,

            chart: null,

            shapeType: '',

            shapeDatas: [],

            /**
             * 是否生成多个点来绘制图形
             * @protected
             * @type {Boolean}
             */
            generatePoints: false,

            attrOptions: {},

            sortable: false
          };
        };

        Geom.prototype.init = function init() {
          var self = this;
          self._initAttrs();
          var dataArray = self._processData();
          if (self.get('adjust')) {
            self._adjustData(dataArray);
          }
          self.set('dataArray', dataArray);
        };

        // 获取分组的度量


        Geom.prototype._getGroupScales = function _getGroupScales() {
          var self = this;
          var scales = [];
          Util.each(GROUP_ATTRS, function (attrName) {
            var attr = self.getAttr(attrName);
            if (attr) {
              var attrScales = attr.scales;
              Util.each(attrScales, function (scale) {
                if (scale && scale.isCategory && scales.indexOf(scale) === -1) {
                  scales.push(scale);
                }
              });
            }
          });
          return scales;
        };

        // 分组数据


        Geom.prototype._groupData = function _groupData(data) {
          var self = this;
          var groupScales = self._getGroupScales();
          if (groupScales.length) {
            var names = [];
            Util.each(groupScales, function (scale) {
              names.push(scale.field);
            });
            return Util.Array.group(data, names);
          }
          return [data];
        };

        // 设置属性配置信息


        Geom.prototype._setAttrOptions = function _setAttrOptions(attrName, attrCfg) {
          var options = this.get('attrOptions');
          options[attrName] = attrCfg;
        };

        Geom.prototype._createAttrOption = function _createAttrOption(attrName, field, cfg, defaultValues) {
          var attrCfg = {};
          attrCfg.field = field;
          if (cfg) {
            if (Util.isFunction(cfg)) {
              attrCfg.callback = cfg;
            } else {
              attrCfg.values = cfg;
            }
          } else {
            attrCfg.values = defaultValues;
          }
          this._setAttrOptions(attrName, attrCfg);
        };

        // step 1: init attrs


        Geom.prototype._initAttrs = function _initAttrs() {
          var self = this;
          var attrs = this.get('attrs');
          var attrOptions = this.get('attrOptions');
          var coord = self.get('coord');

          for (var type in attrOptions) {
            if (attrOptions.hasOwnProperty(type)) {
              var option = attrOptions[type];
              var className = Util.upperFirst(type);
              var fields = parseFields(option.field);
              if (type === 'position') {
                option.coord = coord;
              }
              var scales = [];
              for (var i = 0; i < fields.length; i++) {
                var field = fields[i];
                var scale = self._createScale(field);
                scales.push(scale);
              }
              if (type === 'position') {
                var yScale = scales[1];
                if (self.get('type') === 'interval') {
                  // 柱状图起始点从0点开始
                  if (yScale.values.length) {
                    yScale.change({
                      min: Math.min(0, yScale.min),
                      max: Math.max.apply(null, yScale.values)
                    });
                  }
                }
                // 饼图需要填充满整个空间
                if (coord.type === 'polar' && coord.transposed) {

                  if (yScale.values.length) {
                    yScale.change({
                      nice: false,
                      min: 0,
                      max: Math.max.apply(null, yScale.values)
                    });
                  }
                }
              }

              option.scales = scales;
              var attr = new Attr[className](option);
              attrs[type] = attr;
            }
          }
        };

        Geom.prototype._createScale = function _createScale(field) {
          var scales = this.get('scales');
          var scale = scales[field];
          if (!scale) {
            scale = this.get('chart').createScale(field);
            scales[field] = scale;
          }
          return scale;
        };

        // 处理数据


        Geom.prototype._processData = function _processData() {
          var self = this;
          var data = this.get('data');
          var dataArray = [];
          var groupedArray = this._groupData(data);
          for (var i = 0; i < groupedArray.length; i++) {
            var subData = groupedArray[i];
            var tempData = self._saveOrigin(subData);
            if (this.hasAdjust('dodge')) {
              self._numberic(tempData);
            }
            dataArray.push(tempData);
          }
          return dataArray;
        };

        Geom.prototype._saveOrigin = function _saveOrigin(data) {
          var rst = [];
          for (var i = 0; i < data.length; i++) {
            var origin = data[i];
            var obj = {};
            for (var k in origin) {
              obj[k] = origin[k];
            }
            // const obj = Util.mix({}, origin);
            obj[FIELD_ORIGIN] = origin;
            rst.push(obj);
          }
          return rst;
        };

        // step 2.3 将分类数据翻译成数据, 仅对位置相关的度量进行数字化处理


        Geom.prototype._numberic = function _numberic(data) {
          var positionAttr = this.getAttr('position');
          var scales = positionAttr.scales;
          for (var j = 0; j < data.length; j++) {
            var obj = data[j];
            var count = Math.min(2, scales.length);
            for (var i = 0; i < count; i++) {
              var scale = scales[i];
              if (scale.isCategory) {
                var field = scale.field;
                obj[field] = scale.translate(obj[field]);
              }
            }
          }
        };

        // 进行数据调整


        Geom.prototype._adjustData = function _adjustData(dataArray) {
          var self = this;
          var adjust = self.get('adjust');
          if (adjust) {
            var adjustType = Util.upperFirst(adjust);
            if (!Adjust[adjustType]) {
              throw new Error('not support such adjust : ' + adjust);
            }

            var xScale = self.getXScale();
            var yScale = self.getYScale();
            var cfg = {
              xField: xScale.field,
              yField: yScale.field
            };
            var adjustObject = new Adjust[adjustType](cfg);
            adjustObject.processAdjust(dataArray);
            if (adjust === 'stack') {
              self._updateStackRange(yScale.field, yScale, dataArray);
            }
          }
        };

        Geom.prototype._updateStackRange = function _updateStackRange(field, scale, dataArray) {
          var mergeArray = Util.Array.merge(dataArray);
          var min = scale.min;
          var max = scale.max;
          for (var i = 0; i < mergeArray.length; i++) {
            var obj = mergeArray[i];
            var tmpMin = Math.min.apply(null, obj[field]);
            var tmpMax = Math.max.apply(null, obj[field]);
            if (tmpMin < min) {
              min = tmpMin;
            }
            if (tmpMax > max) {
              max = tmpMax;
            }
          }
          if (min < scale.min || max > scale.max) {
            scale.change({
              min: min,
              max: max
            });
          }
        };

        Geom.prototype._sort = function _sort(mappedArray) {
          var self = this;
          var xScale = self.getXScale();
          var xField = xScale.field;
          Util.each(mappedArray, function (itemArr) {
            itemArr.sort(function (obj1, obj2) {
              return xScale.translate(obj1[FIELD_ORIGIN][xField]) - xScale.translate(obj2[FIELD_ORIGIN][xField]);
            });
          });

          self.set('dataArray', mappedArray);
        };

        Geom.prototype.paint = function paint() {
          var self = this;
          var dataArray = self.get('dataArray');
          var mappedArray = [];
          var shapeFactory = self.getShapeFactory();
          shapeFactory.setCoord(self.get('coord'));
          self._beforeMapping(dataArray);
          for (var i = 0; i < dataArray.length; i++) {
            var data = dataArray[i];
            data = self._mapping(data);
            mappedArray.push(data);
            self.draw(data, shapeFactory);
          }
          self.set('dataArray', mappedArray);
        };

        /**
         * @protected
         * 获取图形的工厂类
         * @return {Object} 工厂类对象
         */

        Geom.prototype.getShapeFactory = function getShapeFactory() {
          var shapeFactory = this.get('shapeFactory');
          if (!shapeFactory) {
            var shapeType = this.get('shapeType');
            shapeFactory = Shape.getShapeFactory(shapeType);
            this.set('shapeFactory', shapeFactory);
          }
          return shapeFactory;
        };

        // step 3.2 mapping


        Geom.prototype._mapping = function _mapping(data) {
          var self = this;
          var attrs = self.get('attrs');
          var yField = self.getYScale().field;
          var mappedData = [];
          for (var i = 0; i < data.length; i++) {
            var record = data[i];
            var newRecord = {};
            newRecord[FIELD_ORIGIN] = record[FIELD_ORIGIN];
            newRecord.points = record.points;
            // 避免
            newRecord[FIELD_ORIGIN_Y] = record[yField];
            for (var k in attrs) {
              if (attrs.hasOwnProperty(k)) {
                var attr = attrs[k];
                var names = attr.names;
                var values = self._getAttrValues(attr, record);
                if (names.length > 1) {
                  // position 之类的生成多个字段的属性
                  for (var j = 0; j < values.length; j++) {
                    var val = values[j];
                    var name = names[j];
                    newRecord[name] = Util.isArray(val) && val.length === 1 ? val[0] : val; // 只有一个值时返回第一个属性值
                  }
                } else {
                  newRecord[names[0]] = values.length === 1 ? values[0] : values;
                }
              }
            }
            mappedData.push(newRecord);
          }

          return mappedData;
        };

        // 获取属性映射的值


        Geom.prototype._getAttrValues = function _getAttrValues(attr, record) {
          var scales = attr.scales;
          var params = [];
          for (var i = 0; i < scales.length; i++) {
            var scale = scales[i];
            var field = scale.field;
            if (scale.type === 'identity') {
              params.push(scale.value);
            } else {
              params.push(record[field]);
            }
          }
          var values = attr.mapping.apply(attr, params);
          return values;
        };

        Geom.prototype.getAttrValue = function getAttrValue(attrName, record) {
          var attr = this.getAttr(attrName);
          var rst = null;
          if (attr) {
            var values = this._getAttrValues(attr, record);
            rst = values[0];
          }
          return rst;
        };

        Geom.prototype._beforeMapping = function _beforeMapping(dataArray) {
          var self = this;
          if (self.get('sortable')) {
            self._sort(dataArray);
          }
          if (self.get('generatePoints')) {
            Util.each(dataArray, function (data) {
              self._generatePoints(data);
            });
          }
        };

        Geom.prototype.isInCircle = function isInCircle() {
          var coord = this.get('coord');
          return coord && coord.isPolar;
        };

        Geom.prototype.getCallbackCfg = function getCallbackCfg(fields, cfg, origin) {
          if (!fields) {
            return cfg;
          }
          var tmpCfg = {};
          var params = fields.map(function (field) {
            return origin[field];
          });
          Util.each(cfg, function (v, k) {
            if (Util.isFunction(v)) {
              tmpCfg[k] = v.apply(null, params);
            } else {
              tmpCfg[k] = v;
            }
          });
          return tmpCfg;
        };

        Geom.prototype.getDrawCfg = function getDrawCfg(obj) {
          var self = this;
          var isInCircle = self.isInCircle();
          var cfg = {
            origin: obj,
            x: obj.x,
            y: obj.y,
            color: obj.color,
            size: obj.size,
            shape: obj.shape,
            isInCircle: isInCircle,
            opacity: obj.opacity
          };
          var styleOptions = self.get('styleOptions');
          if (styleOptions && styleOptions.style) {
            cfg.style = self.getCallbackCfg(styleOptions.fields, styleOptions.style, obj[FIELD_ORIGIN]);
          }
          if (self.get('generatePoints')) {
            cfg.points = obj.points;
          }
          if (isInCircle) {
            cfg.center = self.get('coord').get('center');
          }
          return cfg;
        };
        /**
         * 绘制图层
         * @param {Array} data 绘制的数据
         * @param {Object} shapeFactory 图形的工厂类
         */

        Geom.prototype.draw = function draw(data, shapeFactory) {
          var self = this;
          var container = self.get('container');
          var yScale = self.getYScale();
          var shapeDatas = self.get('shapeDatas');

          Util.each(data, function (obj, index) {
            shapeDatas.push(obj);
            if (yScale && Util.isNil(obj._origin[yScale.field])) {
              return;
            }
            obj.index = index;
            var cfg = self.getDrawCfg(obj);
            var shape = obj.shape;
            shapeFactory.drawShape(shape, cfg, container);
          });
        };

        Geom.prototype._generatePoints = function _generatePoints(data) {
          var self = this;
          var shapeFactory = self.getShapeFactory();
          var shapeAttr = self.getAttr('shape');
          for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            var cfg = self.createShapePointsCfg(obj);
            var shape = shapeAttr ? self._getAttrValues(shapeAttr, obj) : null;
            var points = shapeFactory.getShapePoints(shape, cfg);
            obj.points = points;
          }
        };

        /**
         * 获取图形对应点的配置项
         * @protected
         * @param  {Object} obj 数据对象
         * @return {Object} cfg 获取图形对应点的配置项
         */

        Geom.prototype.createShapePointsCfg = function createShapePointsCfg(obj) {
          var xScale = this.getXScale();
          var yScale = this.getYScale();
          var x = this._normalizeValues(obj[xScale.field], xScale);
          var y = void 0; // 存在没有 y 的情况

          if (yScale) {
            y = this._normalizeValues(obj[yScale.field], yScale);
          } else {
            y = obj.y ? obj.y : 0.1;
          }

          return {
            x: x,
            y: y,
            y0: yScale ? yScale.scale(this.getYMinValue()) : undefined
          };
        };

        /**
         * @protected
         * 如果y轴的最小值小于0则返回0，否则返回最小值
         * @return {Number} y轴上的最小值
         */

        Geom.prototype.getYMinValue = function getYMinValue() {
          var yScale = this.getYScale();
          var min = yScale.min;
          var value = void 0;
          if (min >= 0) {
            value = min;
          } else {
            value = 0;
          }
          return value;
        };

        // 将数据归一化


        Geom.prototype._normalizeValues = function _normalizeValues(values, scale) {
          var rst = [];
          if (Util.isArray(values)) {
            for (var i = 0; i < values.length; i++) {
              var v = values[i];
              rst.push(scale.scale(v));
            }
          } else {
            rst = scale.scale(values);
          }
          return rst;
        };

        /**
         * 获取属性
         * @protected
         * @param {String} name 属性名
         * @return {Scale} 度量
         */

        Geom.prototype.getAttr = function getAttr(name) {
          return this.get('attrs')[name];
        };

        /**
         * 获取 x 对应的度量
         * @return {Scale} x 对应的度量
         */

        Geom.prototype.getXScale = function getXScale() {
          return this.getAttr('position').scales[0];
        };

        /**
         * 获取 y 对应的度量
         * @return {Scale} y 对应的度量
         */

        Geom.prototype.getYScale = function getYScale() {
          return this.getAttr('position').scales[1];
        };

        Geom.prototype.hasAdjust = function hasAdjust(adjust) {
          return this.get('adjust') === adjust;
        };

        Geom.prototype._getSnap = function _getSnap(scale, item, arr) {
          var i = 0;
          var values = void 0;
          var yField = this.getYScale().field; // 叠加的维度
          if (this.hasAdjust('stack') && scale.field === yField) {
            values = [];
            arr.forEach(function (obj) {
              values.push(obj[FIELD_ORIGIN_Y]);
            });

            for (; i < values.length; i++) {
              if (values[0][0] > item) {
                break;
              }
              if (values[values.length - 1][1] <= item) {
                i = values.length - 1;
                break;
              }
              if (values[i][0] <= item && values[i][1] > item) {
                break;
              }
            }
          } else {
            values = scale.values;
            values.sort(function sortNumber(a, b) {
              return a - b;
            });
            for (; i < values.length; i++) {
              if ((values[0] + values[1]) / 2 > item) {
                break;
              }
              if ((values[i - 1] + values[i]) / 2 <= item && (values[i + 1] + values[i]) / 2 > item) {
                break;
              }
              if ((values[values.length - 2] + values[values.length - 1]) / 2 <= item) {
                i = values.length - 1;
                break;
              }
            }
          }
          var result = values[i];
          return result;
        };

        Geom.prototype.hasSorted = function hasSorted() {
          return this.get('hasSorted') || this.get('sortable');
        };

        /**
         * 根据画布坐标获取切割线对应数据集
         * @param  {Object} point 画布坐标的x,y的值
         * @return {Array} 切割交点对应数据集
        **/

        Geom.prototype.getSnapRecords = function getSnapRecords(point) {
          var self = this;
          var coord = self.get('coord');
          var xScale = self.getXScale();
          var yScale = self.getYScale();

          var xfield = xScale.field;
          // const yfield = yScale.field;

          var invertPoint = coord.invertPoint(point);
          var dataArray = self.get('dataArray');
          if (!this.hasSorted()) {
            // 未排序
            this._sort(dataArray);
            this.set('hasSorted', true);
          }

          var rst = [];
          var tmp = [];
          var xValue = xScale.invert(invertPoint.x);
          if (!xScale.isCategory) {
            xValue = self._getSnap(xScale, xValue);
          }
          dataArray.forEach(function (data) {
            data.forEach(function (obj) {
              var originValue = Util.isNull(obj[FIELD_ORIGIN]) ? obj[xfield] : obj[FIELD_ORIGIN][xfield];
              if (self._isEqual(originValue, xValue, xScale)) {
                tmp.push(obj);
              }
            });
          });

          // 特别针对饼图做处理
          if (this.hasAdjust('stack') && coord.isPolar && coord.transposed && xScale.values.length === 1) {
            var yValue = yScale.invert(invertPoint.y);
            yValue = self._getSnap(yScale, yValue, tmp);
            tmp.forEach(function (obj) {
              if (Util.isArray(yValue) ? Util.Array.equals(obj[FIELD_ORIGIN_Y], yValue) : obj[FIELD_ORIGIN_Y] === yValue) {
                rst.push(obj);
              }
            });
          } else {
            rst = tmp;
          }

          return rst;
        };

        Geom.prototype._isEqual = function _isEqual(originValue, value, scale) {
          if (scale.type === 'timeCat') {
            return scale._toTimeStamp(originValue) === value;
          }
          return value === originValue;
        };

        // 返回 geom 所有 shape 的数据源


        Geom.prototype.getAllShapeData = function getAllShapeData() {
          return this.get('shapeDatas');
        };

        /**
         * 位置属性映射
         * @chainable
         * @param  {String} field 字段名
         * @return {Geom} geom 当前几何标记
         */

        Geom.prototype.position = function position(field) {
          this._setAttrOptions('position', {
            field: field
          });
          return this;
        };

        /**
         * 颜色属性映射
         * @chainable
         * @param  {String} field 字段名
         * @param  {Array|Function} values 颜色的数组或者回调函数
         * @return {Geom} geom 当前几何标记
         */

        Geom.prototype.color = function color(field, values) {
          this._createAttrOption('color', field, values, Global.colors);
          return this;
        };

        /**
         * 大小属性映射
         * @chainable
         * @param  {String} field 字段名
         * @param  {Array|Function} values 大小的数组或者回调函数
         * @return {Geom} geom 当前几何标记
         */

        Geom.prototype.size = function size(field, values) {
          this._createAttrOption('size', field, values, Global.sizes);
          return this;
        };

        /**
         * 形状属性映射
         * @chainable
         * @param  {String} field 字段名
         * @param  {Array|Function} values 大小的数组或者回调函数
         * @return {Geom} geom 当前几何标记
         */

        Geom.prototype.shape = function shape(field, values) {
          var type = this.get('type');
          var shapes = Global.shapes[type] || [];
          this._createAttrOption('shape', field, values, shapes);
          return this;
        };

        /**
         * 透明度属性映射
         * @chainable
         * @param  {String} field 字段名
         * @param  {Array|Function} values 透明度的数组或者回调函数
         * @return {Geom} geom 当前几何标记
         */

        Geom.prototype.opacity = function opacity(field, values) {
          this._createAttrOption('opacity', field, values, Global.opacities);
          return this;
        };

        Geom.prototype.style = function style(field, cfg) {
          var styleOptions = this.get('styleOptions');
          if (!styleOptions) {
            styleOptions = {};
            this.set('styleOptions', styleOptions);
          }
          if (Util.isObject(field)) {
            cfg = field;
            field = null;
          }
          var fields = void 0;
          if (field) {
            fields = parseFields(field);
          }
          styleOptions.fields = fields;
          styleOptions.style = cfg;
          return this;
        };

        Geom.prototype.adjust = function adjust(type) {
          this.set('adjust', type);
          return this;
        };

        Geom.prototype.reset = function reset() {
          this.set('attrOptions', {});
          this.set('adjust', null);
          this.clearInner();
        };

        Geom.prototype.clearInner = function clearInner() {
          this.set('attrs', {});
          this.set('groupScales', null);
          this.set('shapeDatas', []);
          this.set('xDistance', null);
        };

        Geom.prototype.clear = function clear() {
          this.clearInner();
          this.set('scales', {});
        };

        Geom.prototype.destroy = function destroy() {
          this.clear();
          _Base.prototype.destroy.call(this);
        };

        return Geom;
      }(Base);

      module.exports = Geom;

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview shape 基类
       * @author huangtonger@aliyun.com
       */

      var Util = __webpack_require__(0);
      var Global = __webpack_require__(1);

      var Shape = {};

      var ShapeBase = {
        _coord: null,
        /**
         * 绘制图形
         * @param {Object} cfg 配置项
         * @param {Object} container 容器
         */
        draw: function draw(cfg, container) {
          if (this.drawShape) {
            this.drawShape(cfg, container);
          }
        },

        /**
         * 设置坐标系
         * @param {Coord} coord 坐标系
         */
        setCoord: function setCoord(coord) {
          this._coord = coord;
        },

        /**
         * 0～1 point 转 画布 point
         * @param  {point} point 转换的点
         * @return {point} point 转换结果
         */
        parsePoint: function parsePoint(point) {
          var coord = this._coord;
          if (coord.isPolar) {
            if (point.x === 1) point.x = 0.9999999;
            if (point.y === 1) point.y = 0.9999999;
          }
          return coord.convertPoint(point);
        },

        /**
         * 0～1 points 转 画布 points
         * @param  {points} points 转换的多个点
         * @return {points} points 转换结果
         */
        parsePoints: function parsePoints(points) {
          if (!points) return false;
          var self = this;
          var rst = [];
          points.forEach(function (point) {
            rst.push(self.parsePoint(point));
          });
          return rst;
        }
      };

      var ShapeFactoryBase = {
        defaultShapeType: null,
        setCoord: function setCoord(coord) {
          this._coord = coord;
        },
        getShape: function getShape(type) {
          var self = this;
          if (Util.isArray(type)) {
            type = type[0];
          }
          var shape = self[type] || self[self.defaultShapeType];
          shape._coord = self._coord;
          return shape;
        },
        getShapePoints: function getShapePoints(type, cfg) {
          var shape = this.getShape(type);
          var fn = shape.getPoints || shape.getShapePoints || this.getDefaultPoints;
          var points = fn(cfg);
          return points;
        },
        getDefaultPoints: function getDefaultPoints() /* cfg */{
          return [];
        },
        drawShape: function drawShape(type, cfg, container) {
          var shape = this.getShape(type);
          if (!cfg.color) {
            cfg.color = Global.colors[0];
          }
          return shape.draw(cfg, container);
        }
      };

      // 注册 Geometry 获取图形的入口
      Shape.registerFactory = function (factoryName, cfg) {
        var className = Util.ucfirst(factoryName);
        var geomObj = Util.mix({}, ShapeFactoryBase, cfg);
        Shape[className] = geomObj;
        geomObj.name = factoryName;
        return geomObj;
      };

      // 注册图形
      Shape.registerShape = function (factoryName, shapeType, cfg) {
        var className = Util.ucfirst(factoryName);
        var factory = Shape[className];
        var shapeObj = Util.mix({}, ShapeBase, cfg);
        factory[shapeType] = shapeObj;
        return shapeObj;
      };

      Shape.registShape = Shape.registerShape;

      // 获得Geom 对应的 shapeFactory
      Shape.getShapeFactory = function (factoryName) {
        var self = this;
        factoryName = factoryName || 'point';
        var className = Util.ucfirst(factoryName);
        return self[className];
      };

      module.exports = Shape;

      /***/
    },
    /* 5 */
    /***/function (module, exports) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @fileOverview 简单的向量运算
       * @author dxq613@gmail.com
       */

      var Vector2 = function () {
        function Vector2(x, y) {
          _classCallCheck(this, Vector2);

          this.x = x;
          this.y = y;
        }

        Vector2.prototype.length = function length() {
          return Math.sqrt(this.x * this.x + this.y * this.y);
        };

        Vector2.prototype.normalize = function normalize() {
          var inv = 1 / this.length();
          return new Vector2(this.x * inv, this.y * inv);
        };

        Vector2.prototype.add = function add(v) {
          return Vector2.add(this, v);
        };

        Vector2.prototype.sub = function sub(v) {
          return Vector2.sub(this, v);
        };

        Vector2.prototype.multiply = function multiply(f) {
          return new Vector2(this.x * f, this.y * f);
        };

        Vector2.prototype.dot = function dot(v) {
          return this.x * v.x + this.y * v.y;
        };

        Vector2.prototype.angle = function angle(v) {
          var cosTheta = this.dot(v) / (this.length() * v.length());
          return Math.acos(cosTheta);
        };

        Vector2.prototype.min = function min(v) {
          if (this.x > v.x) {
            this.x = v.x;
          }

          if (this.y > v.y) {
            this.y = v.y;
          }
          return this;
        };

        Vector2.prototype.max = function max(v) {
          if (this.x < v.x) {
            this.x = v.x;
          }

          if (this.y < v.y) {
            this.y = v.y;
          }

          return this;
        };

        Vector2.prototype.angleTo = function angleTo(v) {
          var theta = this.angle(v);
          var direct = this.direction(v);
          if (direct >= 0) {
            return theta;
          }
          return Math.PI * 2 - theta;
        };

        Vector2.prototype.zero = function zero() {
          return this.x === 0 && this.y === 0;
        };

        Vector2.prototype.direction = function direction(v) {
          return this.x * v.y - v.x * this.y;
        };

        Vector2.prototype.distanceTo = function distanceTo(v) {
          return Vector2.sub(this, v).length();
        };

        Vector2.prototype.clone = function clone() {
          return new Vector2(this.x, this.y);
        };

        Vector2.prototype.getPoint = function getPoint() {
          return {
            x: this.x,
            y: this.y
          };
        };

        return Vector2;
      }();

      Vector2.add = function (v1, v2) {
        return new Vector2(v1.x + v2.x, v1.y + v2.y);
      };

      Vector2.sub = function (v1, v2) {
        return new Vector2(v1.x - v2.x, v1.y - v2.y);
      };

      module.exports = Vector2;

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @fileOverview G2-mobile 的动画
       * @author 旻诺<audrey.tm@alibaba-inc.com> , dxq613@gmail.com
       */

      var Util = __webpack_require__(0);
      var AnimateUtil = __webpack_require__(24);
      var DomUtil = __webpack_require__(12);

      var Animate = function () {
        Animate.prototype.getDefaultCfg = function getDefaultCfg() {
          return {
            // 背景image数据
            bgimageData: null,
            imageData: null,
            // 精度
            ratio: 1,
            // 正反方向动画的起点
            startPoint: { x: 0, y: 0 },
            // 极坐标圆心
            center: { x: 200, y: 200 },
            // 极坐标半径
            radius: 160,
            // 降频倍数
            reduceMultiple: 1,
            // 动画时间（毫秒）
            duration: 1000,
            // 动画方式
            easing: 'easeInOut',
            success: null
          };
        };

        function Animate(cfg) {
          _classCallCheck(this, Animate);

          var defaultCfg = this.getDefaultCfg();
          Util.mix(this, defaultCfg, cfg);
        }

        // 动画前准备


        Animate.prototype.paint = function paint(canvas) {
          var self = this;
          var width = canvas.width;
          var height = canvas.height;
          // 获取精度
          var ratio = width / DomUtil.getWidth(canvas);
          self.ratio = ratio;
          // 生成虚拟canvas
          var virtualCanvas = document.createElement('canvas');
          virtualCanvas.style.width = width + 'px';
          virtualCanvas.style.height = height + 'px';
          virtualCanvas.width = width;
          virtualCanvas.height = height;
          self.draw(canvas, virtualCanvas);
        };

        // 渲染动画


        Animate.prototype.draw = function draw() /* canvas, virtualCanvas */{};

        // 动画帧数控制


        Animate.prototype.animateStep = function animateStep(fn) {
          var self = this;
          if (self.animateId) {
            AnimateUtil.stopStep(self.animateId);
          }
          var animateId = AnimateUtil.animateStep(function (factor, num) {
            if (num % self.reduceMultiple === 0 || factor === 1) {
              fn(factor);
            }
          }, self.duration, self.easing, self.success);
          self.animateId = animateId;
        };

        Animate.prototype.clear = function clear(canvas) {
          var ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        };

        Animate.prototype.stop = function stop() {
          var self = this;
          var animateId = self.animateId;
          AnimateUtil.stopStep(animateId);
          self.animateId = null;
        };

        return Animate;
      }();

      module.exports = Animate;

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @fileOverview the Attribute base class
       * @author huangtonger@aliyun.com
       */

      var Util = __webpack_require__(0);

      function toScaleString(scale, value) {
        if (Util.isString(value)) {
          return value;
        }
        return scale.invert(scale.scale(value));
      }
      /**
       * 所有视觉通道属性的基类
       * @class Attr
       */

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

        AttributeBase.prototype.get = function get(name) {
          return this[name];
        };

        AttributeBase.prototype.set = function set(name, value) {
          this[name] = value;
        };

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
            for (var i = 0; i < params.length; i++) {
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
              for (var i = 0; i < param.length; i++) {
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

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @fileOverview G2 图表的辅助元素
       * @author 旻诺<audrey.tm@alibaba-inc.com>
       */

      var Util = __webpack_require__(0);
      var KEYWORDS_PERCENT = {
        min: 0,
        medium: 0.5,
        max: 1
      };

      function toPercent(scale, value) {
        var rst = void 0;
        if (Util.isNil(KEYWORDS_PERCENT[value])) {
          rst = scale.scale(value);
        } else {
          rst = KEYWORDS_PERCENT[value];
        }
        return rst;
      }

      /**
       * 图表的辅助元素
       * @class Guilde
       */

      var Guide = function () {

        /**
         * 获取默认的配置属性
         * @protected
         * @return {Object} 默认属性
         */
        Guide.prototype.getDefaultCfg = function getDefaultCfg() {
          return {
            xScale: null,
            yScale: null,
            top: false,
            cfg: {}
          };
        };

        function Guide(cfg) {
          _classCallCheck(this, Guide);

          var defaultCfg = this.getDefaultCfg();
          Util.mix(this, defaultCfg, cfg);
        }

        /**
         * @protected
         * 转换成坐标系上的点
         * @param  {Coord} coord  坐标系
         * @param  {Array} position 点的数组 [x,y]
         * @return {Object} 转换成坐标系上的点
         */

        Guide.prototype.parsePoint = function parsePoint(coord, position) {
          var self = this;
          var xScale = self.xScale;
          var yScale = self.yScale;
          var x = position[0];
          var y = position[1];
          var rstX = void 0;
          var rstY = void 0;
          if (xScale) {
            rstX = toPercent(xScale, x);
          } else {
            rstX = 0;
          }
          if (yScale) {
            rstY = toPercent(yScale, y);
          } else {
            rstY = 1;
          }
          return coord.convertPoint({
            x: rstX,
            y: rstY
          });
        };

        /**
         * 绘制辅助元素
         * @param  {Coord} coord  坐标系
         * @param  {Canvas.Group} group 绘制到的容器
         */

        Guide.prototype.paint = function paint() /* coord,group */{};

        return Guide;
      }();

      module.exports = Guide;

      /***/
    },
    /* 9 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @fileOverview 数据调整的基类
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);

      var Base = function () {
        Base.prototype.getDefaultCfg = function getDefaultCfg() {
          return {};
        };

        function Base(cfg) {
          _classCallCheck(this, Base);

          var defaultCfg = this.getDefaultCfg();
          Util.mix(this, defaultCfg, cfg);
        }

        Base.prototype.processAdjust = function processAdjust() /* dataArray */{};

        return Base;
      }();

      module.exports = Base;

      /***/
    },
    /* 10 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview shape util
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);

      var ShapeUtil = {
        splitPoints: function splitPoints(obj) {
          var points = [];
          var x = obj.x;
          var y = obj.y;
          y = Util.isArray(y) ? y : [y];
          y.forEach(function (yItem, index) {
            var point = {
              x: Util.isArray(x) ? x[index] : x,
              y: yItem
            };
            points.push(point);
          });
          return points;
        },
        splitArray: function splitArray(data, yField) {
          if (!data.length) return [];
          var arr = [];
          var tmp = [];
          var yValue = void 0;
          Util.each(data, function (obj) {
            yValue = obj._origin ? obj._origin[yField] : obj[yField];
            if (Util.isArray(yValue) && Util.isNil(yValue[0]) || Util.isNil(yValue)) {
              arr.push(tmp);
              tmp = [];
            } else {
              tmp.push(obj);
            }
          });
          arr.push(tmp);

          return arr;
        }
      };

      module.exports = ShapeUtil;

      /***/
    },
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @fileOverview the base class of scale
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);

      /**
       * 度量的构造函数
       * @class Scale
       */

      var Scale = function () {

        /**
         * 获取默认的配置属性
         * @protected
         * @return {Object} 默认属性
         */
        Scale.prototype.getDefaultCfg = function getDefaultCfg() {
          return {
            /**
             * type of the scale
             * @type {String}
             */
            type: 'base',

            /**
             * 格式化函数,输出文本或者tick时的格式化函数
             * @type {Function}
             */
            formatter: null,

            /**
             * 输出的值域
             * @type {Array}
             */
            range: [0, 1],

            /**
             * 度量的标记
             * @type {Array}
             */
            ticks: null,

            /**
             * 参与度量计算的值，可选项
             * @type {Array}
             */
            values: []
          };
        };

        function Scale(cfg) {
          _classCallCheck(this, Scale);

          var defaultCfg = this.getDefaultCfg();
          Util.mix(this, defaultCfg, cfg);
          this.init();
        }

        /**
         * 度量初始化
         * @protected
         */

        Scale.prototype.init = function init() {};

        /**
         * 获取该度量的ticks,返回的是多个对象，
         *   - text: tick 的文本
         *   - value: 对应的度量转换后的值
         * <code>
         *   [
         *     {text: 0,value:0}
         *     {text: 1,value:0.2}
         *     {text: 2,value:0.4}
         *     {text: 3,value:0.6}
         *     {text: 4,value:0.8}
         *     {text: 5,value:1}
         *   ]
         * </code>
         * @param {Number} count 输出tick的个数的近似值，默认是 10
         * @return {Array} 返回 ticks 数组
         */

        Scale.prototype.getTicks = function getTicks() {
          var self = this;
          var ticks = self.ticks;
          var rst = [];
          Util.each(ticks, function (tick) {
            var obj = void 0;
            if (Util.isObject(tick)) {
              obj = tick;
            } else {
              obj = {
                text: self.getText(tick),
                tickValue: tick,
                value: self.scale(tick)
              };
            }
            rst.push(obj);
          });
          return rst;
        };

        /**
         * 获取格式化后的文本
         * @param  {*} value 输入的数据
         * @return {String} 格式化的文本
         */

        Scale.prototype.getText = function getText(value) {
          var formatter = this.formatter;
          value = formatter ? formatter(value) : value;
          if (Util.isNil(value) || !value.toString) {
            value = '';
          }
          return value.toString();
        };
        /**
         * 输出的值域最小值
         * @protected
         * @return {Number} 返回最小的值
         */

        Scale.prototype.rangeMin = function rangeMin() {
          return this.range[0];
        };
        /**
         * 输出的值域最大值
         * @protected
         * @return {Number} 返回最大的值
         */

        Scale.prototype.rangeMax = function rangeMax() {
          var range = this.range;
          return range[range.length - 1];
        };

        /**
         * 度量转换后的结果，翻转回输入域
         * @param  {Number} value 需要翻转的数值
         * @return {*} 度量的输入值
         */

        Scale.prototype.invert = function invert(value) {
          return value;
        };
        /**
         * 将传入的值从非数值转换成数值格式，如分类字符串、时间字符串等
         * @param  {*} value 传入的值
         * @return {Number} 转换的值
         */

        Scale.prototype.translate = function translate(value) {
          return value;
        };
        /**
         * 进行度量转换
         * @param  {*} value 输入值
         * @return {Number} 输出值，在设定的输出值域之间，默认[0,1]
         */

        Scale.prototype.scale = function scale(value) {
          return value;
        };
        /**
         * 克隆一个新的scale,拥有跟当前scale相同的输入域、输出域等
         * @return {Scale} 克隆的度量
         */

        Scale.prototype.clone = function clone() {
          var self = this;
          var constr = self.constructor;
          var cfg = {};
          Util.each(self, function (v, k) {
            cfg[k] = self[k];
          });
          return new constr(cfg);
        };
        /**
         * 更改度量的属性信息
         * @param  {Object} info 属性信息
         * @chainable
         * @return {Scale} 返回自身的引用
         */

        Scale.prototype.change = function change(info) {
          this.ticks = null;
          Util.mix(this, info);
          this.init();
          return this;
        };

        return Scale;
      }();

      module.exports = Scale;

      /***/
    },
    /* 12 */
    /***/function (module, exports) {

      /**
       * @fileOverview DOM 的工具类
       * @author dxq613@gmail.com
       */

      var DomUtil = {

        /**
         * 修改CSS
         * @param  {Object} DOM DOM元素
         * @param  {Object} CSS 键值对
         * @return {Object} DOM
         */
        modiCSS: function modiCSS(DOM, CSS) {
          var key = void 0;

          for (key in CSS) {
            if (CSS.hasOwnProperty(key) === true) {
              DOM.style[key] = CSS[key];
            }
          }
          return DOM;
        },

        /**
         * 创建DOM 节点
         * @param  {String} str Dom 字符串
         * @return {HTMLElement}  DOM 节点
         */
        createDom: function createDom(str) {
          var container = document.createElement('div');
          str = str.replace(/(^\s*)|(\s*$)/g, '');
          container.innerHTML = '' + str;
          return container.childNodes[0];
        },

        /**
        * 获取样式
        * @param  {HTMLElement} el  dom节点
        * @param  {String} name 样式名
        * @return {String} 属性值
        */
        getStyle: function getStyle(el, name) {
          if (window.getComputedStyle) {
            return window.getComputedStyle(el, null)[name];
          }
          return el.currentStyle[name];
        },

        /**
         * 获取宽度
         * @param  {HTMLElement} el  dom节点
         * @return {Number} 宽度
         */
        getWidth: function getWidth(el) {
          var width = this.getStyle(el, 'width');
          if (width === 'auto') {
            width = el.offsetWidth;
          }
          return parseFloat(width);
        },

        /**
         * 获取高度
         * @param  {HTMLElement} el  dom节点
         * @return {Number} 高度
         */
        getHeight: function getHeight(el) {
          var height = this.getStyle(el, 'height');
          if (height === 'auto') {
            height = el.offsetHeight;
          }
          return parseFloat(height);
        }
      };

      module.exports = DomUtil;

      /***/
    },
    /* 13 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @fileOverview Base class of chart and geometry
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);

      var Base = function () {
        Base.prototype.getDefaultCfg = function getDefaultCfg() {
          return {};
        };

        function Base(cfg) {
          _classCallCheck(this, Base);

          var attrs = {};
          var defaultCfg = this.getDefaultCfg();
          this._attrs = attrs;
          Util.mix(attrs, defaultCfg, cfg);
        }

        Base.prototype.get = function get(name) {
          return this._attrs[name];
        };

        Base.prototype.set = function set(name, value) {
          this._attrs[name] = value;
        };

        Base.prototype.destroy = function destroy() {
          this._attrs = {};
          this.destroyed = true;
        };

        return Base;
      }();

      module.exports = Base;

      /***/
    },
    /* 14 */
    /***/function (module, exports, __webpack_require__) {

      var Animate = __webpack_require__(6);
      Animate.Scalex = __webpack_require__(25);
      Animate.Scaley = __webpack_require__(26);
      Animate.Scalexy = __webpack_require__(27);
      Animate.Waveh = __webpack_require__(28);
      Animate.Wavec = __webpack_require__(29);

      module.exports = Animate;

      /***/
    },
    /* 15 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview 路径图，无序的线图
       * @author dxq613@gmail.com
       */

      var Geom = __webpack_require__(3);
      var ShapeUtil = __webpack_require__(10);
      var Util = __webpack_require__(0);
      __webpack_require__(16);

      var Path = function (_Geom) {
        _inherits(Path, _Geom);

        function Path() {
          _classCallCheck(this, Path);

          return _possibleConstructorReturn(this, _Geom.apply(this, arguments));
        }

        /**
         * 获取默认的配置属性
         * @protected
         * @return {Object} 默认属性
         */
        Path.prototype.getDefaultCfg = function getDefaultCfg() {
          var cfg = _Geom.prototype.getDefaultCfg.call(this);
          cfg.type = 'path';
          cfg.shapeType = 'line';
          return cfg;
        };

        Path.prototype.getDrawCfg = function getDrawCfg(obj) {
          var cfg = _Geom.prototype.getDrawCfg.call(this, obj);
          cfg.isStack = this.hasAdjust('stack');
          return cfg;
        };

        Path.prototype.draw = function draw(data, shapeFactory) {
          var self = this;
          var container = self.get('container');
          var yScale = self.getYScale();
          var splitArray = ShapeUtil.splitArray(data, yScale.field);

          var cfg = this.getDrawCfg(data[0]);
          cfg.origin = data; // path,line 等图的origin 是整个序列
          Util.each(splitArray, function (subData, splitedIndex) {
            cfg.splitedIndex = splitedIndex; // 传入分割片段索引 用于生成id
            cfg.points = subData;
            shapeFactory.drawShape(cfg.shape, cfg, container);
          });
        };

        return Path;
      }(Geom);

      Geom.Path = Path;
      module.exports = Path;

      /***/
    },
    /* 16 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview point shape
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(4);
      var ShapeUtil = __webpack_require__(10);

      var G = __webpack_require__(2);
      var DEFAULT_SIZE = 4; // 线的默认宽度
      var Global = __webpack_require__(1);

      // regist line geom
      var Line = Shape.registerFactory('line', {
        defaultShapeType: 'line'
      });

      function getStyle(cfg) {
        var style = Util.mix({
          strokeStyle: cfg.color,
          lineWidth: cfg.size || DEFAULT_SIZE,
          z: cfg.isInCircle
        }, cfg.style);
        return style;
      }

      function drawLines(cfg, canvas, style, isSmooth) {
        var points = cfg.points;
        var method = isSmooth ? 'drawSmooth' : 'drawLines';
        if (points.length && Util.isArray(points[0].y)) {
          var topPoints = [];
          var bottomPoints = [];
          for (var i = 0; i < points.length; i++) {
            var point = points[i];
            var tmp = ShapeUtil.splitPoints(point);
            bottomPoints.push(tmp[0]);
            topPoints.push(tmp[1]);
          }
          if (cfg.isStack) {
            G[method](topPoints, canvas, style);
          } else {
            G[method](topPoints, canvas, style);
            G[method](bottomPoints, canvas, style);
          }
        } else {
          G[method](points, canvas, style);
        }
      }

      // draw line shape
      Shape.registerShape('line', 'line', {
        draw: function draw(cfg, canvas) {
          var style = getStyle(cfg);
          drawLines(cfg, canvas, style);
        }
      });

      // draw smooth line shape
      Shape.registerShape('line', 'smooth', {
        draw: function draw(cfg, canvas) {
          var style = getStyle(cfg);
          drawLines(cfg, canvas, style, true);
        }
      });

      // draw dash line shape
      Shape.registerShape('line', 'dash', {
        draw: function draw(cfg, canvas) {
          var style = getStyle(cfg);
          style.lineDash = Global.lineDash;
          drawLines(cfg, canvas, style);
        }
      });

      module.exports = Line;

      /***/
    },
    /* 17 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview 需要计算所占x轴上的宽度的辅助类
       * @author sima.zhang1990@gmail.com
       * @author dxq613@gmail.com
       */

      var Global = __webpack_require__(1);
      var Util = __webpack_require__(0);

      // 已经排序后的数据查找距离最小的
      function findMinDistance(arr, scale) {
        var count = arr.length;
        // 日期类型的 values 经常上文本类型，所以需要转换一下
        if (Util.isString(arr[0])) {
          arr = arr.map(function (v) {
            return scale.translate(v);
          });
        }
        var distance = arr[1] - arr[0];
        for (var i = 2; i < count; i++) {
          var tmp = arr[i] - arr[i - 1];
          if (distance > tmp) {
            distance = tmp;
          }
        }
        return distance;
      }

      var SizeMixin = {
        getDefalutSize: function getDefalutSize() {
          var defaultSize = this.get('defaultSize');
          if (!defaultSize) {
            var coord = this.get('coord');
            var xScale = this.getXScale();
            var xValues = xScale.values;
            var dataArray = this.get('dataArray');
            var count = void 0;
            if (xScale.isLinear && xValues.length > 1) {
              xValues.sort();
              var interval = findMinDistance(xValues, xScale);
              count = (xScale.max - xScale.min) / interval;
              if (xValues.length > count) {
                count = xValues.length;
              }
            } else {
              count = xValues.length;
            }
            var range = xScale.range;
            var normalizeSize = 1 / count;
            var widthRatio = 1;

            if (this.isInCircle()) {
              if (coord.transposed && count > 1) {
                // 极坐标下多层环图
                widthRatio = Global.widthRatio.multiplePie;
              } else {
                widthRatio = Global.widthRatio.rose;
              }
              /* if (dataArray.length > 1) {
                normalizeSize *= (range[1] - range[0]);
              } */
            } else {
              if (xScale.isLinear) {
                normalizeSize *= range[1] - range[0];
              }
              widthRatio = Global.widthRatio.column; // 柱状图要除以2
            }
            normalizeSize *= widthRatio;
            if (this.hasAdjust('dodge')) {
              normalizeSize = normalizeSize / dataArray.length;
            }
            defaultSize = normalizeSize;
            this.set('defaultSize', defaultSize);
          }
          return defaultSize;
        },
        getDimWidth: function getDimWidth(dimName) {
          var coord = this.get('coord');
          var start = coord.convertPoint({
            x: 0,
            y: 0
          });
          var end = coord.convertPoint({
            x: dimName === 'x' ? 1 : 0,
            y: dimName === 'x' ? 0 : 1
          });
          var width = 0;
          if (start && end) {
            width = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
          }
          return width;
        },
        _getWidth: function _getWidth() {
          var coord = this.get('coord');
          var width = void 0; // x轴的长度
          if (this.isInCircle() && !coord.isTransposed) {
            // 极坐标下 width 为弧长
            width = (coord.endAngle - coord.startAngle) * coord.radius;
          } else {
            width = this.getDimWidth('x'); // 不需要判断transpose
          }
          return width;
        },
        _toNormalizedSize: function _toNormalizedSize(size) {
          var width = this._getWidth();
          return size / width;
        },
        _toCoordSize: function _toCoordSize(normalizeSize) {
          var width = this._getWidth();
          return width * normalizeSize;
        },
        getNormalizedSize: function getNormalizedSize(obj) {
          var size = this.getAttrValue('size', obj);
          if (Util.isNil(size)) {
            size = this.getDefalutSize();
          } else {
            size = this._toNormalizedSize(size);
          }
          return size;
        },
        getSize: function getSize(obj) {
          var size = this.getAttrValue('size', obj);
          if (Util.isNil(size)) {
            var normalizeSize = this.getDefalutSize();
            size = this._toCoordSize(normalizeSize);
          }
          return size;
        }
      };

      module.exports = SizeMixin;

      /***/
    },
    /* 18 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview 辅助信息的帮助类
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);

      var GuideAssist = function GuideAssist(cfg) {
        Util.mix(this, cfg);
        this.guides = [];
      };

      Util.mix(GuideAssist.prototype, {
        guides: null,
        xScale: null,
        yScale: null,
        addGuide: function addGuide(guide) {
          this.guides.push(guide);
        },
        setScale: function setScale(xScale, yScale) {
          var guides = this.guides;
          this.xScale = xScale;
          this.yScale = yScale;
          Util.each(guides, function (guide) {
            guide.xScale = xScale;
            guide.yScale = yScale;
          });
        },

        /**
         * 绘制辅助信息
         * @param  {Coord} coord 坐标系
         * @param  {Canvas.Group} canvas 分组
         */
        paintFront: function paintFront(coord, canvas) {
          var guides = this.guides;
          Util.each(guides, function (guide) {
            if (guide.top) {
              guide.paint(coord, canvas);
            }
          });
        },
        paintBack: function paintBack(coord, canvas) {
          var guides = this.guides;
          Util.each(guides, function (guide) {
            if (!guide.top) {
              guide.paint(coord, canvas);
            }
          });
        },
        paint: function paint(coord, canvas) {
          this.paintFront(coord, canvas);
          this.paintBack(coord, canvas);
        },
        clear: function clear(parent) {
          this.guides = [];
          this.reset(parent);
          return this;
        },
        reset: function reset(parent) {
          if (parent) {
            var guideWrpper = parent.getElementsByClassName('guideWapper')[0];
            if (guideWrpper) {
              parent.removeChild(guideWrpper);
            }
          }
        }
      });

      module.exports = GuideAssist;

      /***/
    },
    /* 19 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @fileOverview basic class of coordination
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);

      var Base = function () {
        Base.prototype.getDefaultCfg = function getDefaultCfg() {
          return {};
        };

        function Base(cfg) {
          _classCallCheck(this, Base);

          var defaultCfg = this.getDefaultCfg();
          Util.mix(this, defaultCfg, cfg);
          this.init();
        }

        Base.prototype.get = function get(name) {
          return this[name];
        };

        Base.prototype.set = function set(name, value) {
          this[name] = value;
          return this;
        };

        Base.prototype.init = function init() {};

        Base.prototype.convertPoint = function convertPoint(point) {
          return point;
        };

        Base.prototype.invertPoint = function invertPoint(point) {
          return point;
        };

        return Base;
      }();

      module.exports = Base;

      /***/
    },
    /* 20 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview the scale function to process the categories
       * @author dxq613@gmail.com
       */

      var Base = __webpack_require__(11);
      var Util = __webpack_require__(0);
      var catAuto = __webpack_require__(21);

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

        /**
         * @override
         */
        Category.prototype.getDefaultCfg = function getDefaultCfg() {
          var cfg = _Base.prototype.getDefaultCfg.call(this);
          return Util.mix({}, cfg, {
            /**
             * type of the scale
             * @type {String}
             */
            type: 'cat',

            /**
             * 自动生成标记时的个数
             * @type {Number}
             * @default null
             */
            tickCount: null,

            /**
             * 是否分类度量
             * @type {Boolean}
             */
            isCategory: true
          });
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

      module.exports = Category;

      /***/
    },
    /* 21 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview 计算分类的的坐标点
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);
      var MAX_COUNT = 8;

      function getSimpleArray(data) {
        var arr = [];
        Util.each(data, function (sub) {
          if (Util.isArray(sub)) {
            arr = arr.concat(sub);
          } else {
            arr.push(sub);
          }
        });
        return arr;
      }

      module.exports = function (info) {
        var rst = {};
        var ticks = [];
        var tickCount = info.maxCount || MAX_COUNT;

        var categories = getSimpleArray(info.data);
        if (categories.length <= tickCount + tickCount / 2) {
          ticks = [].concat(categories);
        } else {
          var length = categories.length;
          var step = parseInt(length / (tickCount - 1), 10);

          var groups = categories.map(function (e, i) {
            return i % step === 0 ? categories.slice(i, i + step) : null;
          }).filter(function (e) {
            return e;
          });

          ticks.push(categories[0]);
          for (var i = 1; i < groups.length && i < tickCount - 1; i++) {
            ticks.push(groups[i][0]);
          }

          ticks.push(categories[length - 1]);
        }

        rst.categories = categories;
        rst.ticks = ticks;
        return rst;
      };

      /***/
    },
    /* 22 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview 坐标轴的抽象类
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);
      var Base = __webpack_require__(13);
      var G = __webpack_require__(2);
      var Vector2 = __webpack_require__(5);

      /**
       * Axis.Abastract
       * 坐标轴的抽象类
       */

      var Abastract = function (_Base) {
        _inherits(Abastract, _Base);

        Abastract.prototype.getDefaultCfg = function getDefaultCfg() {
          return {
            /**
             * 坐标点
             * @type {Array}
             */
            ticks: [],
            /**
             * tick 的配置信息
             * @type {Object}
             */
            tickLine: {},
            /**
             * 文本、tick跟坐标轴线的方向，默认是顺时针方向
             * @type {Number}
             */
            offsetFactor: 1,
            /**
             * 画布
             * @type {Canvas}
             */
            canvas: null,
            /**
             * 绘制栅格的点
             * @type {Array}
             */
            gridPoints: []
          };
        };

        function Abastract(cfg) {
          _classCallCheck(this, Abastract);

          var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

          _this.init();
          return _this;
        }

        Abastract.prototype.init = function init() {};

        Abastract.prototype.draw = function draw() {
          var self = this;
          var line = self.get('line');
          var tickLine = self.get('tickLine');
          var label = self.get('label');

          if (line) {
            self.drawLine(line);
          }
          if (tickLine) {
            self.drawTicks(tickLine);
          }

          if (label) {
            self.drawLabels(label);
          }
        };

        // 绘制栅格


        Abastract.prototype.drawGrid = function drawGrid() {
          var self = this;
          var grid = self.get('grid');
          if (!grid) {
            return;
          }
          var canvas = self.get('canvas');
          var gridPoints = self.get('gridPoints');
          var ticks = self.get('ticks');
          var gridCfg = void 0;
          var count = gridPoints.length;

          Util.each(gridPoints, function (subPoints, index) {
            if (Util.isFunction(grid)) {
              var tick = ticks[index] || {};
              gridCfg = grid(tick.text, index, count);
            } else {
              gridCfg = grid;
            }
            if (gridCfg) {
              G.drawLines(subPoints, canvas, gridCfg);
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
          var normal = axisVector.normalize();
          var factor = self.get('offsetFactor');
          var verticalVector = new Vector2(normal.y * -1 * factor, normal.x * factor);
          return verticalVector.multiply(offset);
        };

        // 获取坐标轴边上的点


        Abastract.prototype.getSidePoint = function getSidePoint(point, offset) {
          var self = this;
          var offsetVector = self.getOffsetVector(point, offset);
          return {
            x: point.x + offsetVector.x,
            y: point.y + offsetVector.y
          };
        };

        Abastract.prototype.drawTicks = function drawTicks(tickCfg) {
          var self = this;
          var ticks = self.get('ticks');
          var length = tickCfg.value;
          var canvas = self.get('canvas');
          Util.each(ticks, function (tick) {
            var start = self.getOffsetPoint(tick.value);
            var end = self.getSidePoint(start, length);
            G.drawLine(start, end, canvas, tickCfg);
          });
        };

        // 获取文本，水平和垂直方向的对齐方式


        Abastract.prototype.getTextAlignInfo = function getTextAlignInfo(point, offset) {
          var self = this;
          var offsetVector = self.getOffsetVector(point, offset);
          var align = void 0;
          var baseLine = void 0;
          if (offsetVector.x > 0) {
            align = 'left';
          } else if (offsetVector.x < 0) {
            align = 'right';
          } else {
            align = 'center';
          }
          if (offsetVector.y > 0) {
            baseLine = 'top';
          } else if (offsetVector.y < 0) {
            baseLine = 'bottom';
          } else {
            baseLine = 'middle';
          }
          return {
            textAlign: align,
            textBaseline: baseLine
          };
        };

        Abastract.prototype.drawLabels = function drawLabels(label) {
          var self = this;
          var ticks = self.get('ticks');
          var canvas = self.get('canvas');
          var labelCfg = void 0;
          var count = ticks.length;
          Util.each(ticks, function (tick, index) {
            if (Util.isFunction(label)) {
              // 文本的配置项动态可配置
              labelCfg = label(tick.text, index, count);
            } else {
              labelCfg = label;
            }
            if (labelCfg) {
              var offset = self.get('labelOffset');
              var start = self.getOffsetPoint(tick.value);
              var end = self.getSidePoint(start, offset);
              var cfg = Util.mix({}, self.getTextAlignInfo(start, offset), labelCfg);
              G.drawText(cfg.text || tick.text, end, canvas, cfg);
            }
          });
        };

        Abastract.prototype.drawLine = function drawLine() {};

        return Abastract;
      }(Base);

      module.exports = Abastract;

      /***/
    },
    /* 23 */
    /***/function (module, exports, __webpack_require__) {

      __webpack_require__(14);
      __webpack_require__(30);
      __webpack_require__(51);
      __webpack_require__(54);
      var F2 = __webpack_require__(60);

      module.exports = F2;

      /***/
    },
    /* 24 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);

      var U_ID = 0;
      var HANDLERS = {};

      // 缓动函数
      var pow = Math.pow;
      var math = Math;
      var abs = Math.abs;
      var easingEffects = {
        linear: function linear(n) {
          return n;
        },
        easeIn: function easeIn(n) {
          return pow(n, 1.7);
        },
        easeOut: function easeOut(n) {
          return pow(n, 0.48);
        },
        easeInOut: function easeInOut(n) {
          var q = 0.48 - n / 1.04;
          var Q = math.sqrt(0.1734 + q * q);
          var x = Q - q;
          var X = pow(abs(x), 1 / 3) * (x < 0 ? -1 : 1);
          var y = -Q - q;
          var Y = pow(abs(y), 1 / 3) * (y < 0 ? -1 : 1);
          var t = X + Y + 0.5;
          return (1 - t) * 3 * t * t + t * t * t;
        },
        backIn: function backIn(n) {
          var s = 1.70158;
          return n * n * ((s + 1) * n - s);
        },
        backOut: function backOut(n) {
          n = n - 1;
          var s = 1.70158;
          return n * n * ((s + 1) * n + s) + 1;
        },
        elastic: function elastic(n) {
          if (n === !!n) {
            return n;
          }
          return pow(2, -10 * n) * math.sin((n - 0.075) * (2 * Math.PI) / 0.3) + 1;
        },
        bounce: function bounce(n) {
          var s = 7.5625;
          var p = 2.75;
          var l = void 0;
          if (n < 1 / p) {
            l = s * n * n;
          } else {
            if (n < 2 / p) {
              n -= 1.5 / p;
              l = s * n * n + 0.75;
            } else {
              if (n < 2.5 / p) {
                n -= 2.25 / p;
                l = s * n * n + 0.9375;
              } else {
                n -= 2.625 / p;
                l = s * n * n + 0.984375;
              }
            }
          }
          return l;
        }
      };

      // 动画id
      function guid() {
        return ++U_ID;
      }

      var AnimateUtil = {
        // 执行动画
        animateStep: function animateStep(fn, duration, easing, callback) {
          var baseTime = new Date().getTime();
          var uid = guid();

          function next(num, fun, dur, cb) {
            var nowTime = new Date().getTime();
            var durTime = nowTime - baseTime;
            if (durTime >= dur) {
              fun(1, num);
              cb && cb();
              return;
            }
            var effect = Util.isFunction(easing) ? easing : easingEffects[easing || 'linear'];
            var factor = effect(durTime / dur);
            fun(factor, num);
            HANDLERS[uid] = Util.requestAnimationFrame(function () {
              next(num + 1, fun, dur, cb);
            });
          }
          next(0, fn, duration, callback);
          return uid;
        },

        // 停止动画循环
        stopStep: function stopStep(uid) {
          if (HANDLERS[uid]) {
            Util.cancelAnimationFrame(HANDLERS[uid]);
            delete HANDLERS[uid];
          }
        }
      };

      module.exports = AnimateUtil;

      /***/
    },
    /* 25 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview 横向缩放
       * @author dxq613@gmail.com
       */

      var Animate = __webpack_require__(6);

      var Scalex = function (_Animate) {
        _inherits(Scalex, _Animate);

        function Scalex() {
          _classCallCheck(this, Scalex);

          return _possibleConstructorReturn(this, _Animate.apply(this, arguments));
        }

        Scalex.prototype.draw = function draw(canvas, virtualCanvas) {
          var self = this;
          var ratio = self.ratio;
          var start = self.startPoint.x * ratio;
          var width = canvas.width;
          var height = canvas.height;
          var ctx = canvas.getContext('2d');
          var virtualCtx = virtualCanvas.getContext('2d');
          var imageData = self.imageData;
          var bgImageData = self.bgImageData;
          // 在虚拟canvas上渲染imageData
          virtualCtx.putImageData(imageData, 0, 0);
          self.animateStep(function (factor) {
            self.clear(canvas);
            ctx.putImageData(bgImageData, 0, 0);
            // 计算正反方向的图片宽度
            var negativeWidth = start * factor / ratio;
            var positiveWidth = (width - start) * factor / ratio;
            ctx.drawImage(virtualCanvas, 0, 0, width, height, start * (1 - factor) / ratio, 0, negativeWidth + positiveWidth, height / ratio);
          });
        };

        return Scalex;
      }(Animate);

      module.exports = Scalex;

      /***/
    },
    /* 26 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview y 轴方向的缩放
       * @author dxq613@gmail.com
       */

      var Animate = __webpack_require__(6);

      var Scaley = function (_Animate) {
        _inherits(Scaley, _Animate);

        function Scaley() {
          _classCallCheck(this, Scaley);

          return _possibleConstructorReturn(this, _Animate.apply(this, arguments));
        }

        Scaley.prototype.draw = function draw(canvas, virtualCanvas) {
          var self = this;
          var ratio = self.ratio;
          var start = self.startPoint.y * ratio;
          var width = canvas.width;
          var height = canvas.height;
          var ctx = canvas.getContext('2d');
          var virtualCtx = virtualCanvas.getContext('2d');
          var imageData = self.imageData;
          var bgImageData = self.bgImageData;
          // 在虚拟canvas上渲染imageData
          virtualCtx.putImageData(imageData, 0, 0);
          self.animateStep(function (factor) {
            self.clear(canvas);
            ctx.putImageData(bgImageData, 0, 0);
            // 计算正反方向的图片宽度
            var negativeWidth = start * factor / ratio;
            var positiveWidth = (height - start) * factor / ratio;
            ctx.drawImage(virtualCanvas, 0, 0, width, height, 0, start * (1 - factor) / ratio, width / ratio, negativeWidth + positiveWidth);
          });
        };

        return Scaley;
      }(Animate);

      module.exports = Scaley;

      /***/
    },
    /* 27 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview 从中心缩放出来
       * @author dxq613@gmail.com
       */

      var Animate = __webpack_require__(6);

      var Scalexy = function (_Animate) {
        _inherits(Scalexy, _Animate);

        function Scalexy() {
          _classCallCheck(this, Scalexy);

          return _possibleConstructorReturn(this, _Animate.apply(this, arguments));
        }

        Scalexy.prototype.draw = function draw(canvas, virtualCanvas) {
          var self = this;
          var ratio = self.ratio;
          var center = self.center;
          var width = canvas.width;
          var height = canvas.height;
          var ctx = canvas.getContext('2d');
          var virtualCtx = virtualCanvas.getContext('2d');
          var imageData = self.imageData;
          var bgImageData = self.bgImageData;
          // 在虚拟canvas上渲染imageData
          virtualCtx.putImageData(imageData, 0, 0);
          self.animateStep(function (factor) {
            self.clear(canvas);
            ctx.putImageData(bgImageData, 0, 0);
            ctx.drawImage(virtualCanvas, 0, 0, width, height, center.x * (1 - factor), center.y * (1 - factor), width * factor / ratio, height * factor / ratio);
          });
        };

        return Scalexy;
      }(Animate);

      module.exports = Scalexy;

      /***/
    },
    /* 28 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview 在水平方向平铺
       * @author dxq613@gmail.com
       */

      var Animate = __webpack_require__(6);

      var Waveh = function (_Animate) {
        _inherits(Waveh, _Animate);

        function Waveh() {
          _classCallCheck(this, Waveh);

          return _possibleConstructorReturn(this, _Animate.apply(this, arguments));
        }

        Waveh.prototype.draw = function draw(canvas, virtualCanvas) {
          var self = this;
          var width = canvas.width;
          var height = canvas.height;
          var ctx = canvas.getContext('2d');
          var ratio = self.ratio;
          var virtualCtx = virtualCanvas.getContext('2d');
          var imageData = self.imageData;
          var bgImageData = self.bgImageData;
          // 绘制背景
          ctx.putImageData(bgImageData, 0, 0);
          // 在虚拟canvas上渲染imageData
          virtualCtx.putImageData(imageData, 0, 0);
          self.animateStep(function (factor) {
            self.clear(canvas);
            ctx.putImageData(bgImageData, 0, 0);
            ctx.drawImage(virtualCanvas, 0, 0, width * factor, height, 0, 0, width * factor / ratio, height / ratio);
          });
        };

        return Waveh;
      }(Animate);

      module.exports = Waveh;

      /***/
    },
    /* 29 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview 从中心旋转出来
       * @author dxq613@gmail.com
       */

      var Animate = __webpack_require__(6);

      var Wavec = function (_Animate) {
        _inherits(Wavec, _Animate);

        function Wavec() {
          _classCallCheck(this, Wavec);

          return _possibleConstructorReturn(this, _Animate.apply(this, arguments));
        }

        Wavec.prototype.draw = function draw(canvas, virtualCanvas) {
          var self = this;
          var width = canvas.width;
          var height = canvas.height;
          var ctx = canvas.getContext('2d');
          var virtualCtx = virtualCanvas.getContext('2d');
          var ratio = self.ratio;
          var center = self.center;
          var radius = self.radius;
          var imageData = self.imageData;
          var bgImageData = self.bgImageData;
          // 绘制背景
          ctx.putImageData(bgImageData, 0, 0);
          virtualCtx.putImageData(imageData, 0, 0);
          self.animateStep(function (factor) {
            self.clear(canvas);
            ctx.putImageData(bgImageData, 0, 0);
            // 剪切扇形区域
            ctx.save();
            self.sector(ctx, 2 * Math.PI * factor, center, radius);
            ctx.clip();
            // 绘制图表
            ctx.drawImage(virtualCanvas, 0, 0, width, height, 0, 0, width / ratio, height / ratio);
            ctx.restore();
          });
        };

        // 绘制扇形


        Wavec.prototype.sector = function sector(ctx, thita, center, radius) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(1, 1, 1, 0)';
          // 画出圆弧
          ctx.arc(center.x, center.y, radius, 1.5 * Math.PI, 1.5 * Math.PI + thita);
          // 移动到终点，准备连接终点与圆心
          ctx.moveTo(center.x + Math.sin(thita) * radius, center.y - Math.cos(thita) * radius);
          // 连接到圆心
          ctx.lineTo(center.x, center.y);
          // 从圆心连接到起点
          ctx.lineTo(center.x, center.y - radius);
          ctx.stroke();
        };

        return Wavec;
      }(Animate);

      module.exports = Wavec;

      /***/
    },
    /* 30 */
    /***/function (module, exports, __webpack_require__) {

      var Geom = __webpack_require__(3);

      __webpack_require__(39);
      __webpack_require__(15);
      __webpack_require__(42);
      __webpack_require__(43);
      __webpack_require__(45);
      __webpack_require__(47);
      __webpack_require__(49);

      module.exports = Geom;

      /***/
    },
    /* 31 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview 默认皮肤
       * @author dxq613@gail.com
       */

      var axisLineColor = '#999999';
      var lineColor = '#E9E9E9';
      var Util = __webpack_require__(0);
      var defaultAxis = {
        label: {
          fillStyle: '#979797',
          font: '20px san-serif'
        },
        labelOffset: 6,
        line: {
          stroke: lineColor,
          lineWidth: 1
        },
        grid: {
          stroke: lineColor,
          lineWidth: 1
        },
        tickLine: null
      };
      var defaultFont = {
        fontStyle: '',
        fontVariant: '',
        fontWeight: '',
        fontSize: '12px',
        fontFamily: '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "sans-serif"'
      };

      var Theme = {
        defaultFont: defaultFont,
        pixelRatio: 1,
        padding: [40, 40, 40, 40],
        colors: ['#4E7CCC', '#36B3C3', '#4ECDA5', '#94E08A', '#E2F194', '#EDCC72', '#F8AB60', '#F9815C', '#EB4456', '#C82B3D'],
        shapes: {
          line: ['line', 'dash'],
          point: ['circle', 'hollowCircle']
        },
        opacities: [0.1, 0.9],
        sizes: [4, 10],
        axis: {
          bottom: Util.deepMix({}, defaultAxis, {
            line: {
              stroke: axisLineColor
            },
            label: {
              textBaseline: 'hanging'
            },
            labelOffset: 12,
            gridAttrs: {},
            grid: function grid(text, index, total) {
              if (index === 0 || index === total - 1) {
                return null;
              }
              return Util.mix({}, defaultAxis.grid, Theme.axis.bottom.gridAttrs);
            }
          }),
          left: Util.deepMix({}, defaultAxis, {
            label: {
              textAlign: 'end'
            },
            line: null,
            tickLine: null
          }),
          right: Util.deepMix({}, defaultAxis, {
            label: {
              textAlign: 'start'
            },
            line: null,
            tickLine: null,
            grid: null
          }),
          circle: Util.deepMix({}, defaultAxis, {
            line: {
              stroke: axisLineColor
            }
          }),
          radius: Util.deepMix({}, defaultAxis, {})
        },
        guide: {
          line: {
            stroke: '#000',
            lineWidth: 1
          },
          text: {
            fill: '#000',
            textAlign: 'center'
          },
          rect: {
            fillStyle: '#fafafa'
          },
          arc: {
            stroke: '#CCC'
          },
          html: {
            offset: [0, 0],
            align: 'cc'
          }
        }
      };

      module.exports = Theme;

      /***/
    },
    /* 32 */
    /***/function (module, exports, __webpack_require__) {

      var Base = __webpack_require__(7);
      Base.Color = __webpack_require__(33);
      Base.Size = __webpack_require__(35);
      Base.Opacity = __webpack_require__(36);
      Base.Shape = __webpack_require__(37);
      Base.Position = __webpack_require__(38);
      module.exports = Base;

      /***/
    },
    /* 33 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview the color attribute of core
       * @author huangtonger@aliyun.com
       */

      var ColorUtil = __webpack_require__(34);
      var Base = __webpack_require__(7);
      var Util = __webpack_require__(0);

      /**
       * 视觉通道 color
       * @class Attr.Color
       */

      var Color = function (_Base) {
        _inherits(Color, _Base);

        function Color(cfg) {
          _classCallCheck(this, Color);

          var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

          _this.names = ['color'];
          _this.type = 'color';
          _this.gradient = null;
          if (Util.isString(_this.values)) {
            _this.linear = true;
          }
          return _this;
        }

        /**
         * @override
         */

        Color.prototype.getLinearValue = function getLinearValue(percent) {
          var gradient = this.gradient;
          if (!gradient) {
            var values = this.values;
            gradient = ColorUtil.gradient(values);
            this.gradient = gradient;
          }
          return gradient(percent);
        };

        return Color;
      }(Base);

      module.exports = Color;

      /***/
    },
    /* 34 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview 颜色计算的辅助方法
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);
      var RGB_REG = /rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/;

      // 创建辅助 tag 取颜色
      function createTmp() {
        var i = document.createElement('i');
        i.title = 'Web Colour Picker';
        i.style.display = 'none';
        document.body.appendChild(i);
        return i;
      }

      // 获取颜色之间的插值
      function getValue(start, end, percent, index) {
        var value = start[index] + (end[index] - start[index]) * percent;
        return value;
      }

      // 数组转换成颜色
      function arr2rgb(arr) {
        return '#' + toHex(arr[0]) + toHex(arr[1]) + toHex(arr[2]);
      }

      // 将数值从 0-255 转换成16进制字符串
      function toHex(value) {
        value = Math.round(value);
        value = value.toString(16);
        if (value.length === 1) {
          value = '0' + value;
        }
        return value;
      }

      function calColor(colors, percent) {
        var steps = colors.length - 1;
        var step = Math.floor(steps * percent);
        var left = steps * percent - step;
        var start = colors[step];
        var end = step === steps ? start : colors[step + 1];
        var rgb = arr2rgb([getValue(start, end, left, 0), getValue(start, end, left, 1), getValue(start, end, left, 2)]);
        return rgb;
      }

      // rgb 颜色转换成数组
      function rgb2arr(str) {
        var arr = [];
        arr.push(parseInt(str.substr(1, 2), 16));
        arr.push(parseInt(str.substr(3, 2), 16));
        arr.push(parseInt(str.substr(5, 2), 16));
        return arr;
      }

      var colorCache = {};
      var iEl = null;
      var ColorUtil = {
        /**
         * 将颜色转换到 rgb 的格式
         * @param  {String} color 颜色
         * @return {String} 将颜色转换到 '#ffffff' 的格式
         */
        toRGB: function toRGB(color) {
          // 如果已经是 rgb的格式
          if (color[0] === '#' && color.length === 7) {
            return color;
          }
          if (!iEl) {
            // 防止防止在页头报错
            iEl = createTmp();
          }
          var rst = void 0;
          if (colorCache[color]) {
            rst = colorCache[color];
          } else {
            iEl.style.color = color;
            rst = document.defaultView.getComputedStyle(iEl, '').getPropertyValue('color');
            var cArray = RGB_REG.exec(rst);
            cArray.shift();
            rst = arr2rgb(cArray);
            colorCache[color] = rst;
          }
          return rst;
        },

        rgb2arr: rgb2arr,

        /**
         * 获取渐变函数
         * @param  {Array} colors 多个颜色
         * @return {String} 颜色值
         */
        gradient: function gradient(colors) {
          var points = [];
          if (Util.isString(colors)) {
            colors = colors.split('-');
          }
          Util.each(colors, function (color) {
            if (color.indexOf('#') === -1) {
              color = ColorUtil.toRGB(color);
            }
            points.push(rgb2arr(color));
          });
          return function (percent) {
            return calColor(points, percent);
          };
        }
      };

      module.exports = ColorUtil;

      /***/
    },
    /* 35 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview the size attribute of core
       * @author huangtonger@aliyun.com
       */

      var Base = __webpack_require__(7);

      /**
       * 视觉通道 size
       * @class Attr.Size
       */

      var Size = function (_Base) {
        _inherits(Size, _Base);

        function Size(cfg) {
          _classCallCheck(this, Size);

          var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

          _this.names = ['size'];
          _this.type = 'size';
          _this.gradient = null;
          return _this;
        }

        return Size;
      }(Base);

      module.exports = Size;

      /***/
    },
    /* 36 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview the opacity attribute of core
       * @author huangtonger@aliyun.com
       */

      var Base = __webpack_require__(7);

      /**
       * 视觉通道 Opacity
       * @class Attr.Opacity
       */

      var Opacity = function (_Base) {
        _inherits(Opacity, _Base);

        function Opacity(cfg) {
          _classCallCheck(this, Opacity);

          var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

          _this.names = ['opacity'];
          _this.type = 'opacity';
          _this.gradient = null;
          return _this;
        }

        return Opacity;
      }(Base);

      module.exports = Opacity;

      /***/
    },
    /* 37 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview the shape attribute of core
       * @author huangtonger@aliyun.com
       */

      var Base = __webpack_require__(7);

      /**
       * 视觉通道 Shape
       * @class Attr.Shape
       */

      var Shape = function (_Base) {
        _inherits(Shape, _Base);

        function Shape(cfg) {
          _classCallCheck(this, Shape);

          var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

          _this.names = ['shape'];
          _this.type = 'shape';
          _this.gradient = null;
          return _this;
        }

        /**
         * @override
         */

        Shape.prototype.getLinearValue = function getLinearValue(percent) {
          var values = this.values;
          var index = Math.round((values.length - 1) * percent);
          return values[index];
        };

        return Shape;
      }(Base);

      module.exports = Shape;

      /***/
    },
    /* 38 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview the position attribute of core
       * @author huangtonger@aliyun.com
       */

      var Util = __webpack_require__(0);
      var Base = __webpack_require__(7);

      var Position = function (_Base) {
        _inherits(Position, _Base);

        function Position(cfg) {
          _classCallCheck(this, Position);

          var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

          _this.names = ['x', 'y'];
          _this.type = 'position';
          return _this;
        }

        Position.prototype.mapping = function mapping(x, y) {
          var scales = this.scales;
          var coord = this.coord;
          var scaleX = scales[0];
          var scaleY = scales[1];
          var rstX = void 0;
          var rstY = void 0;
          var obj = void 0;
          if (Util.isNil(x) || Util.isNil(y)) {
            return [];
          }
          if (Util.isArray(y) && Util.isArray(x)) {
            rstX = [];
            rstY = [];
            for (var i = 0, j = 0; i < x.length && j < y.length; i++, j++) {
              obj = coord.convertPoint({
                x: scaleX.scale(x[i]),
                y: scaleY.scale(y[j])
              });
              rstX.push(obj.x);
              rstY.push(obj.y);
            }
          } else if (Util.isArray(y)) {
            x = scaleX.scale(x);
            rstY = [];
            Util.each(y, function (yVal) {
              yVal = scaleY.scale(yVal);
              obj = coord.convertPoint({
                x: x,
                y: yVal
              });
              if (rstX && rstX !== obj.x) {
                if (!Util.isArray(rstX)) {
                  rstX = [rstX];
                }
                rstX.push(obj.x);
              } else {
                rstX = obj.x;
              }
              rstY.push(obj.y);
            });
          } else if (Util.isArray(x)) {
            y = scaleY.scale(y);
            rstX = [];
            Util.each(x, function (xVal) {
              xVal = scaleX.scale(xVal);
              obj = coord.convertPoint({
                x: xVal,
                y: y
              });
              if (rstY && rstY !== obj.y) {
                if (!Util.isArray(rstY)) {
                  rstY = [rstY];
                }
                rstY.push(obj.y);
              } else {
                rstY = obj.y;
              }
              rstX.push(obj.x);
            });
          } else {
            x = scaleX.scale(x);
            y = scaleY.scale(y);
            var point = coord.convertPoint({
              x: x,
              y: y
            });
            rstX = point.x;
            rstY = point.y;
          }
          return [rstX, rstY];
        };

        return Position;
      }(Base);

      module.exports = Position;

      /***/
    },
    /* 39 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview Geometry Point
       * @author dxq613@gmail.com
       */

      var Geom = __webpack_require__(3);
      __webpack_require__(40);

      var Point = function (_Geom) {
        _inherits(Point, _Geom);

        function Point() {
          _classCallCheck(this, Point);

          return _possibleConstructorReturn(this, _Geom.apply(this, arguments));
        }

        Point.prototype.getDefaultCfg = function getDefaultCfg() {
          var cfg = _Geom.prototype.getDefaultCfg.call(this);
          cfg.type = 'point';
          cfg.shapeType = 'point';
          cfg.generatePoints = true;
          return cfg;
        };

        return Point;
      }(Geom);

      Geom.Point = Point;

      module.exports = Point;

      /***/
    },
    /* 40 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview point shape
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(4);
      var G = __webpack_require__(2);
      var DEFAULT_SIZE = 5;
      var ShapeUtil = __webpack_require__(10);

      var Point = Shape.registerFactory('point', {
        defaultShapeType: 'circle',
        getDefaultPoints: function getDefaultPoints(pointInfo) {
          return ShapeUtil.splitPoints(pointInfo);
        }
      });

      function getPointsCfg(cfg) {
        return {
          size: cfg.size || DEFAULT_SIZE,
          style: Util.mix({
            lineWidth: 0,
            stroke: cfg.color,
            fill: cfg.color
          }, cfg.style)
        };
      }

      Shape.registerShape('point', 'circle', {
        draw: function draw(cfg, canvas) {
          if (cfg.size === 0) return;
          var pointCfg = getPointsCfg(cfg);
          var size = pointCfg.size;
          var style = pointCfg.style;
          var x = cfg.x;
          var y = cfg.y;
          if (!Util.isArray(y)) {
            y = [y];
          }
          for (var i = 0; i < y.length; i++) {
            G.drawCircle({ x: x, y: y[i] }, size, canvas, style);
          }
        }
      });

      Shape.registerShape('point', 'hollowCircle', {
        draw: function draw(cfg, canvas) {
          if (cfg.size === 0) return;
          var pointCfg = getPointsCfg(cfg);
          var size = pointCfg.size;
          var style = pointCfg.style;
          style.lineWidth = 1;
          style.fill = null;
          var x = cfg.x;
          var y = cfg.y;
          if (!Util.isArray(y)) {
            y = [y];
          }
          for (var i = 0; i < y.length; i++) {
            G.drawCircle({ x: x, y: y[i] }, size, canvas, style);
          }
        }
      });

      Shape.registerShape('point', 'rect', {
        draw: function draw(cfg, canvas) {
          if (cfg.size === 0) return;
          var pointCfg = getPointsCfg(cfg);
          var size = pointCfg.size;
          var style = pointCfg.style;
          var x = cfg.x;
          var y = cfg.y;
          if (!Util.isArray(y)) {
            y = [y];
          }

          Util.each(y, function (subY) {
            G.drawShape(canvas, style, function (ctx) {
              ctx.rect(x - size, subY - size, size * 2, size * 2);
            });
          });
        }
      });

      module.exports = Point;

      /***/
    },
    /* 41 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview 将折线转换成平滑曲线
       * @author dxq613@gmail.com
       */
      var Vector2 = __webpack_require__(5);

      function getPoint(v) {
        return new Vector2(v.x, v.y);
      }

      function pointScale(p, s) {
        p.x *= s;
        p.y *= s;
        return p;
      }

      function smoothBezier(points, smooth, isLoop, constraint) {
        var cps = [];

        var prevPoint = void 0;
        var nextPoint = void 0;
        var hasConstraint = !!constraint;
        var min = void 0;
        var max = void 0;
        var point = void 0;
        var len = void 0;
        var l = void 0;
        var i = void 0;
        if (hasConstraint) {
          min = new Vector2(Infinity, Infinity);
          max = new Vector2(-Infinity, -Infinity);

          for (i = 0, l = points.length; i < l; i++) {
            point = getPoint(points[i]);
            min.min(point);
            max.max(point);
          }
          min.min(getPoint(constraint[0]));
          max.max(getPoint(constraint[1]));
        }

        for (i = 0, len = points.length; i < len; i++) {
          point = getPoint(points[i]);
          if (isLoop) {
            prevPoint = getPoint(points[i ? i - 1 : len - 1]);
            nextPoint = getPoint(points[(i + 1) % len]);
          } else {
            if (i === 0 || i === len - 1) {
              cps.push([point.x, point.y]);
              continue;
            } else {
              prevPoint = getPoint(points[i - 1]);
              nextPoint = getPoint(points[i + 1]);
            }
          }

          var v = Vector2.sub(nextPoint, prevPoint);
          pointScale(v, smooth);
          var d0 = point.distanceTo(prevPoint);
          var d1 = point.distanceTo(nextPoint);

          var sum = d0 + d1;
          if (sum !== 0) {
            d0 /= sum;
            d1 /= sum;
          }

          var v1 = pointScale(v.clone(), -d0);
          var v2 = pointScale(v.clone(), d1);

          var cp0 = Vector2.add(point, v1);
          var cp1 = Vector2.add(point, v2);

          if (hasConstraint) {
            cp0.max(min);
            cp0.min(max);
            cp1.max(min);
            cp1.min(max);
          }

          cps.push([cp0.x, cp0.y]);
          cps.push([cp1.x, cp1.y]);
        }

        if (isLoop) {
          cps.push(cps.shift());
        }
        return cps;
      }

      function catmullRom2bezier(pointList, z, constraint) {
        var isLoop = !!z;

        var controlPointList = smoothBezier(pointList, 0.4, isLoop, constraint);
        var len = pointList.length;
        var d1 = [];

        var cp1 = void 0;
        var cp2 = void 0;
        var p = void 0;

        for (var i = 0; i < len - 1; i++) {
          cp1 = controlPointList[i * 2];
          cp2 = controlPointList[i * 2 + 1];
          p = pointList[i + 1];
          d1.push(['C', cp1[0], cp1[1], cp2[0], cp2[1], p.x, p.y]);
        }

        if (isLoop) {
          cp1 = controlPointList[len];
          cp2 = controlPointList[len + 1];
          p = pointList[0];

          d1.push(['C', cp1[0], cp1[1], cp2[0], cp2[1], p.x, p.y]);
        }
        return d1;
      }

      module.exports = {
        smooth: catmullRom2bezier
      };

      /***/
    },
    /* 42 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview 线图
       * @author dxq613@gmail.com
       */

      var Path = __webpack_require__(15);
      var Geom = __webpack_require__(3);

      __webpack_require__(16);

      var Line = function (_Path) {
        _inherits(Line, _Path);

        function Line() {
          _classCallCheck(this, Line);

          return _possibleConstructorReturn(this, _Path.apply(this, arguments));
        }

        /**
         * 获取默认的配置属性
         * @protected
         * @return {Object} 默认属性
         */
        Line.prototype.getDefaultCfg = function getDefaultCfg() {
          var cfg = _Path.prototype.getDefaultCfg.call(this);
          cfg.type = 'line';
          cfg.sortable = true;
          return cfg;
        };

        return Line;
      }(Path);

      Geom.Line = Line;
      module.exports = Line;

      /***/
    },
    /* 43 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview 面积图
       * @author dxq613@gmail.com
       */

      var Geom = __webpack_require__(3);
      var ShapeUtil = __webpack_require__(10);
      var Util = __webpack_require__(0);
      __webpack_require__(44);

      var Area = function (_Geom) {
        _inherits(Area, _Geom);

        function Area() {
          _classCallCheck(this, Area);

          return _possibleConstructorReturn(this, _Geom.apply(this, arguments));
        }

        /**
         * 获取默认的配置属性
         * @protected
         * @return {Object} 默认属性
         */
        Area.prototype.getDefaultCfg = function getDefaultCfg() {
          var cfg = _Geom.prototype.getDefaultCfg.call(this);
          cfg.type = 'area';
          cfg.shapeType = 'area';
          cfg.generatePoints = true;
          cfg.sortable = true;
          return cfg;
        };

        Area.prototype.draw = function draw(data, shapeFactory) {
          var self = this;
          var container = self.get('container');
          var cfg = this.getDrawCfg(data[0]);
          var yScale = self.getYScale();
          var splitArray = ShapeUtil.splitArray(data, yScale.field);
          cfg.origin = data; // path,line,area 等图的origin 是整个序列
          Util.each(splitArray, function (subData, splitedIndex) {
            cfg.splitedIndex = splitedIndex; // 传入分割片段索引 用于生成id
            var points = subData.map(function (obj) {
              return obj.points;
            });
            cfg.points = points;
            shapeFactory.drawShape(cfg.shape, cfg, container);
          });
        };

        return Area;
      }(Geom);

      Geom.Area = Area;

      module.exports = Area;

      /***/
    },
    /* 44 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(4);
      var G = __webpack_require__(2);

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

      function drawShape(cfg, canvas) {
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
        }, cfg.style);
        var ctx = G.before(canvas, style); // 开始绘制，附加参数
        bottomPoints.reverse(); // 下面
        topPoints = self.parsePoints(topPoints);
        bottomPoints = self.parsePoints(bottomPoints);
        if (cfg.isInCircle) {
          if (equalsCenter(bottomPoints, cfg.center)) {
            // 如果内部点等于圆心，不绘制
            bottomPoints = [];
          }
          self.drawCircleArea(topPoints, bottomPoints, ctx);
        } else {
          self.drawRectShape(topPoints, bottomPoints, ctx);
        }
        G.after(ctx, style);
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

      // draw area shape
      Shape.registerShape('area', 'area', {
        draw: function draw(cfg, canvas) {
          drawShape.call(this, cfg, canvas);
        },
        drawCircleArea: function drawCircleArea(topPoints, bottomPoints, ctx) {
          G.lines(topPoints, ctx);
          ctx.lineTo(topPoints[0].x, topPoints[0].y);
          ctx.closePath();
          if (bottomPoints.length) {
            G.lines(bottomPoints, ctx);
            ctx.closePath();
          }
        },
        drawRectShape: function drawRectShape(topPoints, bottomPoints, ctx) {
          topPoints = topPoints.concat(bottomPoints);
          G.lines(topPoints, ctx);
          ctx.closePath();
        }
      });

      // draw line shape
      Shape.registerShape('area', 'smooth', {
        draw: function draw(cfg, canvas) {
          drawShape.call(this, cfg, canvas);
        },
        drawCircleArea: function drawCircleArea(topPoints, bottomPoints, ctx) {
          G.smooth(topPoints, ctx); // 绘制上面的线
          ctx.closePath();
          if (bottomPoints.length) {
            G.smooth(bottomPoints, ctx);
            ctx.closePath();
          }
        },
        drawRectShape: function drawRectShape(topPoints, bottomPoints, ctx) {
          G.smooth(topPoints, ctx); // 绘制上面的线
          ctx.lineTo(bottomPoints[0].x, bottomPoints[0].y);
          G.smooth(bottomPoints, ctx, false);
          ctx.closePath();
        }
      });

      module.exports = Area;

      /***/
    },
    /* 45 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview interval geometry
       * @author dxq613@gmail.com
       */

      var Geom = __webpack_require__(3);
      var Util = __webpack_require__(0);
      var SizeMixin = __webpack_require__(17);
      __webpack_require__(46);

      var Interval = function (_Geom) {
        _inherits(Interval, _Geom);

        /**
         * 获取默认的配置属性
         * @protected
         * @return {Object} 默认属性
         */
        Interval.prototype.getDefaultCfg = function getDefaultCfg() {
          var cfg = _Geom.prototype.getDefaultCfg.call(this);
          cfg.type = 'interval';
          cfg.shapeType = 'interval';
          cfg.generatePoints = true;
          return cfg;
        };

        function Interval(cfg) {
          _classCallCheck(this, Interval);

          var _this = _possibleConstructorReturn(this, _Geom.call(this, cfg));

          Util.mix(_this, SizeMixin);
          return _this;
        }

        Interval.prototype.createShapePointsCfg = function createShapePointsCfg(obj) {
          var cfg = _Geom.prototype.createShapePointsCfg.call(this, obj);
          cfg.size = this.getNormalizedSize(obj);
          return cfg;
        };

        Interval.prototype.clearInner = function clearInner() {
          _Geom.prototype.clearInner.call(this);
          this.set('defaultSize', null);
        };

        return Interval;
      }(Geom);

      Geom.Interval = Interval;

      module.exports = Interval;

      /***/
    },
    /* 46 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview interval shapes
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(4);
      var G = __webpack_require__(2);

      // 获取柱状图的几个点
      function getRectPoints(cfg) {
        var x = cfg.x;
        var y = cfg.y;
        var y0 = cfg.y0; // 0 点的位置
        var width = cfg.size;

        // 有3种情况，
        // 1. y，x都不是数组
        // 2. y是数组，x不是
        // 3. x是数组，y不是
        var ymin = y0;
        var ymax = y;
        if (Util.isArray(y)) {
          ymax = y[1];
          ymin = y[0];
        }

        var xmin = void 0;
        var xmax = void 0;
        if (Util.isArray(x)) {
          xmin = x[0];
          xmax = x[1];
        } else {
          xmin = x - width / 2;
          xmax = x + width / 2;
        }

        var points = [];

        points.push({
          x: xmin,
          y: ymin
        }, {
          x: xmin,
          y: ymax
        }, {
          x: xmax,
          y: ymax
        }, {
          x: xmax,
          y: ymin
        });

        return points;
      }

      var Interval = Shape.registerFactory('interval', {
        defaultShapeType: 'rect',
        getDefaultPoints: function getDefaultPoints(cfg) {
          return getRectPoints(cfg);
        }
      });

      Shape.registerShape('interval', 'rect', {
        draw: function draw(cfg, canvas) {
          var points = this.parsePoints(cfg.points);
          var style = Util.mix({
            fill: cfg.color,
            z: true // 需要闭合
          }, cfg.style);
          if (cfg.isInCircle) {
            var newPoints = points.slice(0);
            if (this._coord.transposed) {
              newPoints = [points[0], points[3], points[2], points[1]];
            }
            G.drawFan(newPoints, cfg.center, canvas, style);
          } else {
            G.drawRect(points, canvas, style);
          }
        }
      });

      module.exports = Interval;

      /***/
    },
    /* 47 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview Geometry Polygon
       * @author dxq613@gmail.com
       */

      var Geom = __webpack_require__(3);
      var Util = __webpack_require__(0);
      __webpack_require__(48);

      var Polygon = function (_Geom) {
        _inherits(Polygon, _Geom);

        function Polygon() {
          _classCallCheck(this, Polygon);

          return _possibleConstructorReturn(this, _Geom.apply(this, arguments));
        }

        /**
         * 获取默认的配置属性
         * @protected
         * @return {Object} 默认属性
         */
        Polygon.prototype.getDefaultCfg = function getDefaultCfg() {
          var cfg = _Geom.prototype.getDefaultCfg.call(this);
          cfg.type = 'polygon';
          cfg.shapeType = 'polygon';
          cfg.generatePoints = true;
          return cfg;
        };

        Polygon.prototype.createShapePointsCfg = function createShapePointsCfg(obj) {
          var cfg = _Geom.prototype.createShapePointsCfg.call(this, obj);
          var self = this;
          var x = cfg.x;
          var y = cfg.y;
          var temp = void 0;
          if (!(Util.isArray(x) && Util.isArray(y))) {
            // x y 都是数组时，不做处理
            var xScale = self.getXScale();
            var yScale = self.getYScale();
            var xCount = xScale.values ? xScale.values.length : xScale.ticks.length;
            var yCount = yScale.values ? yScale.values.length : yScale.ticks.length;
            var xOffset = 0.5 * 1 / xCount;
            var yOffset = 0.5 * 1 / yCount;
            if (xScale.isCategory && yScale.isCategory) {
              // 如果x,y都是分类
              x = [x - xOffset, x - xOffset, x + xOffset, x + xOffset];
              y = [y - yOffset, y + yOffset, y + yOffset, y - yOffset];
            } else if (Util.isArray(x)) {
              // x 是数组
              temp = x;
              x = [temp[0], temp[0], temp[1], temp[1]];
              y = [y - yOffset / 2, y + yOffset / 2, y + yOffset / 2, y - yOffset / 2];
            } else if (Util.isArray(y)) {
              // y 是数组
              temp = y;
              y = [temp[0], temp[1], temp[1], temp[0]];
              x = [x - xOffset / 2, x - xOffset / 2, x + xOffset / 2, x + xOffset / 2];
            }
            cfg.x = x;
            cfg.y = y;
          }
          return cfg;
        };

        return Polygon;
      }(Geom);

      Geom.Polygon = Polygon;

      module.exports = Polygon;

      /***/
    },
    /* 48 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview 多边形
       * @author dxq613@gmail.com
       */

      var Shape = __webpack_require__(4);
      var Util = __webpack_require__(0);
      var G = __webpack_require__(2);

      var Polygon = Shape.registerFactory('polygon', {
        defaultShapeType: 'polygon',
        getDefaultPoints: function getDefaultPoints(pointInfo) {
          var points = [];
          Util.each(pointInfo.x, function (subX, idx) {
            var subY = pointInfo.y[idx];
            points.push({
              x: subX,
              y: subY
            });
          });
          return points;
        }
      });

      Shape.registerShape('polygon', 'polygon', {
        draw: function draw(cfg, canvas) {
          var points = this.parsePoints(cfg.points);
          var style = Util.mix({
            fill: cfg.color,
            z: true // 需要闭合
          }, cfg.style);
          G.drawLines(points, canvas, style);
        }
      });

      module.exports = Polygon;

      /***/
    },
    /* 49 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview Geometry Schema
       * @author dxq613@gmail.com
       */

      var Geom = __webpack_require__(3);
      var Util = __webpack_require__(0);
      var SizeMixin = __webpack_require__(17);
      __webpack_require__(50);

      var Schema = function (_Geom) {
        _inherits(Schema, _Geom);

        Schema.prototype.getDefaultCfg = function getDefaultCfg() {
          var cfg = _Geom.prototype.getDefaultCfg.call(this);
          cfg.type = 'schema';
          cfg.shapeType = 'schema';
          cfg.generatePoints = true;
          return cfg;
        };

        function Schema(cfg) {
          _classCallCheck(this, Schema);

          var _this = _possibleConstructorReturn(this, _Geom.call(this, cfg));

          Util.mix(_this, SizeMixin);
          return _this;
        }

        Schema.prototype.createShapePointsCfg = function createShapePointsCfg(obj) {
          var cfg = _Geom.prototype.createShapePointsCfg.call(this, obj);
          cfg.size = this.getNormalizedSize(obj);
          return cfg;
        };

        Schema.prototype.clearInner = function clearInner() {
          _Geom.prototype.clearInner.call(this);
          this.set('defaultSize', null);
        };

        return Schema;
      }(Geom);

      Geom.Schema = Schema;

      module.exports = Schema;

      /***/
    },
    /* 50 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview 自定义图表
       * @author dxq613@gmail.com
       */

      var Shape = __webpack_require__(4);
      var Util = __webpack_require__(0);
      var G = __webpack_require__(2);

      // START candle shape
      function _sortValue(value) {
        // 从大到小排序
        var sorted = value.sort(function (a, b) {
          return a < b ? 1 : -1;
        });

        var length = sorted.length;
        if (length < 4) {
          var min = sorted[length - 1];
          for (var i = 0; i < 4 - length; i++) {
            sorted.push(min);
          }
        }
        return sorted;
      }

      var Schema = Shape.registerFactory('schema', {});

      // 方向：左下角顺时针连接
      function getCandlePoints(x, y, width) {
        var yValues = _sortValue(y);
        var points = [{
          x: x,
          y: yValues[0]
        }, {
          x: x,
          y: yValues[1]
        }, {
          x: x - width / 2,
          y: yValues[2]
        }, {
          x: x - width / 2,
          y: yValues[1]
        }, {
          x: x + width / 2,
          y: yValues[1]
        }, {
          x: x + width / 2,
          y: yValues[2]
        }, {
          x: x,
          y: yValues[2]
        }, {
          x: x,
          y: yValues[3]
        }]; // 按照顺时针连接
        return points;
      }

      // 注册k线图
      Shape.registerShape('schema', 'candle', {
        // 获取构建k线图的点
        getPoints: function getPoints(cfg) {
          var points = getCandlePoints(cfg.x, cfg.y, cfg.size);
          return points;
        },

        // 绘制k线图
        draw: function draw(cfg, canvas) {
          var points = this.parsePoints(cfg.points);
          var style = Util.mix({
            strokeStyle: cfg.color,
            fillStyle: cfg.color
          }, cfg.style);
          var ctx = G.before(canvas, style);
          ctx.moveTo(points[0].x, points[0].y);
          ctx.lineTo(points[1].x, points[1].y);

          ctx.moveTo(points[2].x, points[2].y);
          for (var i = 3; i < 6; i++) {
            ctx.lineTo(points[i].x, points[i].y);
          }
          ctx.closePath();
          ctx.moveTo(points[6].x, points[6].y);
          ctx.lineTo(points[7].x, points[7].y);
          G.after(ctx, style);
        }
      });

      module.exports = Schema;

      /***/
    },
    /* 51 */
    /***/function (module, exports, __webpack_require__) {

      var Adjust = __webpack_require__(9);

      __webpack_require__(52);
      __webpack_require__(53);

      module.exports = Adjust;

      /***/
    },
    /* 52 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview 数据分组
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);
      var Adjust = __webpack_require__(9);
      var Global = __webpack_require__(1);

      var Dodge = function (_Adjust) {
        _inherits(Dodge, _Adjust);

        function Dodge() {
          _classCallCheck(this, Dodge);

          return _possibleConstructorReturn(this, _Adjust.apply(this, arguments));
        }

        Dodge.prototype.getDefaultCfg = function getDefaultCfg() {
          var cfg = _Adjust.prototype.getDefaultCfg.call(this);
          Util.mix(cfg, {
            /**
             * 调整过程中,2个数据的间距
             * @type {Number}
             */
            marginRatio: Global.widthRatio.dodgeMargin,

            /**
             * 调整占单位宽度的比例,例如：占2个分类间距的 1/2
             * @type {Number}
             */
            dodgeRatio: Global.widthRatio.column
          });
          return cfg;
        };

        Dodge.prototype.getDodgeOffset = function getDodgeOffset(range, index, count) {
          var self = this;
          var pre = range.pre;
          var next = range.next;
          var tickLength = next - pre;
          var width = tickLength * self.dodgeRatio / count;
          var margin = self.marginRatio * width;
          var offset = 1 / 2 * (tickLength - count * width - (count - 1) * margin) + ((index + 1) * width + index * margin) - 1 / 2 * width - 1 / 2 * tickLength;
          return (pre + next) / 2 + offset;
        };

        Dodge.prototype.processAdjust = function processAdjust(dataArray) {
          var self = this;
          var count = dataArray.length;
          var xField = self.xField;
          Util.each(dataArray, function (data, index) {
            for (var i = 0; i < data.length; i++) {
              var obj = data[i];
              var value = obj[xField];
              var range = {
                pre: value - 0.5,
                next: value + 0.5
              };
              var dodgeValue = self.getDodgeOffset(range, index, count);
              obj[xField] = dodgeValue;
            }
          });
        };

        return Dodge;
      }(Adjust);

      Adjust.Dodge = Dodge;
      module.exports = Dodge;

      /***/
    },
    /* 53 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview Stack data
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);
      var Adjust = __webpack_require__(9);

      var Stack = function (_Adjust) {
        _inherits(Stack, _Adjust);

        function Stack() {
          _classCallCheck(this, Stack);

          return _possibleConstructorReturn(this, _Adjust.apply(this, arguments));
        }

        Stack.prototype.getDefaultCfg = function getDefaultCfg() {
          return {
            xField: null,
            yField: null
          };
        };

        Stack.prototype.processAdjust = function processAdjust(dataArray) {
          var self = this;
          var xField = self.xField;
          var yField = self.yField;
          var count = dataArray.length;
          var stackCache = {};

          for (var i = 0; i < count; i++) {
            var data = dataArray[i];
            for (var j = 0; j < data.length; j++) {
              var item = data[j];
              var x = item[xField];
              var y = item[yField];
              var xkey = x.toString();
              y = Util.isArray(y) ? y[1] : y;
              if (!stackCache[xkey]) {
                stackCache[xkey] = 0;
              }
              item[yField] = [stackCache[xkey], y + stackCache[xkey]];
              stackCache[xkey] += y;
            }
          }
        };

        return Stack;
      }(Adjust);

      Adjust.Stack = Stack;
      module.exports = Stack;

      /***/
    },
    /* 54 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview guide assist to g2
       * @ignore
       */

      var Util = __webpack_require__(0);
      var Guide = __webpack_require__(8);
      Guide.Text = __webpack_require__(55);
      Guide.Line = __webpack_require__(56);
      Guide.Arc = __webpack_require__(57);
      Guide.Html = __webpack_require__(58);
      Guide.Rect = __webpack_require__(59);

      var GuideAssist = __webpack_require__(18);

      Util.mix(GuideAssist.prototype, {
        _getDefault: function _getDefault() {
          return {
            xScale: this.xScale,
            yScale: this.yScale
          };
        },

        /**
         * 添加辅助线
         * @chainable
         * @param  {Array} start 起始点
         * @param  {Array} end   结束点
         * @param  {Object} cfg  配置项
         * @return {Object} guideAssist 对象
         */
        line: function line(start, end, cfg) {
          var config = {
            start: start,
            end: end,
            cfg: Util.mix({}, cfg)
          };

          Util.mix(config, this._getDefault());
          var guide = new Guide.Line(config);
          this.addGuide(guide);
          return this;
        },

        /**
         * 添加辅助文本
         * @chainable
         * @param  {Array} position 文本位置
         * @param  {String} text   文本
         * @param  {Object} cfg  配置项
         * @return {Object} guideAssist 对象
         */
        text: function text(position, _text, cfg) {
          var config = {
            position: position,
            text: _text,
            cfg: Util.mix({}, cfg)
          };

          Util.mix(config, this._getDefault());
          var guide = new Guide.Text(config);
          this.addGuide(guide);
          return this;
        },

        /**
         * 添加辅助弧线
         * @chainable
         * @param  {Array} start 弧线开始点
         * @param  {Array} end 弧线结束点
         * @param  {Object} cfg  配置项
         * @return {Object} guideAssist 对象
         */
        arc: function arc(start, end, cfg) {
          var config = {
            type: 'arc',
            start: start,
            end: end,
            cfg: Util.mix({}, cfg)
          };

          Util.mix(config, this._getDefault());
          var guide = new Guide.Arc(config);
          this.addGuide(guide);
          return this;
        },

        /**
         * 添加辅助html
         * @chainable
         * @param  {Array} position 位置
         * @param  {String} html html文本
         * @param  {Object} cfg  配置项
         * @return {Object} guideAssist 对象
         */
        html: function html(position, _html, cfg) {
          var config = {
            type: 'html',
            position: position,
            html: _html,
            cfg: Util.mix({}, cfg)
          };

          Util.mix(config, this._getDefault());
          var guide = new Guide.Html(config);
          this.addGuide(guide);
          return this;
        },
        rect: function rect(start, end, cfg) {
          var config = {
            type: 'rect',
            start: start,
            end: end,
            cfg: Util.mix({}, cfg)
          };

          Util.mix(config, this._getDefault());
          var guide = new Guide.Rect(config);
          this.addGuide(guide);
          return this;
        }
      });

      module.exports = Guide;

      /***/
    },
    /* 55 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview guide text
       * @author 旻诺<audrey.tm@alibaba-inc.com>
       */

      var Guide = __webpack_require__(8);
      var G = __webpack_require__(2);
      var Global = __webpack_require__(1);

      /**
       * 辅助文本
       * @class Guide.Text
       */

      var Text = function (_Guide) {
        _inherits(Text, _Guide);

        function Text() {
          _classCallCheck(this, Text);

          return _possibleConstructorReturn(this, _Guide.apply(this, arguments));
        }

        Text.prototype.getDefaultCfg = function getDefaultCfg() {
          return {
            type: 'text',
            top: true, // 默认显示在上面
            position: [],
            text: '',
            cfg: Global.guide.text
          };
        };
        // override


        Text.prototype.paint = function paint(coord, canvas) {
          var self = this;
          var position = self.position;
          var point = self.parsePoint(coord, position);
          var cfg = self.cfg;
          var text = self.text;
          G.drawText(text, point, canvas, cfg);
        };

        return Text;
      }(Guide);

      module.exports = Text;

      /***/
    },
    /* 56 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview guide line
       * @author 旻诺<audrey.tm@alibaba-inc.com>
       */

      var Guide = __webpack_require__(8);
      var G = __webpack_require__(2);
      var Global = __webpack_require__(1);

      /**
       * 辅助线
       * @class  Guide.Line
       */

      var Line = function (_Guide) {
        _inherits(Line, _Guide);

        function Line() {
          _classCallCheck(this, Line);

          return _possibleConstructorReturn(this, _Guide.apply(this, arguments));
        }

        Line.prototype.getDefaultCfg = function getDefaultCfg() {
          return {
            type: 'line',
            start: [],
            end: [],
            cfg: Global.guide.line
          };
        };

        // override paint


        Line.prototype.paint = function paint(coord, canvas) {
          var self = this;
          var points = [];
          points[0] = self.parsePoint(coord, self.start);
          points[1] = self.parsePoint(coord, self.end);
          var cfg = self.cfg;
          G.drawLines(points, canvas, cfg);
        };

        return Line;
      }(Guide);

      module.exports = Line;

      /***/
    },
    /* 57 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview guide arc
       * @author 旻诺<audrey.tm@alibaba-inc.com>
       */

      var Util = __webpack_require__(0);
      var Guide = __webpack_require__(8);
      var Vector2 = __webpack_require__(5);
      var G = __webpack_require__(2);
      var Global = __webpack_require__(1);

      /**
       * 辅助弧线
       * @class Guide.Arc
       */

      var Arc = function (_Guide) {
        _inherits(Arc, _Guide);

        function Arc() {
          _classCallCheck(this, Arc);

          return _possibleConstructorReturn(this, _Guide.apply(this, arguments));
        }

        Arc.prototype.getDefaultCfg = function getDefaultCfg() {
          return {
            type: 'arc',
            /**
             * 起点
             * @type {Array}
             */
            start: [],
            /**
             * 终点
             * @type {Array}
             */
            end: [],
            cfg: Global.guide.arc
          };
        };

        // 获取弧线的path


        Arc.prototype.getCfg = function getCfg(coord) {
          var self = this;
          var start = self.parsePoint(coord, self.start);
          var end = self.parsePoint(coord, self.end);
          var center = coord.get('center');
          var v = new Vector2(1, 0); // 单位向量
          var sv = Vector2.sub(start, center);
          var ev = Vector2.sub(end, center);
          var radius = sv.length();

          var rst = {
            radius: radius,
            startAngle: 2 * Math.PI - sv.angleTo(v, true),
            endAngle: 2 * Math.PI - ev.angleTo(v, true)
          };
          return rst;
        };

        Arc.prototype.paint = function paint(coord, canvas) {
          var angle = this.getCfg(coord);
          var cfg = Util.mix({
            z: false
          }, this.cfg, angle);
          var center = coord.get('center');
          var radius = angle.radius;
          var startAngle = angle.startAngle;
          var endAngle = angle.endAngle;

          G.drawArc(center, radius, startAngle, endAngle, canvas, cfg);
        };

        return Arc;
      }(Guide);

      module.exports = Arc;

      /***/
    },
    /* 58 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview guide line
       * @author 旻诺<audrey.tm@alibaba-inc.com>
       */

      var DomUtil = __webpack_require__(12);
      var Guide = __webpack_require__(8);
      var Global = __webpack_require__(1);

      function getOffsetFromAlign(align, width, height) {
        var result = [];
        switch (align) {
          case 'tl':
            result[0] = 0;
            result[1] = 0;
            break;
          case 'tr':
            result[0] = -width;
            result[1] = 0;
            break;
          case 'bl':
            result[0] = 0;
            result[1] = Math.floor(-height);
            break;
          case 'br':
            result[0] = Math.floor(-width);
            result[1] = Math.floor(-height);
            break;
          case 'rc':
            result[0] = Math.floor(-width);
            result[1] = Math.floor(-height / 2);
            break;
          case 'lc':
            result[0] = 0;
            result[1] = Math.floor(-height / 2);
            break;
          case 'tc':
            result[0] = Math.floor(-width / 2);
            result[1] = Math.floor(-height);
            break;
          case 'bc':
            result[0] = Math.floor(-width / 2);
            result[1] = 0;
            break;
          default:
            result[0] = Math.floor(-width / 2);
            result[1] = Math.floor(-height / 2);
        }
        return result;
      }

      /**
       * 辅助html
       * @class  Guide.Html
       */

      var Html = function (_Guide) {
        _inherits(Html, _Guide);

        function Html() {
          _classCallCheck(this, Html);

          return _possibleConstructorReturn(this, _Guide.apply(this, arguments));
        }

        Html.prototype.getDefaultCfg = function getDefaultCfg() {
          return {
            type: 'html',
            position: [],
            top: true, // 默认在上面显示
            html: '',
            cfg: Global.guide.html
          };
        };

        // override paint


        Html.prototype.paint = function paint(coord, canvas) {
          var self = this;
          var position = self.parsePoint(coord, self.position);
          var myNode = DomUtil.createDom(self.html);
          myNode = DomUtil.modiCSS(myNode, {
            position: 'absolute',
            top: Math.floor(position.y) + 'px',
            left: Math.floor(position.x) + 'px',
            visibility: 'hidden'
          });

          var parentNode = canvas.parentNode;
          parentNode = DomUtil.modiCSS(parentNode, {
            position: 'relative'
          });
          // 创建html guide 的容器
          var wrapperNode = void 0;
          if (parentNode.getElementsByClassName('guideWapper').length > 0) {
            wrapperNode = parentNode.getElementsByClassName('guideWapper')[0];
          } else {
            wrapperNode = DomUtil.createDom('<div class="guideWapper"></div>');
            wrapperNode = DomUtil.modiCSS(wrapperNode, {
              position: 'absolute',
              top: 0,
              left: 0
            });
            parentNode.appendChild(wrapperNode);
          }
          wrapperNode.appendChild(myNode);

          var cfg = self.cfg;
          // 对齐
          if (cfg.align) {
            var align = cfg.align;
            var width = DomUtil.getWidth(myNode);
            var height = DomUtil.getHeight(myNode);
            var newOffset = getOffsetFromAlign(align, width, height);
            position.x = position.x + newOffset[0];
            position.y = position.y + newOffset[1];
          }

          // 偏移
          if (cfg.offset) {
            var offset = cfg.offset;
            position.x = position.x + offset[0];
            position.y = position.y + offset[1];
          }

          DomUtil.modiCSS(myNode, {
            top: Math.floor(position.y) + 'px',
            left: Math.floor(position.x) + 'px',
            visibility: 'visible'
          });
        };

        return Html;
      }(Guide);

      module.exports = Html;

      /***/
    },
    /* 59 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview guide rect
       * @author 旻诺<audrey.tm@alibaba-inc.com>
       */

      var Guide = __webpack_require__(8);
      var G = __webpack_require__(2);
      var Global = __webpack_require__(1);
      /**
       * 辅助框
       * @class  Guide.Rect
       */

      var Rect = function (_Guide) {
        _inherits(Rect, _Guide);

        function Rect() {
          _classCallCheck(this, Rect);

          return _possibleConstructorReturn(this, _Guide.apply(this, arguments));
        }

        Rect.prototype.getDefaultCfg = function getDefaultCfg() {
          return {
            type: 'rect',
            start: [],
            end: [],
            cfg: Global.guide.rect
          };
        };

        // override paint


        Rect.prototype.paint = function paint(coord, canvas) {
          var self = this;
          var cfg = self.cfg;
          var points = [];
          points[0] = self.parsePoint(coord, self.start);
          points[1] = self.parsePoint(coord, [self.start[0], self.end[1]]);
          points[2] = self.parsePoint(coord, self.end);
          points[3] = self.parsePoint(coord, [self.end[0], self.start[1]]);
          if (cfg.radius) {
            G.drawRect(points, canvas, cfg);
          } else {
            G.drawLines(points, canvas, cfg);
          }
        };

        return Rect;
      }(Guide);

      module.exports = Rect;

      /***/
    },
    /* 60 */
    /***/function (module, exports, __webpack_require__) {

      var F2 = {};

      F2.version = '3.0.0';
      F2.Global = __webpack_require__(1);
      F2.Chart = __webpack_require__(61);
      F2.Shape = __webpack_require__(4);
      F2.Graphic = __webpack_require__(2);

      module.exports = F2;

      /***/
    },
    /* 61 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview chart
       * @author dxq613@gail.com
       */

      var Base = __webpack_require__(13);
      var Plot = __webpack_require__(62);
      var Util = __webpack_require__(0);
      var Coord = __webpack_require__(63);
      var Geom = __webpack_require__(3);
      var ScaleAssist = __webpack_require__(66);
      var AxisAssist = __webpack_require__(75);
      var GuideAssist = __webpack_require__(18);
      var Global = __webpack_require__(1);
      var DomUtil = __webpack_require__(12);
      var AnimateAssist = __webpack_require__(79);

      function isFullCircle(coord) {
        var startAngle = coord.startAngle;
        var endAngle = coord.endAngle;
        if (!Util.isNil(startAngle) && !Util.isNil(endAngle) && endAngle - startAngle < Math.PI * 2) {
          return false;
        }
        return true;
      }

      var ViewGeoms = {};
      Util.each(Geom, function (geomConstructor, className) {
        var methodName = Util.lowerFirst(className);
        ViewGeoms[methodName] = function (cfg) {
          var geom = new geomConstructor(cfg);
          this.addGeom(geom);
          return geom;
        };
      });

      /**
       * @class Chart
       * 图表的入口
       */

      var Chart = function (_Base) {
        _inherits(Chart, _Base);

        Chart.prototype.getDefaultCfg = function getDefaultCfg() {
          return {
            /**
             * 画布的Id
             * @type {String}
             */
            id: null,

            /**
             * 画布中绘制图形的边距
             * @type {Array|Number}
             */
            padding: Global.padding,

            /**
             * 数据
             * @type {Array}
             */
            data: null,

            /**
             * chart 保有的度量
             * @type {Object}
             */
            scales: {},
            /**
             * 坐标系的配置信息
             * @private
             * @type {Object}
             */
            coordCfg: {
              type: 'cartesian'
            },
            /**
             * @private
             * 图层
             * @type {Array}
             */
            layers: null,
            /**
             * @private
             * 图层对应的图形
             * @type {Array}
             */
            geoms: null,
            /**
             * 列定义
             * @type {Object}
             */
            colDefs: null,
            pixelRatio: Global.pixelRatio
          };
        };

        function Chart(cfg) {
          _classCallCheck(this, Chart);

          // 附加各种 geometry 对应的方法
          var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

          Util.mix(_this, ViewGeoms);
          _this._init();
          return _this;
        }

        /**
         * 设置数据源和数据字段定义
         * @chainable
         * @param  {Array} data 数据集合
         * @param  {Object} colDefs 数据字段定义
         * @return {Chart} 返回当前 chart 的引用
         */

        Chart.prototype.source = function source(data, colDefs) {
          var self = this;
          if (colDefs) {
            self.set('colDefs', colDefs);
          }
          self._initData(data);
          return self;
        };

        /**
         * 设置坐标轴配置项
         * @chainable
         * @param  {String|Boolean} field 坐标轴对应的字段
         * @param  {Object} cfg 坐标轴的配置信息
         * @return {Chart} 返回当前 chart 的引用
         */

        Chart.prototype.axis = function axis(field, cfg) {
          var self = this;
          var axisAssist = self.get('axisAssist');
          if (!field) {
            axisAssist.axisCfg = null;
          } else {
            axisAssist.axisCfg = axisAssist.axisCfg || {};
            axisAssist.axisCfg[field] = cfg;
          }
          return self;
        };

        /**
         * 创建度量
         * @param  {String} field 度量对应的名称
         * @param  {Array} data 数据集合
         * @return {Scale} 度量
         */

        Chart.prototype.createScale = function createScale(field, data) {
          var self = this;
          data = data || self.get('data');
          var scales = self.get('scales');
          if (!scales[field]) {
            scales[field] = self._createScale(field, data);
          }
          return scales[field];
        };

        // 内部调用


        Chart.prototype._createScale = function _createScale(field, data) {
          var self = this;
          var coord = self.get('coord');
          var inCircle = coord.isPolar;
          var scaleAssist = self.get('scaleAssist');
          return scaleAssist.createScale(field, data, inCircle);
        };

        /**
         * 设置坐标系配置项
         * @chainable
         * @param  {String} type 坐标系类型
         * @param  {Object} cfg 配置项
         * @return {Chart} 返回当前 chart 的引用
         */

        Chart.prototype.coord = function coord(type, cfg) {
          var self = this;
          var coordCfg = void 0;
          if (!cfg) {
            if (Util.isString(type)) {
              coordCfg = {
                type: type
              };
            } else {
              coordCfg = type;
            }
          } else {
            coordCfg = cfg;
            coordCfg.type = type;
          }

          self.set('coordCfg', coordCfg);
          return self;
        };

        /**
         * 获取数据对应在画布空间的坐标
         * @param  {Object} record 原始数据
         * @return {Object} 返回对应的画布上的坐标点
         */

        Chart.prototype.getPosition = function getPosition(record) {
          var self = this;
          var coord = self.get('coord');
          var xScale = self._getXScale();
          var yScale = self._getYScales()[0]; // 暂时只取第一个y轴，忽视多轴的情况
          var xField = xScale.field;
          var x = xScale.scale(record[xField]);
          var yField = yScale.field;
          var y = yScale.scale(record[yField]);
          return coord.convertPoint({
            x: x,
            y: y
          });
        };

        /**
         * 根据clientX, clientY获取画布上坐标
         * @param  {Number} clientX 事件获取的窗口坐标 x
         * @param  {Number} clientY 事件获取的窗口坐标 y
         * @return {Object} 对应的坐标
         */

        Chart.prototype.getPointByClient = function getPointByClient(clientX, clientY) {
          var canvas = this.get('canvas');
          var bbox = canvas.getBoundingClientRect();
          return {
            x: clientX - bbox.left,
            y: clientY - bbox.top
          };
        };

        /**
         * 获取画布上坐标对应的数据值
         * @param  {Object} point 画布坐标的x,y的值
         * @return {Object} 当前坐标系的数据值
         */

        Chart.prototype.getRecord = function getRecord(point) {
          var self = this;
          var coord = self.get('coord');
          var xScale = self._getXScale();
          var yScale = self._getYScales()[0];
          var invertPoint = coord.invertPoint(point);
          var record = {};
          record[xScale.field] = xScale.invert(invertPoint.x);
          record[yScale.field] = yScale.invert(invertPoint.y);
          return record;
        };
        /**
         * 根据画布坐标获取对应数据集
         * @param  {Object} point 画布坐标的x,y的值
         * @param {String} field 字段名
         * @return {Array} 纵向切割交点对应数据集
        **/

        Chart.prototype.getSnapRecords = function getSnapRecords(point, field) {
          var geom = this.get('geoms')[0];
          var data = geom.getSnapRecords(point, field);
          return data;
        };

        // 初始化


        Chart.prototype._init = function _init() {
          var self = this;
          self._initCanvas();
          self.set('layers', []);
          self.set('geoms', []);
          self.set('scaleAssist', new ScaleAssist());
          self.set('axisAssist', new AxisAssist({
            canvas: self.get('canvas')
          }));
          self.set('guideAssist', new GuideAssist());
          self.set('animateAssist', new AnimateAssist());
          self._initData(self.get('data'));
        };

        // 初始化数据


        Chart.prototype._initData = function _initData(data) {
          if (data) {
            this.set('data', data);
          }
          var colDefs = this.get('colDefs');
          if (colDefs) {
            var scaleAssist = this.get('scaleAssist');
            scaleAssist.defs = colDefs;
          }
        };

        Chart.prototype._getRatio = function _getRatio() {
          return this.get('pixelRatio');
        };

        // 初始化画布


        Chart.prototype._initCanvas = function _initCanvas() {
          var self = this;
          var id = self.get('id');
          var el = self.get('el');
          var context = self.get('context');
          var canvas = void 0;

          if (context) {
            // CanvasRenderingContext2D
            canvas = context.canvas;
          } else if (el) {
            // HTMLElement
            canvas = el;
          } else if (id) {
            // dom id
            canvas = document.getElementById(id);
          }

          if (!canvas) {
            throw new Error('Please specify the id or el of the chart!');
          }

          self.set('canvas', canvas);

          if (context && canvas && !canvas.getContext) {
            canvas.getContext = function () {
              return context;
            };
          }
          var width = self.get('width');
          var height = self.get('height');
          var ratio = self._getRatio();

          if (!width) {
            width = DomUtil.getWidth(canvas);
            self.set('width', width);
          }

          if (!height) {
            height = DomUtil.getHeight(canvas);
            self.set('height', height);
          }

          if (ratio) {
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            DomUtil.modiCSS(canvas, { height: height + 'px' });
            DomUtil.modiCSS(canvas, { width: width + 'px' });
            if (ratio !== 1) {
              var ctx = canvas.getContext('2d');
              ctx.scale(ratio, ratio);
            }
          }

          self._initLayout();
        };

        // 初始化布局


        Chart.prototype._initLayout = function _initLayout() {
          var self = this;
          // 兼容margin 的写法
          var padding = self.get('margin') || self.get('padding');
          var width = self.get('width');
          var height = self.get('height');
          var top = void 0;
          var left = void 0;
          var right = void 0;
          var bottom = void 0;

          if (Util.isNumber(padding)) {
            top = bottom = padding;
            left = right = padding;
          } else if (Util.isArray(padding)) {
            top = padding[0];
            right = !Util.isNull(padding[1]) ? padding[1] : padding[0];
            bottom = !Util.isNull(padding[2]) ? padding[2] : padding[0];
            left = !Util.isNull(padding[3]) ? padding[3] : right;
          }

          bottom = height - bottom;
          right = width - right;
          var plot = new Plot({
            start: {
              x: left,
              y: top
            },
            end: {
              x: right,
              y: bottom
            }
          });
          self.set('plot', plot);
        };

        // 初始化坐标系


        Chart.prototype._initCoord = function _initCoord() {
          var self = this;
          var plot = self.get('plot');
          var coordCfg = Util.mix({}, self.get('coordCfg'), {
            plot: plot
          });
          var type = coordCfg.type;
          var C = Coord[Util.ucfirst(type)] || Coord.Cartesian;
          var coord = new C(coordCfg);

          self.set('coord', coord);
        };

        /**
         * @protected
         * 添加几何标记
         * @param {Geom} geom 几何标记
         */

        Chart.prototype.addGeom = function addGeom(geom) {
          var self = this;
          var geoms = self.get('geoms');
          geoms.push(geom);
          geom.set('chart', self);
          geom.set('container', self.get('canvas'));
        };

        /**
         * @protected
         * 移除几何标记
         * @param {Geom} geom 几何标记
         */

        Chart.prototype.removeGeom = function removeGeom(geom) {
          var geoms = this.get('geoms');
          Util.Array.remove(geoms, geom);
          geom.destroy();
        };

        Chart.prototype._removeGeoms = function _removeGeoms() {
          var self = this;
          var geoms = self.get('geoms');
          while (geoms.length > 0) {
            var geom = geoms.shift();
            geom.destroy();
          }
        };

        Chart.prototype._clearGeoms = function _clearGeoms() {
          var self = this;
          var geoms = self.get('geoms');
          for (var i = 0; i < geoms.length; i++) {
            var geom = geoms[i];
            geom.clear();
          }
        };

        /**
         * 清空图表上面的图层
         * @chainable
         * @return {Chart} 返回当前 chart 的引用
         */

        Chart.prototype.clear = function clear() {
          this.get('guideAssist').clear();
          this._removeGeoms();
          this._clearInner();
          return this;
        };

        Chart.prototype._clearInner = function _clearInner() {
          this.get('animateAssist').stop();
          this.set('scales', {});
          this._clearGeoms();
          this._clearCanvas();
          var parent = this.get('canvas').parentNode;
          this.get('guideAssist').reset(parent);
        };

        Chart.prototype.destroy = function destroy() {
          this.clear();
          _Base.prototype.destroy.call(this);
        };

        Chart.prototype._clearCanvas = function _clearCanvas() {
          var canvas = this.get('canvas');
          var ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          return this;
        };

        Chart.prototype._beforeRenderGuide = function _beforeRenderGuide() {
          var guideAssist = this.get('guideAssist');
          if (guideAssist.guides.length) {
            var xScale = this._getXScale();
            var yScale = this._getYScales()[0];
            guideAssist.setScale(xScale, yScale);
          }
        };

        // 渲染辅助元素


        Chart.prototype._renderBackGuide = function _renderBackGuide() {
          var self = this;
          var canvas = self.get('canvas');
          var guideAssist = self.get('guideAssist');
          if (guideAssist.guides.length) {
            var coord = self.get('coord');
            guideAssist.paintBack(coord, canvas);
          }
        };

        Chart.prototype._renderFrontGuide = function _renderFrontGuide() {
          var self = this;
          var canvas = self.get('canvas');
          var guideAssist = self.get('guideAssist');
          if (guideAssist && guideAssist.guides.length) {
            var coord = self.get('coord');
            guideAssist.paintFront(coord, canvas);
          }
        };

        Chart.prototype._renderAnimate = function _renderAnimate(callback) {
          var self = this;
          var imageData = self.get('imageData');
          var bgImageData = self.get('bgImageData');
          var animateAssist = self.get('animateAssist');
          var canvas = self.get('canvas');
          var coord = self.get('coord');
          var center = coord.get('center');
          var radius = coord.get('radius');
          var geom = self.get('geoms')[0];
          var yScale = geom.getYScale();
          var yMin = geom.getYMinValue();

          var startPoint = coord.convertPoint({
            x: 0,
            y: yScale.scale(yMin)
          });

          if (animateAssist.animate) {
            animateAssist.setOptions({
              imageData: imageData,
              bgImageData: bgImageData,
              startPoint: startPoint,
              center: center,
              radius: radius
            });
            animateAssist.setCallBack(callback);
            animateAssist.paint(canvas);
          }
        };

        /**
         * 图表绘制
         * @chainable
         * @return {Chart} 返回当前 chart 的引用
         */

        Chart.prototype.render = function render() {
          var self = this;
          self._initCoord();
          var geoms = self.get('geoms');
          var animateAssist = self.get('animateAssist');
          self._initGeoms(geoms);
          this._adjustScale();
          self.beforeDrawGeom();

          if (animateAssist.animate) {
            self.set('bgImageData', self.getImageData());
            self._clearCanvas();
            self.drawGeom(geoms);
            self.set('imageData', self.getImageData());
            self._clearCanvas();
            self._renderAnimate(self._renderFrontGuide.bind(self));
          } else {
            self.drawGeom(geoms);
            self._renderFrontGuide();
          }
          return self;
        };

        Chart.prototype.repaint = function repaint() {
          this._clearInner();
          this.render();
        };

        Chart.prototype.changeData = function changeData(data) {
          this.set('data', data);
          this.repaint();
        };

        Chart.prototype.drawGeom = function drawGeom(geoms) {
          for (var i = 0; i < geoms.length; i++) {
            var geom = geoms[i];
            geom.paint();
          }
        };

        Chart.prototype.beforeDrawGeom = function beforeDrawGeom() {
          var self = this;
          self._renderAxis();
          self._beforeRenderGuide();
          self._renderBackGuide();
        };

        Chart.prototype.getImageData = function getImageData() {
          var self = this;
          var canvas = self.get('canvas');
          var ctx = canvas.getContext('2d');
          var width = self.get('width');
          var height = self.get('height');
          var ratio = self._getRatio();
          return ctx.getImageData(0, 0, width * ratio, height * ratio);
        };

        Chart.prototype._initGeoms = function _initGeoms(geoms) {
          var self = this;
          var coord = self.get('coord');
          var data = self.get('data');
          for (var i = 0; i < geoms.length; i++) {
            var geom = geoms[i];
            geom.set('data', data);
            geom.set('coord', coord);
            geom.init();
          }
        };

        Chart.prototype._adjustScale = function _adjustScale() {
          this._setCatScalesRange();
        };

        Chart.prototype._setCatScalesRange = function _setCatScalesRange() {
          var self = this;
          var coord = self.get('coord');
          var xScale = self._getXScale();
          var yScales = self._getYScales();
          var scales = [];

          xScale && scales.push(xScale);
          scales = scales.concat(yScales);
          var inFullCircle = coord.isPolar && isFullCircle(coord);
          var scaleAssist = self.get('scaleAssist');
          var colDefs = scaleAssist.defs;
          Util.each(scales, function (scale) {
            if ((scale.isCategory || scale.isIdentity) && scale.values && !(colDefs[scale.field] && colDefs[scale.field].range)) {
              var count = scale.values.length;
              var range = void 0;
              if (count === 1) {
                range = [0.5, 1]; // 只有一个分类时,防止计算出现 [0.5,0.5]的状态
              } else {
                var widthRatio = 1;
                var offset = 0;
                if (inFullCircle) {
                  if (!coord.isTransposed) {
                    range = [0, 1 - 1 / count];
                  } else {
                    widthRatio = Global.widthRatio.multiplePie;
                    offset = 1 / count * widthRatio;
                    range = [offset / 2, 1 - offset / 2];
                  }
                } else {
                  offset = 1 / count * 1 / 2; // 两边留下分类空间的一半
                  range = [offset, 1 - offset]; // 坐标轴最前面和最后面留下空白防止绘制柱状图时
                }
              }
              scale.range = range;
            }
          });
        };

        // 获取x轴对应的度量


        Chart.prototype._getXScale = function _getXScale() {
          var self = this;
          var geoms = self.get('geoms');
          var xScale = geoms[0].getXScale();
          return xScale;
        };

        // 获取y轴对应的度量


        Chart.prototype._getYScales = function _getYScales() {
          var self = this;
          var geoms = self.get('geoms');
          var rst = [];

          Util.each(geoms, function (geom) {
            var yScale = geom.getYScale();
            if (Util.indexOf(rst, yScale) === -1) {
              rst.push(yScale);
            }
          });
          return rst;
        };

        // 绘制坐标轴


        Chart.prototype._renderAxis = function _renderAxis() {
          var self = this;
          var axisAssist = self.get('axisAssist');
          var xScale = self._getXScale();
          var yScales = self._getYScales();
          var coord = self.get('coord');
          axisAssist.createAxis(coord, xScale, yScales);
        };

        /**
         * 添加辅助信息
         * @return {GuideAssist} Guide辅助类
         */

        Chart.prototype.guide = function guide() {
          return this.get('guideAssist');
        };

        Chart.prototype.animate = function animate(cfg) {
          var animateAssist = this.get('animateAssist');
          animateAssist.setAnimate(cfg);
          return self;
        };

        return Chart;
      }(Base);

      module.exports = Chart;

      /***/
    },
    /* 62 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @fileOverview 绘图区域
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);

      /**
       * 画布绘制图表的区域
       * @class Plot
       */

      var Plot = function () {
        Plot.prototype.get = function get(name) {
          return this[name];
        };

        Plot.prototype.set = function set(name, value) {
          this[name] = value;
        };

        function Plot(cfg) {
          _classCallCheck(this, Plot);

          Util.mix(this, cfg);
          this.__init();
        }

        // 初始化，设置4个顶点


        Plot.prototype.__init = function __init() {
          var self = this;
          var start = self.get('start');
          var end = self.get('end');

          var tl = {};
          tl.x = Math.min(start.x, end.x);
          tl.y = Math.min(start.y, end.y);
          self.set('tl', tl);

          var tr = {};
          tr.x = Math.max(start.x, end.x);
          tr.y = Math.min(start.y, end.y);
          self.set('tr', tr);

          var bl = {};
          bl.x = Math.min(start.x, end.x);
          bl.y = Math.max(start.y, end.y);
          self.set('bl', bl);

          var br = {};
          br.x = Math.max(start.x, end.x);
          br.y = Math.max(start.y, end.y);
          self.set('br', br);

          self.set('width', br.x - tl.x);
          self.set('height', br.y - tl.y);
        };

        /**
         * 重置
         * @param  {Object} start 起始点
         * @param  {Object} end  结束点
         */

        Plot.prototype.reset = function reset(start, end) {
          this.set('start', start);
          this.set('end', end);
          this.__init();
        };

        /**
         * 点是否在图表的绘制区域内
         * @param  {Nubmer}  x x坐标点
         * @param  {[type]}  y y坐标点
         * @return {Boolean} 是否在绘制区域内
         */

        Plot.prototype.isInRange = function isInRange(x, y) {
          if (Util.isObject(x)) {
            y = x.y;
            x = x.x;
          }
          var tl = this.get('tl');
          var br = this.get('br');
          return tl.x <= x && x <= br.x && tl.y <= y && y <= br.y;
        };

        return Plot;
      }();

      module.exports = Plot;

      /***/
    },
    /* 63 */
    /***/function (module, exports, __webpack_require__) {

      var Cartesian = __webpack_require__(64);
      var Polar = __webpack_require__(65);

      module.exports = {
        Rect: Cartesian,
        Cartesian: Cartesian,
        Polar: Polar,
        Circle: Polar
      };

      /***/
    },
    /* 64 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview 直角坐标系
       * @author dxq613@gmail.com
       */

      var Base = __webpack_require__(19);

      var Cartesian = function (_Base) {
        _inherits(Cartesian, _Base);

        function Cartesian() {
          _classCallCheck(this, Cartesian);

          return _possibleConstructorReturn(this, _Base.apply(this, arguments));
        }

        Cartesian.prototype.getDefaultCfg = function getDefaultCfg() {
          return {
            type: 'cartesian',
            transposed: false,
            isRect: true,
            plot: null
          };
        };

        Cartesian.prototype.init = function init() {
          var self = this;
          var plot = self.get('plot');
          var start = plot ? plot.get('bl') : self.get('start');
          var end = plot ? plot.get('tr') : self.get('end');

          var x = {
            start: start.x,
            end: end.x
          };

          var y = {
            start: start.y,
            end: end.y
          };
          self.set('x', x);
          self.set('y', y);
        };

        Cartesian.prototype.convertPoint = function convertPoint(point) {
          var self = this;
          var transposed = self.get('transposed');
          var xDim = transposed ? 'y' : 'x';
          var yDim = transposed ? 'x' : 'y';
          var x = self.get('x');
          var y = self.get('y');
          return {
            x: x.start + (x.end - x.start) * point[xDim],
            y: y.start + (y.end - y.start) * point[yDim]
          };
        };

        Cartesian.prototype.invertPoint = function invertPoint(point) {
          var self = this;
          var transposed = self.get('transposed');
          var xDim = transposed ? 'y' : 'x';
          var yDim = transposed ? 'x' : 'y';

          var x = self.get('x');
          var y = self.get('y');

          var rst = {};
          rst[xDim] = (point.x - x.start) / (x.end - x.start);
          rst[yDim] = (point.y - y.start) / (y.end - y.start);
          return rst;
        };

        return Cartesian;
      }(Base);

      module.exports = Cartesian;

      /***/
    },
    /* 65 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview 极坐标系
       * @author dxq613@gmail.com
       */

      var Base = __webpack_require__(19);
      var Vector2 = __webpack_require__(5);

      var Polar = function (_Base) {
        _inherits(Polar, _Base);

        function Polar() {
          _classCallCheck(this, Polar);

          return _possibleConstructorReturn(this, _Base.apply(this, arguments));
        }

        Polar.prototype.getDefaultCfg = function getDefaultCfg() {
          return {
            type: 'polar',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 3 / 2,
            inner: 0,
            innerRadius: 0, // alias
            isPolar: true,
            transposed: false,
            center: null,
            radius: null
          };
        };

        Polar.prototype.init = function init() {
          var self = this;
          var plot = self.get('plot');
          var start = plot ? plot.get('bl') : self.get('start');
          var end = plot ? plot.get('tr') : self.get('end');
          var inner = self.get('inner') || self.get('innerRadius');
          var width = Math.abs(end.x - start.x);
          var height = Math.abs(end.y - start.y);

          var radius = void 0;
          var center = void 0;
          if (self.get('startAngle') === -Math.PI && self.get('endAngle') === 0) {
            radius = Math.min(width / 2, height);
            center = {
              x: (start.x + end.x) / 2,
              y: start.y
            };
          } else {
            radius = Math.min(width, height) / 2;
            center = {
              x: (start.x + end.x) / 2,
              y: (start.y + end.y) / 2
            };
          }

          var x = {
            start: self.get('startAngle'),
            end: self.get('endAngle')
          };

          var y = {
            start: radius * inner,
            end: radius
          };
          self.set('center', center);
          self.set('radius', radius);
          self.set('x', x);
          self.set('y', y);
        };

        Polar.prototype.convertPoint = function convertPoint(point) {
          var self = this;
          var center = self.get('center');
          var transposed = self.get('transposed');
          var xDim = transposed ? 'y' : 'x';
          var yDim = transposed ? 'x' : 'y';

          var x = self.get('x');
          var y = self.get('y');

          var angle = x.start + (x.end - x.start) * point[xDim];
          var radius = y.start + (y.end - y.start) * point[yDim];

          return {
            x: center.x + Math.cos(angle) * radius,
            y: center.y + Math.sin(angle) * radius
          };
        };

        Polar.prototype.invertPoint = function invertPoint(point) {
          var self = this;
          var center = self.get('center');
          var transposed = self.get('transposed');
          var xDim = transposed ? 'y' : 'x';
          var yDim = transposed ? 'x' : 'y';
          var x = self.get('x');
          var y = self.get('y');

          var startv = new Vector2(1, 0);

          var pointv = new Vector2(point.x - center.x, point.y - center.y);

          if (pointv.zero()) {
            return {
              x: 0,
              y: 0
            };
          }

          var theta = startv.angleTo(pointv);
          while (theta > x.end) {
            theta = theta - 2 * Math.PI;
          }
          var l = pointv.length();
          var percentX = (theta - x.start) / (x.end - x.start);
          var percentY = (l - y.start) / (y.end - y.start);
          var rst = {};
          rst[xDim] = percentX;
          rst[yDim] = percentY;
          return rst;
        };

        return Polar;
      }(Base);

      module.exports = Polar;

      /***/
    },
    /* 66 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @fileOverview 度量的控制器
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);
      var Global = __webpack_require__(1);
      var Scale = __webpack_require__(67);
      var TYPES = {
        LINEAR: 'linear',
        CAT: 'cat'
      };

      function getRange(values) {
        if (Util.isArray(values[0])) {
          var tmp = [];
          for (var i = 0; i < values.length; i++) {
            tmp = tmp.concat(values[i]);
          }
          values = tmp;
        }
        var max = Math.max.apply(null, values);
        var min = Math.min.apply(null, values);
        return {
          min: min,
          max: max
        };
      }

      var ScaleAssist = function () {
        function ScaleAssist(cfg) {
          _classCallCheck(this, ScaleAssist);

          // defs 列定义
          this.defs = {};
          Util.mix(this, cfg);
        }

        ScaleAssist.prototype._getDef = function _getDef(field) {
          var defs = this.defs;
          var def = null;
          if (Global.scales[field] || defs[field]) {
            def = Util.mix({}, Global.scales[field]);
            // 处理覆盖属性的问题
            Util.each(defs[field], function (v, k) {
              if (Util.isNil(v)) {
                delete def[k];
              } else {
                def[k] = v;
              }
            });
          }
          return def;
        };

        ScaleAssist.prototype._getDefaultType = function _getDefaultType(field, data) {
          var type = TYPES.LINEAR;
          var value = Util.Array.firstValue(data, field);
          if (Util.isArray(value)) {
            value = value[0];
          }
          if (Util.isString(value)) {
            type = TYPES.CAT;
          }
          return type;
        };

        ScaleAssist.prototype._getScaleCfg = function _getScaleCfg(type, field, data) {
          var cfg = {
            field: field
          };
          var values = Util.Array.values(data, field);
          cfg.values = values;
          if (!Scale.isCategory(type)) {
            var range = getRange(values);
            cfg.min = range.min;
            cfg.max = range.max;
          }
          return cfg;
        };

        ScaleAssist.prototype.createScale = function createScale(field, data) {
          var self = this;
          var def = self._getDef(field);
          var scale = void 0;
          // 如果数据为空直接返回常量度量
          if (!data || !data.length) {
            if (def && def.type) {
              scale = Scale[def.type](def);
            } else {
              scale = Scale.identity({
                value: field,
                field: field.toString(),
                values: [field]
              });
            }
            return scale;
          }
          var firstObj = data[0];
          var firstValue = firstObj[field];
          if (firstValue === null) {
            firstValue = Util.Array.firstValue(data, field);
          }

          if (Util.isNumber(field) || Util.isNil(firstValue) && !def) {
            scale = Scale.identity({
              value: field,
              field: field.toString(),
              values: [field]
            });
          } else {
            // 如果已经定义过这个度量
            var type = void 0;
            if (def) {
              type = def.type;
            }
            type = type || self._getDefaultType(field, data);
            var cfg = self._getScaleCfg(type, field, data);
            if (def) {
              Util.mix(cfg, def);
            }
            scale = Scale[type](cfg);
          }
          return scale;
        };

        return ScaleAssist;
      }();

      module.exports = ScaleAssist;

      /***/
    },
    /* 67 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview Scale entry, used to reference all the scales
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);
      var Base = __webpack_require__(11);
      Base.Linear = __webpack_require__(68);
      Base.Identity = __webpack_require__(71);
      Base.Cat = __webpack_require__(20);
      Base.TimeCat = __webpack_require__(72);

      var _loop = function _loop(k) {
        if (Base.hasOwnProperty(k)) {
          var methodName = Util.lowerFirst(k);
          Base[methodName] = function (cfg) {
            return new Base[k](cfg);
          };
        }
      };

      for (var k in Base) {
        _loop(k);
      }

      var CAT_ARR = ['cat', 'timeCat'];

      Base.isCategory = function (type) {
        return CAT_ARR.indexOf(type) >= 0;
      };

      module.exports = Base;

      /***/
    },
    /* 68 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview The measurement of linear data scale function
       * @author dxq613@gmail.com
       */

      var Base = __webpack_require__(11);
      var Util = __webpack_require__(0);
      var numberAuto = __webpack_require__(69);

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

        /**
         * @override
         */
        Linear.prototype.getDefaultCfg = function getDefaultCfg() {
          var cfg = _Base.prototype.getDefaultCfg.call(this);
          return Util.mix({}, cfg, {
            /**
             * type of the scale
             * @type {String}
             */
            type: 'linear',

            /**
             * 是否线性
             * @type {Boolean}
             * @readOnly
             * @default true
             */
            isLinear: true,

            /**
             * min value of the scale
             * @type {Number}
             * @default null
             */
            min: null,

            /**
             * max value of the scale
             * @type {Number}
             * @default null
             */
            max: null,

            /**
             * 是否为了用户习惯，优化min,max和ticks，如果进行优化，则会根据生成的ticks调整min,max，否则舍弃(min,max)范围之外的ticks
             * @type {Boolean}
             * @default false
             */
            nice: true,

            /**
             * 自动生成标记时的个数
             * @type {Number}
             * @default null
             */
            tickCount: null,

            /**
             * 坐标轴点之间的间距，指的是真实数据的差值
             * @type {Number}
             * @default null
             */
            tickInterval: null
          });
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

      module.exports = Linear;

      /***/
    },
    /* 69 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview 自动计算数字坐标轴
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);
      var AutoUtil = __webpack_require__(70);
      var MIN_COUNT = 5;
      var MAX_COUNT = 7;
      var INTERVAL_ARRAY = [0, 1, 2, 4, 5, 10];

      module.exports = function (info) {
        var min = info.min;
        var max = info.max;
        var interval = info.interval;
        var ticks = [];
        var minCount = info.minCount || MIN_COUNT;
        var maxCount = info.maxCount || MAX_COUNT;
        var avgCount = (minCount + maxCount) / 2;
        var count = void 0;

        if (Util.isNil(min)) {
          min = 0;
        }
        if (Util.isNil(max)) {
          max = 0;
        }
        if (max === min) {
          if (min === 0) {
            max = 1;
          } else {
            if (min > 0) {
              min = 0;
            } else {
              max = 0;
            }
          }
          if (max - min < 5 && !interval && max - min >= 1) {
            interval = 1;
          }
        }

        if (Util.isNil(interval)) {
          // 计算间距
          var temp = (max - min) / (avgCount - 1);
          interval = AutoUtil.snapFactorTo(temp, INTERVAL_ARRAY, 'ceil');
          if (maxCount !== minCount) {
            count = parseInt((max - min) / interval, 10);
            if (count > maxCount) {
              count = maxCount;
            }
            if (count < minCount) {
              count = minCount;
            }
            // 不确定tick的个数时，使得tick偏小
            interval = AutoUtil.snapFactorTo((max - min) / (count - 1), INTERVAL_ARRAY, 'floor');
          } else {
            count = avgCount;
          }
        }
        if (info.interval || maxCount !== minCount) {
          // 校正 max 和 min
          max = AutoUtil.snapMultiple(max, interval, 'ceil'); // 向上逼近
          min = AutoUtil.snapMultiple(min, interval, 'floor'); // 向下逼近
          count = Math.round((max - min) / interval);
          min = Util.fixedBase(min, interval);
          max = Util.fixedBase(max, interval);
        } else {
          avgCount = parseInt(avgCount, 10); // 取整
          var avg = (max + min) / 2;
          var avgTick = AutoUtil.snapMultiple(avg, interval, 'ceil');
          var sideCount = Math.floor((avgCount - 2) / 2);
          var maxTick = avgTick + sideCount * interval;
          var minTick = void 0;
          if (avgCount % 2 === 0) {
            minTick = avgTick - sideCount * interval;
          } else {
            minTick = avgTick - (sideCount + 1) * interval;
          }
          if (maxTick < max) {
            maxTick = maxTick + interval;
          }
          if (minTick > min) {
            minTick = minTick - interval;
          }
          max = Util.fixedBase(maxTick, interval);
          min = Util.fixedBase(minTick, interval);
        }

        ticks.push(min);
        for (var i = 1; i < count; i++) {
          ticks.push(Util.fixedBase(interval * i + min, interval));
        }
        if (ticks[ticks.length - 1] < max) {
          ticks.push(max);
        }
        return {
          min: min,
          max: max,
          interval: interval,
          count: count,
          ticks: ticks
        };
      };

      /***/
    },
    /* 70 */
    /***/function (module, exports) {

      /**
       * @fileOverview 计算方法
       * @author dxq613@gmail.com
       */

      // 获取系数
      function getFactor(v) {
        var factor = 1;
        if (v < 1) {
          var count = 0;
          while (v < 1) {
            factor = factor / 10;
            v = v * 10;
            count++;
          }
          // 浮点数计算出现问题
          if (factor.toString().length > 20) {
            factor = parseFloat(factor.toFixed(count));
          }
        } else {
          while (v > 10) {
            factor = factor * 10;
            v = v / 10;
          }
        }

        return factor;
      }

      // 取小于当前值的
      function arrayFloor(values, value) {
        var length = values.length;
        if (length === 0) {
          return NaN;
        }

        var pre = values[0];

        if (value < values[0]) {
          return NaN;
        }

        if (value >= values[length - 1]) {
          return values[length - 1];
        }
        for (var i = 1; i < values.length; i++) {
          if (value < values[i]) {
            break;
          }
          pre = values[i];
        }

        return pre;
      }

      // 大于当前值的第一个
      function arrayCeiling(values, value) {
        var length = values.length;
        if (length === 0) {
          return NaN;
        }
        // var pre = values[0];
        var rst = void 0;
        if (value > values[length - 1]) {
          return NaN;
        }
        if (value < values[0]) {
          return values[0];
        }

        for (var i = 1; i < values.length; i++) {
          if (value <= values[i]) {
            rst = values[i];
            break;
          }
        }

        return rst;
      }

      var Util = {
        // 获取逼近的数值
        snapFactorTo: function snapFactorTo(v, arr, snapType) {
          // 假设 v = -512,isFloor = true
          if (isNaN(v)) {
            return NaN;
          }
          var factor = 1; // 计算系数
          if (v !== 0) {
            if (v < 0) {
              factor = -1;
            }
            v = v * factor; // v = 512
            var tmpFactor = getFactor(v);
            factor = factor * tmpFactor; // factor = -100

            v = v / tmpFactor; // v = 5.12
          }
          if (snapType === 'floor') {
            v = Util.snapFloor(arr, v); // v = 5
          } else if (snapType === 'ceil') {
            v = Util.snapCeiling(arr, v); // v = 6
          } else {
            v = Util.snapTo(arr, v); // 四舍五入 5
          }
          var rst = v * factor;
          // 如果出现浮点数计算问题，需要处理一下
          if (Math.abs(factor) < 1 && rst.toString().length > 20) {
            var decimalVal = parseInt(1 / factor);
            var symbol = factor > 0 ? 1 : -1;
            rst = v / decimalVal * symbol;
          }
          return rst;
        },

        // 获取逼近的倍数
        snapMultiple: function snapMultiple(v, base, snapType) {
          var div = void 0;
          if (snapType === 'ceil') {
            div = Math.ceil(v / base);
          } else if (snapType === 'floor') {
            div = Math.floor(v / base);
          } else {
            div = Math.round(v / base);
          }
          return div * base;
        },

        /**
         * 获取逼近的值，用于对齐数据
         * @param  {Array} values   数据集合
         * @param  {Number} value   数值
         * @return {Number} 逼近的值
         */
        snapTo: function snapTo(values, value) {
          // 这里假定values是升序排列
          var floorVal = arrayFloor(values, value);
          var ceilingVal = arrayCeiling(values, value);
          if (isNaN(floorVal) || isNaN(ceilingVal)) {
            if (values[0] >= value) {
              return values[0];
            }
            var last = values[values.length - 1];
            if (last <= value) {
              return last;
            }
          }
          if (Math.abs(value - floorVal) < Math.abs(ceilingVal - value)) {
            return floorVal;
          }
          return ceilingVal;
        },

        /**
         * 获取逼近的最小值，用于对齐数据
         * @param  {Array} values   数据集合
         * @param  {Number} value   数值
         * @return {Number} 逼近的最小值
         */
        snapFloor: function snapFloor(values, value) {
          // 这里假定values是升序排列
          return arrayFloor(values, value);
        },

        /**
         * 获取逼近的最大值，用于对齐数据
         * @param  {Array} values   数据集合
         * @param  {Number} value   数值
         * @return {Number} 逼近的最大值
         */
        snapCeiling: function snapCeiling(values, value) {
          // 这里假定values是升序排列
          return arrayCeiling(values, value);
        }
      };

      module.exports = Util;

      /***/
    },
    /* 71 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview The data is replaced with constant
       * @author dxq613@gmail.com
       */

      var Base = __webpack_require__(11);
      var Util = __webpack_require__(0);

      var Identity = function (_Base) {
        _inherits(Identity, _Base);

        function Identity() {
          _classCallCheck(this, Identity);

          return _possibleConstructorReturn(this, _Base.apply(this, arguments));
        }

        /**
         * @override
         */
        Identity.prototype.getDefaultCfg = function getDefaultCfg() {
          var cfg = _Base.prototype.getDefaultCfg.call(this);
          return Util.mix({}, cfg, {
            isIdentity: true,
            /**
             * @override
             * @type {String}
             */
            type: 'identity',

            /**
             * 常量值
             * @type {*}
             */
            value: null
          });
        };

        /**
         * @override
         */

        Identity.prototype.getText = function getText() {
          return this.value.toString();
        };

        /**
         * @override
         */

        Identity.prototype.scale = function scale(value) {
          if (this.value !== value && Util.isNumber(value)) {
            return value;
          }
          return this.range[0];
        };

        /**
         * @override
         */

        Identity.prototype.invert = function invert() {
          return this.value;
        };

        return Identity;
      }(Base);

      module.exports = Identity;

      /***/
    },
    /* 72 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview 时间数据作为分类类型
       * @author dxq613@gmail.com
       */

      var Category = __webpack_require__(20);
      var Util = __webpack_require__(0);
      var fecha = __webpack_require__(73);
      var catAuto = __webpack_require__(21);
      var TimeUtil = __webpack_require__(74);

      /**
       * 度量的构造函数
       * @class Scale.TimeCategory
       */

      var TimeCategory = function (_Category) {
        _inherits(TimeCategory, _Category);

        function TimeCategory() {
          _classCallCheck(this, TimeCategory);

          return _possibleConstructorReturn(this, _Category.apply(this, arguments));
        }

        /**
         * @override
         */
        TimeCategory.prototype.getDefaultCfg = function getDefaultCfg() {
          var cfg = _Category.prototype.getDefaultCfg.call(this);
          return Util.mix({}, cfg, {
            /**
             * @override
             */
            type: 'timeCat',

            /**
             * 格式化符
             * @type {String}
             */
            mask: 'YYYY-MM-DD',

            /**
             * @override
             */
            tickCount: 5
          });
        };

        TimeCategory.prototype.init = function init() {
          var self = this;
          var values = this.values;
          // 针对时间分类类型，会将时间统一转换为时间戳
          Util.each(values, function (v, i) {
            values[i] = self._toTimeStamp(v);
          });
          values.sort(function (v1, v2) {
            return v1 - v2;
          });

          if (!self.ticks) {
            self.ticks = this.calculateTicks(false);
          }
        };

        /**
         * 计算 ticks
         * @param  {boolean} formated 是否将 ticks 按照指定的 mask 格式化
         * @return {array} 返回 ticks 数组
         */

        TimeCategory.prototype.calculateTicks = function calculateTicks(formated) {
          var self = this;
          var count = self.tickCount;
          var temp = catAuto({
            maxCount: count,
            data: self.values
          });

          var ticks = temp.ticks;
          if (formated) {
            Util.each(ticks, function (value, index) {
              ticks[index] = fecha.format(value, self.mask);
            });
          }
          return ticks;
        };

        /**
         * @override
         */

        TimeCategory.prototype.translate = function translate(value) {
          value = this._toTimeStamp(value);
          var index = this.values.indexOf(value);

          if (index === -1) {
            if (Util.isNumber(value) && value < this.values.length) {
              index = value;
            } else {
              index = NaN;
            }
          }
          return index;
        };

        /**
         * @override
         */

        TimeCategory.prototype.scale = function scale(value) {
          var rangeMin = this.rangeMin();
          var rangeMax = this.rangeMax();
          var index = this.translate(value);
          var percent = void 0;

          if (this.values.length === 1) {
            percent = index;
          } else if (index > -1) {
            percent = index / (this.values.length - 1);
          } else {
            percent = 0;
          }

          return rangeMin + percent * (rangeMax - rangeMin);
        };

        /**
         * @override
         */

        TimeCategory.prototype.getText = function getText(value) {
          var result = '';
          var index = this.translate(value);
          if (index > -1) {
            result = this.values[index];
          } else {
            result = value;
          }

          var formatter = this.formatter;
          result = parseInt(result, 10);
          result = formatter ? formatter(result) : fecha.format(result, this.mask);
          return result;
        };

        /**
         * @override
         */

        TimeCategory.prototype.getTicks = function getTicks() {
          var self = this;
          var ticks = this.ticks;
          var rst = [];
          Util.each(ticks, function (tick) {
            var obj = void 0;
            if (Util.isObject(tick)) {
              obj = tick;
            } else {
              obj = {
                text: Util.isString(tick) ? tick : self.getText(tick),
                value: self.scale(tick)
              };
            }
            rst.push(obj);
          });
          return rst;
        };

        // 将时间转换为时间戳


        TimeCategory.prototype._toTimeStamp = function _toTimeStamp(value) {
          return TimeUtil.toTimeStamp(value);
        };

        return TimeCategory;
      }(Category);

      module.exports = TimeCategory;

      /***/
    },
    /* 73 */
    /***/function (module, exports, __webpack_require__) {

      var __WEBPACK_AMD_DEFINE_RESULT__;(function (main) {
        'use strict';

        /**
         * Parse or format dates
         * @class fecha
         */

        var fecha = {};
        var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
        var twoDigits = /\d\d?/;
        var threeDigits = /\d{3}/;
        var fourDigits = /\d{4}/;
        var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
        var literal = /\[([^]*?)\]/gm;
        var noop = function noop() {};

        function shorten(arr, sLen) {
          var newArr = [];
          for (var i = 0, len = arr.length; i < len; i++) {
            newArr.push(arr[i].substr(0, sLen));
          }
          return newArr;
        }

        function monthUpdate(arrName) {
          return function (d, v, i18n) {
            var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
            if (~index) {
              d.month = index;
            }
          };
        }

        function pad(val, len) {
          val = String(val);
          len = len || 2;
          while (val.length < len) {
            val = '0' + val;
          }
          return val;
        }

        var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var monthNamesShort = shorten(monthNames, 3);
        var dayNamesShort = shorten(dayNames, 3);
        fecha.i18n = {
          dayNamesShort: dayNamesShort,
          dayNames: dayNames,
          monthNamesShort: monthNamesShort,
          monthNames: monthNames,
          amPm: ['am', 'pm'],
          DoFn: function DoFn(D) {
            return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
          }
        };

        var formatFlags = {
          D: function D(dateObj) {
            return dateObj.getDate();
          },
          DD: function DD(dateObj) {
            return pad(dateObj.getDate());
          },
          Do: function Do(dateObj, i18n) {
            return i18n.DoFn(dateObj.getDate());
          },
          d: function d(dateObj) {
            return dateObj.getDay();
          },
          dd: function dd(dateObj) {
            return pad(dateObj.getDay());
          },
          ddd: function ddd(dateObj, i18n) {
            return i18n.dayNamesShort[dateObj.getDay()];
          },
          dddd: function dddd(dateObj, i18n) {
            return i18n.dayNames[dateObj.getDay()];
          },
          M: function M(dateObj) {
            return dateObj.getMonth() + 1;
          },
          MM: function MM(dateObj) {
            return pad(dateObj.getMonth() + 1);
          },
          MMM: function MMM(dateObj, i18n) {
            return i18n.monthNamesShort[dateObj.getMonth()];
          },
          MMMM: function MMMM(dateObj, i18n) {
            return i18n.monthNames[dateObj.getMonth()];
          },
          YY: function YY(dateObj) {
            return String(dateObj.getFullYear()).substr(2);
          },
          YYYY: function YYYY(dateObj) {
            return dateObj.getFullYear();
          },
          h: function h(dateObj) {
            return dateObj.getHours() % 12 || 12;
          },
          hh: function hh(dateObj) {
            return pad(dateObj.getHours() % 12 || 12);
          },
          H: function H(dateObj) {
            return dateObj.getHours();
          },
          HH: function HH(dateObj) {
            return pad(dateObj.getHours());
          },
          m: function m(dateObj) {
            return dateObj.getMinutes();
          },
          mm: function mm(dateObj) {
            return pad(dateObj.getMinutes());
          },
          s: function s(dateObj) {
            return dateObj.getSeconds();
          },
          ss: function ss(dateObj) {
            return pad(dateObj.getSeconds());
          },
          S: function S(dateObj) {
            return Math.round(dateObj.getMilliseconds() / 100);
          },
          SS: function SS(dateObj) {
            return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
          },
          SSS: function SSS(dateObj) {
            return pad(dateObj.getMilliseconds(), 3);
          },
          a: function a(dateObj, i18n) {
            return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
          },
          A: function A(dateObj, i18n) {
            return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
          },
          ZZ: function ZZ(dateObj) {
            var o = dateObj.getTimezoneOffset();
            return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
          }
        };

        var parseFlags = {
          D: [twoDigits, function (d, v) {
            d.day = v;
          }],
          Do: [new RegExp(twoDigits.source + word.source), function (d, v) {
            d.day = parseInt(v, 10);
          }],
          M: [twoDigits, function (d, v) {
            d.month = v - 1;
          }],
          YY: [twoDigits, function (d, v) {
            var da = new Date(),
                cent = +('' + da.getFullYear()).substr(0, 2);
            d.year = '' + (v > 68 ? cent - 1 : cent) + v;
          }],
          h: [twoDigits, function (d, v) {
            d.hour = v;
          }],
          m: [twoDigits, function (d, v) {
            d.minute = v;
          }],
          s: [twoDigits, function (d, v) {
            d.second = v;
          }],
          YYYY: [fourDigits, function (d, v) {
            d.year = v;
          }],
          S: [/\d/, function (d, v) {
            d.millisecond = v * 100;
          }],
          SS: [/\d{2}/, function (d, v) {
            d.millisecond = v * 10;
          }],
          SSS: [threeDigits, function (d, v) {
            d.millisecond = v;
          }],
          d: [twoDigits, noop],
          ddd: [word, noop],
          MMM: [word, monthUpdate('monthNamesShort')],
          MMMM: [word, monthUpdate('monthNames')],
          a: [word, function (d, v, i18n) {
            var val = v.toLowerCase();
            if (val === i18n.amPm[0]) {
              d.isPm = false;
            } else if (val === i18n.amPm[1]) {
              d.isPm = true;
            }
          }],
          ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function (d, v) {
            if (v === 'Z') v = '+00:00';
            var parts = (v + '').match(/([\+\-]|\d\d)/gi),
                minutes;

            if (parts) {
              minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
              d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
            }
          }]
        };
        parseFlags.dd = parseFlags.d;
        parseFlags.dddd = parseFlags.ddd;
        parseFlags.DD = parseFlags.D;
        parseFlags.mm = parseFlags.m;
        parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
        parseFlags.MM = parseFlags.M;
        parseFlags.ss = parseFlags.s;
        parseFlags.A = parseFlags.a;

        // Some common format strings
        fecha.masks = {
          default: 'ddd MMM DD YYYY HH:mm:ss',
          shortDate: 'M/D/YY',
          mediumDate: 'MMM D, YYYY',
          longDate: 'MMMM D, YYYY',
          fullDate: 'dddd, MMMM D, YYYY',
          shortTime: 'HH:mm',
          mediumTime: 'HH:mm:ss',
          longTime: 'HH:mm:ss.SSS'
        };

        /***
         * Format a date
         * @method format
         * @param {Date|number} dateObj
         * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
         */
        fecha.format = function (dateObj, mask, i18nSettings) {
          var i18n = i18nSettings || fecha.i18n;

          if (typeof dateObj === 'number') {
            dateObj = new Date(dateObj);
          }

          if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
            throw new Error('Invalid Date in fecha.format');
          }

          mask = fecha.masks[mask] || mask || fecha.masks['default'];

          var literals = [];

          // Make literals inactive by replacing them with ??
          mask = mask.replace(literal, function ($0, $1) {
            literals.push($1);
            return '??';
          });
          // Apply formatting rules
          mask = mask.replace(token, function ($0) {
            return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
          });
          // Inline literal values back into the formatted value
          return mask.replace(/\?\?/g, function () {
            return literals.shift();
          });
        };

        /**
         * Parse a date string into an object, changes - into /
         * @method parse
         * @param {string} dateStr Date string
         * @param {string} format Date parse format
         * @returns {Date|boolean}
         */
        fecha.parse = function (dateStr, format, i18nSettings) {
          var i18n = i18nSettings || fecha.i18n;

          if (typeof format !== 'string') {
            throw new Error('Invalid format in fecha.parse');
          }

          format = fecha.masks[format] || format;

          // Avoid regular expression denial of service, fail early for really long strings
          // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
          if (dateStr.length > 1000) {
            return false;
          }

          var isValid = true;
          var dateInfo = {};
          format.replace(token, function ($0) {
            if (parseFlags[$0]) {
              var info = parseFlags[$0];
              var index = dateStr.search(info[0]);
              if (!~index) {
                isValid = false;
              } else {
                dateStr.replace(info[0], function (result) {
                  info[1](dateInfo, result, i18n);
                  dateStr = dateStr.substr(index + result.length);
                  return result;
                });
              }
            }

            return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
          });

          if (!isValid) {
            return false;
          }

          var today = new Date();
          if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
            dateInfo.hour = +dateInfo.hour + 12;
          } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
            dateInfo.hour = 0;
          }

          var date;
          if (dateInfo.timezoneOffset != null) {
            dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
            date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
          } else {
            date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
          }
          return date;
        };

        /* istanbul ignore next */
        if (typeof module !== 'undefined' && module.exports) {
          module.exports = fecha;
        } else if (true) {
          !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return fecha;
          }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {
          main.fecha = fecha;
        }
      })(this);

      /***/
    },
    /* 74 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * @fileOverview 提取公共代码到util方法
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);

      module.exports = {
        toTimeStamp: function toTimeStamp(value) {
          if (Util.isString(value)) {
            if (value.indexOf('T') > 0) {
              value = new Date(value).getTime();
            } else {
              value = new Date(value.replace(/-/ig, '/')).getTime();
            }
          }
          if (Util.isDate(value)) {
            value = value.getTime();
          }
          return value;
        }
      };

      /***/
    },
    /* 75 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @fileOverview axis assist
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);
      var Axis = __webpack_require__(76);
      var Global = __webpack_require__(1);

      function formatTicks(ticks) {
        var tmp = ticks.slice(0);
        if (tmp.length > 0) {
          var first = tmp[0];
          var last = tmp[tmp.length - 1];
          if (first.value !== 0) {
            tmp.unshift({
              value: 0
            });
          }
          if (last.value !== 1) {
            tmp.push({
              value: 1
            });
          }
        }

        return tmp;
      }

      var AxisAssist = function () {
        function AxisAssist(cfg) {
          _classCallCheck(this, AxisAssist);

          this.axisCfg = {};
          this.canvas = null;
          Util.mix(this, cfg);
        }

        // 对应的坐标轴是否隐藏


        AxisAssist.prototype._isHide = function _isHide(field) {
          var axisCfg = this.axisCfg;
          return !axisCfg || axisCfg[field] === false;
        };

        AxisAssist.prototype._getLinePosition = function _getLinePosition(dimType, index) {
          var position = '';
          if (dimType === 'x') {
            position = 'bottom';
          }
          if (dimType === 'y') {
            if (index) {
              position = 'right';
            } else {
              position = 'left';
            }
          }
          return position;
        };

        AxisAssist.prototype._getLineCfg = function _getLineCfg(coord, dimType, index) {
          var start = void 0;
          var end = void 0;
          var factor = 1; // 文本的对齐方式，是顺时针方向还是逆时针方向
          if (dimType === 'x') {
            // x轴的坐标轴,底部的横坐标
            start = {
              x: 0,
              y: 0
            };
            end = {
              x: 1,
              y: 0
            };
          } else {
            // y轴坐标轴
            if (index) {
              // 多轴的情况
              start = {
                x: 1,
                y: 0
              };
              end = {
                x: 1,
                y: 1
              };
            } else {
              // 单个y轴，或者第一个y轴
              start = {
                x: 0,
                y: 0
              };
              end = {
                x: 0,
                y: 1
              };
              factor = -1;
            }
          }
          if (coord.transposed) {
            factor *= -1;
          }

          return {
            offsetFactor: factor,
            start: coord.convertPoint(start),
            end: coord.convertPoint(end)
          };
        };

        AxisAssist.prototype._getCircleCfg = function _getCircleCfg(coord) {
          return {
            startAngle: coord.get('startAngle'),
            endAngle: coord.get('endAngle'),
            center: coord.get('center'),
            radius: coord.get('radius')
          };
        };

        AxisAssist.prototype._getRadiusCfg = function _getRadiusCfg(coord) {
          var transposed = coord.transposed;
          var start = void 0;
          var end = void 0;
          if (transposed) {
            start = {
              x: 0,
              y: 0
            };
            end = {
              x: 1,
              y: 0
            };
          } else {
            start = {
              x: 0,
              y: 0
            };
            end = {
              x: 0,
              y: 1
            };
          }
          return {
            offsetFactor: -1,
            start: coord.convertPoint(start),
            end: coord.convertPoint(end)
          };
        };

        AxisAssist.prototype._getAxisCfg = function _getAxisCfg(coord, scale, verticalScale, dimType, defaultCfg) {
          var axisCfg = this.axisCfg;
          var ticks = scale.getTicks();
          var cfg = Util.deepMix({
            ticks: ticks,
            canvas: this.canvas
          }, defaultCfg, axisCfg[scale.field]);

          // 计算栅格
          if (cfg.grid && verticalScale) {
            var gridPoints = [];
            var verticalTicks = formatTicks(verticalScale.getTicks());

            Util.each(ticks, function (tick) {
              var subPoints = [];
              Util.each(verticalTicks, function (verticalTick) {
                var x = dimType === 'x' ? tick.value : verticalTick.value;
                var y = dimType === 'x' ? verticalTick.value : tick.value;
                var point = coord.convertPoint({
                  x: x,
                  y: y
                });
                subPoints.push(point);
              });
              gridPoints.push(subPoints);
            });
            cfg.gridPoints = gridPoints;
          }
          return cfg;
        };

        AxisAssist.prototype._createAxis = function _createAxis(coord, scale, verticalScale, dimType, index) {
          var self = this;
          var coordType = coord.get('type');
          var transposed = coord.transposed;
          var C = void 0;
          var defaultCfg = void 0;
          var appendCfg = void 0; // 跟特定坐标轴相关的配置项
          if (coordType === 'cartesian' || coordType === 'rect') {
            // 直角坐标系下
            C = Axis.Line;
            var position = self._getLinePosition(dimType, index);
            defaultCfg = Global.axis[position];
            appendCfg = self._getLineCfg(coord, dimType, index);
          } else {
            // 极坐标系下
            if (dimType === 'x' && !transposed || dimType === 'y' && transposed) {
              // 圆形坐标轴
              C = Axis.Circle;
              defaultCfg = Global.axis.circle;
              appendCfg = self._getCircleCfg(coord);
            } else {
              // 半径坐标轴
              C = Axis.Line;
              defaultCfg = Global.axis.radius;
              appendCfg = self._getRadiusCfg(coord);
            }
          }
          var cfg = self._getAxisCfg(coord, scale, verticalScale, dimType, defaultCfg); // 坐标轴的配置项
          cfg = Util.mix({}, cfg, appendCfg);
          var axis = new C(cfg);
          axis.drawGrid();
          return axis;
        };

        /**
         * 绘制坐标轴
         * @param  {Coord} coord 坐标系
         * @param  {Scale} xScale  x轴的度量
         * @param  {Scale} yScales y轴的度量
         */

        AxisAssist.prototype.createAxis = function createAxis(coord, xScale, yScales) {
          var self = this;
          var arr = [];
          if (xScale && !self._isHide(xScale.field)) {
            var xAxis = self._createAxis(coord, xScale, yScales[0], 'x'); // 绘制 x 轴
            arr.push(xAxis);
          }
          Util.each(yScales, function (yScale, index) {
            if (!self._isHide(yScale.field)) {
              var axis = self._createAxis(coord, yScale, xScale, 'y', index);
              arr.push(axis);
            }
          });

          Util.each(arr, function (axis) {
            axis.draw();
          });
        };

        return AxisAssist;
      }();

      module.exports = AxisAssist;

      /***/
    },
    /* 76 */
    /***/function (module, exports, __webpack_require__) {

      module.exports = {
        Line: __webpack_require__(77),
        Circle: __webpack_require__(78)
      };

      /***/
    },
    /* 77 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview 线性的坐标轴
       * @author dxq613@gmail.com
       */

      var Abstract = __webpack_require__(22);
      var G = __webpack_require__(2);
      var Vector2 = __webpack_require__(5);

      var AxisLine = function (_Abstract) {
        _inherits(AxisLine, _Abstract);

        function AxisLine() {
          _classCallCheck(this, AxisLine);

          return _possibleConstructorReturn(this, _Abstract.apply(this, arguments));
        }

        AxisLine.prototype.getDefaultCfg = function getDefaultCfg() {
          var cfg = _Abstract.prototype.getDefaultCfg.call(this);
          cfg.start = null;
          cfg.end = null;
          return cfg;
        };
        // 获取坐标轴上的点


        AxisLine.prototype.getOffsetPoint = function getOffsetPoint(value) {
          var self = this;
          var start = self.get('start');
          var end = self.get('end');
          var rangeX = end.x - start.x;
          var rangeY = end.y - start.y;
          return {
            x: start.x + rangeX * value,
            y: start.y + rangeY * value
          };
        };

        // 获取坐标轴上点的向量，极坐标下覆盖此方法


        AxisLine.prototype.getAxisVector = function getAxisVector() {
          var self = this;
          var start = self.get('start');
          var end = self.get('end');
          return new Vector2(end.x - start.x, end.y - start.y);
        };

        AxisLine.prototype.drawLine = function drawLine(lineCfg) {
          var self = this;
          var canvas = self.get('canvas');
          var start = self.get('start');
          var end = self.get('end');
          G.drawLine(start, end, canvas, lineCfg);
        };

        return AxisLine;
      }(Abstract);

      module.exports = AxisLine;

      /***/
    },
    /* 78 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @fileOverview 圆形坐标轴
       * @author dxq613@gmail.com
       */

      var Util = __webpack_require__(0);
      var Abstract = __webpack_require__(22);
      var G = __webpack_require__(2);
      var Vector2 = __webpack_require__(5);

      var AxisCircle = function (_Abstract) {
        _inherits(AxisCircle, _Abstract);

        function AxisCircle() {
          _classCallCheck(this, AxisCircle);

          return _possibleConstructorReturn(this, _Abstract.apply(this, arguments));
        }

        AxisCircle.prototype.getDefaultCfg = function getDefaultCfg() {
          var cfg = _Abstract.prototype.getDefaultCfg.call(this);
          Util.mix(cfg, {
            /**
             * 起始角度
             * @type {Number}
             */
            startAngle: -Math.PI / 2,

            /**
             * 结束角度
             * @type {Number}
             */
            endAngle: Math.PI * 3 / 2,

            /**
             * 半径
             * @type {Number}
             */
            radius: null,

            /**
             * 圆心
             * @type {Object}
             */
            center: null
          });
          return cfg;
        };

        // 获取坐标轴上的点


        AxisCircle.prototype.getOffsetPoint = function getOffsetPoint(value) {
          var self = this;
          var startAngle = self.get('startAngle');
          var endAngle = self.get('endAngle');
          var angle = startAngle + (endAngle - startAngle) * value;
          return self._getCirclePoint(angle);
        };

        // 获取圆上的点


        AxisCircle.prototype._getCirclePoint = function _getCirclePoint(angle, radius) {
          var self = this;
          var center = self.get('center');
          radius = radius || self.get('radius');
          return {
            x: center.x + Math.cos(angle) * radius,
            y: center.y + Math.sin(angle) * radius
          };
        };

        AxisCircle.prototype.getTextAlignInfo = function getTextAlignInfo(point, offset) {
          var self = this;
          var offsetVector = self.getOffsetVector(point, offset);
          var align = void 0;
          var baseLine = 'middle';
          if (offsetVector.x > 0) {
            align = 'left';
          } else if (offsetVector.x < 0) {
            align = 'right';
          } else {
            align = 'center';
            if (offsetVector.y > 0) {
              baseLine = 'top';
            } else if (offsetVector.y < 0) {
              baseLine = 'bottom';
            }
          }
          return {
            textAlign: align,
            textBaseline: baseLine
          };
        };

        // 获取坐标轴上点的向量，极坐标下覆盖此方法


        AxisCircle.prototype.getAxisVector = function getAxisVector(point) {
          var self = this;
          var center = self.get('center');
          var factor = self.get('offsetFactor');
          return new Vector2((point.y - center.y) * factor, (point.x - center.x) * -1 * factor);
        };

        AxisCircle.prototype.drawLine = function drawLine(lineCfg) {
          var self = this;
          var center = self.get('center');
          var radius = self.get('radius');
          var canvas = self.get('canvas');
          var startAngle = self.get('startAngle');
          var endAngle = self.get('endAngle');
          G.drawArc(center, radius, startAngle, endAngle, canvas, lineCfg);
        };

        return AxisCircle;
      }(Abstract);

      module.exports = AxisCircle;

      /***/
    },
    /* 79 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @fileOverview animate assist to g2-mobile
       * @ignore
       */

      var Util = __webpack_require__(0);
      var Global = __webpack_require__(1);
      var Animate = __webpack_require__(14);

      var AnimateAssist = function () {
        function AnimateAssist(cfg) {
          _classCallCheck(this, AnimateAssist);

          this.animate = false;
          Util.mix(this, cfg);
        }

        AnimateAssist.prototype.setOptions = function setOptions(options) {
          this.options = options;
          if (this.animate) {
            Util.mix(this.animate, options);
          }
        };

        AnimateAssist.prototype.setAnimate = function setAnimate(cfg) {
          // 停止之前的动画
          if (this.animate) {
            this.animate.stop();
          }
          if (cfg === false) {
            this.animate = false;
          } else {
            var type = cfg.type;
            var animateName = Util.upperFirst(type);
            var animate = new Animate[animateName](cfg);
            Util.mix(animate, this.options);
            this.animate = animate;
          }
        };

        AnimateAssist.prototype.setCallBack = function setCallBack(callback) {
          var success = this.animate.success;
          var cb = null;
          if (Util.isFunction(success)) {
            cb = function cb() {
              callback();
              success();
            };
          } else {
            cb = callback;
          }

          this.animate.success = cb;
        };

        AnimateAssist.prototype.paint = function paint(canvas) {
          var animate = this.animate;
          animate.cycle = Global.animateReduceMultiple;
          animate.paint(canvas);
        };

        AnimateAssist.prototype.stop = function stop() {
          var animate = this.animate;
          animate && animate.stop && animate.stop();
        };

        // 停止正在运行的动画


        AnimateAssist.prototype.clear = function clear() {
          this.stop();
          this.animate = null;
        };

        return AnimateAssist;
      }();

      module.exports = AnimateAssist;

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;

var _chart = __webpack_require__(2);

var _chart2 = _interopRequireDefault(_chart);

var _f = __webpack_require__(0);

var _f2 = _interopRequireDefault(_f);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyF2 = {};

Object.keys(_f2.default).map(function (key) {
  MyF2[key] = _f2.default[key];
});

MyF2.Chart = _chart2.default;

exports.default = MyF2;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;

var _render = __webpack_require__(3);

var _render2 = _interopRequireDefault(_render);

var _f = __webpack_require__(0);

var _f2 = _interopRequireDefault(_f);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chart = function (_F2$Chart) {
  _inherits(Chart, _F2$Chart);

  function Chart(cfg) {
    _classCallCheck(this, Chart);

    var el = cfg.el,
        width = cfg.width,
        height = cfg.height;

    if (!(el && width && height)) {
      throw new Error('Please specify the el, width and height!');
    }

    var render = new _render2.default(el);
    cfg.el = render;
    return _possibleConstructorReturn(this, _F2$Chart.call(this, cfg));
  }

  return Chart;
}(_f2.default.Chart);

exports.default = Chart;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * F2 canvas context adapter for miniapp
 * @authors (sima.zhang1990@gmail.com)
 * @date    2017-12-04 13:09:44
 * @version 0.0.2
 */

var CAPITALIZED_ATTRS_MAP = {
  fillStyle: 'FillStyle',
  fontSize: 'FontSize',
  opacity: 'GlobalAlpha',
  lineCap: 'LineCap',
  lineJoin: 'LineJoin',
  lineWidth: 'LineWidth',
  miterLimit: 'MiterLimit',
  strokeStyle: 'StrokeStyle',
  textAlign: 'TextAlign',
  textBaseline: 'TextBaseline'
};

var Render = function () {
  function Render(myCtx) {
    _classCallCheck(this, Render);

    var self = this;
    self.myCtx = myCtx;
    self.style = {}; // just mock
    this.getContext = function () {
      return self._initContext(myCtx);
    };
  }

  Render.prototype._initContext = function _initContext(myCtx) {
    var context = {};
    Object.keys(CAPITALIZED_ATTRS_MAP).map(function (key) {
      Object.defineProperty(context, key, {
        set: function set(value) {
          var name = 'set' + CAPITALIZED_ATTRS_MAP[key];
          myCtx[name](value);
        }
      });
    });

    var myCtxFuncs = Object.keys(myCtx.__proto__);

    myCtxFuncs.map(function (funcName) {
      if (typeof myCtx[funcName] === 'function') {
        context[funcName] = function () {
          myCtx[funcName].apply(myCtx, arguments);
        };
      }
    });

    // important: rewrite restore function
    context.restore = function () {
      myCtx.restore();
      myCtx.draw(true); // must be called
    };

    return context;
  };

  return Render;
}();

exports.default = Render;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ })
/******/ ]);
});