# vue2-windicss-template

程序

## 程序安装

安装程序，要求

+ node >= 14.*
+ npm >= 6.*

```
npm install
```

### 开发启动

开发环境启动

```
npm run serve
```

### 代码构建

构建正式环境代码
```
npm run buildprod
```

构建测试环境代码
```
npm run buildtest
```

将构建产物上传至服务器

> 开发者可灵活选用ssh 或其他办法将产物直接上传至服务器目标位置
> 例如笔者使用gitlab-ci进行构建，使用sshpass将构建产物直接上传至服务器

+ 正式上线服务器path
  + 服务器根目录/opt/web/{prod}/
  + 对应路由链接https://host/{prod}/
+ 测试上线服务器path
  + 服务器根目录/opt/web/{test}/
  + 对应路由链接https://host/{test}/

### 文件结构
```
h5-imevos
├─ .editorconfig  // 编辑器通用配置文件，建议配合vscode插件 EditorConfig for VS Code
├─ .env.dev       // 环境变量
├─ .env.prod      // 环境变量
├─ .env.test      // 环境变量
├─ .eslintrc.js   // eslint代码检查配置，建议配合vscode插件 ESLint
├─ .gitlab-ci.yml // gitlab-ci 配置文件，用于构建/发布自动化流程
├─ .npmrc         // npm 配置文件，使用国内镜像地址
├─ .postcssrc.js  // postcss配置文件，使用
├─ babel.config.js// babel配置，按需加载vant组件
├─ config         // vue项目配置
│  ├─ externals.js// 额外cdn源配置，抽离vue,vuex,vue-router,axios,方便减小打包体积
│  ├─ plugins.js  // webpack插件配置
│  └─ proxy.js    // webpack开发服务器代理配置
├─ docs           // 组件列表
├─ jsconfig.json  // vscode 配置文件，配置了@/* 路径别名，方便智能索引，建议配合插件Path Intellisense
├─ package-lock.json // npm版本锁文件
├─ package.json   // npm包管理文件，建议配合vscode插件 npm, npm Intellisense使用，智能索引npm包
├─ public         // 静态资源及html模板
├─ README.md      // 本文件
├─ src            // 源文件
│  ├─ assets      // 图片资源
│  ├─ components  // 本项目组件
│  ├─ config      // 本项目配置常量
│  ├─ mixins      // vue mixin 插件
│  │  ├─ lazyload.js // lazyload插件
│  │  └─ url.js   // url参数解析及跳转等功能
│  ├─ pages       // 多页模块
│  │  ├─ components    // 组件示例页面
│  │  ├─ example       // 项目示例页面
│  │  ├─ index         // 示例页面
│  └─ utils
│     ├─ audio.js      // 播放管理器，提供全局调用封装
│     ├─ audioHelper.js// 筛选章节数据的一些函数
│     ├─ axios.js      // 服务的基础封装，包括了权限验证等截断器
│     ├─ bus.js        // 全局事件总线
│     ├─ calculate.js  // 浮点数计算辅助函数（未使用）
│     ├─ copy.js       // 封装自clipboard.js的复制到剪贴板函数
│     ├─ format        // 一些格式化工具
│     │  ├─ number.js
│     │  └─ string.js
│     ├─ gen-url.js    // url生成辅助函数
│     ├─ getTryFlag.js // 查询课程是否有试听章节辅助函数
│     ├─ history.js    // 历史管理器
│     ├─ initUserInfo.js // 使用了缓存的个人信息请求辅助函数
│     ├─ login.js      // 登录跳转行为函数
│     ├─ lru.js        // lru
│     ├─ painter.js    // canvas绘图工具
│     ├─ phone.js      // 电话号处理函数（未使用）
│     ├─ random.js     // 生成假随机字符串的函数
│     ├─ screen-helper.js // 判断ios缺口屏等辅助函数
│     ├─ style.js      // vw视口单位转换工具
│     ├─ validate.js   // 常用验证函数（未使用）
│     └─ wx.js         // 微信jssdk 初始化封装
├─ vue.config.js       // vue脚手架配置文件
└─ windi.config.js     // windi css配置文件

```


### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 涉及依赖文档

- [windicss文档](https://windicss.org/utilities/flexbox.html)
  - 类似bootstrap的css样式工具库
  - 请配合vscode 插件 WindiCSS IntelliSense, Vetur 使用
- [axios文档(中文)](http://axios-js.com/zh-cn/docs/index.html)
- [axios文档(英文)](https://axios-http.com)
  - http 客户端
- [crypto-js模块](https://github.com/brix/crypto-js)
- [js-cookie模块](https://github.com/js-cookie/js-cookie)
  - 操作页面cookie的工具
- [lodash-es模块](https://lodash.com/docs/4.17.15)
  - 使用面最广的函数工具库
- [vuex文档](https://vuex.vuejs.org/zh/)
  - vue数据管理工具
- [vue-router文档](https://router.vuejs.org/zh/)
  - vue前端路由工具
- [clipboard文档](https://clipboardjs.com/)
  - 剪贴板工具
- [dayjs文档](https://dayjs.fenxianglu.cn/)
  - 日期工具函数
- [vant文档2.x](https://vant-contrib.gitee.io/vant/#/zh-CN)
  - 本项目主要使用的开源组件库
- [微信js sdk文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)
- [any-touch文档](https://github.com/any86/any-touch)
  - 兼容vue的手势事件库
- [howler.js文档](https://howlerjs.com/)
  - 本项目主要使用的音频播放库
- [html2canvas](https://html2canvas.hertzen.com/)
  - 本来用作生成分享海报使用的库，但因为跨域污染问题弃用
- [qrcanvas文档](https://github.com/gera2ld/qrcanvas)
  - 生成二维码工具
- [qs文档](https://github.com/ljharb/qs)
  - 解析queryString工具
- [scrollama文档](https://github.com/russellgoldenberg/scrollama)
  - 用于监听元素进入指定位置的辅助函数
  - detail页面主要交互功能实现使用的库
- [store2文档](https://github.com/nbubna/store)
  - 本地存储工具库
- ua-parser-js
- [vue-radial-progress组件](https://github.com/wyzantinc/vue-radial-progress)
  - 生成环形进度条的组件
- [@geeeger/structure文档](https://github.com/geeeger-pkgs/utils/tree/master/packages/structure)
  - 基础数据结构
  - 其中的链表用于构建简单lru了
- [@geeeger/page-visibility文档](https://github.com/geeeger-pkgs/utils/tree/master/packages/page-visibility)
  - 检查页面是否处于前台的工具
- [@geeeger/os文档](https://github.com/geeeger-pkgs/utils/tree/master/packages/os)
  - 判断浏览器环境类型工具
- @geeeger/fn-prop-is-exist
  - 无文档，但有ts定义文件，智能提示
  - 判断对象是否存在某路径的工具
- @geeeger/deferred
  - 无文档，但有ts定义文件，智能提示
  - 拆解promise得到的简单deferred创建工具

### 附录

- [组件记录](./docs/components.md)
