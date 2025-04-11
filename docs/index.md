# Web Components 组件库

::: tip 简介
一个使用原生Web Component技术构建的UI组件集合，无需任何框架依赖，可以在任何现代浏览器中使用。
:::

<img src="/web-components-library/logo.svg" alt="Web Components" style="max-width: 200px; margin: 0 auto; display: block;">

## ✨ 特点

- 🔆 **无框架依赖** - 使用原生Web Components技术
- 🎨 **高度可定制** - 通过属性、插槽和CSS变量轻松定制
- 🚀 **轻量级** - 无需额外依赖，体积小，性能高
- 🔄 **跨框架兼容** - 可与React、Vue、Angular等框架无缝集成

## 🚀 快速开始

### 从GitHub获取

```bash
# 克隆仓库
git clone https://github.com/lizhenmiao/web-components-library.git
```

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

## 📦 可用组件

<div class="features">
  <div class="feature">
    <div class="feature-icon">
      <h3>📝</h3>
    </div>
    <h2>弹窗组件</h2>
    <p>可定制的模态对话框组件</p>
    <a href="/web-components-library/components/modal-box">查看文档 →</a>
  </div>

  <!-- 未来可添加更多组件 -->
</div>

## 💻 浏览器支持

该组件库支持所有现代浏览器，包括：

- Chrome 67+
- Firefox 63+
- Safari 12.1+
- Edge 79+

## 🤝 贡献

欢迎提交问题和贡献代码：

- Issue提交: [GitHub Issues](https://github.com/lizhenmiao/web-components-library/issues)
- Pull请求: [GitHub Pull Requests](https://github.com/lizhenmiao/web-components-library/pulls)

## 📄 许可证

MIT

<style>
.features {
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  gap: 20px;
}

.feature {
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  background-color: var(--c-bg-light);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  transition: all 0.3s;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px 0 rgba(0,0,0,0.15);
}

.feature-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.feature-icon h3 {
  font-size: 2.5rem;
  margin: 0;
}

.feature h2 {
  text-align: center;
  border-bottom: 1px solid var(--c-border);
  padding-bottom: 0.5rem;
  margin: 0.8rem 0;
}

.feature p {
  margin: 1rem 0;
  color: var(--c-text-light);
}

.feature a {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 500;
}
</style>
