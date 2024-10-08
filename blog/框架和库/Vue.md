---
title: Vue 源码解读
date: 2023-03-09 11:30:52
tags: Vue
categories: [源码]
---

# Vue 源码解读

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
