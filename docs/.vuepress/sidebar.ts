module.exports = [
  {
    text: '规范',
    link: '/Rules/',
  },
  {
    text: 'HTML',
    link: '/HTML/HTML.md',
  },
  {
    text: 'CSS',
    link: '/CSS/css.md',
    collapsible: true,
    children: [
      { link: '/CSS/css.md', text: 'CSS 基础' },
      { link: '/CSS/cssSenior.md', text: 'CSS 进阶' },
      { link: '/CSS/Less.md', text: 'Less' },
    ],
  },
  {
    text: 'JavaScript', // 一级菜单名称
    link: '/JavaScript/ES6.md',
    sidebarDepth: 2, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
    collapsible: true,
    children: [
      { link: '/JavaScript/ES6.md', text: 'ES6' },
      { link: '/JavaScript/Jquery.md', text: 'Jquery' },
      { link: '/JavaScript/JavaScript.md', text: 'JS 基础' },
      { link: '/JavaScript/Advance.md', text: 'JS 进阶' },
      { link: '/JavaScript/RegExp.md', text: 'JS 正则' },
      { link: '/JavaScript/Object.md', text: 'JS 面向对象' },
      { link: '/JavaScript/DesignPatterns.md', text: 'JS 设计模式' },
      { link: '/JavaScript/TypeScript.md', text: 'TypeScript' },
    ],
  },
  {
    text: '框架相关',
    link: '/Framework/',
    collapsible: true,
    children: [
      { link: '/Framework/Vue3.md', text: 'Vue3' }
    ],
  },
]
