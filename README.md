# Web Components 组件库

[![Deploy VuePress to GitHub Pages](https://github.com/lizhenmiao/web-components-library/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/lizhenmiao/web-components-library/actions/workflows/deploy-docs.yml)

一个使用原生Web Component技术构建的UI组件集合，无需任何框架依赖，可以在任何现代浏览器中使用。

## 文档

访问我们的[在线文档](https://lizhenmiao.github.io/web-components-library/)了解更多信息。

## 特点

- **无框架依赖** - 使用原生Web Components技术
- **高度可定制** - 通过属性、插槽和CSS变量轻松定制
- **轻量级** - 按需导入，不带任何多余依赖
- **跨框架兼容** - 可与React、Vue、Angular等框架无缝集成

## 使用方法

### 直接在HTML中使用

```html
<!-- 在HTML中引入组件 -->
<script src="https://cdn.jsdelivr.net/gh/lizhenmiao/web-components-library@master/components/modal-box.js"></script>

<!-- 使用组件 -->
<modal-box title="欢迎">
  <p>欢迎使用Web Components组件库！</p>
</modal-box>

<button onclick="document.querySelector('modal-box').open()">打开弹窗</button>
```

### 在项目中导入

```javascript
// 直接从源码导入
import './path/to/web-components-library/components/modal-box.js';

// 或者使用CDN
import 'https://cdn.jsdelivr.net/gh/lizhenmiao/web-components-library@master/components/modal-box.js';
```

## 可用组件

- **弹窗组件 (ModalBox)** - 可定制的模态对话框组件

## 本地开发

克隆仓库并安装依赖：

```bash
git clone https://github.com/lizhenmiao/web-components-library.git
cd web-components-library
npm install
```

启动文档开发服务器：

```bash
npm run docs:dev
```

## 贡献

欢迎提交问题和贡献代码！

## 许可证

MIT