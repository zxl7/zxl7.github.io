---
title: Vue3
date: 2023-03-09 11:30:52
tags: Vue
categories: [学习笔记]
---

## Composition API

- setup
- ref
- reactive
- toRefs
- lifeCycle

## Proxy 检测值的变化

<!-- <img src="./img/proxy.png"> -->

## watchEffect

- 自动收集依赖并触发
- 自动/手动销毁 effect
- 使副作用失效
- 副作用执行顺序可控制
<!-- <img src="./img/watchEffect.png"> -->

## watch

- recative a single value
- visit change before And After value

```TS
watch(count,(new,old)=>{
    console.log(new)
    console.log(old)
})
```

## 自定义 Hooks

## Teleport

## Fragment

## Vite

- Rollup
- 支持 ES modeles
