import{_ as n,o as s,c as a,d as e}from"./app.38db9df0.js";const t={},p=e(`<p>Vue \u6E90\u7801\u89E3\u8BFB</p><h2 id="\u6DF1\u5165\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5165\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> \u6DF1\u5165\u54CD\u5E94\u5F0F</h2><p>Vue2</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6A21\u62DF Vue \u4E2D\u7684 data \u9009\u9879</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6A21\u62DF Vue \u7684\u5B9E\u4F8B</span>
<span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">proxyData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">proxyData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u904D\u5386 data \u5BF9\u8C61\u7684\u6240\u6709\u5C5E\u6027</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u628A data \u4E2D\u7684\u5C5E\u6027\uFF0C\u8F6C\u6362\u6210 vm \u7684 setter/setter</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;get: &#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;set: &#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">===</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newValue
        <span class="token comment">// \u6570\u636E\u66F4\u6539\uFF0C\u66F4\u65B0 DOM \u7684\u503C</span>
        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6D4B\u8BD5</span>
vm<span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue3</p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>// \u6A21\u62DF Vue \u4E2D\u7684 data \u9009\u9879
let data = {
msg: &quot;hello&quot;,
count: 0,
};
// \u6A21\u62DF Vue \u5B9E\u4F8B
let vm = new Proxy(data, {
// \u6267\u884C\u4EE3\u7406\u884C\u4E3A\u7684\u51FD\u6570
// \u5F53\u8BBF\u95EE vm \u7684\u6210\u5458\u4F1A\u6267\u884C
get(target, key) {
    console.log(&quot;get, key: &quot;, key, target[key]);
    return target[key];
},
// \u5F53\u8BBE\u7F6E vm \u7684\u6210\u5458\u4F1A\u6267\u884C
set(target, key, newValue) {
    console.log(&quot;set, key: &quot;, key, newValue);
    if (target[key] === newValue) {
    return;
    }
    target[key] = newValue;
    document.querySelector(&quot;#app&quot;).textContent = target[key];
},
});
// \u6D4B\u8BD5
vm.msg = &quot;Hello World&quot;;
console.log(vm.msg);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(l,i){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","Vue.html.vue"]]);export{r as default};
