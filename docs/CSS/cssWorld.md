## 3.1块级元素
 - 由于“块级元素”具有换行特性，因此理论上它都可以配合 clear 属性来清除浮动带来的影响
 - `<div>,<li>,<table>`:符合块级元素的基本特征，也就是一个水平流上只能单独显示一个元素，多个块级元素则换行显示。

## 3.2.1 width:auto
 1. 100%于父级宽度
 2. 包裹性
 3. 收缩到最小:min-content
 4. 超出容器限制:设置white-space:nowrap;属性后--无视父级宽度,叫做max-content;
 **无宽度 流体布局**
 *宽度分离
### box-sizing
 *box-sizing>> 原生普通文本框`<input>`和文本域`<textarea>`
 *box-sizing 被发明出来最大的初衷应该是解决替换元素宽度自适应问
``` css
input, textarea, img, video, object {
box-sizing: border-box;
}
```
## 3.2.6 height:auto
使元素支持height:100%;效果
 1. 设定显示高度
 2. 使用绝对定位
绝对定位元素的百分比计算和非绝对定位元素的百分比计算是有区别的，区:
在于绝对定位的宽高百分比计算是相对于 padding box 的，也就是说会把 padding 大小值计算在内，但是，非绝对定位元素则是相对于 content box 计算的

## 3.3 min,max--width--height:
 - min-width/max-width 出现的场景一定是自适应布局或者流体布局中;
   尺寸会有大有小，为了避免图片在移动端展示过大影响体验，常常会有下面的 max-width 限制：
```css
   img { max-width:100%; height: auto!important; } 
   height:auto 是必需的，
- 否则，如果原始图片有设定height，max-width 生效的时候，图片就会被水平压缩。
- 强制 height 为 auto可以确保宽度不超出的同时使图片保持原来的比例。但这样也会有体验上的问题，那就是在加载时图片占据高度会从 0
- 变成计算高度，图文会有明显的瀑布式下落。
```
 - max-width和max-height的初始值是none，
 - min-width和min-height的初始值是auto
 - 超越最大!important max-width会覆盖width
 - 最小宽度大于最大宽度最小宽度胜利;
### 3.3.4 任意高度元素的展开收起动画技术

