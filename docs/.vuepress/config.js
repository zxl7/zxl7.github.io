var sidebar = require('./directory')

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
      { text: '掘金', link: 'https://juejin.cn/user/3624450346452542' },
    ],
    themeConfig: {
      displayAllHeaders: true, // 默认值：false
    },
    sidebar: sidebar,
  },
}
