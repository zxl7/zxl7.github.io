---
title: Diff 算法
date: 2024-04-09 11:30:52
tags: JavaScript
categories: [算法]
---

## Diff 算法

- 通过比较新旧节点，找出差异，然后更新视图
- 三种 Diff 算法：O(n^3)、O(n^2)、O(n)
- React 使用 O(n) 算法
- Vue 使用 O(n^3) 算法

### 虚拟 DOM(Virtual DOM)

- 用 JS 对象表示 DOM 结构
- 虚拟 DOM 会通过 Diff 算法找出最小差异，然后批量更新真实 DOM

### 为什么使用虚拟 DOM

- 虚拟 DOM 可以维护程序的状态,跟踪上一次的状态
- 通过比较前后两次状态差异更新真实 DOM
- 解决视图和状态同步问题
- 真实 DOM 的属性很多，创建 DOM 节点开销很大
- 虚拟 DOM 只是普通 JavaScript 对象，描述属性并不需要很多，创建开销很小
- 复杂视图情况下提升渲染性能(操作 dom 性能消耗大,减少操作 dom 的范围可以提升性能)
- 虚拟 DOM 可以跨平台使用，比如 React Native
- 虚拟 DOM 可以实现 DOM diff 算法，最小化页面重绘，提升性能

- 复杂视图情况下提升渲染性能,因为虚拟 DOM+Diff 算法可以精准找到 DOM 树变更的地方,减少 DOM 的操作(重排重绘)
