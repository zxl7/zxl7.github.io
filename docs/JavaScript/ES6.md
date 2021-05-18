---
title: ES6
date: 2019-4-13 23:18:57
tags: ES6
categories: [学习笔记,ES6]
---
放码过来!
<!-- more-->


## let和const命令
### let
- 不存在变量的提升
- let声明的变量只有在当前块级作用域内有效
- let不允许在相同作用域内，重复声明同一个变量
- let和const声明的变量,不能被重新声明
- TDZ:暂时性死区--(使用let命令在声明变量之前，该变量都是不可用的,会报错)
- 不能在函数内部重复声明同一个参数，因为参数变量是默认声明的，所以不能用let或const再次声明;
```js
if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}
```

- 暂时性死区”也意味着typeof不再是一个百分之百安全的操作。
```js
typeof x; // ReferenceError
let x;

- 暂时性死区”也意味着typeof不再是一个百分之百安全的操作。
typeof x; // ReferenceError
let x;

//有些“死区”比较隐蔽，不太容易发现。
function bar(x = y, y = 2) {
  return [x, y];
}
bar(); // 报错
// 上面代码中，调用bar函数之所以报错（某些实现可能不报错）
// 是因为参数x默认值等于另一个参数y，而此时y还没有声明，属于“死区”。
// 如果y的默认值是x，就不会报错，因为此时x已经声明了。

function bar(x = 2, y = x) {
  return [x, y];
}
bar(); // [2, 2]

```
- 总之暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

### 块级作用域
- 外层代码块不受内层代码块的影响
- 允许块级作用域的任意嵌套,每一层都是一个单独的作用域,第四层作用域无法读取第五层作用域的内部变量
- 内层作用域可以定义外层作用域的同名变量
- 块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用


```js
//ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。
//第一种场景，内层变量可能会覆盖外层变量
const tmp = new Date();
function f() {
  console.log(tmp);
  if (false) {
    const tmp = 'hello world';
  }
}

f(); // undefined
//上面代码的原意是，if代码块的外部使用外层的tmp变量，内部使用内层的tmp变量。但是，函数f执行后，输出结果为undefined，原因在于变量提升，导致内层的tmp变量覆盖了外层的tmp变量。
//第二种场景，用来计数的循环变量泄露为全局变量。

const s = 'hello';

for (const i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5
上面代码中，变量i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。
```
- 应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
- ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域
```js
// 第一种写法，报错
if (true) let x = 1;
// 第二种写法，不报错
if (true) {
  let x = 1;
}
// 函数声明也是如此，严格模式下，函数只能声明在当前作用域的顶层。
// 不报错
'use strict';
if (true) {
  function f() {}
}

// 报错
'use strict';
if (true)
  function f() {}

```

### const
- const常量,不可更改(只读),声明必须赋值;
- const声明的对象指针不变,但是对象本身的值可以改变;
- 只在块级作用域起作用
- 声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
- 不可重复声明同一个变量
本质:
- const-实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址数据不变(指向对象,数组,函数,对象本身可以修改)
- object.freeze()冻结对象,让他完全不能修改
ES6之前声明方法:
- 不可改:`Object.defineProperty(sct,'BASE_NAME',{value:'小明',writable false})`--->1参数选择对象,2属性名,3描述;
- 不可拓展:`Object.seal()`

## 解构赋值
- 从数组和对象中提取值，对变量进行赋值，这被称为解构;

### 数组的解构赋值
- `const arr = [1, 2, 3];`
- `let [a, b, c] = arr;`
- 写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值
- 结构赋值可以嵌套的
```js
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3;

let [x, , y] = [1, 2, 3];
x // 1
y // 3;

如果解构不成功，变量的值就等于undefined
```

- 不完全解构, 赋值不成功，变量的值为undefined
```js
    const [a,b,c] = [1,2];
    console.log(a);//结果：a的值为1
    console.log(b);//结果：b的值为2
    console.log(c);//结果：c的值为undefined
```

#### 扩展运算符
- ...可以将多个数组合并为一个`const arr4 =[...arr1,...arr2,...arr3]`
- `...C表示`剩下的作为数组传给C,且扩展运算符必须放最后
- 如果没有值,则`Z`为空数组
```js
let [a, ...c] = [1, 2, 3, 4];
a // 1
c // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []
```

### 默认值
- 允许设定默认值`const [a,b,c=3] = [1,2]`
```js
let [foo = true] = [];
foo // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
// 注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
// 只有当一个数组成员严格等于undefined，默认值才会生效。
```
- 只有值为undefined,才会有默认值,如果一个数组成员是null，默认值就不会生效
- 默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值
- 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
```js
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined
```

### 对象的解构赋值
- 数组的元素是按次序排列的，变量的取值由它的位置决定；
- 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
- 如果变量找不到与其名字相同的属性，就会赋值不成功，如下面的例子：
```js
    const { a } = {"b":2};
    console.log(a);//a的值为undefined
```

- 对象解构赋值也可以嵌套
```js
    const {a:[b]} = {"a":{"bb":1}};
    console.log(b);//结果：b的值为1
```

- 可以指定默认值
- 默认值生效的条件是，对象的属性值严格等于undefined
```js
    const {a,b=2} = {"a":1};
    console.log(b);//结果：b的值为默认值2
```

- 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者
```js
let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };
```

- 解构也可以用于嵌套结构的对象
```js
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p: [x, { y }] } = obj;
x // "Hello"
y // "World"
```	

- 结合扩展运算符
```js
const obj1 ={
	sdas :'雷神',
	sdass:'占山'
}

const obj= {
	adasdas:'库',
	...obj
}
```

- 如何对已经声明的对象解构赋值
```js

let sdas;
const obj1 ={
	sdas :'雷神',
	sdass:'占山'
}
({sdas} = obj)
//let {sdas} = obj;

```

- 对象的默认值
```js
let {name, age = 24, hobby = ['学习']} = girlfriend;
```

- 使用对象传入乱序的函数参数
```js
function AJAX({
	url,
	data,
	type = 'get'
}){
	console.log(type)
}

AJAX({
	url:'/sdsd',
	data:{
		a:1
	}
})
```

- 获取多个 函数的返回值
```js
function getUserInfo(uid){
	//ajax
	return {
		status:true,
		data:{
			name:'xiaozhang'
		},
		msg:'ok!'
	};
};

const {status,data,msg:message} = getUserInfo(123)
```

### 字符串的解构赋值
- 字符串被转换成了一个类似数组的对象。
```js
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
```

- 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
```js
let {length : len} = 'hello';
len // 5
```

- 字符串分割
```js
const str = '爱仕达撒所多所大所!'

const [...spStr1] = str;
const spStr2 = str.split('');
const spStr3 = [...str]
```

- 提取属性
```
const[length,split] = str;
```

### 数值和布尔值的解构赋值

### 函数的解构赋值
```js
function swap([x,y]) {
	return [y,x]
}

let arr = [1,2]
arr = swap(arr)
```

### 圆括号
- 可以使用圆括号的情况
- 可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。
```js
[(b)] = [3]; // 正确
({ p: (d) } = {}); // 正确
[(parseInt.prop)] = [3]; // 正确
上面三行语句都可以正确执行，因为首先它们都是赋值语句，而不是声明语句；
其次它们的圆括号都不属于模式的一部分。

第一行语句中，模式是取数组的第一个成员，跟圆括号无关；
第二行语句中，模式是p，而不是d；
第三行语句与第一行语句的性质一致。
```

### 解构赋值的用途
1. 交换变量的值`[x,y] = [y,x]`

2. 提取函数返回的多个值
```js
   function demo(){
        return {"name":"张三","age":21}
    }
    const [a,b] = demo();
    console.log(a);//结果：张三
    console.log(b);//结果：21
```

3. 函数参数定义
```js
function demo({a,b,c}){}
demo({a:"张三",b:"1.72m",c:"50kg",d:"8000"})
很方便就能提取JSON对象中想要的参数，
例如案例中，我们只需要获取实参中的：a，b，c，而不需要关其他的参数
比如：d或者其他更多的参数
```

4. 函数参数的默认值
```js
    function demo({name="张三"}){
        console.log("姓名："+name);//结果：姓名：张三
    }
    demo({});
```

5. 提取 JSON 数据
- 解构赋值对提取 JSON 对象中的数据，尤其有用。
```js
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]
```
6. 遍历 Map 结构
7. 输入模块的指定方法
- 加载模块时，往往需要指定输入哪些方法。
- 解构赋值使得输入语句非常清晰`const { SourceMapConsumer, SourceNode } = require("source-map");`

## 模板字符串
- 插入变量把变量放入${ },可去除'+'操作符
```
'我叫'+this.name+',我今年'
`我叫${`Mr.${this.name}`}`

```
- 自动换行
- 可嵌套

