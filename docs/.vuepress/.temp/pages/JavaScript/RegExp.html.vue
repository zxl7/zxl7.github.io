<template><div><p>正则表达式!</p>
<!-- more -->
<h2 id="创建方式" tabindex="-1"><a class="header-anchor" href="#创建方式" aria-hidden="true">#</a> 创建方式</h2>
<ul>
<li>一种是字面量，格式是写在/ /中，字面量 /js/</li>
<li>另一种是用构造方法，里面写字符串或者是字符串的变量 <code v-pre>构造函数new RegExp()</code></li>
<li>匹配字符串的值,区别一方便,二则可以传递变量;</li>
<li>普通字符: 字母、数字、下划线(_)、汉字、空格以及其他一些没有特殊含义的字符(!@,;等)</li>
<li>特殊字符: .</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'i love js'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> pattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">var</span> pattern <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">'js'</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匹配方法" tabindex="-1"><a class="header-anchor" href="#匹配方法" aria-hidden="true">#</a> 匹配方法</h3>
<ul>
<li>
<p>test <code v-pre>pattern.test(str)</code>用正则去匹配相应字符串,匹配成功返回ture</p>
</li>
<li>
<p>exec <code v-pre>pattern.exec(str)</code>找到匹配的字符串就添加数组中,返回数组 找不到返回null;</p>
</li>
<li>
<p>exec会匹配两个属性：</p>
</li>
<li>
<p><code v-pre>index</code>	匹配的值在数组中的位置</p>
</li>
<li>
<p><code v-pre>input</code>	匹配的字符串的位置</p>
</li>
</ul>
<h3 id="模式修饰符" tabindex="-1"><a class="header-anchor" href="#模式修饰符" aria-hidden="true">#</a> 模式修饰符</h3>
<ul>
<li>i ignoreCase 不区分大小写<code v-pre>/js/i</code></li>
<li><code v-pre>var pattern = new RegExp('js','i')</code>;</li>
<li>g global 全局匹配，修饰符g，匹配所有元素，如有多个匹配时，返回数组<code v-pre>/js/ig</code></li>
<li>m multiline 多行匹配<code v-pre>/hss/igm</code></li>
<li>写在右斜杠后面</li>
</ul>
<h2 id="字符匹配" tabindex="-1"><a class="header-anchor" href="#字符匹配" aria-hidden="true">#</a> 字符匹配</h2>
<h3 id="转义字符" tabindex="-1"><a class="header-anchor" href="#转义字符" aria-hidden="true">#</a> 转义字符</h3>
<ul>
<li><code v-pre>\</code></li>
<li><code v-pre>\n,\x0A,/\u000A/</code>	换行</li>
<li><code v-pre>\t</code>	制表符	Tab</li>
<li>中文的编码:<code v-pre>\4e00--\u9fa5</code></li>
</ul>
<h3 id="字符类" tabindex="-1"><a class="header-anchor" href="#字符类" aria-hidden="true">#</a> 字符类</h3>
<ul>
<li><code v-pre>/[js]/</code>		只要一个</li>
<li><code v-pre>/[^js]/</code>		取反，除了js都可以匹配</li>
<li><code v-pre>/[a-z]/</code>		匹配a到z，前面的小于等于后面的</li>
<li><code v-pre>/[a-zA-Z]/</code>	所有字母</li>
<li><code v-pre>/[0-9]/</code>		匹配数字</li>
<li><code v-pre>/^\n/ === /. /</code></li>
<li><code v-pre>/[a-zA-Z0-9_]/</code>和<code v-pre>/\w/</code>	小写w：包括下划线的任何单词字符，类似但不等价于“[A-Za-z0-9_]”</li>
<li><code v-pre>/[^a-zA-Z0-9_]/</code>和<code v-pre>/\W/</code>	大写W、</li>
<li><code v-pre>/[0-9]/</code> == <code v-pre>/\d/</code>		数字</li>
<li><code v-pre>\D</code>	除了数字</li>
<li><code v-pre>\s</code>	匹配空格和制表符(	tab)</li>
<li><code v-pre>\S</code>	除了匹配空格和制表符(	tab)</li>
<li><code v-pre>.（点）</code>匹配除<code v-pre>\n换行</code>和<code v-pre>\r回车</code>之外的任何单个字符。</li>
</ul>
<h3 id="量词重复" tabindex="-1"><a class="header-anchor" href="#量词重复" aria-hidden="true">#</a> 量词重复</h3>
<ul>
<li>
<p><code v-pre>{n}</code> 匹配n次</p>
</li>
<li>
<p><code v-pre>{1,2}</code> 一个或者两个，不能有空格</p>
</li>
<li>
<p><code v-pre>{1，}</code>至少一个</p>
</li>
<li>
<p>只能没有上限，不能没有下限</p>
</li>
<li>
<p><code v-pre>?</code>	零次或者一次</p>
</li>
<li>
<p><code v-pre>+</code>	大于等于一次</p>
</li>
<li>
<p><code v-pre>*</code>	大于等于零次</p>
</li>
<li>
<p>量词只对紧靠的前一个有效</p>
</li>
<li>
<p>正整数<code v-pre>/[1-9]\d{0,}/</code>或者<code v-pre>/[1-9]\d*/</code></p>
</li>
<li>
<p>正整数和负整数的正则：<code v-pre>/-？[1-9]\d{0,}/</code>或者<code v-pre>/-{0,1}[1-9]\d*/</code>或者<code v-pre>/-？[1-9]\d*/</code>或者<code v-pre>/-{0,1}[1-9]\d{0,1}/</code></p>
</li>
</ul>
<h3 id="非贪婪的重复" tabindex="-1"><a class="header-anchor" href="#非贪婪的重复" aria-hidden="true">#</a> 非贪婪的重复</h3>
<ul>
<li>
<p>默认匹配多</p>
</li>
<li>
<p>量词后加<code v-pre>?</code>	非贪婪匹配模式</p>
</li>
<li>
<p><code v-pre>/a+?</code>	多个a也只匹配一个a</p>
</li>
<li>
<p>贪婪与非贪婪的概念只有当你使用量词的时候才有意义。</p>
</li>
<li>
<p>正则表达式的模式匹配总是会寻找字符串中第一个可能匹配的位置。</p>
</li>
<li>
<p>要想将贪婪转换成非贪婪匹配，只需在量词后面加上?</p>
</li>
</ul>
<h3 id="选择" tabindex="-1"><a class="header-anchor" href="#选择" aria-hidden="true">#</a> 选择</h3>
<ul>
<li><code v-pre>/|/</code> 类似于或</li>
<li><code v-pre>/html|css|js/</code>	从最左侧开始匹配</li>
<li>匹配整数	<code v-pre>/0|-?[1-9]\d*/</code></li>
<li>在匹配的时候，会在<code v-pre>字符串</code>中从前往后一 一的匹配</li>
</ul>
<h3 id="分组" tabindex="-1"><a class="header-anchor" href="#分组" aria-hidden="true">#</a> 分组</h3>
<ul>
<li><code v-pre>()</code> 分组、</li>
<li><code v-pre>/(ab)+/</code>		多次匹配ab、</li>
<li><code v-pre>/(ab)c/</code>		可单独捕获</li>
<li><code v-pre>/?:(ab)c/</code>	非捕获</li>
<li><code v-pre>/(ab) cd \1/</code> 可匹配第一个分组</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'&lt;div> &lt;a>午饭加个鸡蛋呀&lt;/a> &lt;/div>'</span>
<span class="token keyword">var</span> patten <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;([a-zA-Z]+)>(.*?)&lt;\/\1></span><span class="token regex-delimiter">/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="匹配位置" tabindex="-1"><a class="header-anchor" href="#匹配位置" aria-hidden="true">#</a> 匹配位置</h2>
<ul>
<li><code v-pre>/^js/</code>		匹配开头</li>
<li><code v-pre>/js$/</code>		末尾匹配</li>
<li><code v-pre>/^\d+$/</code>		全是数字</li>
</ul>
<h3 id="单词边界匹配" tabindex="-1"><a class="header-anchor" href="#单词边界匹配" aria-hidden="true">#</a> 单词边界匹配</h3>
<ul>
<li>
<p><code v-pre>\b</code></p>
</li>
<li>
<p><code v-pre>/java(?=script)/</code>	前瞻性匹配，只有后面跟的值相同才会匹配</p>
</li>
<li>
<p><code v-pre>/java(?!script)</code>		负前瞻性匹配，后面跟的值不一样就可以匹配</p>
</li>
</ul>
<h2 id="regexp" tabindex="-1"><a class="header-anchor" href="#regexp" aria-hidden="true">#</a> RegExp</h2>
<ul>
<li>/js/</li>
<li>new RegExp('js')</li>
</ul>
<h3 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h3>
<ul>
<li>exec	属性·input	·index</li>
</ul>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>var str = 'js js js'
var pattern = /js/g;
//全局匹配

