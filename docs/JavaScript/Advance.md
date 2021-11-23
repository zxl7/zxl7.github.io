---
title: JavaScript 进阶
date: 2019-03-09 12:21:27
ems: JavaScript
categories: [学习笔记,JavaScript]
---
JavaScript进阶笔记丶
<!-- more -->



## 包装类
- 基本类型可以有属性和方法(.length方法和赋值)
- 隐藏机制:一对象方式使用基本类型,js会自动转换为**包装类型对象**并自动销毁

## 类型检测
### typeof
- 函数和基本类型
- typeof null == object
### obj instanceof Object
- 适合判断对象
- 对象和函数对象:左边对象的原型链是否有右边的
- 跨iframe对象之间不可用
### Object.prototype.toString.apply()
- []
- object function
- object null
- object Undefined

### constructor
- 指向构造函数,构造器


## 错误与调试
### 运行时错误
- ReferenceError,变量引用异常触发
- TypeError,类型使用错误时触发
	- 未获取初始化的变量的属性或方法
	- 调用类型错误
- RangeError,不太常见,递归太深触发

### 逻辑错误
- debugger调试
- watch看到变量的值

## 变量和作用域
### 变量
#### 变量命名规则
- 包含$,_,字母,数字,数字不能开头
- 区分大小写,不能是保留字和关键字

#### 数据类型和堆栈
- 基本类型不能修改,引用类型可以修改
- 基本类型在栈中,引用类型在堆中
- 基本类型按值访问,引用类型按地址访问

#### 变量比较和值的复制
- 引用类型指向同一个引用才相等
- 基本类型修改,值不干扰
- 引用类型修改,都改
- 复制是创建副本基本,引用复制指针
- 基本typeof检测类型,引用instanceOf检测类型

#### 参数传递和类型检测
- 只有按值传递
检测类型:
- typeof返回字符串类型
- `a instanceof b`变量是否是对象的实例;
- a是b的实例:[]instanceof Array;
- 只适合引用类型,基本类型只返回false

### 作用域与解析机制
#### 全局作用域和局部作用域
局部作用域:函数作用域

#### 变量对象
- 不存在的变量使用: not defined
- 不存在的属性则提示 undefined
```javascript
console.log(person)

console.log(window.person)
```

#### 作用域链
查询变量沿着作用域链查找,直到window
- 延长作用域链:
```javascript
with(person) {
	name='xh';
	相当于person.xxx
}
```

#### JS解析机制
先预编译,然后再逐行解释;
- 先找变量,再找函数
- 变量函数冲突,函数存活
- 函数和函数冲突,后来居上
- if() {},for(){} 中尽量不定义函数,不好解析

- 分标签进行,则先声明就可以使用,不然报错
- 预编译:
```javascript
var a = 1;
function fn() {
	console.log(a);
	var a = 2;
}
fn();
console.log(a);

var a = 1;
function fn() {
	console.log(a);
	 a = 2;
}
fn();
console.log(a);

```

- 参数相当于局部变量,预编译时= undefined
```javascript
var a = 1;
function fn(a) {
	console.log(a);
	 a = 2;
}
fn();
console.log(a);

```


### 内存问题和垃圾收集机制
#### 垃圾收集
- 自动手动收集
- 原理:找出没用数据,打上标记,释放内存,周期性执行
- 标识无用数据策略
	- 标记清除:
		- 先标记所有,然后去掉环境中的变量,以及被环境中变量引用的变量(常用,时间间隔不同而已)
		- 给不用的值加标记
	- 引用计数:跟踪记录,每个数据被引用的次数,次数为零则回收(可能因为循环引用而得不到释放)

#### 内存管理
- web浏览器<桌面应用程序
- null解除引用,适合于全局变量
- 不用了可手动解除 arr = null

## 函数
### 面向对象
- 对象中加键值对

#### 如何创建
- 字面量创建方式:
```javascript
var cat = {
	'naem':'tom',
	'age':4,
	'famliy':['father','mather'],
	'speak':function() {
		consloge.log('喵喵~')
	},
	'friend':{
		'naem':'Jerry',
		'age':4
	}
}
```

- 构造函数创建:
```javascript
var cat = new Object();
var cat = {}
```

- ES5方法
```javascript
Object.create()
```

#### 如何修改
- 修改
```javascript
cat.name = 'tim'
cat.['name'] = 'Tim'
```
- 添加
```
cat.type = '新加的'
```
- 删除
```
delete cat.type	
```
- in 判断是否拥有属性
 `"name" in cat`
- 对象的枚举
```javascript
for(变量 in 对象) {
	执行代码
}
console.log(v);获取到的是person对象中的每个属性
console.log(person[v]);获取到的是person对象中属性所对应的属性值
```

### 函数的介绍
一次封装(定义),四处调用
- function
- 函数名
- 参数
- 函数体
- 定义就是封装,调用才会执行

#### 函数好处
- 可复用代码
- 同时修改和维护
- 提高程序可读性
- 暴露过多细节就该用函数,把细节封装起来