### 可定义多行
```js
模板字符串的写法：
    let str = `write once ,
               run anywhere`;
```
- 直接换行即可，但是要注意的是：所有的空格和所进都会被保留在输出中。
- 如果控制台输出字符串str的话，代码上换了行，控制台输出的时候也会换行。

### javascript表达式
- ${ }中可以放任意的javascript表达式
- ${a+b}
- ${}中可以是对象的属性
- ${}中可以是函数的调用
- 模板字符串的大括号内部，就是执行 JavaScript 代码，因此如果大括号内部是一个字符串，将会原样输出。

### 标签模板
- 模板指的是上面讲的字符串模板，用反引号定义的字符串；
- 标签模板其实不是模板，而是函数调用的一种特殊形式。`标签`指的就是函数，紧跟在后面的模板字符串就是它的参数。
```js
const name = "张三";
    const height  = 1.8;

    tagFn`他叫${name},身高${height}米。`;
    //标签+模板字符串

    //定义一个函数，作为标签
    function tagFn(arr,v1,v2){
        console.log(arr); 
        //结果：[ "他叫","，身高","米。" ]
        console.log(v1); 
        //结果：张三
        console.log(v2); 
        //结果：1.8
    }
	
标签模板:
tagFn`他叫${name},身高${height}米。`;

```
- 未申明将报错!
- 如果需要引用模板字符串本身，在需要时执行，可以写成函数。
```js
let func = (name) => `Hello ${name}!`;
func('Jack') // "Hello Jack!"
```

### padStart 和 padEnd
- 字符串补全: 一个前补一个后补
```js
{
	let str = 'i';
	let str1 = str.padStart(5,'moce');
	str1;	//mocei--mocemocei9位
}
```

### repeat()函数
- 将目标字符串重复N次，返回一个新的字符串，不影响目标字符串
- 不能为负,小数向上取整
```js
const name1 = "i";  //目标字符串
    const name2 =  name1.repeat(3);
    //变量name1被重复三次；
    console.log(name1); 
    //结果：i
    console.log(name2);
    //结果：iii
```

- 方法重写
```
function repeat(str,num) {
	return new Array(num+1).join(str)
}
```

### includes函数
- 判断字符串中是否含有指定的子字符串，返回true表示含有和false表示未含有。
- 第二个参数选填，表示开始搜索的位置。
```
    const name = "前端君";			//目标字符串
    name.includes('君');		//true, 含有
    name.includes('web');		//false, 不含有
    name.includes('前',1);		//false, 从第2个字符开始搜索, 不含有

```

### startsWith函数
- 判断指定的子字符串是否出现在目标字符串的开头位置
- 第二个参数选填，表示开始搜索的位置
```js
const name = "前端君";				//目标字符串
    name.startsWith('前');		//true，出现在开头位置
    name.startsWith('端');		//false，不是在开头位置
    name.startsWith('端',1);	//true，从第2个字符开始
	
	//若要从第一个字符开始搜索，参数应该为0或者为空（默认从第一个字符开始搜索）。
```

### endsWith函数
- 判断子字符串是否出现在目标字符串的尾部位置
- 第二个参数选填，表示针对前N个字符
```js
const name = "我就是前端君"		//目标字符串
    name.endsWith('我');		//false，不在尾部位置
    name.endsWith('君'); 		//true，在尾部位置
    name.endsWith('君',5); 		//false，只针对前5个字符
    name.endsWith('君',6);		//true，针对前6个字符
```

### codePointAt函数
- codePointAt()方法可以正确地识别出它是个4个字节的字符，并且能正确地返回它的码点的十进制数

### String.fromCodePoint函数
- 函数的参数是一个字符对应的码点，返回的结果就是对应的字符，哪怕这个字符是一个4字节的字符，也能正确实现。
    
### String.raw函数
- 返回字符串最原始的样貌，即使字符串中含有转义符，它都视而不见，直接输出


### Unicode编码
- codePointAt 获取字符串中对应字符的一个码点
- at 根据下标取字符(不支持at)


## 数值扩展
### 新的进制表示法
- 0o 0O `octonary` 八进制
- 0b 0B `binary` 二进制

### Number.parseInt函数
- 解析一个字符串，返回一个整数
- 对象移植,作用无变化

### Number.isNaN函数
- 用于判断传入的是否是非数值，注意：是判断非数值，而不是判断数值
- IsNaN的全称是： is not a number
- 传统的isNaN函数会把非数值的参数转化成数值再进行判断，
- Number. isNaN`只对数值类型`有效，非数值类型的参数一律返回false
```javascript
function isNaN (value) {
	return value !== value;
} 
```

### Number.isFinite函数
- 用来检查一个数值是否有限。注意是判断有限，不是判断无限
```js
  Number.isFinite(1);
    //结果：true，数值1是有穷，即有限
    Number.isFinite(Infinity);
    //结果：false，Infinity表示无限大的特殊值
    Number.isFinite('abc'); //结果：false
```
- isFinite函数跟isNaN函数一样，也只是对数值类型有效，对非数值类型的参数一律返回false

### Number.parseFloat函数
- 解析一个字符串，并返回一个浮点数
- 对象移植,作用无变化
```
   //传统用法：
    parseInt('12.3abc');
    //结果：返回数值12

    //ES6用法：
    Number.parseInt('12.3abc');
    //结果：返回数值12
```

### Number.isSafeInteger
- Number.MAX.SATE_INTEGER
- Number.MIN.SATE_INTEGER
- 2的(53次方-1)----负2的(53次方-1)

### Number.isInteger函数
- 用来判断是否是整数
- javascript内部对整数和浮点数采用一样的存储方式，数值3.0和3.00都会被认为是整数

### 极小常量  
- Number.EPSILON常量：定义一个极小的数值

### Math
- Math.trunc函数:用于去除一个数的小数部分，返回整数部分
- Math.sign函数:用来判断一个数到底是正数、负数、还是零
- Math.cbrt函数：用于计算一个数的立方根。



## 数组扩展
### Array.from()函数
- 将类似数组的对象或者可遍历的对象转换成真正的数组
- Array.from函数其中一个用处就是将字符串转换成数组

### Array.of()函数
- 将一组值转化为数组
```js
Array.of(1,2,3,4,5)
//结果:[1,2,3,4,5]
```

### includes()
- 判断函数中是否存在某一项 
`arr.includes()`

### find()函数
- 找出数组中符合条件的第一个元素,符合则返回值,反之返回undefind
```js
 let arr = [1,2,3,4,5,6];
    arr.find((value) => return value > 2 )	//结果：value=3
```

### findIndex()函数
- 返回符合条件的第一个数组的下标
```js
let arr = [7,8,9,10];
     arr.findIndex((value)=> return value > 8 )		//结果：2
```
- 倘若所有元素都不符合匿名函数的条件，findIndex()函数就会返回-1

### fill()函数
- 用指定的值，填充到数组，一般用于默认值
```js 
let arr = [1,2,3];
    arr.fill(4);	//结果：[4,4,4]		全部覆盖
	
	//填充部分
    let arr = [1,2,3];
    arr.fill(4,1,3);	//结果：[1,4,4]		后两个参数指定范围
```

### entries()函数
- 对数组的下标和值进行遍历，返回一个遍历器，可以用for..of对其进行遍历
```js
for(let [i,v] of ['a', 'b'].entries())
    {
        console.log(i,v);
    }
    //0 "a"
    //1 "b"
```

### keys()函数
- 函数作用：对数组的下标进行遍历，返回一个迭代器
```js
for(let index of ['a', 'b'].keys())
    {
        console.log(index);
    }
    //0
    //1
```

### values()函数
- 作用：对数组的每一项进行遍历，返回一个迭代器。
```js
for(let value of ['a', 'b'].values())
    {
        console.log(value);
    }
    //a
    //b
```

### 数组推导(浏览器不兼容)
- 用简洁的写法，直接通过现有的数组生成新数组
```js
 const arr1 = [1, 2, 3, 4];
    const arr2 = [for(i of arr1) i * 2];
    console.log(arr2);
    //结果： [ 2, 4, 6, 8 ]
 
```

- 在数组推导中，for..of后面还可以加上if语句，我们看来看看代码案例：
```js
    const array1 = [1, 2, 3, 4];
    const array2 = [for(i of array1)  if(i>3) i];
    console.log(array2);
    //结果： [4]
	// 在上面代码中，我们不再是对数组的元素乘以2，而是用if做了个判断：数组的元素要大于3。所以运行的结果是：[ 4 ]。
 ```


## 对象扩展
### 对象简写
```js
 const name = "Zhangsan";
 const age = 12;

    //传统的属性写法
    const person = {
        "name":name,
        "age":age
    };
    console.log(person);	//结果：{name: "Zhangsan", age: 12}

    //ES6的属性写法
    const person = {name,age};
    console.log(person);	//结果：{name: "Zhangsan", age: 12}
```

