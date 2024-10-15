---
title: Vue 源码解读
date: 2023-03-09 11:30:52
tags: Vue
categories: [源码]
---

# Vue 源码解读

## new Vue()发生了什么?

- this.\_init  方法
- 合并配置
- 初始化生命周期
- 初始化事件中心
- 初始化渲染
- 初始化 data、props、computed、watcher 等等
- 在初始化的最后，检测到如果有  el  属性，则调用  vm.$mount  方法挂载  vm，挂载的目标就是把模板渲染成最终的 DOM

### Vue 实例化过程

- 先缓存了原型上的 $mount 方法，再重新定义该方法，我们先来分析这段代码。首先，它对 el 做了限制，Vue 不能挂载在 body、html 这样的根节点上。接下来的是很关键的逻辑 —— 如果没有定义 render 方法，则会把 el 或者 template 字符串转换成 render 方法。这里的核心就是调用 compileToFunctions 方法，把模板编译成 render 函数。最后调用原先原型上的 $mount 方法挂载 vm。
- $mount 方法支持传入 2 个参数，第一个是 el，它表示挂载的元素，可以是字符串，也可以是 DOM 对象，如果是字符串在浏览器环境下会调用 query 方法转换成 DOM 对象的。第二个参数是和服务端渲染相关，在浏览器环境下我们不需要传第二个参数。
- $mount 方法实际上会去调用 mountComponent 方法: mountComponent 核心就是先调用 vm.\_render 方法先生成虚拟 Node，再实例化一个渲染 Watcher，在它的回调函数中会调用 updateComponent 方法，最终调用 vm.\_update 更新 DOM。

## Vue2 深入响应式

```js
// 模拟 Vue 中的 data 选项
let data = {
  msg: "hello",
  count: 10,
}
// 模拟 Vue 的实例
let vm = {}
proxyData(data)
function proxyData(data) {
  // 遍历 data 对象的所有属性,每个属性通过defineProperty转换成getter/setter,所以性能较差
  Object.keys(data).forEach((key) => {
    // 把 data 中的属性，转换成 vm 的 setter/setter
    Object.defineProperty(vm, key, {
      enumerable: true,
      configurable: true,
      get() {
        console.log("get: ", key, data[key])
        return data[key]
      },
      set(newValue) {
        console.log("set: ", key, newValue)
        if (newValue === data[key]) {
          return
        }
        data[key] = newValue
        // 数据更改，更新 DOM 的值
        document.querySelector("#app").textContent = data[key]
      },
    })
  })
}

// 测试
vm.msg = "Hello World"
console.log(vm.msg)
```

## Vue3

```JS
// 模拟 Vue 中的 data 选项
let data = {
msg: "hello",
count: 0,
};
// 模拟 Vue 实例
let vm = new Proxy(data, {
// 执行代理行为的函数
// 当访问 vm 的成员会执行
get(target, key) {
    console.log("get, key: ", key, target[key]);
    return target[key];
},
// 当设置 vm 的成员会执行
set(target, key, newValue) {
    console.log("set, key: ", key, newValue);
    if (target[key] === newValue) {
    return;
    }
    target[key] = newValue;
    document.querySelector("#app").textContent = target[key];
},
});
// 测试
vm.msg = "Hello World";
console.log(vm.msg);
```
