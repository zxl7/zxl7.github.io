<template><div><ul>
<li>复用,减少冗余</li>
</ul>
<h2 id="变量-variables" tabindex="-1"><a class="header-anchor" href="#变量-variables" aria-hidden="true">#</a> 变量-Variables</h2>
<ul>
<li>只可定义一次</li>
<li>@开头定义变量,使用时直接键入@名称</li>
</ul>
<h3 id="值变量" tabindex="-1"><a class="header-anchor" href="#值变量" aria-hidden="true">#</a> 值变量</h3>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token variable">@width<span class="token punctuation">:</span></span> 10px<span class="token punctuation">;</span>
<span class="token variable">@height<span class="token punctuation">:</span></span> <span class="token variable">@width</span> <span class="token operator">+</span> 10px<span class="token punctuation">;</span>

<span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@height</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">编译为：
#header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选择器变量" tabindex="-1"><a class="header-anchor" href="#选择器变量" aria-hidden="true">#</a> 选择器变量</h3>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token selector">@{mySelector}</span><span class="token punctuation">{</span>....<span class="token punctuation">}</span> <span class="token comment">//给选择器赋值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>具体例子如下:</li>
</ul>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code> <span class="token comment">/* Less */</span>
      <span class="token variable">@mySelector<span class="token punctuation">:</span></span> #wrap<span class="token punctuation">;</span>
      <span class="token variable">@Wrap<span class="token punctuation">:</span></span> wrap<span class="token punctuation">;</span>
      <span class="token selector">@{mySelector}</span><span class="token punctuation">{</span> <span class="token comment">//变量名 必须使用大括号包裹</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.@{Wrap}</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">#@{Wrap}</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span>#666<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">/* 生成的 CSS */</span>
      <span class="token selector">#wrap</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.wrap</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">#wrap</span><span class="token punctuation">{</span>
      <span class="token punctuation">}</span>
        <span class="token property">color</span><span class="token punctuation">:</span>#666<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性变量" tabindex="-1"><a class="header-anchor" href="#属性变量" aria-hidden="true">#</a> 属性变量</h3>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code> <span class="token variable">@borderStyle<span class="token punctuation">:</span></span> border<span class="token operator">-</span>style<span class="token punctuation">;</span>
 <span class="token variable">@Soild<span class="token punctuation">:</span></span>solid<span class="token punctuation">;</span>
 
      <span class="token selector">#wrap</span><span class="token punctuation">{</span>
        <span class="token property">@{borderStyle}</span><span class="token punctuation">:</span> <span class="token variable">@Soild</span><span class="token punctuation">;</span><span class="token comment">//变量名 必须使用大括号包裹</span>
      <span class="token punctuation">}</span>
    
      <span class="token comment">/* 生成的 CSS */</span>
      <span class="token selector">#wrap</span><span class="token punctuation">{</span>
        <span class="token property">border-style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url变量" tabindex="-1"><a class="header-anchor" href="#url变量" aria-hidden="true">#</a> url变量</h3>
<p>项目结构改变时，修改其变量即可。</p>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code>      <span class="token comment">/* Less */</span>
      <span class="token variable">@images<span class="token punctuation">:</span></span> <span class="token string">"../img"</span><span class="token punctuation">;</span><span class="token comment">//需要加引号</span>
      <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"@{images}/dog.png"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span><span class="token comment">//变量名 必须使用大括号包裹</span>
      <span class="token punctuation">}</span>
    
      <span class="token comment">/* 生成的 CSS */</span>
      <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"../img/dog.png"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明变量" tabindex="-1"><a class="header-anchor" href="#声明变量" aria-hidden="true">#</a> 声明变量</h3>
<ul>
<li>类似于 下面的 混合方法</li>
<li>结构: <code v-pre>@name: { 属性: 值 ;}</code>;</li>
<li>使用：<code v-pre>@name()</code>;</li>
</ul>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code>      <span class="token comment">/* Less */</span>
      <span class="token atrule">@background<span class="token punctuation">:</span></span> <span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token atrule">@Rules<span class="token punctuation">:</span></span><span class="token punctuation">{</span>
          <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
          <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
          <span class="token property">border</span><span class="token punctuation">:</span> solid 1px red<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token selector">#main</span><span class="token punctuation">{</span>
          <span class="token variable">@background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">#con</span><span class="token punctuation">{</span>
        <span class="token variable">@Rules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    
      <span class="token comment">/* 生成的 CSS */</span>
      <span class="token selector">#main</span><span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">#con</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px red<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量运算" tabindex="-1"><a class="header-anchor" href="#变量运算" aria-hidden="true">#</a> 变量运算</h3>