- 对象的属性可以这样简写，那么对象的方法如下:
```js
 //传统的表示法
    const person = {
        say:function(){
            alert('这是传统的表示法');
        }
    };

    //ES6的表示法
    const person = {
        say(){
            alert('这是ES6的表示法');
        }
    };
```

- 属性名可以是表达式，用`[]`访问

### 对象复制
```js
//浅拷贝,复制的是对象的引用
const obj1 = {
	a:1,
	b:2
}
//扩展运算符方法	
const cObj1  = {...obj1}
```

### 合并对象
```js
//浅拷贝,合并的也是对象的引用
const newObj = {
	...obj1,
	...obj2
}
```

### Object.is()函数
- 函数的作用：比较两个值是否严格相等，或者说全等
- 和全等的细微区别如下：
```js
console.log(Object.is(+0,-0))		//false
console.log(+0 === -0)				//turn
console.log(Object.is(NaN,NaN))		//turn
console.log(NaN === NaN)			//false
```

### Object.assign()
- 函数作用：将源对象的属性赋值到目标对象上
```js
    let target = {"a":1};			//这个充当目标对象
    let origin = {"b":2,"c":3};		//这个充当源对象
    Object.assign(target,origin);
    console.log(target);	//结果 {a: 1, b: 2, c: 3}

	const obj = Object.assign({a:1},{b:2},{c:3})
	console.log(obj)	//属性都被合并到obj上
```
- 浅拷贝
- 对象的属性出现了相同的名字，后面的属性值就会覆盖前面的属性值
- (给对象添加属性和方法，克隆对象，合并多个对象，为对象的属性指定默认值)

### Object.keys()
- 返回自身所有可枚举属性的keys组成的数组（属性名）

### Object.values()
- 返回自身所有可枚举属性的values组成的数组（属性值）

### Object.entries()
- 返回每队key，value组成数组的数组

### __proto__
- 对象的原型

### Object.getPrototypeOf()
- 函数作用：获取一个对象的prototype属性,也可以修改原型
```js
 //自定义一个Person类（函数）
    function Person(){
    }
    //函数都有一个预属性prototype对象
    Person.prototype = {
        //给prototype对象添加一个say方法
        say(){
            console.log('hello');
        }
    };

	//实例化Person对象，赋值给变量allen
    let allen = new Person();//调用类的say方法
    allen.say();//结果：打印出hello
	
	//获取allen对象的prototype属性
    Object.getPrototypeOf(allen);//结果：打印{say:function(){.....}}

//修改
const obj = Object.create(obj1)；
console.log(obj.__proto__)		//`obj1
Object.setPrototypeOf(obj,obj2)
console.log(obj.__proto__)		//obj2
```

### Object.getPrototypeOf()函数
- 函数作用：读取一个对象的prototype属性
```js
  //自定义一个Person类（函数）
    function Person(){}
    //函数都有一个预属性prototype对象
    Person.prototype = {
        //给prototype对象添加一个say方法
        say(){
            console.log('hello');
        }
    };

    //实例化Person对象，赋值给变量allen
    let allen = new Person();
    //调用类的say方法
    allen.say();		//结果：打印出hello

    //使用Object.setPrototypeOf
    Object.setPrototypeOf(
            allen,
            {say(){console.log('hi')}
    });
    //再次调用类的say方法
    allen.say();		//结果：打印出hi
```

### super
- 可以拿到原型对象上的属性
- 只有用对象的简写方式才可以用super
eg：
```js
const obj = {name :'xiaoming'}

const cObj = {
	say {
		console.log('my name is ${super.name}');
	}
}

Object.setPrototypeOf(cObj,obj)
cObj.say()		// xiaoming
```


### 面向对象思想
- 面向对象编程有几个关键步骤：
- 1、构造函数；
- 2、给prototype对象添加属性和方法；
- 3、实例化；
- 4、通过实例化后的对象调用类的方法或者属性

## 函数扩展
### 参数的默认值
```js
 function person(name = 'Zhangsan',age = 25){
       console.log(name,age);
    }    
    person();//结果：Zhangsan  25
    person('Lisi',18);//结果：Lisi  18
```
- 设定默认值的参数一定要放在最后
- 只有当传入的参数为undefined，才会触发默认值赋值，否则，哪怕你传的参数值为0，false，null都不会触发默认值赋值
- 函数的参数是默认声明的，声明过的变量，就不能用let或者const关键字再次声明，
- 否则会报错的，不信给你看一个案例：

```js
function person(age = 12){
        let age = 25;//错误，再次声明age
    }
```


### 扩展运算符(剩余参数)
- 结合数组使用，把数组的元素用逗号分隔开来，组成一个序列
```js
[1,2,...[1,2,3]]扩展运算
```

- 实际开发中,它可以将一个数组转成一个对应的参数数列
```js
function sum(...nums) {
	return number.reduce(function (a,b) {
		return  a+b ;
	},0)
  }
  console.log(sun(1,2,3,4,5))
实际上，sum( ...nums) 的效果相当于sum[1,2,3,4,5]
```

- 更好的解释(剩余参数),剩余参数必须是最后一个参数
```js
//聚合作用,剩余参数,参数聚合为数组
function sum(...args) {
	//let args = Array.prototype.slice.call(arguments);
	//let args = [...arguments]
	//let [...args] = arguments
	
	console.log(args)
}

sums(12,23,3454,4545)
```


## 箭头函数
- 一种全新的定义函数的方式，就是用箭头符号`=>`，故得名为箭头函数
- `function fn(a,b) {}-------(a,b)=>{}`
- 箭头函数中的this指向的是定义时的this，而不是执行时的this
```js
// 当只有一个参数时，圆括号是可选的：
(单一参数) => {函数声明}
单一参数 => {函数声明}

// 没有参数的函数应该写成一对圆括号。
() => {函数声明}

 //传统写法
    const sum = function(a) {
       return  a ;
    };
    
//箭头函数写法
    const sum = a => a;
```
- 第一个a代表是传进去的参数，箭头=>后面的a表示函数体
- 如果传入的参数不止一个，或者函数体不是简单的返回a，需要做一些其他的运算，含有多条语句的话，怎么办？
```js
//箭头函数写法
    const sum = (a,b) => {
		return a+b
		}
    sum(1,2);//结果：3
```
- 如果参数超过1个的话，需要用小括号（）括起来
- 函数体语句超过1条的时候，需要用大括号{ }括起来

- 假设我们现在要对一个数组 [ 1,2,3,4 ] 里面的数求和，我们分别用传统的方式和箭头函数都实现一次，大家看看差别：
```js
//传统的写法
const sum = 0;
[1,2,3,4].forEach(function(v){
	sum += v;
});

//箭头函数的写法
const sum = 0;
[1,2,3,4].forEach(v => sum+=v);
```

```js
编写匿名函数
const myFunc = () => {
  const myVar = "value";
  return myVar;
}

//和一般的函数一样，你也可以给箭头函数传递参数。
// 给传入的数值乘以 2 并返回结果
const doubler = (item) => item * 2;

//多行可以取消返回
const doubler = (item) => {
	item * 2;
	}
//或者加void:结果不返回或者返回undefind
const doubler = (item) => void item * 2;
```

- 这些函数表达式更适用于那些本来需要匿名函数的地方，并且它们不能用作构造函数
- 箭头函数表达式的语法比函数表达式更短，并且没有自己的`this，arguments(...arr)，super`(super关键字用于访问和调用一个对象的父对象上的函数)
- 箭头函数不能用作构造器，和 new一起用会抛出错误
- 箭头函数没有prototype属性
- 箭头函数在参数和箭头之间不能换行
- 不能使用 delete 操作符 加 super.prop 或者 super[expr] 去删除父类的属性，这样做会抛出 ReferenceError
- 在构造函数中使用时，super关键字将单独出现，并且必须在使用this关键字之前使用。
- super关键字也可以用来调用父对象上的函数
- new.target(es6的类方法中，在调用时候，使用new，new.target指向类本身，没有使用new就是undefined)

### 通过 call 或 apply 调用
- 由于 箭头函数没有自己的this指针，通过 call() 或 apply()
- 方法调用一个函数时，只能传递参数（不能绑定this---译者注），他们的第一个参数会被忽略。（这种现象对于bind方法同样成立---译者注）
- ES6 里允许给函数传入默认参数，来构建更加灵活的函数。

### 不绑定arguments
- 箭头函数不绑定Arguments 对象。因此，在本示例中，arguments只是引用了封闭作用域内的arguments：
``` stylus
function greeting(name = "Anonymous") {
  return "Hello " + name;
}
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```


### rest
- 在rest操作符的帮助下，你可以创建有一个变量来接受多个参数的函数。这些参数被储存在一个可以在函数内部读取的数组中。
``` es6
const arr = [6, 89, 3, 45];
const maximus = Math.max.apply(null, arr); // 返回 89

