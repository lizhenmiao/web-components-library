module.exports = {
  title: '我的Web Components库',
  description: '原生Web Components组件库文档',

  // 设置基础路径，必须设置为仓库名才能在GitHub Pages正常工作
  base: '/web-components-library/',

  themeConfig: {
    // 导航栏
    navbar: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/modal-box' },
      { text: 'GitHub', link: 'https://github.com/yourusername/web-components-library' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '组件',
        children: [
          { text: '弹窗组件', link: '/components/modal-box' }
        ]
      }
    ],

    // 社交链接
    repo: 'https://github.com/yourusername/web-components-library',

    // 页脚
    lastUpdated: true,
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',

    // 编辑链接
    editLink: false
  }
}