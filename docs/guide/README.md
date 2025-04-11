# 指南

## 什么是 Web Components?

Web Components 是一套不同的技术，允许您创建可重用的自定义元素（它们的功能封装在您的代码之外）并且在您的 web 应用中使用它们。

## 特点

- 🔆 **无框架依赖** - 使用原生Web Components技术
- 🎨 **高度可定制** - 通过属性、插槽和CSS变量轻松定制
- 🚀 **轻量级** - 无需额外依赖，体积小，性能高
- 🔄 **跨框架兼容** - 可与React、Vue、Angular等框架无缝集成

## 浏览器支持

该组件库支持所有现代浏览器，包括：

- Chrome 67+
- Firefox 63+
- Safari 12.1+
- Edge 79+

## 快速开始

### 直接在HTML中使用

```html
<!-- 在HTML中引入组件 -->
<script src="https://cdn.jsdelivr.net/gh/lizhenmiao/web-components-library@master/components/modal-box.js"></script>

<!-- 使用组件 -->
<modal-box title="欢迎">
  <p>欢迎使用Web Components组件库！</p>
</modal-box>

<button onclick="document.querySelector('modal-box').open()">
  打开弹窗
</button>
```

### 在项目中导入

```javascript
// 直接从源码导入
import './path/to/web-components-library/components/modal-box.js';

// 或者使用CDN
import 'https://cdn.jsdelivr.net/gh/lizhenmiao/web-components-library@master/components/modal-box.js';
```

## 在框架中使用

Web Components 是框架无关的，因此可以在任何框架中使用。

### 在 Vue 中使用

```vue
<template>
  <div>
    <modal-box :title="modalTitle" ref="modal">
      <p>{{ modalContent }}</p>
    </modal-box>
    <button @click="openModal">打开弹窗</button>
  </div>
</template>

<script>
import 'https://cdn.jsdelivr.net/gh/lizhenmiao/web-components-library@master/components/modal-box.js';

export default {
  data() {
    return {
      modalTitle: '来自Vue的弹窗',
      modalContent: '这是在Vue中使用的Web Component弹窗'
    }
  },
  methods: {
    openModal() {
      this.$refs.modal.open();
    }
  }
}
</script>
```

### 在 React 中使用

```jsx
import React, { useRef, useEffect } from 'react';
import 'https://cdn.jsdelivr.net/gh/lizhenmiao/web-components-library@master/components/modal-box.js';

function App() {
  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.open();
    }
  };

  return (
    <div>
      <modal-box title="来自React的弹窗" ref={modalRef}>
        <p>这是在React中使用的Web Component弹窗</p>
      </modal-box>
      <button onClick={openModal}>打开弹窗</button>
    </div>
  );
}

export default App;
```