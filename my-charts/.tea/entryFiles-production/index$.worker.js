require('./config$');
require('./importScripts$');
function success() {
require('../..//app');
require('../..//pages/index/index');
require('../..//pages/charts/line/index');
require('../..//pages/charts/area/index');
require('../..//pages/charts/column/index');
require('../..//pages/charts/dodge/index');
require('../..//pages/charts/stackBar/index');
require('../..//pages/charts/ring/index');
require('../..//pages/charts/pie/index');
require('../..//pages/charts/rose/index');
require('../..//pages/charts/radar/index');
require('../..//pages/charts/gauge/index');
require('../..//pages/charts/double-axis/index');
require('../..//pages/charts/pixelRatio/index');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