<ul>
<li>加减法时 以第一个数据的单位为基准</li>
<li>乘除法时 注意单位一定要统一</li>
</ul>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code>      <span class="token comment">/* Less */</span>
      <span class="token variable">@width<span class="token punctuation">:</span></span>300px<span class="token punctuation">;</span>
      <span class="token variable">@color<span class="token punctuation">:</span></span>#222<span class="token punctuation">;</span>
      <span class="token selector">#wrap</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span><span class="token variable">@width-20</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span><span class="token variable">@width-20</span><span class="token operator">*</span>5<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token variable">@width-20</span><span class="token punctuation">)</span><span class="token operator">*</span>5<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span><span class="token variable">@color</span><span class="token operator">*</span>2<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span><span class="token variable">@color</span> <span class="token operator">+</span> #111<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    
      <span class="token comment">/* 生成的 CSS */</span>
      <span class="token selector">#wrap</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span>280px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span>1400px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span>#444<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span>#333<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量作用域" tabindex="-1"><a class="header-anchor" href="#变量作用域" aria-hidden="true">#</a> 变量作用域</h3>
<ul>
<li>就近原则</li>
</ul>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code> <span class="token comment">/* Less */</span>
      <span class="token variable">@var<span class="token punctuation">:</span></span> <span class="token variable">@a</span><span class="token punctuation">;</span>
      <span class="token variable">@a<span class="token punctuation">:</span></span> 100%<span class="token punctuation">;</span>
      <span class="token selector">#wrap</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span>
        <span class="token variable">@a<span class="token punctuation">:</span></span> 9%<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    
      <span class="token comment">/* 生成的 CSS */</span>
      <span class="token selector">#wrap</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 9%<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>用变量去定义变量</li>
</ul>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code>      <span class="token comment">/* Less */</span>
      <span class="token variable">@fnord<span class="token punctuation">:</span></span>  <span class="token string">"I am fnord."</span><span class="token punctuation">;</span>
      <span class="token variable">@var<span class="token punctuation">:</span></span>    <span class="token string">"fnord"</span><span class="token punctuation">;</span>
      <span class="token selector">#wrap::after</span><span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">@@var</span><span class="token punctuation">;</span> <span class="token comment">//将@var替换为其值 content:@fnord;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">/* 生成的 CSS */</span>
      <span class="token selector">#wrap::after</span><span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"I am fnord."</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="混合-mixins" tabindex="-1"><a class="header-anchor" href="#混合-mixins" aria-hidden="true">#</a> 混合 Mixins</h2>
<ul>
<li>将一组属性从一个规则集包含（“混入”）到另一个规则集的方法</li>
</ul>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
其他规则集中使用这些属性<span class="token punctuation">,</span>我们只需要输入我们想要属性的类的名称<span class="token punctuation">;</span>

<span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数逻辑条件混合-mixin-guards" tabindex="-1"><a class="header-anchor" href="#参数逻辑条件混合-mixin-guards" aria-hidden="true">#</a> 参数逻辑条件混合 Mixin-Guards</h3>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token selector">#color (<span class="token variable">@name</span>) when (<span class="token variable">@naem</span> = white)</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套-nested-rules" tabindex="-1"><a class="header-anchor" href="#嵌套-nested-rules" aria-hidden="true">#</a> 嵌套 Nested Rules</h2>
<ul>
<li>Less使您能够使用嵌套代替或与级联结合使用:</li>
</ul>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .navigation</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .logo</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>在Less中，这样写：</li>
</ul>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token selector">.navigation</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.logo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>生成的代码更简洁，并模仿HTML的结构。</li>
<li>还可以使用此方法将伪选择器与mixins捆绑在一起。</li>
<li>这是经典的clearfix hack，重写为mixin（&amp;代表当前的选择器父级）：</li>
</ul>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>

  <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">" "</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="的妙用" tabindex="-1"><a class="header-anchor" href="#的妙用" aria-hidden="true">#</a> &amp; 的妙用</h3>
<ul>
<li>&amp;:代表的上一层选择器的名字</li>
</ul>
<h3 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h3>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code>    <span class="token selector">#wrap</span><span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span>500px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token atrule">@media screen and <span class="token punctuation">(</span>max-width<span class="token punctuation">:</span>768px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
      <span class="token selector">#wrap</span><span class="token punctuation">{</span>
          <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算" tabindex="-1"><a class="header-anchor" href="#运算" aria-hidden="true">#</a> 运算</h2>
<ol>
<li>算术运算+，-，*，/可以在任意数量，颜色或可变的操作,如果可能，数学运算会考虑单位并在添加，减去或比较数字之前转换数字。</li>
<li>结果最左边是明确说明的单位类型; 如果转换不可能或没有意义，则忽略单位。</li>
<li>不可能转换的示例：px到cm或rad到％;</li>
</ol>
<p>源文档来自:<a href="https://segmentfault.com/a/1190000012360995?utm_source=tag-newest" target="_blank" rel="noopener noreferrer">思否--less看这篇就够了<ExternalLinkIcon/></a></p>
</div></template>
