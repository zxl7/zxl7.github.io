<template><div><p>Jquery真的锋利?</p>
<!-- more -->
<h2 id="jquery基本概念" tabindex="-1"><a class="header-anchor" href="#jquery基本概念" aria-hidden="true">#</a> jQuery基本概念</h2>
<ul>
<li>CDN 节点服务器</li>
<li><code v-pre>$(document).ready(function(){})</code>判断DOM元素是否加载完成</li>
</ul>
<h3 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> $全局变量</h3>
<ul>
<li>window.jQuery === window.$</li>
<li>$.xxx 调用本身属性和方法</li>
<li>$(xxx) 调用本身的选择,返回jq对象()里是选择表达式,或者dom对象</li>
</ul>
<h3 id="jquery对象和dom对象" tabindex="-1"><a class="header-anchor" href="#jquery对象和dom对象" aria-hidden="true">#</a> jQuery对象和DOM对象</h3>
<ul>
<li>通过jQuery方法包装后的对象，是一个类数组对象。它与DOM对象完全不同，唯一相似的是它们都能操作DOM。</li>
<li>通过jQuery处理DOM的操作，可以让开发者更专注业务逻辑的开发，而不需要我们具体知道哪个DOM节点有那些方法，</li>
<li>也不需要关心不同浏览器的兼容性问题，我们通过jQuery提供的API进行开发，代码也会更加精短。</li>
</ul>
<h3 id="如何检测jquery对象和dom对象" tabindex="-1"><a class="header-anchor" href="#如何检测jquery对象和dom对象" aria-hidden="true">#</a> 如何检测jQuery对象和DOM对象?</h3>
<ul>
<li>检测DOM: Object:if(obj.nodeType)</li>
<li>检测jQuery: Object:if(obj.jquery)</li>
</ul>
<h3 id="如何把jquery对象转成dom对象" tabindex="-1"><a class="header-anchor" href="#如何把jquery对象转成dom对象" aria-hidden="true">#</a> 如何把jQuery对象转成DOM对象?</h3>
<ul>
<li>
<p>var jqueryObj = $(domObj); ---&gt;DOM</p>
</li>
<li>
<p>var domObj = jqueryObj.get([index]); ---&gt;jQuery</p>
</li>
<li>
<p>利用<strong>数组下标</strong>的方式读取到jQuery中的DOM对象</p>
</li>
<li>
<p>数组的索引是从0开始的，也就是第一个元素下标是0</p>
</li>
</ul>
<h3 id="如何创建元素" tabindex="-1"><a class="header-anchor" href="#如何创建元素" aria-hidden="true">#</a> 如何创建元素</h3>
<ul>
<li>$('<div>Hello</div>');返回一个jQuery对象</li>
<li>设置属性</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var link1 = $('&lt;a>',{
	text:'baidu',
	href:'http://www.baidu.com',
	target:'_blank'
}); 
//空元素才可如此设置
var link2 = $('&lt;a>baidu&lt;/a>').attr({
	text:'baidu',
	href:'http://www.baidu.com',
	target:'_blank'
})

