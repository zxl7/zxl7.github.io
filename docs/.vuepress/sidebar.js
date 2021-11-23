module.exports = [
  {
    title: 'HTML',
    path: '/HTML/',
    children: [['HTML/HTML.md', 'HTML']],
  },
  {
    title: 'CSS',
    path: '/CSS/',
    children: [
      ['CSS/css.md', 'CSS 基础'],
      ['CSS/world.md', 'CSS 进阶'],
      ['CSS/Less.md', 'Less'],
    ],
  },
  {
    title: 'JavaScript', // 一级菜单名称
    path: '/JavaScript/',
    sidebarDepth: 2, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
    children: [
      ['JavaScript/ES6.md', 'ES6'],
      ['JavaScript/Jquery.md', 'Jquery'],
      ['JavaScript/JavaScript.md', 'JS 基础'],
      ['JavaScript/Advance.md', 'JS 进阶'],
      ['JavaScript/RegExp.md', 'JS 正则'],
      ['JavaScript/Object.md', 'JS 面向对象'],
      ['JavaScript/DesignPatterns.md', 'JS 设计模式'],
    ],
  },
  {
    title: 'Vue',
    path: '/Vue/',
    children: [['Vue/Vue.md', 'Vue']],
  },
  {
    title: 'Weekly',
    path: '/Weekly/',
    children: [['Weekly/1.md', '学习计划 🌋']],
  },
  {
    title: 'Interview',
    path: '/Interview/',
    children: [['Interview/Cache.md', '从输入URL到展现涉及哪些缓存环节']],
  },
]