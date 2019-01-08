# 支付宝小程序 F2 图表 demo

支付宝小程序端的 F2 图表 demo，微信小程序详见 [wx-f2](https://github.com/antvis/wx-f2)。

<img src="https://gw.alipayobjects.com/zos/rmsportal/ijCEZaxAPTGLsFdlwbGv.png" width=375 />

## 如何使用

支付宝开发者工具（最新版）中打开，然后在项目根目录下安装 '@antv/my-f2' 模块。

```bash
npm install @antv/my-f2
```

也可以直接使用本地的 `my-f2.js`，在 `./lib/` 目录下。


## 说明

1. my-f2 GitHub 地址：[my-f2](https://github.com/antvis/my-f2) 
2. 如果项目对代码大小有要求，可以使用按需加载模块，只引入需要的模块，参加折线图 demo: `pages/charts/line/index.js`

```js
import F2 from '@antv/my-f2/lib/core'; // 必须引入
require('@antv/f2/lib/geom/line'); // 只引入折线图
require('@antv/f2/lib/scale/time-cat'); // 时间类型的度量
const Tooltip = require('@antv/f2/lib/plugin/tooltip'); // 引入 tooltip 插件
```

如何进行按需加载，请参见：https://www.yuque.com/antv/f2/require-on-demand
