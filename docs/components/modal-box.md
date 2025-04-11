# 弹窗组件 (ModalBox)

::: tip 组件介绍
弹窗组件是一个可自定义的Web Component，用于创建模态对话框。它支持多种配置选项，包括自定义标题、内容、页脚，以及多种动画效果。
:::

## 基本用法

<div class="demo-box">
  <div class="demo-case">
    <modal-box id="demo-basic" title="提示">
      <p>这是一个基本的弹窗示例</p>
    </modal-box>
    <button class="demo-button" onclick="document.getElementById('demo-basic').open()">打开弹窗</button>
  </div>

  ```html
  <modal-box title="提示">
    <p>这是一个基本的弹窗示例</p>
  </modal-box>

  <button onclick="document.querySelector('modal-box').open()">打开弹窗</button>
  ```
</div>

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|------|-----|------|------|
| `title` | String | - | 弹窗标题 |
| `open` | Boolean | false | 设置为true时显示弹窗 |
| `show-header` | Boolean | true | 是否显示头部区域 |
| `show-footer` | Boolean | true | 是否显示底部区域 |
| `show-default-footer` | Boolean | true | 是否显示默认的底部按钮 |
| `show-cancel-button` | Boolean | true | 是否显示取消按钮 |
| `show-confirm-button` | Boolean | true | 是否显示确认按钮 |
| `close-on-esc` | Boolean | true | 是否允许按ESC键关闭弹窗 |
| `close-on-overlay` | Boolean | true | 是否允许点击遮罩层关闭弹窗 |
| `show-close-button` | Boolean | true | 是否显示关闭按钮 |
| `animation` | String | 'fade' | 动画类型，支持：<br>`fade`、`scale`、`slide-down`、<br>`slide-up`、`slide-left`、`slide-right`、<br>`rotate`、`bounce` |
| `confirm-text` | String | 'Confirm' | 确认按钮文本 |
| `cancel-text` | String | 'Cancel' | 取消按钮文本 |

## 事件

| 事件名 | 描述 |
|------|------|
| `open` | 弹窗打开时触发 |
| `close` | 弹窗关闭时触发 |
| `confirm` | 点击确认按钮时触发 |
| `cancel` | 点击取消按钮时触发 |

## 插槽

<div class="slots-box">
  <div class="slot-item">
    <div class="slot-name">默认插槽</div>
    <div class="slot-desc">弹窗的主要内容</div>
  </div>
  <div class="slot-item">
    <div class="slot-name">header</div>
    <div class="slot-desc">自定义头部内容</div>
  </div>
  <div class="slot-item">
    <div class="slot-name">footer</div>
    <div class="slot-desc">自定义底部内容</div>
  </div>
</div>

## 方法

| 方法名 | 描述 |
|------|------|
| `open()` | 打开弹窗 |
| `close()` | 关闭弹窗 |
| `setTitle(title)` | 设置弹窗标题 |
| `configure(options)` | 配置弹窗，接受一个包含配置选项的对象 |

## 示例

### 自定义底部

<div class="demo-box">
  <div class="demo-case">
    <modal-box id="custom-footer-modal" title="自定义底部">
      <p>这个弹窗有自定义的底部内容。</p>

      <div slot="footer">
        <button class="custom-button cancel">关闭</button>
        <button class="custom-button confirm">提交</button>
      </div>
    </modal-box>
    <button class="demo-button" onclick="document.getElementById('custom-footer-modal').open()">打开自定义底部弹窗</button>
  </div>

  ```html
  <modal-box id="custom-footer-modal" title="自定义底部">
    <p>这个弹窗有自定义的底部内容。</p>

    <div slot="footer">
      <button class="custom-button cancel">关闭</button>
      <button class="custom-button confirm">提交</button>
    </div>
  </modal-box>

  <button onclick="document.getElementById('custom-footer-modal').open()">
    打开自定义底部弹窗
  </button>
  ```
</div>

### 使用不同的动画

