export default {
  title: '我的Web Components库',
  description: '原生Web Components组件库文档',

  // 设置基础路径，必须设置为仓库名才能在GitHub Pages正常工作
  base: '/web-components-library/',

  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/modal-box' },
      { text: 'GitHub', link: 'https://github.com/yourusername/web-components-library' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '组件',
        items: [
          { text: '弹窗组件', link: '/components/modal-box' },
        ]
      }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/web-components-library' }
    ],

    // 页脚
    footer: {
      message: '基于MIT许可证发布',
      copyright: 'Copyright © 2023'
    }
  }
}
