# Web Components 组件库

欢迎使用我的Web Components组件库文档！这是一个使用原生Web Component技术构建的UI组件集合，无需任何框架依赖，可以在任何现代浏览器中使用。

## 特点

- **无框架依赖** - 使用原生Web Components技术
- **高度可定制** - 通过属性、插槽和CSS变量轻松定制
- **轻量级** - 按需导入，不带任何多余依赖
- **跨框架兼容** - 可与React、Vue、Angular等框架无缝集成

## 快速开始

### 安装

```bash
# 使用npm安装
npm install my-web-components-library

# 或使用yarn
yarn add my-web-components-library
```

### 引入组件

```javascript
// 引入所有组件
import 'my-web-components-library';

// 或者按需引入
import 'my-web-components-library/components/modal-box.js';
```

### 使用组件

```html
<modal-box title="欢迎">
  <p>欢迎使用我的Web Components组件库！</p>
</modal-box>

<button onclick="document.querySelector('modal-box').open()">
  打开弹窗
</button>
```

## 可用组件

目前可用的组件有：

- [弹窗组件 (ModalBox)](/components/modal-box) - 可定制的模态对话框组件

## 浏览器支持

该组件库支持所有现代浏览器，包括：

- Chrome 67+
- Firefox 63+
- Safari 12.1+
- Edge 79+

## 贡献

欢迎提交问题和贡献代码：

- Issue提交: [GitHub Issues](https://github.com/lizhenmiao/my-web-components-library/issues)
- Pull请求: [GitHub Pull Requests](https://github.com/lizhenmiao/my-web-components-library/pulls)

## 许可证

MIT
