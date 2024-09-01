import { defineUserConfig } from "vuepress"

import theme from "./theme.js"

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "逆水行舟丨",
  description: "真正的大师, 永远有一颗学徒的心",
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
})
