<template><div><p>Vue 3 tansuo</p>
<h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2>
<ul>
<li>setup</li>
<li>ref</li>
<li>reactive</li>
<li>toRefs</li>
<li>lifeCycle</li>
</ul>
<h2 id="proxy-检测值的变化" tabindex="-1"><a class="header-anchor" href="#proxy-检测值的变化" aria-hidden="true">#</a> Proxy 检测值的变化</h2>
<img src="@source/Framework/img/proxy.png">
<h2 id="watcheffect" tabindex="-1"><a class="header-anchor" href="#watcheffect" aria-hidden="true">#</a> watchEffect</h2>
<ul>
<li>自动收集依赖并触发</li>
<li>自动/手动销毁 effect</li>
<li>使副作用失效</li>
<li>副作用执行顺序可控制
<img src="@source/Framework/img/watchEffect.png"></li>
</ul>
<h2 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h2>
<ul>
<li>recative a single value</li>
<li>visit change before And After value</li>
</ul>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>watch(count,(new,old)=&gt;{
    console.log(new)
    console.log(old)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义-hooks" tabindex="-1"><a class="header-anchor" href="#自定义-hooks" aria-hidden="true">#</a> 自定义 Hooks</h2>
<h2 id="teleport" tabindex="-1"><a class="header-anchor" href="#teleport" aria-hidden="true">#</a> Teleport</h2>
<h2 id="fragment" tabindex="-1"><a class="header-anchor" href="#fragment" aria-hidden="true">#</a> Fragment</h2>
<h2 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> Vite</h2>
<ul>
<li>Rollup</li>
<li>支持ES modeles</li>
</ul>
</div></template>
