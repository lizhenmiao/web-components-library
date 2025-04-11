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

      // 全局添加函数
      window.setAnimation = function(type) {
        const modal = document.getElementById('animation-modal');
        if (modal) {
          modal.setAttribute('animation', type);
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