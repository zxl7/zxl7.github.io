<template><div><p>Vue 源码解读</p>
<h2 id="深入响应式" tabindex="-1"><a class="header-anchor" href="#深入响应式" aria-hidden="true">#</a> 深入响应式</h2>
<p>Vue2</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 模拟 Vue 中的 data 选项</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
<span class="token comment">// 模拟 Vue 的实例</span>
<span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">proxyData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">proxyData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 遍历 data 对象的所有属性</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 把 data 中的属性，转换成 vm 的 setter/setter</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'get: '</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'set: '</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">===</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newValue
        <span class="token comment">// 数据更改，更新 DOM 的值</span>
        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 测试</span>
vm<span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token string">'Hello World'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue3</p>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>// 模拟 Vue 中的 data 选项
let data = {
msg: &quot;hello&quot;,
count: 0,
};
// 模拟 Vue 实例
let vm = new Proxy(data, {
// 执行代理行为的函数
// 当访问 vm 的成员会执行
get(target, key) {
    console.log(&quot;get, key: &quot;, key, target[key]);
    return target[key];
},
// 当设置 vm 的成员会执行
set(target, key, newValue) {
    console.log(&quot;set, key: &quot;, key, newValue);
    if (target[key] === newValue) {
    return;
    }
    target[key] = newValue;
    document.querySelector(&quot;#app&quot;).textContent = target[key];
},
});
// 测试
vm.msg = &quot;Hello World&quot;;
console.log(vm.msg);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
