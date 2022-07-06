<template><div><h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1>
<h2 id="interface-接口" tabindex="-1"><a class="header-anchor" href="#interface-接口" aria-hidden="true">#</a> interface 接口</h2>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>// duck typing
interface LikeArray {
    [index: number]: string
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> Class</h2>
<ul>
<li>constructor</li>
<li>extends</li>
<li>super</li>
<li>public</li>
<li>private</li>
<li>protected</li>
</ul>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>interface Aaa {
    currentTime:number;
    alert():void
}
class Clock implements Aaa{
    currentTime:number = 123,
    alert(){
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>function withAPI&lt;T&gt;(url:string):Promise&lt;T&gt; {
    return fetch(url).then(res=&gt;{
        resp.json())
    })
}

withAPI&lt;Aaa&gt;('country.resp')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="交叉-联合类型" tabindex="-1"><a class="header-anchor" href="#交叉-联合类型" aria-hidden="true">#</a> 交叉,联合类型</h2>
<ul>
<li>&amp;</li>
<li>|</li>
</ul>
<h2 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言" aria-hidden="true">#</a> 类型断言</h2>
<ul>
<li>as</li>
</ul>
<h2 id="partial" tabindex="-1"><a class="header-anchor" href="#partial" aria-hidden="true">#</a> Partial</h2>
<ul>
<li>接受泛型,传入类型都变成可选</li>
</ul>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>type Partial&lt;T&gt; = {
    [P in keyof T]?: T[P]
}

type CountOpt = {
    [p in Keys]?: CountOpt[p]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h2>
<ul>
<li>是否满足约束</li>
<li>可以用在泛型 或者 条件类型</li>
</ul>
<h2 id="declare" tabindex="-1"><a class="header-anchor" href="#declare" aria-hidden="true">#</a> declare</h2>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>declare var Jquery:(select:string)=&gt;any)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
