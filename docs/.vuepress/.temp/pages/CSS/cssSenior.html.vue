<template><div><h2 id="_3-1块级元素" tabindex="-1"><a class="header-anchor" href="#_3-1块级元素" aria-hidden="true">#</a> 3.1块级元素</h2>
<ul>
<li>由于“块级元素”具有换行特性，因此理论上它都可以配合 clear 属性来清除浮动带来的影响</li>
<li><code v-pre>&lt;div&gt;,&lt;li&gt;,&lt;table&gt;</code>:符合块级元素的基本特征，也就是一个水平流上只能单独显示一个元素，多个块级元素则换行显示。</li>
</ul>
<h2 id="_3-2-1-width-auto" tabindex="-1"><a class="header-anchor" href="#_3-2-1-width-auto" aria-hidden="true">#</a> 3.2.1 width:auto</h2>
<ol>
<li>100%于父级宽度</li>
<li>包裹性</li>
<li>收缩到最小:min-content</li>
<li>超出容器限制:设置white-space:nowrap;属性后--无视父级宽度,叫做max-content;
<strong>无宽度 流体布局</strong>
*宽度分离</li>
</ol>
<h3 id="box-sizing" tabindex="-1"><a class="header-anchor" href="#box-sizing" aria-hidden="true">#</a> box-sizing</h3>
<p>*box-sizing&gt;&gt; 原生普通文本框<code v-pre>&lt;input&gt;</code>和文本域<code v-pre>&lt;textarea&gt;</code>
*box-sizing 被发明出来最大的初衷应该是解决替换元素宽度自适应问</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">input, textarea, img, video, object</span> <span class="token punctuation">{</span>
<span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-6-height-auto" tabindex="-1"><a class="header-anchor" href="#_3-2-6-height-auto" aria-hidden="true">#</a> 3.2.6 height:auto</h2>
<p>使元素支持height:100%;效果</p>
<ol>
<li>设定显示高度</li>
<li>使用绝对定位
绝对定位元素的百分比计算和非绝对定位元素的百分比计算是有区别的，区:
在于绝对定位的宽高百分比计算是相对于 padding box 的，也就是说会把 padding 大小值计算在内，但是，非绝对定位元素则是相对于 content box 计算的</li>
</ol>
<h2 id="_3-3-min-max-width-height" tabindex="-1"><a class="header-anchor" href="#_3-3-min-max-width-height" aria-hidden="true">#</a> 3.3 min,max--width--height:</h2>
<ul>
<li>min-width/max-width 出现的场景一定是自适应布局或者流体布局中;
尺寸会有大有小，为了避免图片在移动端展示过大影响体验，常常会有下面的 max-width 限制：</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>   <span class="token selector">img</span> <span class="token punctuation">{</span> <span class="token property">max-width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token important">!important</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> 
   <span class="token property">height</span><span class="token punctuation">:</span>auto 是必需的，
- 否则，如果原始图片有设定height，max-width 生效的时候，图片就会被水平压缩。
- 强制 height 为 auto可以确保宽度不超出的同时使图片保持原来的比例。但这样也会有体验上的问题，那就是在加载时图片占据高度会从 0
- 变成计算高度，图文会有明显的瀑布式下落。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>max-width和max-height的初始值是none，</li>
<li>min-width和min-height的初始值是auto</li>
<li>超越最大!important max-width会覆盖width</li>
<li>最小宽度大于最大宽度最小宽度胜利;</li>
</ul>
<h3 id="_3-3-4-任意高度元素的展开收起动画技术" tabindex="-1"><a class="header-anchor" href="#_3-3-4-任意高度元素的展开收起动画技术" aria-hidden="true">#</a> 3.3.4 任意高度元素的展开收起动画技术</h3>
</div></template>
