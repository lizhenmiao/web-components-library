// 增强应用程序
export default ({ Vue, options, router, siteData }) => {
  // 在Vue实例初始化完成后执行
  router.onReady(() => {
    // 在客户端初始化之后处理
    if (typeof window !== 'undefined') {
      // 添加演示相关的全局函数

      // 设置动画类型
      window.setAnimationType = function(type, name) {
        try {
          // 查找所有具有animation属性的模态框
          const modals = document.querySelectorAll('modal-box[animation]');
          modals.forEach(modal => {
            modal.setAttribute('animation', type);
          });

          // 特定处理动画模态框
          const animationModal = document.getElementById('animation-modal');
          if (animationModal) {
            animationModal.setAttribute('animation', type);
          }

          // 特定处理自定义底部模态框
          const customFooterModal = document.getElementById('custom-footer-modal');
          if (customFooterModal) {
            customFooterModal.setAttribute('animation', type);
          }

          // 更新当前动画类型显示
          const label = document.getElementById('current-animation');
          if (label && name) {
            label.textContent = name;
          }
        } catch (e) {
          console.error('设置动画类型错误:', e);
        }
      };

      // 打开动画演示模态框
      window.openAnimationModal = function() {
        try {
          const modal = document.getElementById('animation-modal');
          if (modal) {
            modal.open();
          }
        } catch (e) {
          console.error('打开动画模态框错误:', e);
        }
      };

      // 配置和打开JS API模态框
      window.configureAndOpenModal = function() {
        try {
          const modal = document.getElementById('js-modal');
          if (modal) {
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
        } catch (e) {
          console.error('配置和打开JS模态框错误:', e);
        }
      };
    }
  });
};