ES6:
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // 返回 89
```

- 就代表是获取函数剩下部分的参数
- 在实参中，除了第一个参数以外，剩余的参数都会被...values获取到
- 将一组数字进行求和，然后把求和的结果赋值到一个变量去，我们用rest参数实现：
```js
//求和函数，得到的结果赋值到result
    function sum(result,...values){
        //打印values看看是什么
     console.log(values);
        //结果：[1,2,3,4]

        //进行求和
     values.forEach(function (v,i) {
            //求和得到的结果存到result
            result += v;
        });
        //打印出求和的结果看看
     console.log(result);
        //结果：10
    }

    //存储求和结果的变量res
    const res = 0;
    //调用sum函数
    sum(res,1,2,3,4);

```

- 案例主要是介绍了rest参数的用法，首先是表示法：`...values`（三个点+变量名）
- 其次，values是一个数组；
- rest参数必须是函数的最后一个参数，后面不能再跟其他参数;特定情况下rest更好用!
```
//错误写法
    function sum(result, ...values, mult){
        //rest参数...values后面还有一个参数mult
    }
    //正确的写法
    function sum(result, mult, ...values){
        //rest参数...values放在最后
    }
```

- rest参数只能写在最后，前面用...标识，从运行结果可知，传入的参数先绑定a、b，多余的参数以数组形式交给变量rest，所以，不再需要arguments我们就获取了全部参数
``` javascript
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}
foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo(1);
// 结果:
// a = 1
// b = undefined
// Array []
```
- 如果传入的参数连正常定义的参数都没填满，也不要紧，rest参数会接收一个空数组（注意不是undefined）。

- 因为rest参数是ES6新标准，所以你需要测试一下浏览器是否支持。请用rest参数编写一个sum()函数，接收任意个参数并返回它们的和：
``` es6
'use strict';
function sum(...rest) {
   let result = 0;
   for(let i = 0;i
        result += rest[i];
   }
}