#### 函数的本质
- 可调用
- 函数是对象
	- 添加属性和方法
	- 字面量和构造函数方法定义函数
	- 作为数据值使用:匿名函数,通过变量调用
- 作为参数:setTimeout(,1000);
- 作为返回值:`return function() {}`,`fn()()`

### 函数的定义
#### 方式
- 字面量:直接,好看,效率高
```javascript
1.function声明:会提前
function add(){
	}
	add();
2.var赋值表达式:不会提前
var add = function fn(argument) {
	fn()
};
add();
```

- 构造函数
```javascript
new Function('num1','num2','return num1+num2;'); //参数必须是字符串
add()
```

#### 函数定义的位置
- 全局作用域	
- 函数作用域
- is/for等代码块---没有块级作用域
- 对象---方法
```javascript
//定义:
var person = {
	name:'xm',
	setSex:function (sex) {
		this.sex= sex;
		}
	}
//添加:
person.setSex()
```

### 函数的调用
- 全局调用
- 对象.函数名()调用
- if/else调用
- 匿名函数的调用
	- 立即执行函数
<img src="JS_advance/1.jpg">

#### 方法的调用
- 递归调用
- 不合法标识,可以用[]调用
- `console.log(oper['@'](1,2)`
- 链式调用
<img src="JS_advance/3.jpg">

#### 构造函数的调用
- 构造函数一定要:new person()返回一个对象
- 首字母大写便于区别
- new Object()
- new Array()

#### 函数的间接调用
- add.call()
```javascript
第一个参数改变this的值;
传参一个一个传
console.log(person.getName.call(window,1,2,4,5))
```
- add.apply()
```
console.log(person.getName.apply(window,[1,3,4,2]))
```

### 参数的使用
- 形参,实参
- 参数传递就是实参赋值给形参

#### 参数个数
- 相等没问题
- 实参 < 形参,没有的就是undefind
- 实参 > 形参

#### arguments
- 类数组,是个对象
- argumengts 与形参一一对应
- 每个函数都有
- arguments.callee指代函数本身--(小名)
- `var jiecheng = function fn(num) {}`
- arguments.length 实参个数
- 函数名.length 形参个数

#### 什么可以做参数
- 数据都可以
**基本类型**
- null
- undefind
- 数字
- 字符串
- 布尔
**引用类型**
- 数组
```javascript
$.each([1,2,3],function(index,item)) {
	......(index);
	......(item);
}
```
- 对象做参数:
<img src = "JS_advance/2.png">
- 函数做参数:回调函数....

### 函数的返回值
- return:函数中使用,表示函数的返回
- continue:循环中使用,跳出本次循环
- break:用在循环中,表示跳出循环

#### 什么可以做返回值
- 什么都没有 function fn(){return;}
- undefined	
- 数字 return 1;
- 字符串 '1,2,3,';如果不是字符串则尝试用toString()方法转化成字符串

#### 布尔值true/false
- 表单验证

#### null

#### 数组
- 返回多个值
```javascript
function add(num1,num2) {
	return [num1+num2,num1,num2]
}
```

#### 对象
- 有序返回多个值

#### 函数
- 函数做返回值,函数做参数传入
```javascript
function fn() {
	return function (argument) {
		console.log(0);
	}
}

fn()();
var newFn = fn();
newFn();

```

## 面向对象
- 一切事物皆对象
- 对代码的抽象,对外统一提供调用接口的编程思想

### JS名词解释
- 属性:事物的特性
- 方法:事物的功能
- 对象:事物的一个实例
- 原型:Js函数中由prototype属性引用了一个对象,及原型对象(原型)
```
var obj = new Fucntion (var1,var2,....,function Body());
//var1,var2 正常变量,functionBody()自定义函数体;
//var1,var2 顺序不能变;
```

### 闭包
当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数不在当前词法作用域内执行！！
`一个函数在任何时间都持有对该作用域的引用，这个引用就是闭包`
```javascript
function a () {
			var i = 1;
			function b() {
				alert(++ i);
			}
			return b;
		}
		var c = a()
		c();
```
语法特征：函数b 是在a内嵌套的,函数a需要返回函数b;
用途：
1.读取函数内部的值；
2.让i变量的值保存在内存中；
优缺点：
- 有利于封装,可以访问局部变量;使用不当,没有及时回收会造成内存泄漏！！

### 声明对象
- 无论任何方式创建对象,两者没有关联

#### 字面式声明对象
```javascript
var obj = {
	属性名:属性值,
	属性名:属性值,
	...
	方法名称:function() {},
	方法名称:function() {},
	...
	}
```

#### new Object生命对象
var obj = new Object ();
obj.属性 = 属性值;
obj.属性 = 属性值;
obj.方法 = function() {
	方法代码
	};

#### 构造函数声明对象
```javascript
function Test([参数列表]) {
	this.属性 = 属性值;
	this.方法 = function (){}//this代表当前对象
	var obj = new Test(参数列表);
}
```

