var sidebar = require('./sidebar')
var nav = require('./nav')

const { defaultTheme } = require('@vuepress/theme-default')
module.exports = {
    title: '郑天霸的技术博客丨',
    description: '🔥',
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
    theme: defaultTheme({
        // 默认主题配置
        navbar: nav,
        displayAllHeaders: true, // 默认值：false
        sidebar: sidebar,
    })
}