// 测试:
var i, args = [];
for (i=1; i<=100; i++) {
    args.push(i);
}
if (sum() !== 0) {
    console.log('测试失败: sum() = ' + sum());
} else if (sum(1) !== 1) {
    console.log('测试失败: sum(1) = ' + sum(1));
} else if (sum(2, 3) !== 5) {
    console.log('测试失败: sum(2, 3) = ' + sum(2, 3));
} else if (sum.apply(null, args) !== 5050) {
    console.log('测试失败: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
} else {
    console.log('测试通过!');
}
```

## Promise
- Promise对象用于表示一个异步操作的最终状态（成功或者失败）以及其返回值
```js
function  f() {
	return new Promise(resolve => {
		setTimeout(function() {
			resolve();
		}, 1000)
	})
}

f()
.then(function(){
	console.log(1);
	return f()
})

.then(function(){
	console.log(2);
	return f()
})
```
- 安全可靠，确定成功或者失败后，就不再被更改
- `.then(resolve,reject)`第一个参数成功要做的事，第二个参数失败要做的事
```js
function f(val) {
	return new Promise ((resolve,reject) => {
		if(val){
			resolve();
		}else {
			reject()
	})
}

f(false)
.then(() => {
	console('成功！')
},() =>{
	console.log('失败！')
})

```

### 同步？异步？
- 同步会阻塞程序执行（alert，for）
- 异步任务不会阻塞程序执行（setTimeout.fsreadFile）

### promise的错误处理
- 使用实例的·catch·方法，可以捕获错误；
```js
f(true) 
.then (data => {
	console.log(1);
	return f(false)
})

.then(())//没有第二个参数对错误进行处理，就会执行catch
.catch (e => {
	console.log('执行catch');
	return f()
	...
	});
```

- `finally`		不论promise对错都会执行；
```js
.finally(() => {
	console.log(100);
})
```

### Promise的状态
- pendeing--进行中，fulfilled--成功，rejected--失败
- 状态的决议一旦确定，不可逆，切不可修改

### Promise.all方法
- Promise.all([promise1,promise2] : Promise)
1. 数组中的promise实例都成功，Promise.all则返回成功，并且把promise实例`.then`的参数组合成数组传递回来；顺序一一对应
2. 任意一个失败，则失败，并把失败的实例的错误传递回来，
3. 空数组表示为成功；

### Promise.race方法
- Promise.race([promise1,promise2]) :Pomise











## Symbol
- 标志，记号:解决对象的属性名冲突
```
  怎样判断是它是独一无二的值呢？我们来看看：
    let sm1 = Symbol();
    let sm2 = Symbol();

    sm1 === sm2 //结果：false

    console.log(sm1);//结果：Symbol()
    console.log(sm2);//结果：Symbol()
```
- 可以用参数进而区别:
```
let sm1 = Symbol('sm1');
    let sm2 = Symbol('sm2');

    console.log(sm1);
    //结果：Symbol(sm1)

    console.log(sm2);
    //结果：Symbol(sm2)
```
- 即使参数一样，描述一样，得到的两个值也是不相等的
- 当symbol值作为对象的属性名的时候，不能用点运算符获取对应的值。
```
    let name = Symbol();
    let person = {
        [name]:"张三"
    };
    console.log(person[name]);
    //结果：张三

    console.log(person.name);
    //结果：undefined
```


```
//要注意，把一个symbol类型的值作为对象的属性名的时候，一定要用中括号[ ]，不能用点运算符，
//因为用点运算符的话，会导致javascript把后面的属性名为理解为一个字符串类型，而不是symbol类型。具体看代码：

    let name = Symbol();
    let person = {};

    person.name = "张三";

    person[name];   //结果：undefined
    person['name']; //结果：张三
    person.name;    //结果：张三```
//变量name是symbol，但是给person对象设置属性的时候，
//用的是点运算符person.name，而不是中括号person[ name ]，这会有什么后果呢？
//导致person对象中的属性name实际上是字符串类型的
```
-  person[ name ]这句代码相当于要求javascript去person对象内找一个symbol类型的属性name，
-  不好意思，没有，找不到。person对象只有一个字符串类型的属性name；
-  所以，如果用person[‘name’]或者peroson.name获取的话，就能找到对应的属性name了。

### 属性名的遍历
- 当symbol类型的值作为属性名的时候，该属性是不会出现在for...in和for...of中的，也不会被Object.keys()获取到
```
//定义一个symbol类型的变量name
    let name = Symbol();

    //定义一个含有两种类型属性的对象
    let person = {
        [name]:"张三",  //symbol类型
        "age":12        //string类型
    };

    Object.keys(person);//结果：["age"]

	for(let key in person){
		console.log(key);
	}
    //打印结果：age
```

### getOwnPropertySymbols()函数
- 它会找到symbol类型的属性并且返回一个数组，数组的成员就是symbol类型的属性值
```
//定义两个symbol类型的变量name，age
    let name = Symbol("name");
    let age = Symbol("age");

    let person = {
        [name]:"张三", //symbol类型
        [age]:12       //symbol类型
    };

    Object.getOwnPropertySymbols(person);


    //结果：[Symbol(name), Symbol(age)]
//	用getOwnPropertySymbols()方法来，结果成功了，得到一个数组，
//	数组的内容就是两个symbol类型变量对应的值Symbol(name)和 Symbol(age)。
 
```

### Reflect.ownKeys()函数
- 同时获取字符串类型的属性和获取symbol类型的属性
```
//定义一个对象，含有两种类型的属性
    let person = {
        [Symbol('name')]:"张三",
        "age": 21
    };

    Reflect.ownKeys(person);
    //结果：["age",Symbol(name)]
```

### Symbol.for()函数
- 函数作用：按参数名，去全局环境中搜索是否有该参数为名的symbol值，有就返回它，没有就按参数名来创建一个新的symbol值
```
let n1 = Symbol.for('name');
    let n2 = Symbol.for('name');
    console.log(n1 === n2);
    //结果：true
```

- Symbol.for()创建的symbol值会被登记在全局环境中，供以后用Symbol.for()来搜索，
- Symbol()创建的变量就没有这样的效果
```
let n1 = Symbol('name');
    let n2 = Symbol.for('name');
    console.log(n1 === n2);
    //结果：false
```

### Symbol.keyFor()函数
- 函数作用：返回一个以`被登记在全局环境中`的symbol值的key，没有就返回undefined
- 注意关键词：`被登记在全局环境中`，也就是说这个symbol值是被Symbol.for()创建，不是被Symbol()创建
```
let n1 = Symbol.for('name');
    Symbol.KeyFor(n1);
    //结果：name
//	变量n1是被Symbol.for()创建，不是被Symbol()创建的，
//	所以用Symbol.keyFor()去找，是能找到的，会返回这个symbol值的key，也就是它的描述：name。
```

- 我们再对上面的案例稍做修改：
```    
    let n1 = Symbol('name');
    Symbol.KeyFor(n1);
    //结果：undefined
```
- 这段代码的变量n1是用Symbol()创建的，最后的结果是undefined；这就证明了两个知识点：
- 1、Symbol()创建symbol值不会被登记在全局环境中供Symbol.for()和Symbol.keyFor()搜索；
- 2、Symbol.keyFor()函数在全局环境中找不到对应的symbol，就回返回undefined。

## ES6 Proxy代理
- 将一个对象交给了Proxy代理，然后通过编写处理函数，来拦截目标对象的操作
```
//定义一个对象person
    const person = {"name":"张三"};

    //创建一个代理对象pro，代理person的读写操作
    const pro = new Proxy(person,{
        get:function(target,property){
            return "李四"
        }
    });

    pro.name;//李四

```

### set方法
- set方法，它用于拦截对对象的写操作
- get方法拦截了读取操作，set方法拦截了改写操作
```
   //定义一个对象，含有RMB和dollar属性值
    const bankAccount = {"RMB":1000,"dollar":0};
    //创建一个Proxy代理实例
    const banker = new Proxy(bankAccount,{
        //编写get处理程序
        get:function(target, property){
            //判断余额是否大于0
            if(target[property] > 0){
                //有余额，就返回余额值
                return target[property];
            }else{
                //没钱了
                return "余额不足";
            }    
        },
        //编写set处理程序
        set:function(target,property,value){
            //存入的数额必须是一个数字类型
            if(!Number.isInteger(value)){
                return "请设置正确的数值";
            }
            //修改属性的值
            target[property] = value;
        }
    });

    banker.RMB;
    //结果：1000
    banker.dollar;
    //结果：余额不足

    //修改dollar属性的值，值是字符串类型
    banker.dollar = "五百";
    banker.dollar;
    //结果：余额不足

    //修改dollar属性的值，值是数字类型
    banker.dollar = 500;
    banker.dollar;
    //结果：500
```

### ownKeys()方法
- ownKeys拦截操作，拦截过滤Object.ownKeys()对对象的属性遍历。
```
    //定义一个对象person，有三个属性
    let person = {"name":"老王","age":40,"height":1.8};
    //创建一个代理对象
    let proxy = new Proxy(person,{
        //ownKeys过滤对对象的属性遍历
      ownKeys:function(target){
            return ["name","age"]
        }
    });

    Object.keys(person);
    //结果：["name", "age","height"]
    Object.keys(proxy);
    //结果：["name", "age"]

//	Object.keys(proxy) 这句代码遍历的是被代理的proxy对象，
//	所以，得到的只是被过滤后的结果：[“name”,”age”]
```

### has()方法
- 拦截key in object的操作，结果会返回一个布尔值。
- has()方法用于是判断是否含有指定的键值对，有，就返回true。否则返回false
- apply()方法:如果被代理的变量是一个函数，那么还会支持一个拦截程序：apply调用


```
    //创建一个函数fn
    let fn = function(){
        alert('我是前端君');
    };
    //创建一个代理实例，代理函数fn
    let proxy = new Proxy(fn,{
        apply:function(){
            alert('我是隔壁老王');
        }
    });

    proxy();//结果：我是隔壁老王
	proxy本身是一个代理实例对象，因为它代理的是一个函数fn，
	所以可以直接用函数的形式调用proxy()；当它当作函数调用的时候，就会被apply拦截，
	执行alert('我是隔壁老王')。
```

### Proxy.revocable()取消代理
- 如果创建了代理之后又想取消代理的话，我们可以用Proxy.revocable()函数来实现，
- 它会返回一个对象，对象中含有一个proxy属性，它就是Proxy的代理实例对象；还有一个revoke属性

## for...of
- 可遍历的对象包括数组，对象，字符串，set和map结构等具有iterator 接口的数据结构
```
 const arr = [1,2,3,4,5];
    for(let value of arr){
        console.log(value);
    }
    //打印结果：依次输出：1 2 3 4 5
```

- 写法比for循环简洁很多；
- 可以用break来终止整个循环，或者continute来跳出当前循环，继续后面的循环；
- 结合keys()获取到循环的索引，并且是数字类型，而不是字符串类型。

### 循环可以终止
```
    const arr = [1,2,3,4,5];
    for(let value of arr){
        if(value == 3){
            //终止整个循环
            break;
        }
        console.log(value);
    }
    //打印结果：1 2
	```

### 可跳过当前循环
```
	const arr = [1,2,3,4,5];
    for(let value of arr){
        if(value == 3){
            //跳过当前循环，继续后面的循环
            continue;
        }
        console.log(value);
    }
    //打印结果：1 2 4  5
```

### 得到数字类型的索引
```
	const arr = [1,2,3,4,5];
    for(let index of arr.keys()){
        console.log(index);
    }
    //打印结果：依次输出:0 1 2 3 4
```

### 遍历字符串
- for...of 支持字符串的遍历。
```
    let word = "我是前端君";
    for(let w of word){
        console.log(w);
    }
    //打印结果：我  是  前  端  君
```

### 遍历DOM List
- for...of支持类数组的遍历，例如DOM List
```
    <p>1</p>
    <p>2</p>
    <p>3</p>
    //假设有3个p元素
    let pList = document.getElementsByTagName('p');

    for(let p of pList){
        console.log(p);
    }
    // 打印结果：<p>1</p>
    //          <p>2</p>
    //          <p>3</p>

```

## lterator遍历器
- 拥有一个叫`[Symbol.iterator]()`方法的数据结构，就可以被for...of遍历，称之为：可遍历对象
```
//数组
    Array.prototype[Symbol.iterator];
    //结果：function values(){...}

    //字符串
    String.prototype[Symbol.iterator];
    //结果：function [Symbol.iterator](){...}

    //Set结构
    Set.prototype[Symbol.iterator];
    //结果：function values(){...}

    //Map结构
    Map.prototype[Symbol.iterator];
    //结果：function entries(){...}

    //Object对象
    Object.prototype[Symbol.iterator];
    //结果：undefined
```
- 注意：Symbol.iterator 是Symbol 对象的 iterator 属性，是一个特殊的Symbol值，
- 因此，当它作为prototype对象属性名的时候，获取它的时候需要
- 使用[]的形式: `prototype[Symbol.iterator]`，不能使用点形式获取：`prototype.Symbol.iterator`

### Iterator遍历器的原理next()
```
//数组：一个可遍历对象
    let arr = ['a','b','c'];
    //调用数组的Symbol.iterator()方法
    let iter = arr[Symbol.iterator]();


    iter.next();
    //结果：{value: "a", done: false}

    iter.next();
    //结果：{value: "b", done: false}

    iter.next();
    //结果：{value: "c", done: false}

    iter.next();
    //结果：{value: undefined, done: true}
	
	第3次调用next()方法：返回数组的第3个元素：“c”,以及done的值依然为fasle，表示循环没有结束，继续遍历。
	第4次调用next()方法：返回的value值为undefined，以及done的值变成了true，表示遍历结束。
```
- for...of的原理就是：先调用可遍历对象的[Symbol.iterator]()方法，得到一个iterator遍历器对象，
- 然后就在遍历器上不断调用next()方法，直到done的值为true的时候，就表示遍历完成结束了

### 自定义Iterator遍历器
```
//定义一个的Object对象
    let obj = {
        0:"我是0",
        1:"我是1",
        2:"我是2",
        length:3,
        //添加[Symbol.iterator]方法
        [Symbol.iterator] : function() {
            let _this = this;
            let index = 0;
            return {
                next:() => {
                    let value = _this[index];
                    let done = (index >= _this.length);
                    index++;
                    return {value,done}
                }
            }
        }
    };

    //咱们来for...of一下
    for(let v of obj){
        console.log(v);
    }
    //结果："我是0"
    //      "我是1"
    //      "我是2"
```

### Iterator遍历器的价值 
- 新特性for...of之所以能够遍历各种不同的数据结构，正是因为这个数据结构都实现了Iterator遍历器接口，
- 供for...of遍历。如果没有实现Iterator接口，则该数据结构无法被for...of遍历，比如：普通的Object对象

## Generator函数
### 声明Generator函数
- Generator函数，又称生成器函数
```
 //声明一个Hello的Generator函数
    function* Hello(name) {
        yield `hello ${name}`;
        yield `how are you`;
        yield `bye`;
    }
```
- 普通函数用function来声明，Generator函数用function*声明
- Generator函数内部有新的关键字：yield，普通函数没有

### 调用Generator函数

```
 //声明一个Hello的Generator函数
    function* Hello(name) {
        yield `hello ${name}`;
        yield `how are you`;
        yield `bye`;
    }

    //调用Hello函数
    let ite = Hello('前端君');
    //结果：[object Generator]

    ite.next();
    //{value: "hello 前端君", done: false}

    ite.next();
    //{value: "how are you", done: false}

    ite.next();
    //{value: "bye", done: false}

    ite.next();
    //{value: undefined, done: true}

```
- Generator函数被调用后得到的生成器理解成一个遍历器iterator，用于遍历函数内部的状态

### enerator函数的行为
- Generator函数被调用后并不会一直执行到最后，
- 它是先回返回一个生成器对象，然后hold住不动，等到生成器对象的next()方法被调用后，
- 函数才会继续执行，直到遇到关键字yield后，又会停止执行，并返回一个Object对象，
- 然后继续等待，直到next()再一次被调用的时候，才会继续接着往下执行，直到done的值为true。

### yield语句的作用
- 而yield在这里就相当于暂停执行并且返回信息
- 有点像传统函数的return的作用，但不同的是普通函数只能return一次，
- 但是Generator函数可以有很多个yield。而return代表的是终止执行，yield代表的是暂停执行，
- 后续通过调用生成器的next()方法，可以恢复执行。

### next()方法接收参数
- next()方法还可以接受一个参数，它的参数会作为上一个yield的返回值
```
    //声明一个Hello的Generator函数
    function* Hello() {
        let res = yield `hello`;
        yield res;
    }
    
    let iterator = Hello();
    //结果：一个生成器对象

    iterator.next();
    //结果：{value: "hello", done: false}

    iterator.next("前端君");
    //结果：{value: "前端君", done: false}
```
- next()的参数会作为上一个yield的返回值

### 关键字yield*
- 在Generator函数里面，想调用另一个Generator函数，需要关键字：yield*。
```

    //声明Generator函数：gen1   
    function* gen1() {
        yield "gen1 start";
        yield "gen1 end";
    }

    //声明Generator函数：gen2
    function* gen2() {
        yield "gen2 start";
        yield "gen2 end";
    }

    //声明Generator函数：start
    function* start() {
        yield "start";
        yield* gen1();
        yield* gen2();
        yield "end";
    }

    //调用start函数
    const ite = start();
    //创建一个生成器
    
    ite.next();
    //{value: "start", done: false}

    ite.next();
    //{value: "gen1 start", done: false}

    ite.next();
    //{value: "gen1 end", done: false}

    ite.next();
    //{value: "gen2 start", done: false}

    ite.next();
    //{value: "gen2 end", done: false}

    ite.next();
    //{value: "end", done: false}
```

- Generator函数A执行过程中，进入（调用）了另一个Generator函数B，
- 那么会一直等到Generator函数B全部执行完毕后，才会返回Generator函数A继续执行。

### Generator函数的用途
- Generator函数来实现异步操作的效果:
- 用Generator函数暂停执行的作用，可以将异步操作的语句写到yield后面，通过执行next方法进行回调。

## Set结构
- 理解为值的集合,它的值不会有重复项

### 基本用法
```
const s = new Set([1,2,3]);
    console.log(s);
    //打印结果：Set {1, 2, 3}

```

- 不想用数组作为参数来传值初始化变量s，可以通过Set 结构提供的add方法来添加方法

### 成员值唯一
- 为Set 结构添加成员值的时候，要注意set结构的成员值是没有重复的，每个值都是唯一的
```
const s = new Set();
    s.add(1);
    s.add(1);
    console.log(s);
    //打印结果： Set {1}
	//很明显，set结构会自动忽略相同的值，只会保留一个相同的值。
```

### size属性
- size属性：获取成员的个数
```
    let s = new Set([1,2,3,4]);
    s.size; //结果：4
	```

### delete()方法
- delete()方法：用户删除Set结构中的`指定值`，删除成功返回：true，删除失败返回：fasle。

```
    //用数组作为参数初始化
    const s = new Set([1,2,3]);
    console.log(s);
    //打印结果：Set {1, 2, 3}

    //使用delete方法删除指定值
    s.delete(2);//结果：true
    s.delete(4);//结果：false

    console.log(s);
    //打印结果：Set {1, 3}
	
	//我们使用delete()方法删除了指定值：2，结果返回true。
	//删除指定值：4的时候，返回false，原因是变量s中找不到数字4
```

### clear()方法
- clear()方法：清空所有成员
```
    //用数组作为参数初始化
    const s = new Set([1,2,3]);
    console.log(s);
    //打印结果：Set {1, 2, 3}

    s.clear();
    console.log(s);
    //打印结果：Set {}
```

### has()方法
- has()方法：判断set结构中是否含有指定的值。如果有，返回true；如果没有，返回fasle
```
//用数组作为参数初始化
    const s = new Set([1,2,3]);
    s.has(1);//结果：true
    s.has(4);//结果：false
```


### entries()方法
- entries()方法：返回一个键值对的遍历器。
```
    //用数组作为参数初始化
    const s = new Set(['a','b','c']);
    s.entries();
    //结果：SetIterator {["a", "a"], ["b", "b"], ["c", "c"]}
```


### keys() 和 values() 方法
- keys()方法：返回键名的遍历器。
- values()方法：返回键值的遍历器。
```
    //用数组作为参数初始化
    const s = new Set(['a','b','c']);

    s.keys();
    //结果：SetIterator {"a", "b", "c"}

    s.values();
    //结果：SetIterator {"a", "b", "c"}
```
- entries()方法的使用告诉我们，Set结构的键名和键值是同一个值，
- 那么我们就用Set结构提供的keys()和values()方法来检验一下,结果：两者确实一致。

### for...of遍历Set结构的讲解
```
    //用数组作为参数初始化
    const s = new Set(['a','b','c']);

    //用for...of遍历
    for(let [i,v] of s.entries()){
        console.log(i+' '+v);
    }
    //打印结果：a  a    
    //         b  b   
    //         c  c   

```


### forEach()方法
- forEach()方法：遍历每一个成员。
```
    //用数组作为参数初始化
    const s = new Set(['a','b','c']);

    //使用回调函数遍历每个成员
    s.forEach(function(value,key){
        console.log(value,key)
    });
    //打印结果：a  a
    //         b  b
    //         c  c
```
- 使用方式跟数组的forEach一样，得到的value是key的值是一样的

### Set的用途之数组去重
```
 //目标数组arr，要求去重
    let arr = [1,2,2,3,4,4,4];
    let s = new Set(arr);
    //结果：Set {1,2,3,4}

    let newArr = Array.from(s);
    //结果：[1,2,3,4],完成去重
```
- Set结构不会含有重复成员，就会自动忽略相同的元素，只保留一个相同的值

## WeakSet结构
- WeakSet结构同样不会存储重复的值，不同的是，它的成员必须是对象类型的值
- （严格来说是：具有 iterable 接口的对象）
```js
    //初始化一个WeakSet对象
    let ws = new WeakSet([{"age":18}]);
    //结果：WeakSet {Object {age: 18}}
	
```

- 初始化一个WeakSet对象，参数一个数组，数组的成员必须是对象类型的值{"age":18}，否则就会报错
```js
//初始化一个WeakSet对象
    let ws = new WeakSet([1,2]);
    //结果：报错
    以上的写法就会报错，因为数组的元素不是对象类型的，是数字1,2。
```
- WeakSet结构也提供了add() 方法，delete() 方法，has()方法给开发者使用，作用与用法跟Set结构完全一致
- 另一个不同点是：WeakSet 结构不可遍历。因为它的成员都是对象的弱引用，随时被回收机制回收，成员消失
- 所以WeakSet 结构不会有keys()，values()，entries()，forEach()等方法和size属性

## Map
### Map的基本用法
- Map结构提供了一个构造函数给我们，我们使用的时候需要用new来创建实例：`let m = new Map()`

- 在创建实例的同时，初始化它的内容，我们可以给它传参，形式跟Set结构类型，都是需要用数组作为参数
```js
  let m = new Map([
            ["name","前端君"],
            ["gender",1]
    ]);
    
    console.log(m);
    //打印结果：Map {"name" => "前端君", "gender" => 1}

```

### set()方法
- set()方法作用：给实例设置一对键值对，返回map实例
```js
let m = new Map();
    //set方法添加
    //添加一个string类型的键名
    m.set("name","前端君");  
    //添加一个数字类型的键名
    m.set(1,2);
	
    console.log(m);
    //打印结果：Map {"name" => "前端君", 1 => 2}
```
- set方法的使用很简单，只需要给方法传入key和value作为键名和键值即可。
- 注意：第三行代码中，我们传入的key是数字1，这就证明了，Map结构确实可以存储非字符串类型的键名，
- 当然你还可以设置更多其它类型的键名，比如：

```js
    //数组类型的键名
    m.set([1],2);

    //对象类型的键名
    m.set({"name":"Zhangsan"},2);

    //布尔类型的键名
    m.set(true,2);

    //Symbol类型的键名
    m.set(Symbol('name'),2);

    //null为键名
    m.set(null,2);

    //undefined为键名
    m.set(undefined,2);
```

- 使用set方法的时候有一点需要注意，如果你设置一个已经存在的键名，那么后面的键值会覆盖前面的键值
```js
    let m = new Map();
    m.set("name","前端君");
    console.log(m);
    //结果：Map {"name" => "前端君"}

    //再次设置name的值
    m.set("name","隔壁老王");
    console.log(m);
    //结果：Map {"name" => "隔壁老王"}
```
- 我们第一次把name的值设置为“前端君”，当再次使用set方法设置name的值的时候，
- 后者成功覆盖了前者的值，从此“前端君” 变 “隔壁老王”。

### get()方法
- get()方法作用：获取指定键名的键值，返回键值。
```js
    let m = new Map([["name","前端君"]]);

    m.get("name");//结果：前端君
    m.get("gender");//结果：undefined
	```
- get方法使用也很简单，只需要指定键名即可。获取存在对应的键值，如果键值对存在，就会返回键值；
- 否则，返回undefined，这个也很好理解。
 
### delete()方法
- delete()方法作用：删除指定的键值对，删除成功返回：true，否则返回：false。
```js
    let m = new Map();
    m.set("name","前端君");
    //结果：Map {"name" => "前端君"}

    m.delete("name");//结果：true
    m.delete("gender");//结果：false
```
- 我们使用delete方法，删除“name”的时候成功，返回了true。
- 删除“gender”的时候，由于Map结构中不存在键名：“gender”，所以删除失败，返回false。
 
### clear()方法
- 跟Set结构一样，Map结构也提供了clear()方法，让你一次性删除所有键值对。
```js
    let m = new Map();
    m.set("name","前端君");
    m.set("gender",1);

    m.clear();
    console.log(m);
    //打印结果：Map {}
```
- 使用clear方法后，我们再打印一下变量m，发现什么都没有，一个空的Map结构，说明clear方法起作用了。

### has()方法
- has()方法作用：判断Map实例内是否含有指定的键值对，有就返回：true，否则返回：false。
```js
    let m = new Map();
    m.set("name","前端君");

    m.has('name');//结果:true
    m.has('age');//结果:false

```
- Map实例中含有键名：name，就返回了true，键名age不存在，就返回false
 
### 可遍历
- Object对象能被for...in遍历，Map结构也不示弱，同样可以被遍历
- 我们可以使用ES6的新特性for...of来遍历它的键名或者键值

### entries()方法
- entries()方法作用：返回实例的键值对遍历器。
- 我们在第十三节说过，for...of可以遍历具有遍历器接口的对象。
- 那么，我们就结合for...of来演示一下Map结构的遍历。
```js
    let m = new Map([
            ["name","前端君"],
            ["age",25]
    ]);

    for(let [key,value] of m.entries()){
        console.log(key+'  '+value);
    }
    //打印结果：name  前端君
    //              age  25
    
```
- 案例中的 m.entries() 返回键值对的遍历器，使用了for...of来遍历这个遍历器，
- 得到的值分别赋值到key和value，然后控制台分别输出它们

### keys() 和 values() 方法
- keys()方法：返回实例所有键名的遍历器。
- values() 方法：返回实例所有键值的遍历器。
- 既然都是遍历器，那就用for...of把它们遍历出来吧：
```js
    let m = new Map([
        ["name","前端君"],
        ["age",25]
    ]);

    //使用keys方法获取键名
    for(let key of m.keys()){
        console.log(key);
    }
    //打印结果：name
    //                 age

    //使用values方法获取键值
    for(let value of m.values()){
        console.log(value);
    }
    //打印结果：前端君
    //                 25
  ```  
- keys方法和values方法的使用方式一致，只是返回的结果不同。

### forEach()方法
- 除了使用以上三个方法实现遍历以外，我们还可以使用forEach遍历每一个键值对：
```js
    let m = new Map([
        ["name","前端君"],
        ["age",25]
    ]);
    
    m.forEach(function(value,key){
        console.log(key+':'+value);
    });
    //打印结果：name:前端君
    //                 age:25
```    
- forEach方法接收一个匿名函数，给匿名函数传参value和key，分别是Map实例的键名和键值，

#### size属性
- 其中一个常用的属性就是size：获取实例的成员数。
```js
    let m = new Map();
    m.set(1,3);
    m.set('1','3');

    m.size;//结果：2

```
- 使用set方法给实例m添加了两个键值对成员，所以实例的 size为：2。
 
## WeakMap结构。
- WeakMap结构和Map结构很类似，不同点在于WeakMap结构的键名只支持引用类型的数据。
- 哪些是引用类型的值呢？比如：数组，对象，函数。 

### WeakMap的基本用法
- WeakMap结构的使用方式和Map结构一样：`let wm = new WeakMap();`
- 两者都是使用new来创建实例。如果添加键值对的话，我们同样是使用set方法，
- 不过键名的类型必须要求是引用类型的值，我们来看看：

```js
    let wm = new WeakMap();

    //数组类型的键名
    wm.set([1],2);

    //对象类型的键名
    wm.set({'name':'Zhangsan'},2);

    //函数类型的键名
    function fn(){};
    wm.set(fn,2);

    console.log(wm);
    //打印：WeakMap {
            [1] => 2, 
            Object {name: "Zhangsan"} => 2, 
            function => 2
            }
```
- 从打印结果可以看出，以上类型的键名都可以成功添加到WeakMap实例中。 

### WeakMap和Map的区别
- 键名如果是普通的值类型则不允许。比如：字符串，数字，null，undefined，布尔类型。
- 而Map结构是允许的，这就是两者的不同之处，谨记

- 跟Map一样，WeakMap也拥有get、has、delete方法，用法和用途都一样。
- 不同地方在于，WeakMap不支持clear方法，不支持遍历，也就没有了keys、values、entries、forEach这4个方法，也没有属性size。

- 理由跟WeakSet结构一样：键名中的引用类型是弱引用，你永远不知道这个引用对象什么时候会被垃圾回收机制回收了，
- 如果这个引用类型的值被垃圾机制回收了，WeakMap实例中的对应键值对也会消失。

## Promise 对象

## Class 基本语法
### constructor
- constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法
```js
class Point {
}
// 没有显式定义，一个空的constructor方法会被默认添加。

// 等同于
class Point {
  constructor() {}
}
```

- constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
- 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。


### 类的实例
- ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）
```js
//定义类
class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var point = new Point(2, 3);

point.toString() // (2, 3)

point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true
```

- `Object.getPrototypeOf`方法来获取实例对象的原型，然后再来为原型添加方法/属性。
- 实例的__proto__属性改写原型,不推荐使用，会改变“类”的原始定义，影响到所有实例。

### 取值函数（getter）和存值函数（setter）
- ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
```js
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'

```


### Class表达式
- `const MyClass = class { /* ... */ };`
- Class 表达式，可以写出立即执行的 Class
```js
let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('张三');
person.sayName(); // "张三"

//person是一个立即执行的类的实例
```

#### 注意点
- 严格模式:类和模块的内部，默认就是严格模式
- 不存在提升
- name属性总是返回紧跟在class关键字后面的类名
```js
class Point {}
Point.name // "Point"
```

- this 的指向:类的方法内部如果含有this，它默认指向类的实例
```js
//在构造方法中绑定this，这样就不会找不到print方法了。
class Logger {
  constructor() {
    this.printName = this.printName.bind(this);
  }
}

//另一种解决方法是使用箭头函数。
class Obj {
  constructor() {
    this.getThis = () => this;
  }
}

const myObj = new Obj();
myObj.getThis() === myObj // true
// 箭头函数内部的this总是指向定义时所在的对象。代码中，箭头函数位于构造函数内部，它的定义生效的时候，是在构造函数执行的时候。
//这时，箭头函数所在的运行环境，肯定是实例对象，所以this会总是指向实例对象。

//还有一种解决方法是使用Proxy，获取方法的时候，自动绑定this。
function selfish (target) {
  const cache = new WeakMap();
  const handler = {
    get (target, key) {
      const value = Reflect.get(target, key);
      if (typeof value !== 'function') {
        return value;
      }
      if (!cache.has(value)) {
        cache.set(value, value.bind(target));
      }
      return cache.get(value);
    }
  };
  const proxy = new Proxy(target, handler);
  return proxy;
}

const logger = selfish(new Logger());
```

### 静态方法
- 类相当于实例的原型，所有在类中定义的方法，都会被实例继承
- 如果在一个方法前，加上`static`关键字，就表示该方法不会被实例继承，而是通过类来调用
```js
class Foo {
  static classMethod() {
    return 'hello';
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function
```

- 静态方法包含this关键字，这个this指的是类，而不是实例。
```js
class Foo {
  static bar() {
    this.baz();
  }
  static baz() {
    console.log('hello');
  }
  baz() {
    console.log('world');
  }
}
Foo.bar() // hello
```

### 静态属性
- 静态属性指的是 Class 本身属性，即Class.propName，不是定义在实例对象（this）上的属性
- 直接在类上定义 
```js
class Foo {
}

Foo.prop = 1;
Foo.prop // 1
上面的写法为Foo类定义了一个静态属性prop
```

### new target
- new是从构造函数生成实例对象的命令。ES6 为new命令引入了一个`new.target`属性，该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。
- 如果构造函数不是通过new命令或Reflect.construct()调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用
```js
function Person(name) {
  if (new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}

// 另一种写法
function Person(name) {
  if (new.target === Person) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}
var person = new Person('张三'); // 正确
var notAPerson = Person.call(person, '张三');  // 报错
//上面代码确保构造函数只能通过new命令调用。
```

- Class 内部调用new.target，返回当前 Class。
```js
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    this.length = length;
    this.width = width;
  }
}

var obj = new Rectangle(3, 4); // 输出 true
```

- 需要注意的是，子类继承父类时，new.target会返回子类。
```js
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    // ...
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, width);
  }
}

