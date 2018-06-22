/**
 * @fileOverview 计算分类的的坐标点
 * @author dxq613@gmail.com
 */

var Util = require('../../util/common');
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
    for (var i = 1, groupLen = groups.length; i < groupLen && i < tickCount - 1; i++) {
      ticks.push(groups[i][0]);
    }

    ticks.push(categories[length - 1]);
  }

  rst.categories = categories;
  rst.ticks = ticks;
  return rst;
};