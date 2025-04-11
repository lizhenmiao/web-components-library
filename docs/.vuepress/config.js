module.exports = {
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
        title: '组件',
        collapsable: false,
        children: [
          '/components/modal-box'
        ]
      }
    ],

    // 社交链接
    repo: 'https://github.com/yourusername/web-components-library',

    // 页脚
    lastUpdated: '上次更新',
    contributors: false,

    // 编辑链接
    editLinks: false
  }
}