var obj = new Square(3); // 输出 false
//上面代码中，new.target会返回子类。
```

- 利用这点，可以写出不能独立使用、必须继承后才能使用的类。
```js
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('本类不能实例化');
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    // ...
  }
}

var x = new Shape();  // 报错
var y = new Rectangle(3, 4);  // 正确
//上面代码中，Shape类不能被实例化，只能用于继承。
```
- 注意，在函数外部，使用new.target会报错

## class 的继承
- Class 可以通过extends关键字实现继承
```js
class Point{
	
}

class ColorPoint extends Ponint {
	
}

定义了一个ColorPoint类，该类通过extends关键字，继承了Point类的所有属性和方法
```

```js
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}
// 代码中，constructor方法和toString方法之中，都出现了super关键字，在这里表示父类的构造函数，用来新建父类的this对象
```

- S6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（必须调用super方法），然后再用子类的构造函数修改this。
- 调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，基于父类实例，只有super方法才能调用父类实例。
- 父类的静态方法，也会被子类继承

### Object.getPrototypeOf()
- `Object.getPrototypeOf`方法可以用来从子类上获取父类。
```js
Object.getPrototypeOf(ColorPoint) === Point
// true
// 使用这个方法判断，一个类是否继承了另一个类。
```

### super 关键字
- super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。

#### super作为函数调用时
- 代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
```js
class A {}

