module.exports = {
  title: 'Web Components',
  description: '原生 Web Components 组件库文档',
  // 设置基础路径，必须设置为仓库名才能在GitHub Pages正常工作
  base: '/web-components-library/',
  // 配置文档标题
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#007AFF' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#007AFF' }],
    // 预加载组件库以提高性能
    ['link', { rel: 'preload', href: 'https://cdn.jsdelivr.net/gh/lizhenmiao/web-components-library@master/components/modal-box.js', as: 'script' }],
    // 导入组件库以在文档中支持组件演示
    ['script', { src: 'https://cdn.jsdelivr.net/gh/lizhenmiao/web-components-library@master/components/modal-box.js', defer: true }]
  ],
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/modal-box' }
    ],
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
      '/components/': [
        {
          title: '组件',
          collapsable: false,
          children: [
            'modal-box'
          ]
        }
      ]
    },
    // 社交链接
    repo: 'lizhenmiao/web-components-library',
    repoLabel: 'GitHub',
    // 页脚
    lastUpdated: '上次更新',
    // 贡献者
    contributors: false,
    // 编辑链接
    editLinks: false,
    // 平滑滚动
    smoothScroll: true,
    // Logo配置
    logo: '/logo.svg',
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
  evergreen: true,
  // 优化页面加载
  cache: true,
  shouldPrefetch: () => false
}