console.log(patten.exec(str));
console.log(patten.exec(str));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>toString</code>		对象转化为字符串,正则的字面量形式</li>
<li><code v-pre>toLocaleString</code>	本地特色的字符串</li>
<li><code v-pre>valueOf</code>			返回正则本身</li>
</ul>
<h3 id="实例属性" tabindex="-1"><a class="header-anchor" href="#实例属性" aria-hidden="true">#</a> 实例属性</h3>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>var str = 'js js js'
var pattern = /js/g;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>pattern.ignoreCase</code>		判断有没有i	忽略大小写</p>
</li>
<li>
<p><code v-pre>pattern.global</code>			判断有没有g	全局匹配</p>
</li>
<li>
<p><code v-pre>pattern.multiline</code>		判断有没有m	多行匹配</p>
</li>
<li>
<p>都返回布尔值、、</p>
</li>
<li>
<p><code v-pre>source</code>	返回字面量形式对应的字符串</p>
</li>
<li>
<p><code v-pre>lastIndex</code>	全局匹配才会工作，·<code v-pre>lastIndex</code>起始的匹配位置匹配成功自动后移，匹配到<code v-pre>null</code>自动重置，重头开始</p>
</li>
</ul>
<h3 id="构造函数属性" tabindex="-1"><a class="header-anchor" href="#构造函数属性" aria-hidden="true">#</a> 构造函数属性</h3>
<ul>
<li><code v-pre>RegExp.input</code>			匹配的字符串			(RegExp['$_']</li>
<li><code v-pre>RegExp.lastMatch</code>		最近匹配的			(简写RegExp['$&amp;'])</li>
<li><code v-pre>RegExp.leftCotext</code>		上一次匹配的左		(RegExp['$`'])</li>
<li><code v-pre>RegExp.RightCotext</code>		上一次匹配的右		(RegExp[&quot;$'&quot;])</li>
<li><code v-pre>RegExp.lastParen</code>		上一次匹配的子选项	(RegExp['$+'])</li>
<li><code v-pre>$1</code>		分组是构造函数的属性<code v-pre>$1</code>来引用</li>
</ul>
<h3 id="string中与正则有关的方法" tabindex="-1"><a class="header-anchor" href="#string中与正则有关的方法" aria-hidden="true">#</a> String中与正则有关的方法</h3>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>var str = 'html js'
var pattern = /js2/

console.log(str.search(pattern));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>search</code>		搜寻正则找到的位置，找不到返回-1；与全局无关</li>
<li><code v-pre>match</code>		匹配不到返回null，匹配到返回一个数组；有分组第二个为分组元素，全局匹配全都显示，但是不显示分组内容</li>
<li><code v-pre>exec</code>		无论是否全局匹配的都会返回分组中匹配到的内容，都只返回当前匹配的一个内容，而不是全部返回。</li>
<li><code v-pre>·$·</code>			尾匹配和<code v-pre>^</code>首匹配		<code v-pre>match+m</code>	多行匹配；</li>
<li><code v-pre>split</code>		替换结合正则<code v-pre>str.split(pattern)</code>		<code v-pre>pattern = /\s*,\s*/</code></li>
<li><code v-pre>replace</code>		替换<code v-pre>(str.replace('js','html'))</code>，可将字符串js直接替换为html；全局匹配就会全局替换</li>
</ul>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>var str = '111-111-111'
var pattern = /-/g

console.log(str.replace(pattern,'.'))		//111.111.111
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>replace引用<code v-pre>（js）</code>的方式为<code v-pre>$1</code></li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>console.log(str.replace(pattern,function ($0){
	var result = '';
	for(var i = 0; $0.length; i++){
		result += '*';
	}
	return result;
}))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实际案例" tabindex="-1"><a class="header-anchor" href="#实际案例" aria-hidden="true">#</a> 实际案例</h2>
<h3 id="qq昵称和密码" tabindex="-1"><a class="header-anchor" href="#qq昵称和密码" aria-hidden="true">#</a> QQ昵称和密码</h3>
<ul>
<li>账号		全是数字，首位不为0，最少5位	<code v-pre>/^[1-9]\d{4,}$/</code></li>
<li>昵称		中，英文，数字及下划线，2-18  位	<code v-pre>/^[\u4e00-u9fa5a-zA-Z0-9_]{2,18}$/</code>	简化：<code v-pre>/^[\u4e00-u9fa5a\w]{2,18}$/</code></li>
<li>密码		6-16位，区分大小写，不能用空白字符\s		<code v-pre>/^\S{6-16}$/</code></li>
</ul>
<h3 id="去除字符串首位空白字符" tabindex="-1"><a class="header-anchor" href="#去除字符串首位空白字符" aria-hidden="true">#</a> 去除字符串首位空白字符</h3>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>var str = '		Alex	';
var pattern = /^\s+|\s+$/
// var pattern1 = /^\s+/
// var pattern2 = /\s+$/

console.log('|'+str.replace(pattern,'')+'|')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以修改为：</p>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>function trim(str) {
	return str.replace(/^\s+/,'').replace(/\s+$/,'')
}
var str = '		Alex	';
trim(str)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="转驼峰" tabindex="-1"><a class="header-anchor" href="#转驼峰" aria-hidden="true">#</a> 转驼峰-</h3>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>var str = background-color;
var pattern = /-([a-z])/gi;
console.log(str.replace(pattern,function (all,letter) {
	return letter.toUpperCase()
}))

function toCameCase(str) {
	return letter.toUpperCase()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匹配html标签" tabindex="-1"><a class="header-anchor" href="#匹配html标签" aria-hidden="true">#</a> 匹配HTML标签</h3>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>//正向思考
var str = '&lt;p class = &quot;odd&quot; id = &quot;odd&quot;&gt; 123 &lt;/p&gt;'
var pattern = /&lt;\/?[a-zA-Z]+(\s+[a-zA-Z]+=&quot;.*&quot;)&gt;/g
console.log(str.match(pattern))

// 逆向思考
var pattern = /&lt;[^&gt;]+&gt;/g;

var pattern = /&lt;(?:[^&quot;'&gt;]|&quot;[^&quot;]*&quot;|'[^']*')*&gt;/g
//改良
var pattern = /&lt;(?:[^&quot;'&gt;]|([^&quot;'])|'[^&quot;']*'\1)*&gt;/g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="邮箱" tabindex="-1"><a class="header-anchor" href="#邮箱" aria-hidden="true">#</a> 邮箱</h3>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>/(\w+\.)*(\w+)@(\w+\.)+([a-z])/i;
/(?:\w+\.)*\w+@(?:\w+\.)+[a-z]/i;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url地址" tabindex="-1"><a class="header-anchor" href="#url地址" aria-hidden="true">#</a> URL地址</h3>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>// 协议:\/\/主机名(:端口号)/(路径))

// 简化版
var pattern = /^(https?:\/\/)?([^:\/]+)(:\d+)?(\/.*)?$/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="汇总" tabindex="-1"><a class="header-anchor" href="#汇总" aria-hidden="true">#</a> 汇总</h3>
<div class="language-TS ext-TS line-numbers-mode"><pre v-pre class="language-TS"><code>var regexp = {
	'chinese': /[\u4e00-\u9fa5]/,
	'qq':/^[1-9]\d{4,}$/
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