class B extends A {
  constructor() {
    super();
  }
}

// B的构造函数之中的super()，代表调用父类的构造函数。否则 JavaScript 引擎会报错
```

- 作为函数时，super()只能用在子类的构造函数之中
```js
class A {}

class B extends A {
  m() {
    super(); // 报错
  }
}
//super()用在B类的m方法之中，就会造成语法错误。
```

#### super作为对象时，
- 在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
- super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的。
- 属性定义在父类的原型对象上，super就可以取到。

### 类的 prototype 属性和__proto__属性
- 浏览器的 ES5 实现之中，每一个对象都有__proto__属性，指向对应的构造函数的prototype属性。Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。

#### 子类的__proto__属性
- 表示构造函数的继承，总是指向父类。

#### 子类prototype属性的__proto__属性
- 表示方法的继承，总是指向父类的prototype属性。
```js
class A {
}

class B extends A {
}

B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true
// 子类B的__proto__属性指向父类A，子类B的prototype属性的__proto__属性指向父类A的prototype属性
```

### 实例的 __proto__ 属性
- 子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。所以子类的原型的原型，是父类的原型。
```js
var p1 = new Point(2, 3);
var p2 = new ColorPoint(2, 3, 'red');

p2.__proto__ === p1.__proto__ // false
p2.__proto__.__proto__ === p1.__proto__ // true
// ColorPoint继承了Point，导致前者原型的原型是后者的原型。
```

- 通过子类实例的__proto__.__proto__属性，可以修改父类实例的行为。
```js
p2.__proto__.__proto__.printName = function () {
  console.log('Ha');
};

