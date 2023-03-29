import{_ as e,r as p,o as t,c as l,a as n,b as i,d as c,e as s}from"./app.38db9df0.js";const o={},u=c(`<ul><li>\u590D\u7528,\u51CF\u5C11\u5197\u4F59</li></ul><h2 id="\u53D8\u91CF-variables" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF-variables" aria-hidden="true">#</a> \u53D8\u91CF-Variables</h2><ul><li>\u53EA\u53EF\u5B9A\u4E49\u4E00\u6B21</li><li>@\u5F00\u5934\u5B9A\u4E49\u53D8\u91CF,\u4F7F\u7528\u65F6\u76F4\u63A5\u952E\u5165@\u540D\u79F0</li></ul><h3 id="\u503C\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u503C\u53D8\u91CF" aria-hidden="true">#</a> \u503C\u53D8\u91CF</h3><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token variable">@width<span class="token punctuation">:</span></span> 10px<span class="token punctuation">;</span>
<span class="token variable">@height<span class="token punctuation">:</span></span> <span class="token variable">@width</span> <span class="token operator">+</span> 10px<span class="token punctuation">;</span>

<span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@height</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">\u7F16\u8BD1\u4E3A\uFF1A
#header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9009\u62E9\u5668\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5668\u53D8\u91CF" aria-hidden="true">#</a> \u9009\u62E9\u5668\u53D8\u91CF</h3><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">@{mySelector}</span><span class="token punctuation">{</span>....<span class="token punctuation">}</span> <span class="token comment">//\u7ED9\u9009\u62E9\u5668\u8D4B\u503C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5177\u4F53\u4F8B\u5B50\u5982\u4E0B:</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code> <span class="token comment">/* Less */</span>
      <span class="token variable">@mySelector<span class="token punctuation">:</span></span> #wrap<span class="token punctuation">;</span>
      <span class="token variable">@Wrap<span class="token punctuation">:</span></span> wrap<span class="token punctuation">;</span>
      <span class="token selector">@{mySelector}</span><span class="token punctuation">{</span> <span class="token comment">//\u53D8\u91CF\u540D \u5FC5\u987B\u4F7F\u7528\u5927\u62EC\u53F7\u5305\u88F9</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.@{Wrap}</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">#@{Wrap}</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span>#666<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">/* \u751F\u6210\u7684 CSS */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C5E\u6027\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u53D8\u91CF" aria-hidden="true">#</a> \u5C5E\u6027\u53D8\u91CF</h3><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code> <span class="token variable">@borderStyle<span class="token punctuation">:</span></span> border<span class="token operator">-</span>style<span class="token punctuation">;</span>
 <span class="token variable">@Soild<span class="token punctuation">:</span></span>solid<span class="token punctuation">;</span>
 
      <span class="token selector">#wrap</span><span class="token punctuation">{</span>
        <span class="token property">@{borderStyle}</span><span class="token punctuation">:</span> <span class="token variable">@Soild</span><span class="token punctuation">;</span><span class="token comment">//\u53D8\u91CF\u540D \u5FC5\u987B\u4F7F\u7528\u5927\u62EC\u53F7\u5305\u88F9</span>
      <span class="token punctuation">}</span>
    
      <span class="token comment">/* \u751F\u6210\u7684 CSS */</span>
      <span class="token selector">#wrap</span><span class="token punctuation">{</span>
        <span class="token property">border-style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#url\u53D8\u91CF" aria-hidden="true">#</a> url\u53D8\u91CF</h3><p>\u9879\u76EE\u7ED3\u6784\u6539\u53D8\u65F6\uFF0C\u4FEE\u6539\u5176\u53D8\u91CF\u5373\u53EF\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>      <span class="token comment">/* Less */</span>
      <span class="token variable">@images<span class="token punctuation">:</span></span> <span class="token string">&quot;../img&quot;</span><span class="token punctuation">;</span><span class="token comment">//\u9700\u8981\u52A0\u5F15\u53F7</span>
      <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;@{images}/dog.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span><span class="token comment">//\u53D8\u91CF\u540D \u5FC5\u987B\u4F7F\u7528\u5927\u62EC\u53F7\u5305\u88F9</span>
      <span class="token punctuation">}</span>
    
      <span class="token comment">/* \u751F\u6210\u7684 CSS */</span>
      <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;../img/dog.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u58F0\u660E\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u53D8\u91CF" aria-hidden="true">#</a> \u58F0\u660E\u53D8\u91CF</h3><ul><li>\u7C7B\u4F3C\u4E8E \u4E0B\u9762\u7684 \u6DF7\u5408\u65B9\u6CD5</li><li>\u7ED3\u6784: <code>@name: { \u5C5E\u6027: \u503C ;}</code>;</li><li>\u4F7F\u7528\uFF1A<code>@name()</code>;</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>      <span class="token comment">/* Less */</span>
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
    
      <span class="token comment">/* \u751F\u6210\u7684 CSS */</span>
      <span class="token selector">#main</span><span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">#con</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px red<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D8\u91CF\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u8FD0\u7B97" aria-hidden="true">#</a> \u53D8\u91CF\u8FD0\u7B97</h3><ul><li>\u52A0\u51CF\u6CD5\u65F6 \u4EE5\u7B2C\u4E00\u4E2A\u6570\u636E\u7684\u5355\u4F4D\u4E3A\u57FA\u51C6</li><li>\u4E58\u9664\u6CD5\u65F6 \u6CE8\u610F\u5355\u4F4D\u4E00\u5B9A\u8981\u7EDF\u4E00</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>      <span class="token comment">/* Less */</span>
      <span class="token variable">@width<span class="token punctuation">:</span></span>300px<span class="token punctuation">;</span>
      <span class="token variable">@color<span class="token punctuation">:</span></span>#222<span class="token punctuation">;</span>
      <span class="token selector">#wrap</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span><span class="token variable">@width-20</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span><span class="token variable">@width-20</span><span class="token operator">*</span>5<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token variable">@width-20</span><span class="token punctuation">)</span><span class="token operator">*</span>5<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span><span class="token variable">@color</span><span class="token operator">*</span>2<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span><span class="token variable">@color</span> <span class="token operator">+</span> #111<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    
      <span class="token comment">/* \u751F\u6210\u7684 CSS */</span>
      <span class="token selector">#wrap</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span>280px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span>1400px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span>#444<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span>#333<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D8\u91CF\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u53D8\u91CF\u4F5C\u7528\u57DF</h3><ul><li>\u5C31\u8FD1\u539F\u5219</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code> <span class="token comment">/* Less */</span>
      <span class="token variable">@var<span class="token punctuation">:</span></span> <span class="token variable">@a</span><span class="token punctuation">;</span>
      <span class="token variable">@a<span class="token punctuation">:</span></span> 100%<span class="token punctuation">;</span>
      <span class="token selector">#wrap</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span>
        <span class="token variable">@a<span class="token punctuation">:</span></span> 9%<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    
      <span class="token comment">/* \u751F\u6210\u7684 CSS */</span>
      <span class="token selector">#wrap</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 9%<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7528\u53D8\u91CF\u53BB\u5B9A\u4E49\u53D8\u91CF</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>      <span class="token comment">/* Less */</span>
      <span class="token variable">@fnord<span class="token punctuation">:</span></span>  <span class="token string">&quot;I am fnord.&quot;</span><span class="token punctuation">;</span>
      <span class="token variable">@var<span class="token punctuation">:</span></span>    <span class="token string">&quot;fnord&quot;</span><span class="token punctuation">;</span>
      <span class="token selector">#wrap::after</span><span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">@@var</span><span class="token punctuation">;</span> <span class="token comment">//\u5C06@var\u66FF\u6362\u4E3A\u5176\u503C content:@fnord;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">/* \u751F\u6210\u7684 CSS */</span>
      <span class="token selector">#wrap::after</span><span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;I am fnord.&quot;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DF7\u5408-mixins" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5408-mixins" aria-hidden="true">#</a> \u6DF7\u5408 Mixins</h2><ul><li>\u5C06\u4E00\u7EC4\u5C5E\u6027\u4ECE\u4E00\u4E2A\u89C4\u5219\u96C6\u5305\u542B\uFF08\u201C\u6DF7\u5165\u201D\uFF09\u5230\u53E6\u4E00\u4E2A\u89C4\u5219\u96C6\u7684\u65B9\u6CD5</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
\u5176\u4ED6\u89C4\u5219\u96C6\u4E2D\u4F7F\u7528\u8FD9\u4E9B\u5C5E\u6027<span class="token punctuation">,</span>\u6211\u4EEC\u53EA\u9700\u8981\u8F93\u5165\u6211\u4EEC\u60F3\u8981\u5C5E\u6027\u7684\u7C7B\u7684\u540D\u79F0<span class="token punctuation">;</span>

<span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53C2\u6570\u903B\u8F91\u6761\u4EF6\u6DF7\u5408-mixin-guards" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u903B\u8F91\u6761\u4EF6\u6DF7\u5408-mixin-guards" aria-hidden="true">#</a> \u53C2\u6570\u903B\u8F91\u6761\u4EF6\u6DF7\u5408 Mixin-Guards</h3><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">#color (<span class="token variable">@name</span>) when (<span class="token variable">@naem</span> = white)</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5D4C\u5957-nested-rules" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957-nested-rules" aria-hidden="true">#</a> \u5D4C\u5957 Nested Rules</h2><ul><li>Less\u4F7F\u60A8\u80FD\u591F\u4F7F\u7528\u5D4C\u5957\u4EE3\u66FF\u6216\u4E0E\u7EA7\u8054\u7ED3\u5408\u4F7F\u7528:</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .navigation</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .logo</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728Less\u4E2D\uFF0C\u8FD9\u6837\u5199\uFF1A</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token selector">.navigation</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.logo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u751F\u6210\u7684\u4EE3\u7801\u66F4\u7B80\u6D01\uFF0C\u5E76\u6A21\u4EFFHTML\u7684\u7ED3\u6784\u3002</li><li>\u8FD8\u53EF\u4EE5\u4F7F\u7528\u6B64\u65B9\u6CD5\u5C06\u4F2A\u9009\u62E9\u5668\u4E0Emixins\u6346\u7ED1\u5728\u4E00\u8D77\u3002</li><li>\u8FD9\u662F\u7ECF\u5178\u7684clearfix hack\uFF0C\u91CD\u5199\u4E3Amixin\uFF08&amp;\u4EE3\u8868\u5F53\u524D\u7684\u9009\u62E9\u5668\u7236\u7EA7\uFF09\uFF1A</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>

  <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7684\u5999\u7528" tabindex="-1"><a class="header-anchor" href="#\u7684\u5999\u7528" aria-hidden="true">#</a> &amp; \u7684\u5999\u7528</h3><ul><li>&amp;:\u4EE3\u8868\u7684\u4E0A\u4E00\u5C42\u9009\u62E9\u5668\u7684\u540D\u5B57</li></ul><h3 id="\u5A92\u4F53\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5A92\u4F53\u67E5\u8BE2" aria-hidden="true">#</a> \u5A92\u4F53\u67E5\u8BE2</h3><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>    <span class="token selector">#wrap</span><span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span>500px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token atrule">@media screen and <span class="token punctuation">(</span>max-width<span class="token punctuation">:</span>768px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
      <span class="token selector">#wrap</span><span class="token punctuation">{</span>
          <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97" aria-hidden="true">#</a> \u8FD0\u7B97</h2><ol><li>\u7B97\u672F\u8FD0\u7B97+\uFF0C-\uFF0C*\uFF0C/\u53EF\u4EE5\u5728\u4EFB\u610F\u6570\u91CF\uFF0C\u989C\u8272\u6216\u53EF\u53D8\u7684\u64CD\u4F5C,\u5982\u679C\u53EF\u80FD\uFF0C\u6570\u5B66\u8FD0\u7B97\u4F1A\u8003\u8651\u5355\u4F4D\u5E76\u5728\u6DFB\u52A0\uFF0C\u51CF\u53BB\u6216\u6BD4\u8F83\u6570\u5B57\u4E4B\u524D\u8F6C\u6362\u6570\u5B57\u3002</li><li>\u7ED3\u679C\u6700\u5DE6\u8FB9\u662F\u660E\u786E\u8BF4\u660E\u7684\u5355\u4F4D\u7C7B\u578B; \u5982\u679C\u8F6C\u6362\u4E0D\u53EF\u80FD\u6216\u6CA1\u6709\u610F\u4E49\uFF0C\u5219\u5FFD\u7565\u5355\u4F4D\u3002</li><li>\u4E0D\u53EF\u80FD\u8F6C\u6362\u7684\u793A\u4F8B\uFF1Apx\u5230cm\u6216rad\u5230\uFF05;</li></ol>`,43),r=s("\u6E90\u6587\u6863\u6765\u81EA:"),d={href:"https://segmentfault.com/a/1190000012360995?utm_source=tag-newest",target:"_blank",rel:"noopener noreferrer"},v=s("\u601D\u5426--less\u770B\u8FD9\u7BC7\u5C31\u591F\u4E86");function k(m,b){const a=p("ExternalLinkIcon");return t(),l("div",null,[u,n("p",null,[r,n("a",d,[v,i(a)])])])}var g=e(o,[["render",k],["__file","Less.html.vue"]]);export{g as default};
