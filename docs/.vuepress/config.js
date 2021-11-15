module.exports = {
  title: '郑天霸的技术博客丨🥩',
  description: '温故而知新丶',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': './public',
      },
    },
  },
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    nav: [
      { text: '主页', link: '/' },
      { text: 'CSS', link: '/CSS/' },
      { text: 'JS', link: '/JavaScript/' },
      { text: 'Vue', link: '/Vue/' },
      { text: 'GitHub', link: 'https://github.com/zxl7' },
      { text: '掘金', link: 'https://juejin.im/user/5b1228ccf265da6e0b6ff25e' },
    ],
    themeConfig: {
      displayAllHeaders: true, // 默认值：false
    },
    sidebar: [
      {
        title: 'Weekly',
        path: '/weekly/',
        children: [['weekly/1.md', '学习计划 🌋']],
      },
      {
        title: 'HTML',
        path: '/HTML/',
        children: [['HTML/HTML.md', 'HTML']],
      },
      {
        title: 'CSS',
        path: '/CSS/',
        children: [
          ['CSS/css.md', 'CSS基础'],
          ['CSS/cssWorld.md', 'CSS进阶'],
          ['CSS/Less.md', 'Less 预处理语言'],
        ],
      },
      {
        title: 'JavaScript', // 一级菜单名称
        path: '/JavaScript/',
        sidebarDepth: 2, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
        children: [
          ['JavaScript/Ajax.md', 'Ajax'],
          ['JavaScript/ES6.md', 'ES6'],
          ['JavaScript/Jquery.md', 'Jquery'],
          ['JavaScript/JavaScript.md', 'JS基础'],
          ['JavaScript/JS_Advance.md', 'JS进阶'],
          ['JavaScript/JS_RegExp.md', 'JS正则'],
          ['JavaScript/JS_Object.md', 'JS面向对象'],
          ['JavaScript/JS_Design_Mode.md', 'JS设计模式'],
        ],
      },
      {
        title: 'Vue',
        path: '/Vue/',
        children: [['Vue/Vue.md', 'Vue']],
      },
      {
        title: 'Interview',
        children: [['other/cache.md', '从输入URL到展现涉及哪些缓存环节']],
      },
    ],
  },
}
