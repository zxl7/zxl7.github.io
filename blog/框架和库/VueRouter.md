---
title: VueRouter
date: 2023-03-09 11:30:52
tags: VueRouter
categories: [学习笔记]
---

## vueRouter 作用

- Vue-Router 前端路由，路径切换时浏览器端自动判断当前路径，加载对应组件
  ![image.png](https://uploader.shimo.im/f/yJzXH9VSHrPYfYsF.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3MjY3OTUxMzMsImZpbGVHVUlEIjoiUmpDVHByVmt2V1h4Y3REeCIsImlhdCI6MTcyNjc5NDgzMywiaXNzIjoidXBsb2FkZXJfYWNjZXNzX3Jlc291cmNlIiwidXNlcklkIjoxMzM0ODczMH0.V82UulBNVRfmPjalpMPbycc3fiOSBdya3qzRiC9GtaQ)

### Hash 模式

![image.png](https://uploader.shimo.im/f/fM4WATinEfb3ayzG.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3MjY3OTUxMzMsImZpbGVHVUlEIjoiUmpDVHByVmt2V1h4Y3REeCIsImlhdCI6MTcyNjc5NDgzMywiaXNzIjoidXBsb2FkZXJfYWNjZXNzX3Jlc291cmNlIiwidXNlcklkIjoxMzM0ODczMH0.V82UulBNVRfmPjalpMPbycc3fiOSBdya3qzRiC9GtaQ)

- 可通过 location.url 切换地址， 如果只改变#号后面的地址，浏览器不会向服务器发起请求，但是会记录到浏览器的访问历史中
- Hash 改变后，记录 Hash 的变化：监听 `hashchang` 记录当前路由地址，并找到该路径对应组件重新渲染

### History 模式

![image.png](https://uploader.shimo.im/f/hTe5BNmAbLLorDAe.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3MjY3OTUxMzMsImZpbGVHVUlEIjoiUmpDVHByVmt2V1h4Y3REeCIsImlhdCI6MTcyNjc5NDgzMywiaXNzIjoidXBsb2FkZXJfYWNjZXNzX3Jlc291cmNlIiwidXNlcklkIjoxMzM0ODczMH0.V82UulBNVRfmPjalpMPbycc3fiOSBdya3qzRiC9GtaQ)

- 一个 Url，通过 history.pushState() 改变地址，只是改变地址栏，然后把当前地址记录到浏览器的访问历史中，并不会真正的跳转到指定路径，也就是浏览器不会向服务起发送请求
- 通过监听 `popstate` 事件，可以监听浏览器访问历史的变化，popstate 的处理函数中，可以记录改变后的地址
  注意：
- 调用 pushState 和 repalceState 不会触发 popstate；
- 当浏览器的前进后退按钮和 back() ，forward()函数才会触发
- 最后当地址改变后根据路由地址，找到对应组件进行渲染

#### 实现逻辑

![image.png](https://uploader.shimo.im/f/LjvdDvna1dWgaKLl.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3MjY3OTUxMzMsImZpbGVHVUlEIjoiUmpDVHByVmt2V1h4Y3REeCIsImlhdCI6MTcyNjc5NDgzMywiaXNzIjoidXBsb2FkZXJfYWNjZXNzX3Jlc291cmNlIiwidXNlcklkIjoxMzM0ODczMH0.V82UulBNVRfmPjalpMPbycc3fiOSBdya3qzRiC9GtaQ)

- 导入模块，注册插件
- 通过全局方法 Vue.use() 使用插件 ，Vue.ues() 传入函数时直接调用，传入对象会调用对象的静态方法 \_install()，Vue.use 会自动阻止多次注册相同插件
- 然后调用 new VueRouter()，创建一个 Vue 的实例，所以 VueRouter 应该是一个构造函数或者 类
- 并且调用的时候接受参数，以对象形式接收一些规则：
- path：路由地址
- component：组件

#### 类图分析

![image.png](https://uploader.shimo.im/f/N7Op24qhUbbgzLdG.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3MjY3OTUxMzMsImZpbGVHVUlEIjoiUmpDVHByVmt2V1h4Y3REeCIsImlhdCI6MTcyNjc5NDgzMywiaXNzIjoidXBsb2FkZXJfYWNjZXNzX3Jlc291cmNlIiwidXNlcklkIjoxMzM0ODczMH0.V82UulBNVRfmPjalpMPbycc3fiOSBdya3qzRiC9GtaQ)

- options：记录 构造函数 中传入的对象
- data： 响应式的记录当前的路由地址，因为路由地址改变后，组件要响应式的更新，通过 Vue.observable()实现
- routerMap: 路由和组件的对应关系

```JS
    对应的方法：'+'对外公开， '_'静态方法
    Constructor(Options)：初始化传入的对象的所有属性
    _inStall(Vue)： 实现Vue的插件机制
    init() 调用的一些初始化的其他方法
    initEvent()：注册 popstate 方法，监听浏览器历史变化
    createRouteMap()：
    初始化routerMap属性，构造函数中的路由规则，然后转换成键值对；
    键：路由的地址，值：路由对应的组件；
    会在 routerView 组件中使用 routerMap
    initComponents(Vue)：主要用于创建组件 router-link，router-view
```

实现步骤
静态方法初始化 install()
创建构造函数
构造键值对：createRouteMap()
组件 router-link
组件 router-view
initEvent()

完整代码如下

```JS
let _Vue = null
export default class VueRouter {
  // 初始化方法包装
  init() {
    this.createRouteMap()
    this.initComponents(_Vue)
    this.initEvent()
  }
  // 静态方法
  static install(Vue) {
    // 1. 判断当前插件是否安装
    if (VueRouter.install.installed) {
      return
    }
    VueRouter.install.installed = true
    // 2. Vue构造函数记录到全局变量,实例方法中使用构造函数函数
    _Vue = Vue
    // 3. 创建Vue实例时候传入的router对象注入到Vue实例
    // 混入：来分发 Vue 组件中的可复用功能
    _Vue.mixin({
      beforeCreate() {
        // 区分组件和实例
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router
          this.$options.router.init()
        }
      },
    })
  }
  constructor(options) {
    this.options = options
    // 键值对
    this.routeMap = {}
    // 响应式对象，observable内部会转响应式
    this.data = _Vue.observable({
      current: '/',
    })
  }

  createRouteMap() {
    // 遍历所有路由规则，把路由规则解析成键值对的形式，存储到 routeMap 中
    this.options.routes.forEach((route) => {
      this.routeMap[route.path] = route.component
    })
  }

  initComponents(Vue) {
    Vue.component('router-link', {
      props: {
        to: String,
      },
      // h函数，创建虚拟DOM
      render(h) {
        return h(
          'a',
          {
            // dom对象属性 + attres
            attrs: {
              href: this.to,
            },
            on: {
              click: this.clickHandler,
            },
            // 子元素，数组
          },
          [this.$slots.default],
        )
      },
      methods: {
        clickHandler(e) {
          //  pushState 改变浏览器的地址栏，不发请求
          history.pushState({}, '', this.to)
          //  当前地址
          this.$router.data.current = this.to
          e.preventDefault()
        },
      },
      // template: '<a :href="to"><slot></slot></a>',
    })
    const self = this
    Vue.component('router-view', {
      // 创建虚拟DOM，render中需要找到当前路由地址，然后根据地址去 routerMap 中寻找对应组件，然后再用 h() 函数，返回组件虚拟DOM
      render(h) {
        const component = self.routeMap[self.data.current]
        return h(component)
      },
    })
  }

  initEvent() {
    window.addEventListener('popstate', () => {
      this.data.current = window.location.pathname
    })
  }
}
```
