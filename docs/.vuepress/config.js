module.exports = {
  title: '我的 Web Components 库',
  description: '原生 Web Components 组件库文档',
  // 设置基础路径，必须设置为仓库名才能在GitHub Pages正常工作
  base: '/web-components-library/',
  // 配置文档标题
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#5c3197' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#5c3197' }],
    // 导入组件库以在文档中支持组件演示
    ['script', { src: 'https://cdn.jsdelivr.net/gh/lizhenmiao/web-components-library@master/components/modal-box.js' }]
  ],
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/modal-box' },
      { text: 'GitHub', link: 'https://github.com/lizhenmiao/web-components-library' }
    ],
    // 侧边栏
    sidebar: [
      {
        title: '介绍',
        path: '/',
        collapsable: false
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/modal-box'
        ]
      }
    ],
    // 社交链接
    repo: 'https://github.com/lizhenmiao/web-components-library',
    // 页脚
    lastUpdated: '上次更新',
    // 贡献者
    contributors: false,
    // 编辑链接
    editLinks: false,
    // 平滑滚动
    smoothScroll: true,
    // Logo配置
    logo: '/images/logo.png',
    // 搜索配置
    search: true,
    searchMaxSuggestions: 10
  },
  // Markdown配置
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [2, 3] }
  },
  // 插件配置
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom', {
      selector: '.theme-default-content img'
    }]
  ],
  // 自定义样式
  evergreen: true
}