#### 工厂模式声明对象
```javascript
function createObject(name, age) {
    var obj = new Object();
    obj.name = name; // obj.name 属性  name参数
    obj.age = age;
    obj.run = function() { //在obj对象中 调用obj对象的属性 this 代表的当前对象***
        return this.name + "----" + this.age + "运行中....";
    }
    obj.say = function() {
        return "今天天气不错";
    }
    return obj; //!!!!重点返回obj对象
}
var box1 = createObject("张三", 18);
var box2 = createObject("李四", 20);
alert(box2.run());
//box1 和 box2 没有关系

```
- 构造和工厂模式不同
	1. 构造函数方式:不会显示创建对象,直接将属性赋值给 `this` ，不需要`return`对象
	2. 工厂方式:在方法内部创建 `object对象 `，属性和方法都是赋给object对象,所以要返回object对象

#### 原型模式声明对象
- 根本:函数本身声明为空内容,利用prototype定义一些属性及方法;
- 好处:让所有的实例化对象都拥有它包含的属性及方法;
```javascript
function test() {}
test.prototype.属性 = 属性值;
test.prototype.属性 = 属性值;
test.prototype.方法名称 = function() {
	执行代码
	};
	var obj = new test();
```

#### 混合模式(构造+原型)
```javascript
function blog(name,url,friend) {
	this.name = name;
	this.url= url;
	this.friend = friend;
}

blog.prototype = {
	showIn:function () {
		alert(this.name+"-----"+this.url);
	},
	gets:function () {
		alert(this.friend)
	}
}

var pro = new blog("zs","baidu.com","lisi")
pro.showIn();
```

### 对象的遍历及存储
#### 对象的遍历
- 对象可以当做数组处理,for in循环
- `for(var i in ren)` i是属性或者方法的名称,ren[i]取得是属性的值,或者方法定义的代码
- `构造函数`声明的对象要实例化一下就可以遍历

#### 对象的存储
- 两个对象没有任何联系
- 对象名指向地址

### 封装
- 把对象内部数据和操作细节进行隐藏;
- 提供一个接口,接口一般为调用方法;
- 通过接口访问局部变量和函数,不影响普通方法的实现;

### 继承
#### 原型和原型链
- 原型:利用`prototype对象`添加属性和方法
- 原型链:JS在创建对象时,不论是普通对象还是函数对象,都有一个`__proto__`的内置属性,指向创建他的函数对象的原型对象`prototype`
- `Object.prototype._proto_`获取Object原型的原型的时候，将会得到`null`,`Object {}`原型对象就是原型链的终点

#### 构造函数的继承
- 在子类内部构造父类的对象实现继承
- 要过滤掉对象继承的属性，用hasOwnProperty()来实现
``` javascript
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key); // 'name', 'age', 'city'
    }
}  
```

#### call和apply继承
- call调用一个对象的一个方法,以另一个对象替换当前对象
`obj.call(方法,var1,var2,var3...)`
- apply应用某一次对象的一个方法,用另一个对象替换当前对象
`obj.apply(方法,[var1,var2,var3]);`
```javascript
function Animal (name,food) {
			this.name = name;
			this.food = food;
			this.say = function () {
				alert(this.name +"喜欢吃"+ this.food)
			}
		}
		function Dog (name,food){
			Animal.call(this,name,food)
		}

		var dog1 = new Dog ("dog","骨头")
		dog1.say()//dog 喜欢吃 骨头
```

### JavaScript关键词
- `a instanceOf b`,`isPrototypeOf()`变量是否是对象的实例
- `delete obj.name`只能删除对象属性,用法:直接后面加属性名称,`对方法,变量不起作用`
- 注意:`delect`不能删除原型链中的属性和变量
```javascript
function add(a,b){
	alert(a+b);
}
function subs(a,b){
	alert(a-b);
}
//add.call(subs,5,3); //8  subs-->add  ===>add(5,3)  subs只能引用一个存在的对象,apply同理
add.apply(subs,[5,3]);
```

- 可以把前面对象的方法,传递给后面对象用,调用后面对象的值
```javascript
function animal(){
	this.name = "ani";
	this.showName = function(){
		alert(this.name);
	}
}
function cat(){
	this.name = "cat";
}
var an = new animal();
var c = new cat();
//an.showName.call(c,","); // 通过call方法，将showName--》cat使用了
an.showName.apply(c,[]); //cat
```

- `apply`还有一个特性:apply会将一个数组转换为一个参数接一个参数的传递给方法
- `callee`返回正在执行的function对象,function 内容
- `arguments.callee` 默认值:正在执行的function对象
```javascript
实现在递归中
 var sun = function (){
	 if(n<=1){
		 return 1;
	 }else {
		 return n+arguments.callee(n-1); //在函数内部调用了本函数
	 }
 }
```
- `arguments` 每一个函数都有Arguments对象的实例arguments,引用函数的参数(实参)
- 可以用数组下标的方式引用arguments元素
- arguments表示参数可以遍历

- `this` 
1. 在普通函数中，通过this定义的变量是全局变量
2. this在构造函数表示当前对象
3. `call apply `中this指第一个参数

### 对象冒充
- 将父类的属性和方法一起传给子类,作为特权属性和特权方法;
- 不能继承共有属性和方法

## DOM操作
- 参考JavaScript!

## DOM事件
- 参考JavaScript!