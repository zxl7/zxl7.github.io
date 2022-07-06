export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"主页\",\"link\":\"/\"},{\"text\":\"CSS\",\"link\":\"/CSS/css.md\"},{\"text\":\"JS\",\"link\":\"/JavaScript/ES6.md\"},{\"text\":\"GitHub\",\"link\":\"https://github.com/zxl7\"},{\"text\":\"掘金\",\"link\":\"https://juejin.cn/user/3624450346452542\"}],\"sidebar\":[{\"text\":\"规范\",\"link\":\"/rules/\",\"collapsible\":true},{\"text\":\"HTML\",\"link\":\"/html/html.md\",\"collapsible\":true},{\"text\":\"CSS\",\"link\":\"/css/css.md\",\"collapsible\":true,\"children\":[{\"link\":\"/css/css.md\",\"text\":\"CSS 基础\"},{\"link\":\"/css/cssSenior.md\",\"text\":\"CSS 进阶\"},{\"link\":\"/css/Less.md\",\"text\":\"Less\"}]},{\"text\":\"JavaScript\",\"link\":\"/javaScript/es6.md\",\"collapsable\":true,\"children\":[{\"link\":\"/javaScript/es6.md\",\"text\":\"ES6\"},{\"link\":\"/javaScript/jQuery.md\",\"text\":\"Jquery\"},{\"link\":\"/javaScript/javaScript.md\",\"text\":\"JS 基础\"},{\"link\":\"/javaScript/advance.md\",\"text\":\"JS 进阶\"},{\"link\":\"/javaScript/regExp.md\",\"text\":\"JS 正则\"},{\"link\":\"/javaScript/object.md\",\"text\":\"JS 面向对象\"},{\"link\":\"/javaScript/designPatterns.md\",\"text\":\"JS 设计模式\"},{\"link\":\"/javaScript/typeScript.md\",\"text\":\"TypeScript\"}]},{\"text\":\"框架相关\",\"link\":\"/framework/\",\"collapsible\":true,\"children\":[{\"link\":\"/framework/Vue3.md\",\"text\":\"Vue3\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
