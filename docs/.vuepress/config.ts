var sidebar = require('./sidebar')
var nav = require('./nav')


import { hopeTheme } from "vuepress-theme-hope";

const { defaultTheme } = require('@vuepress/theme-default')
module.exports = {
    title: '逆水行舟丨',
    // frontmatter: true,
    description: '真正的大师, 永远有一颗学徒的心',
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
        sidebar: sidebar,
        // plugins: {
        //     comment: {
        //         type: "waline",
        //         serverURL: "...", // your serverURL
        //     },
        // },
    })
}
