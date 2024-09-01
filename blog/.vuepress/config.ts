import { defineUserConfig } from "vuepress"
import { getDirname, path } from "vuepress/utils"

import theme from "./theme.js"
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "逆水行舟丨",
  description: "真正的大师, 永远有一颗学徒的心",
  theme,

  plugins: [],

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(__dirname, "./components/BlogHero.vue"),
  },
  // 和 PWA 一起启用
  // shouldPrefetch: false,
})
