module.exports = {
  title: '郑天霸的技术博客丨🥩',
  description: '温故而知新丶',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
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
      { text: 'GitHub', link: 'https://github.com/Xanadu-zxl' },
      { text: '掘金', link: 'https://juejin.im/user/5b1228ccf265da6e0b6ff25e' },
    ],
    themeConfig: {
      displayAllHeaders: true, // 默认值：false
    },
    sidebar: [
      {
        title: 'HTML ✨',
        children: [['HTML/HTML.md', '再学HTML']],
      },

      {
        title: 'CSS ⌨️',
        children: [
          ['CSS/css.md', 'CSS基础'],
          ['CSS/cssWorld.md', 'CSS世界'],
          ['CSS/Less.md', 'Less'],
        ],
      },
      {
        title: 'JS 💻', // 一级菜单名称
        path: '/JavaScript/',
        sidebarDepth: 2, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
        children: [
          //菜单名称为'Ajax-Json'，跳转至/pages/JavaScript/Ajax-Json.md
          ['JavaScript/ES6.md', '🍦 ES6'],
          ['JavaScript/JavaScript.md', '🍦 JS基础丶'],
          ['JavaScript/Jquery.md', '🍦 Jquery'],
          ['JavaScript/JS_Advance.md', '🍦 JS进阶'],
          ['JavaScript/JS_Design_Mode.md', '🍦 JS设计模式'],
          ['JavaScript/JS_Object.md', '🍦 JS面向对象'],
          ['JavaScript/JS_RegExp.md', '🍦 JS正则'],
        ],
      },
      {
        title: '其他 🔧',
        children: [['other/cache.md', '从输入URL到展现涉及哪些缓存环节']],
      },
    ],
  },
}