link2.appendTo('body');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检察元素数量" tabindex="-1"><a class="header-anchor" href="#检察元素数量" aria-hidden="true">#</a> 检察元素数量</h3>
<ul>
<li>.length</li>
</ul>
<h3 id="jquery提取元素" tabindex="-1"><a class="header-anchor" href="#jquery提取元素" aria-hidden="true">#</a> jQuery提取元素</h3>
<ul>
<li>.[index] 返回DOM元素</li>
<li>.get([index]) 返回DOM元素或元素集合可为负值从-1开始	越界返回undefind</li>
<li>.eq(index) 返回jQuery对象,加索引返回对象,不加索引什么都不返回,索引从0开始,支持赋值-1开始</li>
<li>.first() 第一;</li>
<li>.last() 最后;</li>
<li>.toArray()== get(不加参数) DOM数组</li>
</ul>
<h3 id="通过关系获取jquery对象" tabindex="-1"><a class="header-anchor" href="#通过关系获取jquery对象" aria-hidden="true">#</a> 通过关系获取jQuery对象</h3>
<ul>
<li>parents() 传参对父元素过滤;</li>
<li>children()所有直接子元素的集合;</li>
<li>contents()所有直接子元素的集合,且返回文本节点</li>
<li>find() 筛选后代元素,子节点,孙子节点</li>
<li>parent([selector]) 直接父元素,只返回一个</li>
<li>parents([selector]) 所有祖先元素,会返回筛选的多个</li>
<li>parentsUntil([selector]) 到哪个层级为止,必须带参数限制范围,不包含选择项</li>
<li>next([selector]),nextAll([]),nextUntil([]) 往后查找同辈元素</li>
<li>prev([selector]),prevAll([selector]),prevUntil([selector]) 往前同辈元素</li>
<li>siblings([selector]) 元素的所有同辈元素的集合,没有单数形式,不包含本身!!</li>
<li>closest(selector) 本身开始向上匹配,返回最先匹配元素,先从本身开始,没有就返回空(返回0个或者1个)</li>
<li>slice[3,5) 开始结束位置来匹配子集</li>
</ul>
<h3 id="筛选和遍历jquery对象" tabindex="-1"><a class="header-anchor" href="#筛选和遍历jquery对象" aria-hidden="true">#</a> 筛选和遍历jQuery对象</h3>
<h3 id="转换元素-回调函数" tabindex="-1"><a class="header-anchor" href="#转换元素-回调函数" aria-hidden="true">#</a> 转换元素-回调函数</h3>
<ul>
<li>map(callback) 转换为另一个jq对象</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.map(function ()index,domElement) //当前索引和dom元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>jQuery 方法 attr()，也提供回调函数。
<ul>
<li>回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。</li>
<li>然后以函数新值返回您希望使用的字符串。
下面的例子演示带有回调函数的 attr() 方法：</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#runoob"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"href"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span>origValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> origValue <span class="token operator">+</span> <span class="token string">"/jquery"</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>each() 遍历元素</li>
<li>is() 是否包含某个元素</li>
<li>end() 返回上一次破坏性操作(匹配的元素集合变为前一次的状态)(破坏性操作:改变所匹配对象)</li>
<li>addBack() 破坏性操作的选择和原来的选择都一同被选中,被操作,被改变</li>
</ul>
<h2 id="jquery语法" tabindex="-1"><a class="header-anchor" href="#jquery语法" aria-hidden="true">#</a> jQuery语法</h2>
<ul>
<li>链式语法</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$(#id)
.xxx
.xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意:</strong></p>
<ul>
<li>jQ中使用add,find,children,filter会缩小范围,用end()返回</li>
<li>(window.onload等待全部加载),ready()dom加载完成就执行</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//js
window.onload = function () {
	console.log('onload')
}
//js
$(window).load(function () {
	console.log('load');
})

//jq
$(document).ready(function() {
	console.log('ready');
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>基础语法： $(selector).action()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>美元符号定义 jQuery</li>
<li>选择符（selector）&quot;查询&quot;和&quot;查找&quot; HTML 元素</li>
<li>jQuery 的 action() 执行对元素的操作</li>
</ul>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code>$<span class="token punctuation">(</span>this<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token func"><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> 隐藏当前元素</span>

$<span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token func"><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> 隐藏所有 <span class="token operator">&lt;</span>p<span class="token operator">></span> 元素</span>

$<span class="token punctuation">(</span><span class="token string">"p.test"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token func"><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> 隐藏所有 class<span class="token operator">=</span><span class="token string">"test"</span> 的 <span class="token operator">&lt;</span>p<span class="token operator">></span> 元素</span>

$<span class="token punctuation">(</span><span class="token string">"#test"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token func"><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> 隐藏所有 id<span class="token operator">=</span><span class="token string">"test"</span> 的元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jquery选择器" tabindex="-1"><a class="header-anchor" href="#jquery选择器" aria-hidden="true">#</a> jQuery选择器</h2>
<h3 id="内容筛选器" tabindex="-1"><a class="header-anchor" href="#内容筛选器" aria-hidden="true">#</a> 内容筛选器</h3>
<ul>
<li>:empty 选择没内容的</li>
<li>:contains(text) 选择包含给定文本的元素</li>
<li>:has(selector) 选择包含给定标签元素</li>
<li>:parent 包含子元素和文本元素 (选择有内容的)</li>
</ul>
<h3 id="其他筛选器" tabindex="-1"><a class="header-anchor" href="#其他筛选器" aria-hidden="true">#</a> 其他筛选器</h3>
<ul>
<li>
<p>$(':lang()') 选择语言</p>
</li>
<li>
<p>:hidden 选择所有不可见元素 <code v-pre>display:none</code>不占位的元素</p>
</li>
<li>
<p>:visible 与上面相反的选择器</p>
</li>
<li>
<p>$(':not()') 只要不是(),都被选择</p>
</li>
<li>
<p>:target:获取url中的hash来选择</p>
</li>
<li>
<p>$(':root()') 该文档的根元素</p>
</li>
<li>
<p>$(':animated()')选择运行动画的元素</p>
</li>
<li>
<p>consolo.log('$(:header()')选中所有标题元素</p>
</li>
<li>
<p>元素:$(&quot;p&quot;)</p>
</li>
<li>
<p>id:$(&quot;#test&quot;)</p>
</li>
<li>
<p>class:$(&quot;.test&quot;)</p>
</li>
</ul>
<h3 id="选择器优化" tabindex="-1"><a class="header-anchor" href="#选择器优化" aria-hidden="true">#</a> 选择器优化</h3>
<ul>
<li>尽量用css中有的选择器</li>
<li>避免过度约束</li>
<li>尽量以ID开头</li>
<li>让选择器右边有更多的特征</li>
<li>避免使用全局选择器</li>
<li>缓存选择器结果</li>
</ul>
<h2 id="操作jquery" tabindex="-1"><a class="header-anchor" href="#操作jquery" aria-hidden="true">#</a> 操作jQuery</h2>
<h3 id="添加或修改-class" tabindex="-1"><a class="header-anchor" href="#添加或修改-class" aria-hidden="true">#</a> 添加或修改 class</h3>
<ul>
<li>
<p>addClass(names) 增加类</p>
</li>
<li>
<p>removeClass(names) 移除类
可以添加函数,根据返回值修改</p>
</li>
<li>
<p>hasClass('names') 判断是否有'naems'</p>
</li>
<li>
<p>toggleClass('names',[switch]) 切换类,有就增加,没有就删除;第二个参数表示什么条件下切换</p>
</li>
</ul>
<h3 id="获取和设置-style" tabindex="-1"><a class="header-anchor" href="#获取和设置-style" aria-hidden="true">#</a> 获取和设置 style</h3>
<ul>
<li>css(name,value)</li>
<li>width(value)</li>
<li>height()</li>
<li>innerWidth()</li>
<li>outerWidth()</li>
<li>html</li>
<li>text</li>
<li>append</li>
<li>prepend</li>
<li>befor</li>
<li>after</li>
<li>val()</li>
</ul>
<h3 id="操作元素" tabindex="-1"><a class="header-anchor" href="#操作元素" aria-hidden="true">#</a> 操作元素</h3>
<h4 id="特性attribute" tabindex="-1"><a class="header-anchor" href="#特性attribute" aria-hidden="true">#</a> 特性attribute</h4>
<ul>
<li>特性名</li>
<li>值是<code v-pre>字符串</code></li>
<li>获取某个元素特性的值:getAttribute</li>
</ul>
<h4 id="属性property" tabindex="-1"><a class="header-anchor" href="#属性property" aria-hidden="true">#</a> 属性property</h4>
<ul>
<li>属性获取方式:xxx.xxx</li>
<li>值有多种类型:<code v-pre>string</code>,<code v-pre>boolean</code>,<code v-pre>number</code>,<code v-pre>object</code></li>
<li>多使用属性来获取值</li>
</ul>
<h4 id="特性和属性" tabindex="-1"><a class="header-anchor" href="#特性和属性" aria-hidden="true">#</a> 特性和属性</h4>
<ul>
<li>同步规则:attributes本来就在DOM对象中存在,则同步</li>
<li>如果:attributes本来就在DOM对象中存在,但是类型为Boolean,则不会同步</li>
<li>如果:attribute不是内建的元素则不会同步</li>
<li>有的同步却不相等:src</li>
<li>属性className;特性Class</li>
</ul>
<h4 id="操作元素的特性" tabindex="-1"><a class="header-anchor" href="#操作元素的特性" aria-hidden="true">#</a> 操作元素的特性</h4>
<p>不区分大小写</p>
<ul>
<li>获取特性的值:attr(name)</li>
<li>设置特性的值:attr(name,value) attr(attributes)</li>
<li>删除特性:removeAttr(name),中间加空格一次删除多个</li>
</ul>
<h4 id="操作元素的属性" tabindex="-1"><a class="header-anchor" href="#操作元素的属性" aria-hidden="true">#</a> 操作元素的属性</h4>
<p>区分大小写</p>
<ul>
<li>获取值:prop(name)</li>
<li>设置值:prop(name,value)prop(properties)</li>
<li>删除属性:removeProp(name),一次只能删除一个</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>checkbox.prop('checked');
checkbox.get(0).checked;
checkbox.attr('checked')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在元素中存取数据" tabindex="-1"><a class="header-anchor" href="#在元素中存取数据" aria-hidden="true">#</a> 在元素中存取数据</h3>
<ul>
<li>获取数据的值:data([name])</li>
<li>设置数据的值:data(name,value)data(object)</li>
<li>data() 可保存数据类型</li>
<li>优先级高于html的设置</li>
<li>removeData([1,2])删除</li>
<li>判断是否有数据:jQuery.hasData(element) html设置不算,只看是否jQ有设置</li>
</ul>
<h2 id="jquery事件" tabindex="-1"><a class="header-anchor" href="#jquery事件" aria-hidden="true">#</a> jQuery事件</h2>
<ul>
<li>this指向DOM,类似于dom2级可绑定多个,且顺序执行。</li>
<li><code v-pre>on(eventType,[selector],[data],handler)</code>- 事件类型,选择,数据,执行函数;</li>
</ul>
<div class="language-gherkin ext-gherkin line-numbers-mode"><pre v-pre class="language-gherkin"><code>**$(document).ready()**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>$(document).ready() 方法允许我们在文档完全加载完后执行函数。</p>
<h3 id="_1-鼠标事件" tabindex="-1"><a class="header-anchor" href="#_1-鼠标事件" aria-hidden="true">#</a> 1.鼠标事件</h3>
<ul>
<li>click-点击</li>
<li>dblclick-双击</li>
<li>mousseenter-当鼠标指针穿过元素时</li>
<li>mouseleave()-当鼠标指针离开元素时</li>
<li>mousedown()-当鼠标指针移动到元素上方，并按下鼠标按键时</li>
<li>mouseup()-当在元素上松开鼠标按钮时</li>
</ul>
<h3 id="_2-键盘事件" tabindex="-1"><a class="header-anchor" href="#_2-键盘事件" aria-hidden="true">#</a> 2.键盘事件</h3>
<ul>
<li>keypress-键按下的过程</li>
<li>keydown-键被按下</li>
<li>keyup-键被松开</li>
<li>hover-用于模拟光标悬停事件mouseenter+mouseleave;</li>
</ul>
<h3 id="_3-表单事件" tabindex="-1"><a class="header-anchor" href="#_3-表单事件" aria-hidden="true">#</a> 3.表单事件</h3>
<ul>
<li>submit</li>
<li>change</li>
<li>focus</li>
<li>blur</li>
</ul>
<h3 id="_4-文档-事件" tabindex="-1"><a class="header-anchor" href="#_4-文档-事件" aria-hidden="true">#</a> 4.文档/事件</h3>
<ul>
<li>load</li>
<li>resize</li>
<li>scroll</li>
<li>unload</li>
</ul>
<h3 id="_5-文档就绪事件" tabindex="-1"><a class="header-anchor" href="#_5-文档就绪事件" aria-hidden="true">#</a> 5.文档就绪事件</h3>
<p>您也许已经注意到在我们的实例中的所有 jQuery 函数位于一个 document ready 函数中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token comment">// 开始写 jQuery 代码...</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是为了防止文档在完全加载（就绪）之前运行 jQuery 代码，即在 DOM 加载完成后才可以对 DOM 进行操作。
如果在文档没有完全加载之前就运行函数，操作可能失败。下面是两个具体的例子：</p>
<ul>
<li>试图隐藏一个不存在的元素</li>
<li>获得未完全加载的图像的大小
提示：简洁写法（与以上写法效果相同）:</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$(function(){
   // 开始写 jQuery 代码...
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="统一的属性和方法" tabindex="-1"><a class="header-anchor" href="#统一的属性和方法" aria-hidden="true">#</a> 统一的属性和方法</h3>
<ul>
<li>阻止冒泡: <code v-pre>stopPropagaton()</code></li>
<li>阻止默认行为: <code v-pre>preventDefault()</code></li>
<li>都阻止: <code v-pre>return false</code></li>
<li><code v-pre>one(eventType,[selector],[data],handler)</code>执行一次</li>
</ul>
<h3 id="移除事件处理" tabindex="-1"><a class="header-anchor" href="#移除事件处理" aria-hidden="true">#</a> 移除事件处理</h3>
<ul>
<li><code v-pre>off(eventType,[selector],handler)</code>不传参移除所有绑定事件.</li>
</ul>
<h3 id="触发事件" tabindex="-1"><a class="header-anchor" href="#触发事件" aria-hidden="true">#</a> 触发事件</h3>
<ul>
<li>tirgger(eventType[,data])</li>
<li>tirggerHandler(eventType[,data])</li>
<li>区别:不会触发浏览器默认事件;不会产生事件冒泡;</li>
<li>只触发jQuery对象集合中的第一个元素的事件处理函数;返回处理函数的返回值,不是jq对象</li>
</ul>
<h3 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h3>
<ul>
<li>eventName.namespace</li>
</ul>
<h2 id="jquery-html" tabindex="-1"><a class="header-anchor" href="#jquery-html" aria-hidden="true">#</a> jQuery HTML</h2>
<h3 id="_1-获得内容和属性" tabindex="-1"><a class="header-anchor" href="#_1-获得内容和属性" aria-hidden="true">#</a> 1.获得内容和属性</h3>
<ul>
<li>text()、html() 以及 val()</li>
<li>三个简单实用的用于 DOM 操作的 jQuery 方法：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>text() - 设置或返回所选元素的文本内容
html() - 设置或返回所选元素的内容（包括 HTML 标记）
val() - 设置或返回表单字段的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$("#btn1").click(function(){
  alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
  alert("HTML: " + $("#test").html());
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>jQuery attr()</strong> 方法用于获取属性值。
实例:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#runoob"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"href"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-设置内容和属性" tabindex="-1"><a class="header-anchor" href="#_2-设置内容和属性" aria-hidden="true">#</a> 2.设置内容和属性</h3>
<p>设置内容 - text()、html() 以及 val()</p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token func"><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> 设置或返回所选元素的文本内容</span>
<span class="token func"><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> 设置或返回所选元素的内容（包括 HTML 标记）</span>
<span class="token func"><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> 设置或返回表单字段的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#btn1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#test1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">"Hello world!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#btn2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#test2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">"Hello world!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#btn3"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#test3"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">"RUNOOB"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>下面的例子演示带有<strong>回调函数</strong>的 text() 和 html()</li>
</ul>
<p>实例:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#btn1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#test1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span>origText</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"旧文本: "</span> <span class="token operator">+</span> origText <span class="token operator">+</span> <span class="token string">" 新文本: Hello world! (index: "</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">")"</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#btn2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#test2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span>origText</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"旧 html: "</span> <span class="token operator">+</span> origText <span class="token operator">+</span> <span class="token string">" 新 html: Hello world! (index: "</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">")"</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>设置属性 - attr()</strong>
jQuery attr() 方法也用于设置/改变属性值。
下面的例子演示如何改变（设置）链接中 href 属性的值：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#runoob"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"href"</span><span class="token punctuation">,</span><span class="token string">"http://www.runoob.com/jquery"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>attr() 方法也允许您同时设置多个属性。
下面的例子演示如何同时设置 href 和 title 属性：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#runoob"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string-property property">"href"</span> <span class="token operator">:</span> <span class="token string">"http://www.runoob.com/jquery"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"title"</span> <span class="token operator">:</span> <span class="token string">"jQuery 教程"</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-添加元素" tabindex="-1"><a class="header-anchor" href="#_3-添加元素" aria-hidden="true">#</a> 3.添加元素</h3>
<ul>
<li>append() - 在被选元素的结尾插入内容</li>
<li>prepend() - 在被选元素的开头插入内容</li>
<li>after() - 在被选元素之后插入内容</li>
<li>before() - 在被选元素之前插入内容</li>
</ul>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code>$<span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token func"><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"追加文本"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
$<span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token func"><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token string">"在开头追加文本"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>

 <span class="token property-declaration"><span class="token property">-</span> 添加若干新元素</span>
function <span class="token func"><span class="token function">appendText</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="token punctuation">{</span>
    <span class="token property-declaration"><span class="token property">var</span> txt1<span class="token operator">=</span><span class="token string">"&lt;p>文本。&lt;/p>"</span><span class="token punctuation">;</span>              <span class="token comment">// 使用 HTML 标签创建文本</span></span>
    <span class="token property-declaration"><span class="token property">var</span> txt2<span class="token operator">=</span>$<span class="token punctuation">(</span><span class="token string">"&lt;p>&lt;/p>"</span><span class="token punctuation">)</span>.text<span class="token punctuation">(</span><span class="token string">"文本。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 使用 jQuery 创建文本</span></span>
    <span class="token property-declaration"><span class="token property">var</span> txt3<span class="token operator">=</span>document.createElement<span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
    txt3<span class="token punctuation">.</span>innerHTML=<span class="token string">"文本。"</span><span class="token punctuation">;</span>               <span class="token comment">// 使用 DOM 创建文本 text with DOM</span>
    $<span class="token punctuation">(</span><span class="token string">"body"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token func"><span class="token function">append</span><span class="token punctuation">(</span>txt1<span class="token punctuation">,</span>txt2<span class="token punctuation">,</span>txt3<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// 追加新元素</span></span>
<span class="token punctuation">}</span>

$<span class="token punctuation">(</span><span class="token string">"img"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token func"><span class="token function">after</span><span class="token punctuation">(</span><span class="token string">"在后面添加文本"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
$<span class="token punctuation">(</span><span class="token string">"img"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token func"><span class="token function">before</span><span class="token punctuation">(</span><span class="token string">"在前面添加文本"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-删除元素" tabindex="-1"><a class="header-anchor" href="#_4-删除元素" aria-hidden="true">#</a> 4.删除元素</h3>
<ul>
<li>remove() - 删除被选元素（及其子元素）</li>
<li>empty() - 从被选元素中删除子元素</li>
</ul>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code>$<span class="token punctuation">(</span><span class="token string">"#div1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token func"><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
$<span class="token punctuation">(</span><span class="token string">"#div1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token func"><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>jQuery remove() 方法也可接受一个参数，允许您对被删元素进行过滤。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>该参数可以是任何 jQuery 选择器的语法。
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">".italic"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-操作css类" tabindex="-1"><a class="header-anchor" href="#_5-操作css类" aria-hidden="true">#</a> 5.操作css类</h3>
<ul>
<li>addClass() - 向被选元素添加一个或多个类</li>
<li>removeClass() - 从被选元素删除一个或多个类</li>
<li>toggleClass() - 对被选元素进行添加/删除类的切换操作</li>
<li>css() - 设置或返回样式属性</li>
</ul>
<p>在添加类时，您也可以选取多个元素：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token literal-property property">实例</span><span class="token operator">:</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"h1,h2,p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">"blue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">"important"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 addClass() 方法中规定多个类：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>实例
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"body div:first"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">"important blue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的例子演示如何在不同的元素中删除指定的 class 属性：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>实例
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"h1,h2,p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token string">"blue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的例子将展示如何使用 jQuery toggleClass() 方法。该方法对被选元素进行添加/删除类的切换操作：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>实例
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"h1,h2,p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toggleClass</span><span class="token punctuation">(</span><span class="token string">"blue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-css-方法" tabindex="-1"><a class="header-anchor" href="#_6-css-方法" aria-hidden="true">#</a> 6.CSS()方法</h3>
<ul>
<li>返回css的属性css<code v-pre>(&quot;propertyname&quot;)</code>;</li>
<li>设置一个或多个css的属性:<code v-pre>css(&quot;propertyname&quot;,&quot;value&quot;)</code>;</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$("p").css("background-color","yellow");//一个
$("p").css({"background-color":"yellow","font-size":"200%"});//多个
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的例子将返回首个匹配元素的 background-color 值：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>实例
$("p").css("background-color");
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-尺寸" tabindex="-1"><a class="header-anchor" href="#_7-尺寸" aria-hidden="true">#</a> 7.尺寸</h3>
<ul>
<li>width()--方法设置或返回元素的宽度（不包括内边距、边框或外边距）</li>
<li>height()</li>
<li>innerWidth()--方法返回元素的宽度（包括内边距）</li>
<li>innerHeight()</li>
<li>outerWidth()--方法返回元素的宽度（包括内边距和边框）</li>
<li>outerHeight()</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$("button").click(function(){
  var txt="";
  txt+="div 的宽度是: " + $("#div1").width() + "&lt;/br>";
  txt+="div 的高度是: " + $("#div1").height();
  $("#div1").html(txt);
});


$("button").click(function(){
  var txt="";
  txt+="div 宽度，包含内边距: " + $("#div1").innerWidth() + "&lt;/br>";
    txt+="div 高度，包含内边距: " + $("#div1").innerHeight();
  $("#div1").html(txt);
});


$("button").click(function(){
  var txt="";
  txt+="div 宽度，包含内边距和边框: " + $("#div1").outerWidth() + "&lt;/br>";
  txt+="div 高度，包含内边距和边框: " + $("#div1").outerHeight();
  $("#div1").html(txt);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jquery遍历" tabindex="-1"><a class="header-anchor" href="#jquery遍历" aria-hidden="true">#</a> jQuery遍历</h2>
<h3 id="祖先" tabindex="-1"><a class="header-anchor" href="#祖先" aria-hidden="true">#</a> 祖先</h3>
<ul>
<li>parent() 父元素</li>
<li>parents() 所有祖先元素</li>
<li>parentsUntil() 介于两个给定元素之间的所有祖先元素</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$(document).ready(function(){
  $("span").parentsUntil("div");
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后代" tabindex="-1"><a class="header-anchor" href="#后代" aria-hidden="true">#</a> 后代</h3>
<ul>
<li>children() 返回被选元素的所有直接子元素</li>
<li>find() 返回被选元素的后代元素，一路向下直到最后一个后代</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>下面的例子返回属于 &lt;div> 后代的所有 &lt;span> 元素：
实例
$(document).ready(function(){
  $("div").find("span");
});

下面的例子返回 &lt;div> 的所有后代：
实例
$(document).ready(function(){
  $("div").find("*");
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同胞" tabindex="-1"><a class="header-anchor" href="#同胞" aria-hidden="true">#</a> 同胞</h3>
<ul>
<li>
<p>siblings() --返回所有同胞元素</p>
</li>
<li>
<p>next() --返回备选元素的下一个同胞元素</p>
</li>
<li>
<p>nextAll() --返回被选元素的所有跟随的同胞元素</p>
</li>
<li>
<p>nextUntil() --返回介于两个给定参数之间的所有跟随的同胞元素</p>
</li>
<li>
<p>后三个工作方式与上面的方法类似,</p>
</li>
<li>
<p>只不过方向相反而已：它们返回的是前面的同胞元素</p>
</li>
<li>
<p>prev()</p>
</li>
<li>
<p>prevAll()</p>
</li>
<li>
<p>prevUntil()</p>
</li>
</ul>
<h3 id="过滤" tabindex="-1"><a class="header-anchor" href="#过滤" aria-hidden="true">#</a> 过滤</h3>
<ul>
<li>first() 方法返回被选元素的首个元素</li>
<li>last() 最后...</li>
<li>eq() 方法返回被选元素中带有指定索引号的元素</li>
<li>filter(selecyor) 方法允许您规定一个值,不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回</li>
<li>not(selecyor) 与上一个相反,除了匹配值的所有元素</li>
<li>has(selecyor) 保留包含特定后代的元素</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$(document).ready(function(){
  $("div p").last();
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jquery-ajax" tabindex="-1"><a class="header-anchor" href="#jquery-ajax" aria-hidden="true">#</a> jQuery Ajax</h2>
<p>定义和用法:</p>
<ul>
<li>ajax() 方法用于执行 AJAX（异步 HTTP）请求。</li>
<li>所有的 jQuery AJAX 方法都使用 ajax() 方法。该方法通常用于其他方法不能完成的请求。</li>
</ul>
<p>语法:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$.ajax({name:value, name:value, ... })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>|$.ajax()			|执行异步 AJAX 请求																|
|$.ajaxPrefilter()	|在每个请求发送之前且被 $.ajax() 处理之前，处理自定义 Ajax 选项或修改已存在选项	|
|$.ajaxSetup()		|为将来的 AJAX 请求设置默认值													|
|$.ajaxTransport()	|创建处理 Ajax 数据实际传送的对象												|</p>
<p><strong>load()</strong> 方法从服务器加载数据，并把返回的数据放入被选元素中。</p>
<p>语法:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$(selector).load(URL,data,callback);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>必需的 URL 参数规定您希望加载的 URL。</li>
<li>可选的 data 参数规定与请求一同发送的查询字符串键/值对集合。</li>
<li>可选的 callback 参数是 load() 方法完成后所执行的函数名称。</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>下面的例子会把文件 "demo_test.txt" 的内容加载到指定的 &lt;div> 元素中：
$("#div1").load("demo_test.txt");

下面的例子把 "demo_test.txt" 文件中 id="p1" 的元素的内容，加载到指定的 &lt;div> 元素中：
$("#div1").load("demo_test.txt #p1");
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>可选的 **callback **参数规定当 load() 方法完成后所要允许的回调函数。</li>
<li>回调函数可以设置不同的参数：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>responseTxt - 包含调用成功时的结果内容
statusTXT - 包含调用的状态
xhr - 包含 XMLHttpRequest 对象

下面的例子会在 load() 方法完成后显示一个提示框。如果 load() 方法已成功，则显示"外部内容加载成功！"，而如果失败，则显示错误消息：

$("button").click(function(){
  $("#div1").load("demo_test.txt",function(responseTxt,statusTxt,xhr){
    if(statusTxt=="success")
      alert("外部内容加载成功!");
    if(statusTxt=="error")
      alert("Error: "+xhr.status+": "+xhr.statusText);
  });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-vs-post" tabindex="-1"><a class="header-anchor" href="#get-vs-post" aria-hidden="true">#</a> GET vs POST</h3>
<ul>
<li>GET - 从指定的资源请求数据</li>
<li>GET 基本上用于从服务器获得（取回）数据。注释：GET 方法可能返回缓存数据。</li>
<li>POST - 向指定的资源提交要处理的数据</li>
<li>POST 也可用于从服务器获取数据。</li>
<li>不过，POST 方法不会缓存数据，并且常用于连同请求一起发送数据。</li>
</ul>
<p><strong>$.get()</strong>:方法通过 HTTP GET 请求从服务器上<strong>请求</strong>数据。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$.get(URL,callback);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>必需的 URL 参数规定您希望请求的 URL。</li>
<li>可选的 callback 参数是请求成功后所执行的函数名。</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>下面的例子使用 $.get() 方法从服务器上的一个文件中取回数据：

$("button").click(function(){
  $.get("demo_test.php",function(data,status){
    alert("数据: " + data + "\n状态: " + status);
  });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>$.get()的第一个参数是我们希望请求的 URL（&quot;demo_test.php&quot;）。</p>
</li>
<li>
<p>第二个参数是回调函数。第一个回调参数存有被请求页面的内容，第二个回调参数存有请求的状态</p>
</li>
</ul>
<p><strong>提示：</strong> 这个 PHP 文件 (&quot;demo_test.php&quot;) 类似这样：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>demo_test.php 文件代码:
&lt;?php
echo '这是个从PHP文件中读取的数据。';
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>$.post() <strong>方法通过 HTTP POST 请求向服务器</strong>提交</strong>数据。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$.post(URL,data,callback);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>必需的 URL 参数规定您希望请求的 URL。</li>
<li>可选的 data 参数规定连同请求发送的数据。</li>
<li>可选的 callback 参数是请求成功后所执行的函数名。</li>
<li>下面的例子使用 $.post() 连同请求一起发送数据：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>实例
$("button").click(function(){
    $.post("/try/ajax/demo_test_post.php",
    {
        name:"菜鸟教程",
        url:"http://www.runoob.com"
    },
        function(data,status){
        alert("数据: \n" + data + "\n状态: " + status);
    });
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>$.post() 的第一个参数是我们希望请求的 URL (&quot;demo_test_post.php&quot;)。</li>
<li>然后我们连同请求（name 和 url）一起发送数据。</li>
<li>&quot;demo_test_post.php&quot; 中的 PHP 脚本读取这些参数，对它们进行处理，然后返回结果。</li>
<li>第三个参数是回调函数。第一个回调参数存有被请求页面的内容，而第二个参数存有请求的状态。</li>
</ul>
<p><strong>提示：</strong> 这个 PHP 文件 (&quot;demo_test_post.php&quot;) 类似这样：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>demo_test_post.php 文件代码:
&lt;?php
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$url = isset($_POST['url']) ? htmlspecialchars($_POST['url']) : '';
echo '网站名: ' . $name;
echo "\n";
echo 'URL 地址: ' .$url;
?>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jquery效果" tabindex="-1"><a class="header-anchor" href="#jquery效果" aria-hidden="true">#</a> jQuery效果</h2>
<h3 id="隐藏和显示" tabindex="-1"><a class="header-anchor" href="#隐藏和显示" aria-hidden="true">#</a> - 隐藏和显示</h3>
<p><strong>jQuery hide() 和 show()</strong></p>
<div class="language-gcode ext-gcode line-numbers-mode"><pre v-pre class="language-gcode"><code>$<span class="token comment">(selector)</span>.hide(speed,callback)<span class="token comment">;</span>

$<span class="token comment">(selector)</span>.show(speed,callback)<span class="token comment">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>可选的 speed 参数规定隐藏/显示的速度，可以取以下值：&quot;slow&quot;、&quot;fast&quot; 或毫秒。</li>
<li>可选的 callback 参数是隐藏或显示完成后所执行的函数名称</li>
</ul>
<p><strong>jQuery toggle()</strong></p>
<ul>
<li>通过 jQuery，您可以使用 toggle() 方法来切换 hide() 和 show() 方法。</li>
<li>显示被隐藏的元素，并隐藏已显示的元素：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>实例
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法:</p>
<div class="language-mel ext-mel line-numbers-mode"><pre v-pre class="language-mel"><code>$<span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span>speed<span class="token punctuation">,</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>可选的 speed 参数规定隐藏/显示的速度，可以取以下值：&quot;slow&quot;、&quot;fast&quot; 或毫秒。</li>
<li>可选的 callback 参数是隐藏或显示完成后所执行的函数名称。</li>
<li>对于可选的 callback 参数，有以下说明：</li>
</ul>
<div class="language-haxe ext-haxe line-numbers-mode"><pre v-pre class="language-haxe"><code><span class="token number">1.</span>$<span class="token punctuation">(</span>selector<span class="token punctuation">)</span>选中的元素的个数为n个，则callback函数会执行n次；
<span class="token number">2.</span>callback函数名后加括号，会立刻执行函数体，而不是等到显示<span class="token operator">/</span>隐藏完成后才执行；
<span class="token number">3.</span>callback既可以是函数名，也可以是匿名函数；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="淡入淡出" tabindex="-1"><a class="header-anchor" href="#淡入淡出" aria-hidden="true">#</a> - 淡入淡出</h3>
<ul>
<li>fade方法</li>
<li>jQuery fadeIn() 用于淡入已隐藏的元素。</li>
</ul>
<p>语法:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fadeIn</span><span class="token punctuation">(</span>speed<span class="token punctuation">,</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>jQuery fadeOut()方法用于淡出可见元素。</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$(selector).fadeOut(speed,callback);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>jQuery fadeToggle() 方法可以在 fadeIn() 与 fadeOut() 方法之间进行切换。</li>
<li>如果元素已淡出，则 fadeToggle() 会向元素添加淡入效果。</li>
<li>如果元素已淡入，则 fadeToggle() 会向元素添加淡出效果。</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$(selector).fadeToggle(speed,callback);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>可选的 speed 参数规定效果的时长。它可以取以下值：&quot;slow&quot;、&quot;fast&quot; 或毫秒。</li>
<li>可选的 callback 参数是 fading 完成后所执行的函数名称。</li>
<li>jQuery fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）。</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$(selector).fadeTo(speed,opacity,callback);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>fadeTo() 方法中必需的 opacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。</li>
</ul>
<h3 id="滑动" tabindex="-1"><a class="header-anchor" href="#滑动" aria-hidden="true">#</a> - 滑动</h3>
<ul>
<li>jQuery 拥有以下滑动方法：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>slideUp()
slideDown()
slideToggle()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$(selector).slideToggle(speed,callback);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="动画animate" tabindex="-1"><a class="header-anchor" href="#动画animate" aria-hidden="true">#</a> - 动画animate()</h3>
<p><code v-pre>$(selector).stop(stopAll,goToEnd)</code></p>
<ul>
<li>可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。</li>
<li>可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。</li>
<li>因此，stop() 会清除在被选元素上指定的当前动画。</li>
</ul>
<h3 id="链-chaining" tabindex="-1"><a class="header-anchor" href="#链-chaining" aria-hidden="true">#</a> - 链(Chaining)</h3>
<ul>
<li>通过 jQuery，可以把动作/方法链接在一起。</li>
<li><code v-pre>Chaining</code> 允许我们在一条语句中运行多个 jQuery 方法（在相同的元素上）。</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$("#p1").css("color","red").slideUp(2000).slideDown(2000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="jq-插件" tabindex="-1"><a class="header-anchor" href="#jq-插件" aria-hidden="true">#</a> jQ 插件</h2>
<h3 id="插件机制" tabindex="-1"><a class="header-anchor" href="#插件机制" aria-hidden="true">#</a> 插件机制</h3>
<ul>
<li>jQuery.extend() 本身添加</li>
<li>jQuery.fn.extend() 对象添加</li>
</ul>
<h3 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h3>
<ul>
<li>引用插件</li>
<li>查看并实现实例代码</li>
<li>阅读文档</li>
</ul>
<h3 id="常用插件" tabindex="-1"><a class="header-anchor" href="#常用插件" aria-hidden="true">#</a> 常用插件</h3>
<ul>
<li>chosen 选择</li>
<li>pickadate 时间格式</li>
<li>Magnific-Popup 图片放大查看</li>
</ul>
<h3 id="编写插件" tabindex="-1"><a class="header-anchor" href="#编写插件" aria-hidden="true">#</a> 编写插件</h3>
<ul>
<li>处理复杂参数</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function xxx(options) {
	var defaultOptions = $.extend({
		p1.defaultValue1,
		p1.defaultValue2
	},options||{})
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用命名空间防止冲突</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$('.lightbox').cool('init',{
	p1:val1,
	p1:val2
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>链式语法</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>init:function () {
	...
	return this
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