<div class="demo-box">
  <div class="demo-case">
    <modal-box id="animation-modal" title="动画效果" animation="scale">
      <p>这个弹窗使用缩放动画。</p>
    </modal-box>
    <div class="button-group">
      <button class="demo-button small" onclick="setAnimation('fade')">淡入淡出</button>
      <button class="demo-button small" onclick="setAnimation('scale')">缩放</button>
      <button class="demo-button small" onclick="setAnimation('slide-down')">下滑</button>
      <button class="demo-button small" onclick="setAnimation('slide-up')">上滑</button>
      <button class="demo-button small" onclick="setAnimation('bounce')">弹跳</button>
      <button class="demo-button primary" onclick="openAnimationModal()">打开弹窗</button>
    </div>

  ```html
  <modal-box id="animation-modal" title="动画效果" animation="scale">
    <p>这个弹窗使用缩放动画。</p>
  </modal-box>

  <div>
    <button onclick="setAnimation('fade')">淡入淡出</button>
    <button onclick="setAnimation('scale')">缩放</button>
    <button onclick="setAnimation('slide-down')">下滑</button>
    <button onclick="setAnimation('slide-up')">上滑</button>
    <button onclick="setAnimation('bounce')">弹跳</button>
    <button onclick="openAnimationModal()">打开弹窗</button>
  </div>

  <script>
    function setAnimation(type) {
      const modal = document.getElementById('animation-modal');
      modal.setAttribute('animation', type);
    }

    function openAnimationModal() {
      document.getElementById('animation-modal').open();
    }
  </script>
  ```
</div>

### 使用JavaScript API

<div class="demo-box">
  <div class="demo-case">
    <modal-box id="js-modal"></modal-box>
    <button class="demo-button primary" onclick="configureAndOpenModal()">使用JS API打开弹窗</button>
  </div>

  ```html
  <modal-box id="js-modal"></modal-box>

  <button onclick="configureAndOpenModal()">使用JS API打开弹窗</button>

  <script>
    function configureAndOpenModal() {
      const modal = document.getElementById('js-modal');

      modal.configure({
        showHeader: true,
        showFooter: true,
        showCancelButton: true,
        showConfirmButton: true,
        closeOnEsc: true,
        closeOnOverlay: true,
        showCloseButton: true,
        animation: 'scale',
        confirmText: '确定',
        cancelText: '取消'
      });

      modal.setTitle('使用JavaScript API');
      modal.innerHTML = '<p>这个弹窗使用JavaScript API配置。</p>';
      modal.open();
    }
  </script>
  ```
</div>

## 自定义样式

弹窗组件提供了多个CSS变量，可以用来自定义样式：

```css
modal-box {
  --primary-color: #3498db;
  --background-color: #ffffff;
  --text-color: #333333;
  --border-color: #e0e0e0;
  --button-hover: #f5f5f5;
  --primary-button-hover: #2980b9;
  --animation-duration: 0.5s;
}
```

<div class="tip custom-block">
  <p class="custom-block-title">提示</p>
  <p>通过覆盖这些CSS变量，您可以轻松地自定义弹窗的外观，使其与您的应用程序风格保持一致。</p>
</div>

## 注意事项

1. 组件使用Shadow DOM，因此外部样式默认不会影响到组件内部
2. 如果需要使组件全局可用，请确保在页面加载时导入组件：

```javascript
// 在您的主JavaScript文件中
import 'https://cdn.jsdelivr.net/gh/lizhenmiao/web-components-library@master/components/modal-box.js';
```

<style>
.demo-box {
  margin: 2rem 0;
  border: 1px solid var(--c-border);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}

.demo-case {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--c-bg-light);
}

.demo-button {
  background-color: #5c3197;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;
  margin: 5px;
}

.demo-button:hover {
  background-color: #4a2578;
}

.demo-button.small {
  padding: 5px 10px;
  font-size: 0.9em;
}

.demo-button.primary {
  background-color: #3498db;
}

.demo-button.primary:hover {
  background-color: #2980b9;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
}

.slots-box {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
}

.slot-item {
  flex: 1;
  min-width: 200px;
  padding: 1rem;
  background-color: var(--c-bg-light);
  border-radius: 6px;
  border-left: 4px solid #5c3197;
}

.slot-name {
  font-weight: bold;
  color: #5c3197;
  margin-bottom: 0.5rem;
}

.slot-desc {
  color: var(--c-text-light);
}

table {
  display: table;
  width: 100%;
  margin: 1.5rem 0;
}

th, td {
  padding: 0.8rem 1rem;
  border-bottom: 1px solid var(--c-border);
}

th {
  background-color: #f8f8f8;
  font-weight: 600;
}

tr:nth-child(even) {
  background-color: var(--c-bg-light);
}

tr:hover {
  background-color: #f0f0f0;
}
</style>
