// 增强应用程序
export default ({ Vue, options, router, siteData }) => {
  // 在Vue实例初始化完成后执行
  router.onReady(() => {
    // 在客户端初始化之后处理
    if (typeof window !== 'undefined') {
      // 修复中文锚点选择器问题
      const originalScrollBehavior = router.options.scrollBehavior;
      if (originalScrollBehavior) {
        router.options.scrollBehavior = async function(to, from, savedPosition) {
          if (to.hash && to.hash.includes('%')) {
            // 避免使用可能包含无效选择器的hash
            return { selector: 'h2', offset: { x: 0, y: 10 } };
          }
          return originalScrollBehavior.call(this, to, from, savedPosition);
        };
      }

      // 旧函数保留向后兼容性
      window.setAnimation = function(type) {
        window.setAnimationType(type, '');
      };

      // 添加新的动画类型选择器函数
      window.setAnimationType = function(type, name) {
        const modal = document.getElementById('animation-modal');
        const label = document.getElementById('current-animation');
        if (modal) {
          modal.setAttribute('animation', type);
        }
        if (label && name) {
          label.textContent = name;
        }
      };

      window.openAnimationModal = function() {
        const modal = document.getElementById('animation-modal');
        if (modal) {
          modal.open();
        }
      };

      window.configureAndOpenModal = function() {
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
      };
    }
  });
};