p1.printName() // "Ha"
```
代码在ColorPoint的实例p2上向Point类添加方法，结果影响到了Point的实例p1

### Mixin 模式的实现
- Mixin 指的是多个对象合成一个新的对象，新对象具有各个组成成员的接口
```js
const a = {
  a: 'a'
};
const b = {
  b: 'b'
};
const c = {...a, ...b}; // {a: 'a', b: 'b'}
```


## Module 语法
### 导出
```js
export let A = 123;
export function lest () {
	console.log('test')
}
export class Hello {
	test () {
		console.log('class')
	}
}

// 第二种导出
let A = 123;
let test = function () {
	console.log('test')
}
class Hello {
	test () {
		console.log('class')
	}
}
export {A,test,Hello}

var n = 1
export {n as m}
```

### 导入
```js
import {A,test,Hello} from './class/demo17';
console.log(A,test,Hello);


// 整体加载
import * as lesson from './class/demo17'
console.log(lesson.A,lesson.test)

import Demo17 from './class/demo17'
console.log(Demo17.A)
```

### export default
- `export default`命令用于指定模块的默认输出。
- 一个模块只能有一个默认输出，因此`export default`命令只能使用一次。
- 所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令
```js
export default function () {
	console.log('foo')
}

import customName from './mmm'		//不用加{}
customName();//foo
```

- 因为`export default`命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句

- 想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样。
`import _, { each, forEach } from 'lodash'`

- 对应上面代码的export语句如下。
```js
export default function (obj) {
  // ···
}
export function each(obj, iterator, context) {
  // ···
}
export { each as forEach };
```

#### export default输出类
```js
// MyClass.js
export default class { ... }

// main.js
import MyClass from 'MyClass';
let o = new MyClass();
```









## ES6：用 ES6 编写简洁的函数声明
``` javascript
在 ES5 中，当我们需要在对象中定义一个函数的时候，我们必须如下面这般使用function关键字：

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
在 ES6 语法的对象中定义函数的时候，你可以完全删除function关键字和冒号。请看以下例子：

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

## ES6：使用 class 语法定义构造函数

``` stylus
在 ES5 里面，我们通常会定义一个构造函数，然后使用 new 关键字来实例化一个对象：

const SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
const zeus = new SpaceShuttle('Jupiter');
class的语法只是简单地替换了构造函数的写法：

class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
注意class关键字声明了一个新的函数，并在其中添加了一个会在使用new关键字创建新对象时调用的构造函数。
```

## getters和setters
- 你可以从对象中获得一个值，也可以给对象的属性赋值: getters 以及 setters
- Getter 函数的作用是可以让返回一个对象私有变量的值给用户，而不需要直接去访问私有变量。
- Setter 函数的作用是可以基于传进的参数来修改对象中私有变量的值。这些修改可以是计算，或者是直接替换之前的值。

## 了解 import 和 require 之间的差异

- 在过去，我们会使用require()函数来从外部文件或模块中引入函数或者代码。这时候会遇到一个问题：有些文件或者模块会特别大，但你却往往只需要引入其中的一些核心代码。
- ES6给我们提供了import这个便利的工具。通过它，我们能够从外部的文件或者模块中选择我们需要的部分进行引入，从而节约载入的时间和内存空间。
- 我们还可以用import语法从文件中导入所有的内容。

``` javascript
下面是一个从同目录下的"math_functions"文件中导入所有内容的例子：

import * as myMathModule from "math_functions";
myMathModule.add(2,3);
myMathModule.subtract(5,3);
让我们来分析一下这段代码：

import * as object_with_name_of_your_choice from "file_path_goes_here"
object_with_name_of_your_choice.imported_function
你可以在import * as之后添加任意的名称。这个方法接收到的值是一个对象，你可以使用点表示法来获取对象里具体的值
```


``` stylus
import { countItems } from "math_array_functions"
下面是对于上面代码的语义描述：

import { function } from "file_path_goes_here"
// 我们还可以用同样的方式来引入变量！
```


## 用 export 来重用代码块
- 当我们想要一些代码——函数或者变量——在其他文件中使用，我们必须将它们导出来供其他文件导入。和import一样，export也是一个非浏览器的功能。

## Object.freeze 冻结
- JavaScript 提供了一个函数Object.freeze来防止数据改变。

