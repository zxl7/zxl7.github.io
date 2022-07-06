module.exports = [
  {
    text: '规范',
    link: '/rules/',
    collapsible: true,
  },
  {
    text: 'HTML',
    link: '/html/html.md',
    collapsible: true,
  },
  {
    text: 'CSS',
    link: '/css/css.md',
    collapsible: true,
    children: [
      { link: '/css/css.md', text: 'CSS 基础' },
      { link: '/css/cssSenior.md', text: 'CSS 进阶' },
      { link: '/css/Less.md', text: 'Less' },
    ],
  },
  {
    text: 'JavaScript',
    link: '/javaScript/es6.md',
    collapsable: true,
    children: [
      { link: '/javaScript/es6.md', text: 'ES6' },
      { link: '/javaScript/jQuery.md', text: 'Jquery' },
      { link: '/javaScript/javaScript.md', text: 'JS 基础' },
      { link: '/javaScript/advance.md', text: 'JS 进阶' },
      { link: '/javaScript/regExp.md', text: 'JS 正则' },
      { link: '/javaScript/object.md', text: 'JS 面向对象' },
      { link: '/javaScript/designPatterns.md', text: 'JS 设计模式' },
      { link: '/javaScript/typeScript.md', text: 'TypeScript' },
    ],
  },
  {
    text: '框架相关',
    link: '/framework/',
    collapsible: true,
    children: [
      { link: '/framework/Vue3.md', text: 'Vue3' }
    ],
  },
]
