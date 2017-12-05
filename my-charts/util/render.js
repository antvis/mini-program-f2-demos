/**
 * F2 canvas context adapter for miniapp
 * @authors (sima.zhang1990@gmail.com)
 * @date    2017-12-04 13:09:44
 * @version 0.0.1
 */

const CAPITALIZED_ATTRS_MAP = {
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

class F2Render {
    constructor(myCtx, width, height) {
        const self = this;
        this.myCtx = myCtx;
        this.width = width;
        this.height = height;
        this.style = {};
        this.getContext = function() {
            return self._initContext(myCtx);
        };
    }

    _initContext(myCtx) {
        const context = {};
        Object.keys(CAPITALIZED_ATTRS_MAP).map(key => {
          Object.defineProperty(context, key, {
              set: function(value) {
                const name = 'set' + CAPITALIZED_ATTRS_MAP[key];
                myCtx[name](value);
              }
          });
        });

        const myCtxFuncs = Object.keys(myCtx.__proto__);

        myCtxFuncs.map(funcName => {
            if (typeof myCtx[funcName] === 'function') {
                context[funcName] = function(...theArgs) {
                    myCtx[funcName](...theArgs);
                }
            }
        });

        // important: rewrite restore function
        context.restore = function() {
            myCtx.restore();
            myCtx.draw(true); // must be called
        };

        return context;
    }
}

module.exports = F2Render;
