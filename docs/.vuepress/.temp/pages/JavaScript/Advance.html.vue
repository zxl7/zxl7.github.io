<template><div><p>JavaScript进阶笔记丶</p>
<!-- more -->
<h2 id="包装类" tabindex="-1"><a class="header-anchor" href="#包装类" aria-hidden="true">#</a> 包装类</h2>
<ul>
<li>基本类型可以有属性和方法(.length方法和赋值)</li>
<li>隐藏机制:一对象方式使用基本类型,js会自动转换为<strong>包装类型对象</strong>并自动销毁</li>
</ul>
<h2 id="类型检测" tabindex="-1"><a class="header-anchor" href="#类型检测" aria-hidden="true">#</a> 类型检测</h2>
<h3 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h3>
<ul>
<li>函数和基本类型</li>
<li>typeof null == object</li>
</ul>
<h3 id="obj-instanceof-object" tabindex="-1"><a class="header-anchor" href="#obj-instanceof-object" aria-hidden="true">#</a> obj instanceof Object</h3>
<ul>
<li>适合判断对象</li>
<li>对象和函数对象:左边对象的原型链是否有右边的</li>
<li>跨iframe对象之间不可用</li>
</ul>
<h3 id="object-prototype-tostring-apply" tabindex="-1"><a class="header-anchor" href="#object-prototype-tostring-apply" aria-hidden="true">#</a> Object.prototype.toString.apply()</h3>
<ul>
<li>[]</li>
<li>object function</li>
<li>object null</li>
<li>object Undefined</li>
</ul>
<h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3>
<ul>
<li>指向构造函数,构造器</li>
</ul>
<h2 id="错误与调试" tabindex="-1"><a class="header-anchor" href="#错误与调试" aria-hidden="true">#</a> 错误与调试</h2>
<h3 id="运行时错误" tabindex="-1"><a class="header-anchor" href="#运行时错误" aria-hidden="true">#</a> 运行时错误</h3>
<ul>
<li>ReferenceError,变量引用异常触发</li>
<li>TypeError,类型使用错误时触发
<ul>
<li>未获取初始化的变量的属性或方法</li>
<li>调用类型错误</li>
</ul>
</li>
<li>RangeError,不太常见,递归太深触发</li>
</ul>
<h3 id="逻辑错误" tabindex="-1"><a class="header-anchor" href="#逻辑错误" aria-hidden="true">#</a> 逻辑错误</h3>
<ul>
<li>debugger调试</li>
<li>watch看到变量的值</li>
</ul>
<h2 id="变量和作用域" tabindex="-1"><a class="header-anchor" href="#变量和作用域" aria-hidden="true">#</a> 变量和作用域</h2>
<h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3>
<h4 id="变量命名规则" tabindex="-1"><a class="header-anchor" href="#变量命名规则" aria-hidden="true">#</a> 变量命名规则</h4>
<ul>
<li>包含$,_,字母,数字,数字不能开头</li>
<li>区分大小写,不能是保留字和关键字</li>
</ul>
<h4 id="数据类型和堆栈" tabindex="-1"><a class="header-anchor" href="#数据类型和堆栈" aria-hidden="true">#</a> 数据类型和堆栈</h4>
<ul>
<li>基本类型不能修改,引用类型可以修改</li>
<li>基本类型在栈中,引用类型在堆中</li>
<li>基本类型按值访问,引用类型按地址访问</li>
</ul>
<h4 id="变量比较和值的复制" tabindex="-1"><a class="header-anchor" href="#变量比较和值的复制" aria-hidden="true">#</a> 变量比较和值的复制</h4>
<ul>
<li>引用类型指向同一个引用才相等</li>
<li>基本类型修改,值不干扰</li>
<li>引用类型修改,都改</li>
<li>复制是创建副本基本,引用复制指针</li>
<li>基本typeof检测类型,引用instanceOf检测类型</li>
</ul>
<h4 id="参数传递和类型检测" tabindex="-1"><a class="header-anchor" href="#参数传递和类型检测" aria-hidden="true">#</a> 参数传递和类型检测</h4>
<ul>
<li>只有按值传递
检测类型:</li>
<li>typeof返回字符串类型</li>
<li><code v-pre>a instanceof b</code>变量是否是对象的实例;</li>
<li>a是b的实例:[]instanceof Array;</li>
<li>只适合引用类型,基本类型只返回false</li>
</ul>
<h3 id="作用域与解析机制" tabindex="-1"><a class="header-anchor" href="#作用域与解析机制" aria-hidden="true">#</a> 作用域与解析机制</h3>
<h4 id="全局作用域和局部作用域" tabindex="-1"><a class="header-anchor" href="#全局作用域和局部作用域" aria-hidden="true">#</a> 全局作用域和局部作用域</h4>
<p>局部作用域:函数作用域</p>
<h4 id="变量对象" tabindex="-1"><a class="header-anchor" href="#变量对象" aria-hidden="true">#</a> 变量对象</h4>
<ul>
<li>不存在的变量使用: not defined</li>
<li>不存在的属性则提示 undefined</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>person<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链" aria-hidden="true">#</a> 作用域链</h4>
<p>查询变量沿着作用域链查找,直到window</p>
<ul>
<li>延长作用域链:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">with</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	name<span class="token operator">=</span><span class="token string">'xh'</span><span class="token punctuation">;</span>
	相当于person<span class="token punctuation">.</span>xxx
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="js解析机制" tabindex="-1"><a class="header-anchor" href="#js解析机制" aria-hidden="true">#</a> JS解析机制</h4>
<p>先预编译,然后再逐行解释;</p>
<ul>
<li>
<p>先找变量,再找函数</p>
</li>
<li>
<p>变量函数冲突,函数存活</p>
</li>
<li>
<p>函数和函数冲突,后来居上</p>
</li>
<li>
<p>if() {},for(){} 中尽量不定义函数,不好解析</p>
</li>
<li>
<p>分标签进行,则先声明就可以使用,不然报错</p>
</li>
<li>
<p>预编译:</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	 a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数相当于局部变量,预编译时= undefined</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	 a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内存问题和垃圾收集机制" tabindex="-1"><a class="header-anchor" href="#内存问题和垃圾收集机制" aria-hidden="true">#</a> 内存问题和垃圾收集机制</h3>
<h4 id="垃圾收集" tabindex="-1"><a class="header-anchor" href="#垃圾收集" aria-hidden="true">#</a> 垃圾收集</h4>
<ul>
<li>自动手动收集</li>
<li>原理:找出没用数据,打上标记,释放内存,周期性执行</li>
<li>标识无用数据策略
<ul>
<li>标记清除:
<ul>
<li>先标记所有,然后去掉环境中的变量,以及被环境中变量引用的变量(常用,时间间隔不同而已)</li>
<li>给不用的值加标记</li>
</ul>
</li>
<li>引用计数:跟踪记录,每个数据被引用的次数,次数为零则回收(可能因为循环引用而得不到释放)</li>
</ul>
</li>
</ul>
<h4 id="内存管理" tabindex="-1"><a class="header-anchor" href="#内存管理" aria-hidden="true">#</a> 内存管理</h4>
<ul>
<li>web浏览器&lt;桌面应用程序</li>
<li>null解除引用,适合于全局变量</li>
<li>不用了可手动解除 arr = null</li>
</ul>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2>
<h3 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h3>
<ul>
<li>对象中加键值对</li>
</ul>
<h4 id="如何创建" tabindex="-1"><a class="header-anchor" href="#如何创建" aria-hidden="true">#</a> 如何创建</h4>
<ul>
<li>字面量创建方式:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> cat <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token string-property property">'naem'</span><span class="token operator">:</span><span class="token string">'tom'</span><span class="token punctuation">,</span>
	<span class="token string-property property">'age'</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">,</span>
	<span class="token string-property property">'famliy'</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'father'</span><span class="token punctuation">,</span><span class="token string">'mather'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token string-property property">'speak'</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		consloge<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'喵喵~'</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token string-property property">'friend'</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token string-property property">'naem'</span><span class="token operator">:</span><span class="token string">'Jerry'</span><span class="token punctuation">,</span>
		<span class="token string-property property">'age'</span><span class="token operator">:</span><span class="token number">4</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>构造函数创建:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> cat <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>ES5方法</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="如何修改" tabindex="-1"><a class="header-anchor" href="#如何修改" aria-hidden="true">#</a> 如何修改</h4>
