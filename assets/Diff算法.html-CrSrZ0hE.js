import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as e,j as l}from"./app-BpXrtvAp.js";const n={},a=l('<h2 id="diff-算法" tabindex="-1"><a class="header-anchor" href="#diff-算法"><span>Diff 算法</span></a></h2><ul><li>通过比较新旧节点，找出差异，然后更新视图</li><li>三种 Diff 算法：O(n<sup>3)、O(n</sup>2)、O(n)</li><li>React 使用 O(n) 算法</li><li>Vue 使用 O(n^3) 算法</li></ul><h3 id="虚拟-dom-virtual-dom" tabindex="-1"><a class="header-anchor" href="#虚拟-dom-virtual-dom"><span>虚拟 DOM(Virtual DOM)</span></a></h3><ul><li>用 JS 对象表示 DOM 结构</li><li>虚拟 DOM 会通过 Diff 算法找出最小差异，然后批量更新真实 DOM</li></ul><h3 id="为什么使用虚拟-dom" tabindex="-1"><a class="header-anchor" href="#为什么使用虚拟-dom"><span>为什么使用虚拟 DOM</span></a></h3><ul><li><p>虚拟 DOM 可以维护程序的状态,跟踪上一次的状态</p></li><li><p>通过比较前后两次状态差异更新真实 DOM</p></li><li><p>解决视图和状态同步问题</p></li><li><p>真实 DOM 的属性很多，创建 DOM 节点开销很大</p></li><li><p>虚拟 DOM 只是普通 JavaScript 对象，描述属性并不需要很多，创建开销很小</p></li><li><p>复杂视图情况下提升渲染性能(操作 dom 性能消耗大,减少操作 dom 的范围可以提升性能)</p></li><li><p>虚拟 DOM 可以跨平台使用，比如 React Native</p></li><li><p>虚拟 DOM 可以实现 DOM diff 算法，最小化页面重绘，提升性能</p></li><li><p>复杂视图情况下提升渲染性能,因为虚拟 DOM+Diff 算法可以精准找到 DOM 树变更的地方,减少 DOM 的操作(重排重绘)</p></li></ul>',6),p=[a];function o(r,D){return e(),t("div",null,p)}const c=i(n,[["render",o],["__file","Diff算法.html.vue"]]),d=JSON.parse('{"path":"/%E6%A1%86%E6%9E%B6%E5%92%8C%E5%BA%93/Diff%E7%AE%97%E6%B3%95.html","title":"Diff 算法","lang":"zh-CN","frontmatter":{"title":"Diff 算法","date":"2024-04-09T11:30:52.000Z","tags":"JavaScript","categories":["算法"],"description":"Diff 算法 通过比较新旧节点，找出差异，然后更新视图 三种 Diff 算法：O(n3)、O(n2)、O(n) React 使用 O(n) 算法 Vue 使用 O(n^3) 算法 虚拟 DOM(Virtual DOM) 用 JS 对象表示 DOM 结构 虚拟 DOM 会通过 Diff 算法找出最小差异，然后批量更新真实 DOM 为什么使用虚拟 DOM...","head":[["meta",{"property":"og:url","content":"https://github.com/zxl7/zxl7.github.io/%E6%A1%86%E6%9E%B6%E5%92%8C%E5%BA%93/Diff%E7%AE%97%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"逆水行舟丨"}],["meta",{"property":"og:title","content":"Diff 算法"}],["meta",{"property":"og:description","content":"Diff 算法 通过比较新旧节点，找出差异，然后更新视图 三种 Diff 算法：O(n3)、O(n2)、O(n) React 使用 O(n) 算法 Vue 使用 O(n^3) 算法 虚拟 DOM(Virtual DOM) 用 JS 对象表示 DOM 结构 虚拟 DOM 会通过 Diff 算法找出最小差异，然后批量更新真实 DOM 为什么使用虚拟 DOM..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-20T04:38:30.000Z"}],["meta",{"property":"article:author","content":"逆水行舟丨"}],["meta",{"property":"article:published_time","content":"2024-04-09T11:30:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-20T04:38:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Diff 算法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-09T11:30:52.000Z\\",\\"dateModified\\":\\"2024-09-20T04:38:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"逆水行舟丨\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Diff 算法","slug":"diff-算法","link":"#diff-算法","children":[{"level":3,"title":"虚拟 DOM(Virtual DOM)","slug":"虚拟-dom-virtual-dom","link":"#虚拟-dom-virtual-dom","children":[]},{"level":3,"title":"为什么使用虚拟 DOM","slug":"为什么使用虚拟-dom","link":"#为什么使用虚拟-dom","children":[]}]}],"git":{"createdTime":1726807110000,"updatedTime":1726807110000,"contributors":[{"name":"zxl7","email":"zhengxuelin@yhbj.cn","commits":1}]},"readingTime":{"minutes":1.06,"words":317},"filePathRelative":"框架和库/Diff算法.md","localizedDate":"2024年4月9日","excerpt":"<h2>Diff 算法</h2>\\n<ul>\\n<li>通过比较新旧节点，找出差异，然后更新视图</li>\\n<li>三种 Diff 算法：O(n<sup>3)、O(n</sup>2)、O(n)</li>\\n<li>React 使用 O(n) 算法</li>\\n<li>Vue 使用 O(n^3) 算法</li>\\n</ul>\\n<h3>虚拟 DOM(Virtual DOM)</h3>\\n<ul>\\n<li>用 JS 对象表示 DOM 结构</li>\\n<li>虚拟 DOM 会通过 Diff 算法找出最小差异，然后批量更新真实 DOM</li>\\n</ul>\\n<h3>为什么使用虚拟 DOM</h3>\\n<ul>\\n<li>\\n<p>虚拟 DOM 可以维护程序的状态,跟踪上一次的状态</p>\\n</li>\\n<li>\\n<p>通过比较前后两次状态差异更新真实 DOM</p>\\n</li>\\n<li>\\n<p>解决视图和状态同步问题</p>\\n</li>\\n<li>\\n<p>真实 DOM 的属性很多，创建 DOM 节点开销很大</p>\\n</li>\\n<li>\\n<p>虚拟 DOM 只是普通 JavaScript 对象，描述属性并不需要很多，创建开销很小</p>\\n</li>\\n<li>\\n<p>复杂视图情况下提升渲染性能(操作 dom 性能消耗大,减少操作 dom 的范围可以提升性能)</p>\\n</li>\\n<li>\\n<p>虚拟 DOM 可以跨平台使用，比如 React Native</p>\\n</li>\\n<li>\\n<p>虚拟 DOM 可以实现 DOM diff 算法，最小化页面重绘，提升性能</p>\\n</li>\\n<li>\\n<p>复杂视图情况下提升渲染性能,因为虚拟 DOM+Diff 算法可以精准找到 DOM 树变更的地方,减少 DOM 的操作(重排重绘)</p>\\n</li>\\n</ul>","autoDesc":true}');export{c as comp,d as data};
