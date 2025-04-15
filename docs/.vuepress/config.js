module.exports = {
  title: 'Web Components',
  description: '原生 Web Components 组件库文档',
  // 设置基础路径，必须设置为仓库名才能在GitHub Pages正常工作
  base: '/',
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
    searchMaxSuggestions: 10,
    // 标题格式化
    formatTitle: title => {
      if (!title) return 'Web Components';
      return title.replace(/\s*\{#[\w-]+\}\s*$/, '');
    }
  },
  // Markdown配置
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [2, 3] },
    extractHeaders: ['h2', 'h3', 'h4'],
    anchor: {
      permalinkSymbol: '#',
      level: [1, 2, 3, 4],
      slugify: (str) => {
        // 首先尝试提取自定义ID
        const customIdMatch = str.match(/\s*\{#([\w-]+)\}\s*$/);
        if (customIdMatch) {
          return customIdMatch[1]; // 如果有自定义ID，直接使用它
        }
        // 如果没有自定义ID，使用默认的slugify逻辑
        return str
          .toLowerCase()
          .trim()
          .replace(/[\s]+/g, '-')
          .replace(/[^\w\u4e00-\u9fa5\-]/g, '')
          .replace(/\-{2,}/g, '-')
          .replace(/^-+|-+$/g, '');
      }
    },
    // 扩展 markdown-it
    extendMarkdown: md => {
      // 添加自定义插件来处理显示文本
      const removeCustomIds = (md) => {
        const defaultRender = md.renderer.rules.text || ((tokens, idx, options, env, self) => {
          return tokens[idx].content;
        });

        md.renderer.rules.text = (tokens, idx, options, env, self) => {
          // 只移除显示文本中的 ID 部分
          tokens[idx].content = tokens[idx].content.replace(/\s*\{#[\w-]+\}\s*$/, '');
          return defaultRender(tokens, idx, options, env, self);
        };
      };

      md.use(removeCustomIds);
    }
  },
  // 插件配置
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom', {
      selector: '.theme-default-content img'
    }]
  ],
  // extendPageData 用于修改页面数据
  extendPageData($page) {
    const updateHeaders = headers => {
      if (Array.isArray(headers)) {
        return headers.map(header => ({
          ...header,
          title: header.title.replace(/\s*\{#[\w-]+\}\s*$/, '')
        }));
      }
      return headers;
    };

    // 更新页面标题
    if ($page.title) {
      $page.title = $page.title.replace(/\s*\{#[\w-]+\}\s*$/, '');
    }

    // 更新页面headers
    if ($page.headers) {
      $page.headers = updateHeaders($page.headers);
    }

    // 更新侧边栏标题
    if ($page.sidebarItems) {
      $page.sidebarItems = updateHeaders($page.sidebarItems);
    }
  },
  // 自定义样式
  evergreen: true,
  // 优化页面加载
  cache: true,
  shouldPrefetch: () => false
}