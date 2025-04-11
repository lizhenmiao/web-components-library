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
          if (savedPosition) {
            return savedPosition;
          }

          if (to.hash) {
            try {
              const hash = decodeURIComponent(to.hash);
              // 先尝试使用解码后的hash查找
              try {
                const el = document.querySelector(hash);
                if (el) {
                  return { el, offset: { x: 0, y: 10 } };
                }
              } catch (e) {
                console.log('解码后的选择器无效，尝试其他方法');
              }

              // 检查是否为中文锚点，通过ID查找
              const id = hash.startsWith('#') ? hash.substring(1) : hash;
              const elementById = document.getElementById(id);
              if (elementById) {
                return { el: elementById, offset: { x: 0, y: 10 } };
              }

              // 如果仍找不到，尝试通过文本内容查找标题元素
              const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
              for (const heading of headings) {
                if (heading.textContent.trim() === id) {
                  return { el: heading, offset: { x: 0, y: 10 } };
                }
              }

              // 如果找不到匹配的元素，回退到默认行为
              console.log('找不到匹配元素，回退到默认行为');
              return { x: 0, y: 0 };
            } catch (e) {
              console.error('滚动行为错误:', e);
              return { x: 0, y: 0 };
            }
          }

          return { x: 0, y: 0 };
        };
      }

      // 为组件演示增加全局函数
      // 设置动画类型（旧函数保留向后兼容性）
      window.setAnimation = function(type) {
        window.setAnimationType(type, '');
      };

      // 添加新的动画类型选择器函数
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