var sidebar = require('./sidebar')
var nav = require('./nav')

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
    nav: nav,
    themeConfig: {
      displayAllHeaders: true, // 默认值：false
    },
    sidebar: sidebar,
  },
}