<ul>
<li>修改</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cat<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'tim'</span>
cat<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'Tim'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>添加</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cat.type = '新加的'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>删除</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>delete cat.type	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>in 判断是否拥有属性
<code v-pre>&quot;name&quot; in cat</code></li>
<li>对象的枚举</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span>变量 <span class="token keyword">in</span> 对象<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	执行代码
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>获取到的是person对象中的每个属性
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>获取到的是person对象中属性所对应的属性值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数的介绍" tabindex="-1"><a class="header-anchor" href="#函数的介绍" aria-hidden="true">#</a> 函数的介绍</h3>
<p>一次封装(定义),四处调用</p>
<ul>
<li>function</li>
<li>函数名</li>
<li>参数</li>
<li>函数体</li>
<li>定义就是封装,调用才会执行</li>
</ul>
<h4 id="函数好处" tabindex="-1"><a class="header-anchor" href="#函数好处" aria-hidden="true">#</a> 函数好处</h4>
<ul>
<li>可复用代码</li>
<li>同时修改和维护</li>
<li>提高程序可读性</li>
<li>暴露过多细节就该用函数,把细节封装起来</li>
</ul>
<h4 id="函数的本质" tabindex="-1"><a class="header-anchor" href="#函数的本质" aria-hidden="true">#</a> 函数的本质</h4>
<ul>
<li>可调用</li>
<li>函数是对象
<ul>
<li>添加属性和方法</li>
<li>字面量和构造函数方法定义函数</li>
<li>作为数据值使用:匿名函数,通过变量调用</li>
</ul>
</li>
<li>作为参数:setTimeout(,1000);</li>
<li>作为返回值:<code v-pre>return function() {}</code>,<code v-pre>fn()()</code></li>
</ul>
<h3 id="函数的定义" tabindex="-1"><a class="header-anchor" href="#函数的定义" aria-hidden="true">#</a> 函数的定义</h3>
<h4 id="方式" tabindex="-1"><a class="header-anchor" href="#方式" aria-hidden="true">#</a> 方式</h4>
<ul>
<li>字面量:直接,好看,效率高</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">1</span><span class="token punctuation">.</span>function声明<span class="token operator">:</span>会提前
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
	<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">2</span><span class="token punctuation">.</span>var赋值表达式<span class="token operator">:</span>不会提前
