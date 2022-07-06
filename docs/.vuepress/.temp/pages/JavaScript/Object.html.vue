<template><div><p>对象!!还是要有一个~</p>
<!-- more -->
<h2 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数：</h2>
<ul>
<li>构造函数函数名的首字母最好大写，这是为了方便我们区分构造函数和其他非构造函数</li>
<li>构造函数使用this关键字来给它将创建的这个对象设置新的属性。在构造函数里面，this指向的就是它新创建的这个对象。</li>
<li>构造函数定义了属性和行为就可创建对象，而不是像其他函数一样需要设置返回值。</li>
<li>通过构造函数创建对象的时候要使用new操作符。</li>
</ul>
<h2 id="constructor属性是对创建这个实例的构造函数的一个引用" tabindex="-1"><a class="header-anchor" href="#constructor属性是对创建这个实例的构造函数的一个引用" aria-hidden="true">#</a> constructor属性是对创建这个实例的构造函数的一个引用</h2>
<ul>
<li>凡是手动给新对象重新设置过原型对象的，都别忘记在原型对象中定义一个fFUNCname.prototype.constructor属性;</li>
<li>原型是一个对象，所以原型对象也有它自己的原型！这样看来的话，Bird.prototype的原型就是Object.prototype;</li>
</ul>
<h2 id="object是-javascript-中所有对象的父级-也就是原型链的最顶层" tabindex="-1"><a class="header-anchor" href="#object是-javascript-中所有对象的父级-也就是原型链的最顶层" aria-hidden="true">#</a> Object是 JavaScript 中所有对象的父级，也就是原型链的最顶层</h2>
<h2 id="object-create-proto-propertiesobject" tabindex="-1"><a class="header-anchor" href="#object-create-proto-propertiesobject" aria-hidden="true">#</a> Object.create(proto [, propertiesObject ])</h2>
<ul>
<li>是E5中提出的一种新的对象创建方式，第一个参数是要继承的原型，如果不是一个子函数，可以传一个null，第二个参数是对象的属性描述符，这个参数是可选的。</li>
<li>bject.create(obj)创建了一个新对象，并指定了obj作为新对象的原型。</li>
<li>let animal = Object.create(Animal.prototype);</li>
<li>不相关对象的相同方法,可以定义一个函数内部继续函数调用一个方法,然后把对象传进去,对象引用方法便是;</li>
<li>对于不相关的对象，更好的方法是使用mixins。mixin允许其他对象使用函数集合。</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="a-prototype-isprototypeof-b" tabindex="-1"><a class="header-anchor" href="#a-prototype-isprototypeof-b" aria-hidden="true">#</a> A.prototype.isPrototypeOf(B)</h2>
<ul>
<li>作用：检测一个[A]对象是否是另一个对象[B]的原型。或者说一个对象是否被包含在另一个对象的原型链中</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var p = {x:1};//定义一个原型对象
var o = Object.create(p);//使用这个原型创建一个对象
p.isPrototypeOf(o);//=>true：o继承p
Object.prototype.isPrototypeOf(p);//=> true p继承自Object.prototype
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hasownproperty" tabindex="-1"><a class="header-anchor" href="#hasownproperty" aria-hidden="true">#</a> hasOwnProperty</h2>
<ul>
<li>对象的hasOwnProperty()方法用来检测给定的名字是否是对象的自由属性(自己的属性true)，如果是继承属性则返回false</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使属性私有化最简单的方法就是在构造函数中创建变量。可以将该变量范围限定在构造函数中，而不是全局可用。这样，属性只能由构造函数中的方法访问和更改。</li>
<li>在 JavaScript 中，函数总是可以访问创建它的上下文。这就叫做闭包.</li>
</ul>
<h2 id="立即执行函数-iife" tabindex="-1"><a class="header-anchor" href="#立即执行函数-iife" aria-hidden="true">#</a> 立即执行函数(IIFE)</h2>
<ul>
<li>两种常见形式：( function(){…} )()和( function (){…}())，</li>
<li>一个是一个匿名函数包裹在一个括号运算符中，后面再跟一个小括号</li>
<li>另一个是一个匿名函数后面跟一个小括号，然后整个包裹在一个括号运算符中</li>
<li>这两种写法是等价的,要想立即执行函数能做到立即执行</li>
<li>要注意两点:一是函数体后面要有小括号()</li>
<li>二是函数体必须是函数表达式而不能是函数声明</li>
<li>可以用除了使用()运算符之外，！，+，-，=等运算符,将匿名函数或函数声明转换为函数表达式</li>
</ul>
<h2 id="使用立即执行函数的好处" tabindex="-1"><a class="header-anchor" href="#使用立即执行函数的好处" aria-hidden="true">#</a> 使用立即执行函数的好处</h2>
<ul>
<li>通过定义一个匿名函数，创建了一个新的函数作用域，相当于创建了一个“私有”的命名空间，该命名空间的变量和方法，不会破坏污染全局的命名空间。此时若是想访问全局对象，将全局对象以参数形式传进去即可
如jQuery代码结构:</li>
</ul>
</div></template>