<span class="token keyword">var</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">argument</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>构造函数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">'num1'</span><span class="token punctuation">,</span><span class="token string">'num2'</span><span class="token punctuation">,</span><span class="token string">'return num1+num2;'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//参数必须是字符串</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数定义的位置" tabindex="-1"><a class="header-anchor" href="#函数定义的位置" aria-hidden="true">#</a> 函数定义的位置</h4>
<ul>
<li>全局作用域</li>
<li>函数作用域</li>
<li>is/for等代码块---没有块级作用域</li>
<li>对象---方法</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//定义:</span>
<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'xm'</span><span class="token punctuation">,</span>
	<span class="token function-variable function">setSex</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">sex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>sex<span class="token operator">=</span> sex<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token comment">//添加:</span>
person<span class="token punctuation">.</span><span class="token function">setSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数的调用" tabindex="-1"><a class="header-anchor" href="#函数的调用" aria-hidden="true">#</a> 函数的调用</h3>
<ul>
<li>全局调用</li>
<li>对象.函数名()调用</li>
<li>if/else调用</li>
<li>匿名函数的调用
<ul>
<li>立即执行函数
<img src="@source/JavaScript/JS_advance/1.jpg"></li>
</ul>
</li>
</ul>
<h4 id="方法的调用" tabindex="-1"><a class="header-anchor" href="#方法的调用" aria-hidden="true">#</a> 方法的调用</h4>
<ul>
<li>递归调用</li>
<li>不合法标识,可以用[]调用</li>
<li><code v-pre>console.log(oper['@'](1,2)</code></li>
<li>链式调用
<img src="@source/JavaScript/JS_advance/3.jpg"></li>
</ul>
<h4 id="构造函数的调用" tabindex="-1"><a class="header-anchor" href="#构造函数的调用" aria-hidden="true">#</a> 构造函数的调用</h4>
<ul>
<li>构造函数一定要:new person()返回一个对象</li>
<li>首字母大写便于区别</li>
<li>new Object()</li>
<li>new Array()</li>
</ul>
<h4 id="函数的间接调用" tabindex="-1"><a class="header-anchor" href="#函数的间接调用" aria-hidden="true">#</a> 函数的间接调用</h4>
<ul>
<li>add.call()</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>第一个参数改变<span class="token keyword">this</span>的值<span class="token punctuation">;</span>
传参一个一个传
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>add.apply()</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>console.log(person.getName.apply(window,[1,3,4,2]))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参数的使用" tabindex="-1"><a class="header-anchor" href="#参数的使用" aria-hidden="true">#</a> 参数的使用</h3>
<ul>
<li>形参,实参</li>
<li>参数传递就是实参赋值给形参</li>
</ul>
<h4 id="参数个数" tabindex="-1"><a class="header-anchor" href="#参数个数" aria-hidden="true">#</a> 参数个数</h4>
<ul>
<li>相等没问题</li>
<li>实参 &lt; 形参,没有的就是undefind</li>
<li>实参 &gt; 形参</li>
</ul>
<h4 id="arguments" tabindex="-1"><a class="header-anchor" href="#arguments" aria-hidden="true">#</a> arguments</h4>
<ul>
<li>类数组,是个对象</li>
<li>argumengts 与形参一一对应</li>
<li>每个函数都有</li>
<li>arguments.callee指代函数本身--(小名)</li>
<li><code v-pre>var jiecheng = function fn(num) {}</code></li>
<li>arguments.length 实参个数</li>
<li>函数名.length 形参个数</li>
</ul>
<h4 id="什么可以做参数" tabindex="-1"><a class="header-anchor" href="#什么可以做参数" aria-hidden="true">#</a> 什么可以做参数</h4>
<ul>
<li>数据都可以
<strong>基本类型</strong></li>
<li>null</li>
<li>undefind</li>
<li>数字</li>
<li>字符串</li>
<li>布尔
<strong>引用类型</strong></li>
<li>数组</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span>item</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>对象做参数:
<img src = "./JS_advance/2.png"></li>
<li>函数做参数:回调函数....</li>
</ul>
<h3 id="函数的返回值" tabindex="-1"><a class="header-anchor" href="#函数的返回值" aria-hidden="true">#</a> 函数的返回值</h3>
<ul>
<li>return:函数中使用,表示函数的返回</li>
<li>continue:循环中使用,跳出本次循环</li>
<li>break:用在循环中,表示跳出循环</li>
</ul>
<h4 id="什么可以做返回值" tabindex="-1"><a class="header-anchor" href="#什么可以做返回值" aria-hidden="true">#</a> 什么可以做返回值</h4>
<ul>
<li>什么都没有 function fn(){return;}</li>
<li>undefined</li>
<li>数字 return 1;</li>
<li>字符串 '1,2,3,';如果不是字符串则尝试用toString()方法转化成字符串</li>
</ul>
<h4 id="布尔值true-false" tabindex="-1"><a class="header-anchor" href="#布尔值true-false" aria-hidden="true">#</a> 布尔值true/false</h4>
<ul>
<li>表单验证</li>
</ul>
<h4 id="null" tabindex="-1"><a class="header-anchor" href="#null" aria-hidden="true">#</a> null</h4>
<h4 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h4>
<ul>
<li>返回多个值</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span>num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span>num1<span class="token operator">+</span>num2<span class="token punctuation">,</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h4>
<ul>
<li>有序返回多个值</li>
</ul>
<h4 id="函数-1" tabindex="-1"><a class="header-anchor" href="#函数-1" aria-hidden="true">#</a> 函数</h4>
<ul>
<li>函数做返回值,函数做参数传入</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">argument</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> newFn <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">newFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="面向对象-1" tabindex="-1"><a class="header-anchor" href="#面向对象-1" aria-hidden="true">#</a> 面向对象</h2>
<ul>
<li>一切事物皆对象</li>
<li>对代码的抽象,对外统一提供调用接口的编程思想</li>
</ul>
<h3 id="js名词解释" tabindex="-1"><a class="header-anchor" href="#js名词解释" aria-hidden="true">#</a> JS名词解释</h3>
<ul>
<li>属性:事物的特性</li>
<li>方法:事物的功能</li>
<li>对象:事物的一个实例</li>
<li>原型:Js函数中由prototype属性引用了一个对象,及原型对象(原型)</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var obj = new Fucntion (var1,var2,....,function Body());
//var1,var2 正常变量,functionBody()自定义函数体;
//var1,var2 顺序不能变;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h3>
<p>当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数不在当前词法作用域内执行！！
<code v-pre>一个函数在任何时间都持有对该作用域的引用，这个引用就是闭包</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">a</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">function</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">alert</span><span class="token punctuation">(</span><span class="token operator">++</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> b<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法特征：函数b 是在a内嵌套的,函数a需要返回函数b;
用途：
1.读取函数内部的值；
2.让i变量的值保存在内存中；
优缺点：</p>
<ul>
<li>有利于封装,可以访问局部变量;使用不当,没有及时回收会造成内存泄漏！！</li>
</ul>
<h3 id="声明对象" tabindex="-1"><a class="header-anchor" href="#声明对象" aria-hidden="true">#</a> 声明对象</h3>
<ul>
<li>无论任何方式创建对象,两者没有关联</li>
</ul>
<h4 id="字面式声明对象" tabindex="-1"><a class="header-anchor" href="#字面式声明对象" aria-hidden="true">#</a> 字面式声明对象</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">属性名</span><span class="token operator">:</span>属性值<span class="token punctuation">,</span>
	<span class="token literal-property property">属性名</span><span class="token operator">:</span>属性值<span class="token punctuation">,</span>
	<span class="token operator">...</span>
	<span class="token function-variable function">方法名称</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">方法名称</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token operator">...</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="new-object生命对象" tabindex="-1"><a class="header-anchor" href="#new-object生命对象" aria-hidden="true">#</a> new Object生命对象</h4>
<p>var obj = new Object ();
obj.属性 = 属性值;
obj.属性 = 属性值;
obj.方法 = function() {
方法代码
};</p>
<h4 id="构造函数声明对象" tabindex="-1"><a class="header-anchor" href="#构造函数声明对象" aria-hidden="true">#</a> 构造函数声明对象</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>参数列表<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>属性 <span class="token operator">=</span> 属性值<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">方法</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token comment">//this代表当前对象</span>
	<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="工厂模式声明对象" tabindex="-1"><a class="header-anchor" href="#工厂模式声明对象" aria-hidden="true">#</a> 工厂模式声明对象</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createObject</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    obj<span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span> <span class="token comment">// obj.name 属性  name参数</span>
    obj<span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    obj<span class="token punctuation">.</span><span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//在obj对象中 调用obj对象的属性 this 代表的当前对象***</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"----"</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token string">"运行中...."</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    obj<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"今天天气不错"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> obj<span class="token punctuation">;</span> <span class="token comment">//!!!!重点返回obj对象</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> box1 <span class="token operator">=</span> <span class="token function">createObject</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> box2 <span class="token operator">=</span> <span class="token function">createObject</span><span class="token punctuation">(</span><span class="token string">"李四"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>box2<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//box1 和 box2 没有关系</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>构造和工厂模式不同
<ol>
<li>构造函数方式:不会显示创建对象,直接将属性赋值给 <code v-pre>this</code> ，不需要<code v-pre>return</code>对象</li>
<li>工厂方式:在方法内部创建 <code v-pre>object对象 </code>，属性和方法都是赋给object对象,所以要返回object对象</li>
</ol>
</li>
</ul>
<h4 id="原型模式声明对象" tabindex="-1"><a class="header-anchor" href="#原型模式声明对象" aria-hidden="true">#</a> 原型模式声明对象</h4>
<ul>
<li>根本:函数本身声明为空内容,利用prototype定义一些属性及方法;</li>
<li>好处:让所有的实例化对象都拥有它包含的属性及方法;</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
test<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>属性 <span class="token operator">=</span> 属性值<span class="token punctuation">;</span>
test<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>属性 <span class="token operator">=</span> 属性值<span class="token punctuation">;</span>
test<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">方法名称</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	执行代码
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="混合模式-构造-原型" tabindex="-1"><a class="header-anchor" href="#混合模式-构造-原型" aria-hidden="true">#</a> 混合模式(构造+原型)</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">blog</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>url<span class="token punctuation">,</span>friend</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token operator">=</span> url<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>friend <span class="token operator">=</span> friend<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

blog<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function-variable function">showIn</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">+</span><span class="token string">"-----"</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">gets</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>friend<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> pro <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">blog</span><span class="token punctuation">(</span><span class="token string">"zs"</span><span class="token punctuation">,</span><span class="token string">"baidu.com"</span><span class="token punctuation">,</span><span class="token string">"lisi"</span><span class="token punctuation">)</span>
pro<span class="token punctuation">.</span><span class="token function">showIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象的遍历及存储" tabindex="-1"><a class="header-anchor" href="#对象的遍历及存储" aria-hidden="true">#</a> 对象的遍历及存储</h3>
<h4 id="对象的遍历" tabindex="-1"><a class="header-anchor" href="#对象的遍历" aria-hidden="true">#</a> 对象的遍历</h4>
<ul>
<li>对象可以当做数组处理,for in循环</li>
<li><code v-pre>for(var i in ren)</code> i是属性或者方法的名称,ren[i]取得是属性的值,或者方法定义的代码</li>
<li><code v-pre>构造函数</code>声明的对象要实例化一下就可以遍历</li>
</ul>
<h4 id="对象的存储" tabindex="-1"><a class="header-anchor" href="#对象的存储" aria-hidden="true">#</a> 对象的存储</h4>
<ul>
<li>两个对象没有任何联系</li>
<li>对象名指向地址</li>
</ul>
<h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h3>
<ul>
<li>把对象内部数据和操作细节进行隐藏;</li>
<li>提供一个接口,接口一般为调用方法;</li>
<li>通过接口访问局部变量和函数,不影响普通方法的实现;</li>
</ul>
<h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3>
<h4 id="原型和原型链" tabindex="-1"><a class="header-anchor" href="#原型和原型链" aria-hidden="true">#</a> 原型和原型链</h4>
<ul>
<li>原型:利用<code v-pre>prototype对象</code>添加属性和方法</li>
<li>原型链:JS在创建对象时,不论是普通对象还是函数对象,都有一个<code v-pre>__proto__</code>的内置属性,指向创建他的函数对象的原型对象<code v-pre>prototype</code></li>
<li><code v-pre>Object.prototype._proto_</code>获取Object原型的原型的时候，将会得到<code v-pre>null</code>,<code v-pre>Object {}</code>原型对象就是原型链的终点</li>
</ul>
<h4 id="构造函数的继承" tabindex="-1"><a class="header-anchor" href="#构造函数的继承" aria-hidden="true">#</a> 构造函数的继承</h4>
<ul>
<li>在子类内部构造父类的对象实现继承</li>
<li>要过滤掉对象继承的属性，用hasOwnProperty()来实现</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'Beijing'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>o<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'name', 'age', 'city'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="call和apply继承" tabindex="-1"><a class="header-anchor" href="#call和apply继承" aria-hidden="true">#</a> call和apply继承</h4>
<ul>
<li>call调用一个对象的一个方法,以另一个对象替换当前对象
<code v-pre>obj.call(方法,var1,var2,var3...)</code></li>
<li>apply应用某一次对象的一个方法,用另一个对象替换当前对象
<code v-pre>obj.apply(方法,[var1,var2,var3]);</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Animal</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>food</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>food <span class="token operator">=</span> food<span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span><span class="token string">"喜欢吃"</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>food<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">function</span> <span class="token function">Dog</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>food</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token function">Animal</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>name<span class="token punctuation">,</span>food<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">var</span> dog1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span> <span class="token punctuation">(</span><span class="token string">"dog"</span><span class="token punctuation">,</span><span class="token string">"骨头"</span><span class="token punctuation">)</span>
		dog1<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//dog 喜欢吃 骨头</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript关键词" tabindex="-1"><a class="header-anchor" href="#javascript关键词" aria-hidden="true">#</a> JavaScript关键词</h3>
<ul>
<li><code v-pre>a instanceOf b</code>,<code v-pre>isPrototypeOf()</code>变量是否是对象的实例</li>
<li><code v-pre>delete obj.name</code>只能删除对象属性,用法:直接后面加属性名称,<code v-pre>对方法,变量不起作用</code></li>
<li>注意:<code v-pre>delect</code>不能删除原型链中的属性和变量</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">alert</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">subs</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">alert</span><span class="token punctuation">(</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//add.call(subs,5,3); //8  subs-->add  ===>add(5,3)  subs只能引用一个存在的对象,apply同理</span>
<span class="token function">add</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>subs<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>可以把前面对象的方法,传递给后面对象用,调用后面对象的值</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"ani"</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">showName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"cat"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> an <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//an.showName.call(c,","); // 通过call方法，将showName--》cat使用了</span>
an<span class="token punctuation">.</span><span class="token function">showName</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//cat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>apply</code>还有一个特性:apply会将一个数组转换为一个参数接一个参数的传递给方法</li>
<li><code v-pre>callee</code>返回正在执行的function对象,function 内容</li>
<li><code v-pre>arguments.callee</code> 默认值:正在执行的function对象</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>实现在递归中
 <span class="token keyword">var</span> <span class="token function-variable function">sun</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	 <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">&lt;=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		 <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
	 <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
		 <span class="token keyword">return</span> n<span class="token operator">+</span>arguments<span class="token punctuation">.</span><span class="token function">callee</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//在函数内部调用了本函数</span>
	 <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>arguments</code> 每一个函数都有Arguments对象的实例arguments,引用函数的参数(实参)</p>
</li>
<li>
<p>可以用数组下标的方式引用arguments元素</p>
</li>
<li>
<p>arguments表示参数可以遍历</p>
</li>
<li>
<p><code v-pre>this</code></p>
</li>
</ul>
<ol>
<li>在普通函数中，通过this定义的变量是全局变量</li>
<li>this在构造函数表示当前对象</li>
<li><code v-pre>call apply </code>中this指第一个参数</li>
</ol>
<h3 id="对象冒充" tabindex="-1"><a class="header-anchor" href="#对象冒充" aria-hidden="true">#</a> 对象冒充</h3>
<ul>
<li>将父类的属性和方法一起传给子类,作为特权属性和特权方法;</li>
<li>不能继承共有属性和方法</li>
</ul>
<h2 id="dom操作" tabindex="-1"><a class="header-anchor" href="#dom操作" aria-hidden="true">#</a> DOM操作</h2>
<ul>
<li>参考JavaScript!</li>
</ul>
<h2 id="dom事件" tabindex="-1"><a class="header-anchor" href="#dom事件" aria-hidden="true">#</a> DOM事件</h2>
<ul>
<li>参考JavaScript!</li>
</ul>
</div></template>
