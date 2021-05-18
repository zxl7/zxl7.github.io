---
title: JavaScript基础丶
date: 2019-12-26 19:58:22
tags: JavaScript
categories: [学习笔记,JavaScript]
---
JavaScript天下无敌!
<!-- more-->


## 基础入门
标识符: 在JS中所有的可以由我们自主命名的都可以称为是标识符
- 变量名、函数名、属性名都属于标识符
- 命名一个标识符时需要遵守如下的规则：
- 标识符中可以含有字母 、数字 、下划线_ 、$符号C
- 标识符不能以数字开头
- 标识符不能是ES中的关键字或保留字
- 标识符一般都采用驼峰命名法
- 首字母小写，每个单词的开头字母大写，其余字母小写 
- JS底层保存标识符时实际上是采用的Unicode编码，
- 所以理论上讲，所有的utf-8中含有的内容都可以作为标识符
- 直接量: 程序直接使用的数据的值

### 数据类型
JavaScript 有六种原始（不可变）数据类型：
- `Boolean` 布尔类型
- `Array` 数组是一组按顺序排列的集合，集合的每个值称为元素。JavaScript的数组可以包括任意数据类型。 JavaScript中，数组在本质上是一种对象,数组的起始值是0;
- `Number` JavaScript不区分整数和浮点数，统一用Number表示数字类型(Number.MAX_VALUE ....MIN....infinity无穷大/小)
- `String` 字符串类型(toString()或者 "+"可以将其他类型转换为字符串类型)
- `Object` 引用类型  
- `functio()` 函数类型  
- `Undefined` (1.声明变量却未赋值 2.直接操作变量,变量未声明,也没有定义 3.显示的赋值undefined,4.函数没有返回值默认返回undefined;)

- `typefo()` 取得变量值的数据类型string,number,boolean,object,undefined,function;
- `对象` JavaScript的对象是一组由键-值组成的无序集合

#### 数制转换
非数值转化为数值：转不了就返回NaN
- `Null`空的指针,派生undefined(本质是一个特殊的object,表示对象为空,或者无对象)
- `NaN`: not a number 非数字值,是数字类型,`涉及所有nan都返回nan` `与任何值都不相等包括和自己`
- 判断则用isNAN方法(检测是不是非数值,会尝试转换成数字);
- number()
- parseInt() 操作数字开头;
- parseFloat()

toString字符串转换
- toString方法 返回副本
- String()函数任何类型得知都可以转为`字符串`

boolean布尔转换
- 0,"",null,undefined转布尔为false其他都为真

``` javascript
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};
```

- JavaScript对象的键都是字符串类型，值可以是任意数据类型。上述person对象一共定义了6个键值对，
- 其中每个键又称为对象的属性，例如，person的name属性为'Bob'，zipcode属性为null。
- 要获取一个对象的属性，我们用对象变量.属性名的方式：

``` javascript
person.name; // 'Bob'
person.zipcode; // null
```

### 变量
- 用','隔开多个变量;
- var or let声明
- 变量不仅可以是数字，还可以是任意数据类型。
- 变量就是用一个变量名表示，变量名是大小写英文、数字、$和_的组合，且不能用数字开头。
- 变量名也不能是JavaScript的关键字，如if、while等。申明一个变量用var语句，比如：

``` javascript
var a; // 申明了变量a，此时a的值为undefined
var $b = 1; // 申明了变量$b，同时给$b赋值，此时$b的值为1
var s_007 = '007'; // s_007是一个字符串
var Answer = true; // Answer是一个布尔值true
var t = null; // t的值是null
```

- 变量名也可以用中文，但请不要给自己找麻烦。
- 在JavaScript中，使用等号=对变量进行赋值。可以把任意数据类型赋值给变量，同一个变量可以反复赋值，
- 而且可以是不同类型的变量，但是要注意只能用var申明一次，例如：

``` javascript
var a = 123; // a的值是整数123
a = 'ABC'; // a变为字符串
```

- 这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。
- 例如Java是静态语言，赋值语句如下：
``` java
int a = 123; // a是整数类型变量，类型用int申明
a = "ABC"; // 错误：不能把字符串赋给整型变量
```

- 和静态语言相比，动态语言更灵活，就是这个原因。 
- 请不要把赋值语句的等号等同于数学的等号：

``` javascript
var x = 10;
x = x + 2;
```

### String()
#### 返回指定位置的字符
- charAt() 方法可返回指定位置的字符
- 返回的字符是长度为 1 的字符串
``` js
stringObject.charAt(index)
```
1. 字符串中第一个字符的下标是 0。最后一个字符的下标为字符串长度减一（string.length-1）。
2. 如果参数 index 不在 0 与 string.length-1 之间，该方法将返回一个空字符串

#### 返回指定的字符串首次出现的位置
- indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
- 该方法将从头到尾地检索字符串 stringObject，看它是否含有子串 substring。
- 可选参数，从stringObject的startpos位置开始查找substring，如果没有此参数将从stringObject的开始位置查找。
- 如果找到一个 substring，则返回 substring 的第一次出现的位置
- 字符位置是从 0 开始的。
``` js
stringObject.indexOf(substring, startpos)
```
1. indexOf() 方法区分大小写。
2. 如果要检索的字符串值没有出现，则该方法返回-1。

#### 字符串分割split()
- split() 方法将字符串分割为字符串数组，并返回此数组。
``` js
stringObject.split(separator,limit)
```

#### 提取字符串substring()
- substring() 方法用于提取字符串中介于两个指定下标之间的字符
``` js
stringObject.substring(startPos,stopPos) 
```
1. 返回的内容是从 start开始(包含start位置的字符)到 stop-1 处的所有字符，其长度为 stop 减start。
2. 如果参数 start 与 stop 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。
3. 如果 start 比 stop 大，那么该方法在提取子串之前会先交换这两个参数

#### 提取指定数目的字符substr()
- substr() 方法从字符串中提取从 startPos位置开始的指定数目的字符串。
语法:
``` js
stringObject.substr(startPos,length)
```
- 如果参数startPos是负数，从字符串的尾部开始算起的位置。
- -1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
- 如果startPos为负数且绝对值大于字符串长度，startPos为0。

#### 多行字符串
- 由于多行字符串用\n写起来比较费事，所以最新的js标准新增了一种多行字符串的表示方法，用反引号 ` ... ` 表示：

#### 模板字符串
- 要把多个字符串连接起来，可以用+号连接：
``` js
var name = '小明';
var age = 20;
var message = '你好, ' + name + ', 你今年' + age + '岁了!';
alert(message);
```


- 多变量连接，用+号就比较麻烦。js新增了一种模板字符串 `${}`表示方法和上面的多行字符串一样，但是它会自动替换字符串中的变量：

``` javascript
var name = '小明';
var age = 20;
var message = `你好, ${name},你今年${age}岁了!`;
alert(message);
```
- 需要特别注意的是，字符串是`不可变`的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果

- JavaScript为字符串提供了一些常用方法，注意，调用这些方法本身不会改变原有字符串的内容，而是返回一个新字符串：

``` javascript
toUpperCase()把字符串全部变成大写;
toLowerCase()全小写;
indexOf()会搜索指定字符串,出现的位置;没找到返回-1;
substring()返回指定索引区间的字串;
(`var s = 'hello, world'
s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
s.substring(7); // 从索引7开始到结束，返回'world'`)
```

### Math()
- 向上取整ceil()向上取整
- floor向下取整
- round四舍五入
- random随机数

### Array()
- 数组对象是一个对象的集合，里边的对象可以是不同类型的。数组的每一个成员对象都有一个“下标”，用来表示它在数组中的位置，是从零开始的
数组定义的方法：
1. 定义了一个空数组:

``` javascript
var  数组名= new Array();
```
2. 定义时指定有n个空元素的数组：

``` javascript
var 数组名 =new Array(n);
```
3.定义数组的时候，直接初始化数据：
``` js
var  数组名 = [<元素1>, <元素2>, <元素3>...];
```

- 数组元素使用：
```js
数组名[下标] = 值;
```
- 数组的下标用方括号括起来，从0开始。

#### 数组的方法
- .length赋一个新值,会导致Array大小的变化;
- Array可以通过索引把对应的元素修改为新的值，因此，对Array的索引进行赋值会直接修改这个Array
- 大多数其他编程语言不允许直接改变数组的大小，越界访问索引会报错。
- JavaScript的Array却不会有任何错误。在编写代码时，不建议直接修改Array的大小，访问索引时要确保索引不会越界

#### arguments类数组
- arguments的length属性是指实参个数;
- 函数的length是指形参的个数;

#### indexOf

``` javascript
与String类似，Array也可以通过indexOf()来搜索一个指定的元素的位置：
var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10); // 元素10的索引为0
arr.indexOf(20); // 元素20的索引为1
arr.indexOf(30); // 元素30没有找到，返回-1
arr.indexOf('30'); // 元素'30'的索引为2
```

#### slice()

``` javascript
slice()就是对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array：

var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
```
- 注意到slice()的起止参数包括开始索引，不包括结束索引
- 如果不给slice()传递任何参数，它就会从头到尾截取所有元素。

#### push和pop
- push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉：

#### unshift和shift
- 如果要往Array的头部添加若干元素，使用unshift()方法，shift()方法则把Array的第一个元素删掉

#### sort()
- 可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序;-1,1,0相等;

#### reverse()反转

#### splice()
- splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：

``` javascript
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']

arr; // ['Microsoft', 'Apple', 'Oracle']
// 只添加,不删除:
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
```

- concat()把两个数组链接起来,返回一个新的array;

``` javascript
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
added; // ['A', 'B', 'C', 1, 2, 3]
arr; // ['A', 'B', 'C']
```
- 请注意，concat()方法并没有修改当前Array，而是返回了一个新的Array,实际上，concat()方法可以接收任意个元素和Array，并且自动把Array拆开，然后全部添加到新的Array里

#### join()
- join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：
- 如果Array的元素不是字符串，将自动转换为字符串后再连接。

### 对象
- 对象的属性：反映该对象某些特定的性质的，如：字符串的长度、图像的长宽等；
- 对象的方法：能够在对象上执行的动作；
- JavaScript 提供多个内联对象，比如 String、Date、Array 等等，使用对象前先定义，如下使用数组对象：

``` javascript
  var objectName =new Array();//使用new关键字定义对象
或者
  var objectName =[];
访问对象属性的语法:
objectName.propertyName
```

- 访问对象的方法：
``` js
objectName.methodName()
```

- JavaScript用一个{...}表示一个对象，键值对以xxx:xxx形式申明，用,隔开。注意，最后一个键值对不需要在末尾加，如果加了，有的浏览器（如低版本的IE）将报错。
- 访问属性是通过.操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用''括起来：

``` javascript
var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};
```

- xiaohong的属性名middle-school不是一个有效的变量，就需要用''括起来。访问这个属性也无法使用.操作符，必须用['xxx']来访问：

``` javascript
xiaohong['middle-school']; // 'No.1 Middle School'
xiaohong['name']; // '小红'
xiaohong.name; // '小红'
```

- JavaScript对象的所有属性都是字符串，不过属性对应的值可以是任意数据类型。
- 如果访问一个不存在的属性会返回什么呢？JavaScript规定，访问不存在的属性不报错，而是返回 `undefined`：
- JavaScript的对象是动态类型，你可以自由地给一个对象添加或删除属性：

``` javascript
var xiaoming = {
    name: '小明'
};
xiaoming.age; // undefined
xiaoming.age = 18; // 新增一个age属性
xiaoming.age; // 18
delete xiaoming.age; // 删除age属性
xiaoming.age; // undefined
delete xiaoming['name']; // 删除name属性
xiaoming.name; // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错
```

- 如果我们要检测xiaoming是否拥有某一属性，可以用 `in`操作符：

``` javascript
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
'name' in xiaoming; // true
'grade' in xiaoming; // false
```
- 不过要小心，如果 `in`判断一个属性存在，这个属性不一定是xiaoming的，它可能是xiaoming继承得到的

- 判断一个属性是否是自身的还是继承的可以用 `hasOwnProperty():`
``` js
var xiaoming = {
    name: '小明'
};
xiaoming.hasOwnProperty('name'); // true
xiaoming.hasOwnProperty('toString'); // false
```

### 条件判断if(){}
- JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true，
 
### 循环
- `for` 循环最常用的地方是利用索引来遍历数组,适合已知循环次数；
- `while循环` 只要条件为真一直循环,适合未知；
- `continue语句` 立即终止本次循环,返回循环结构头部,开始下一轮循环，
- `标签label` 语句的前面有标签,相当于定位符,用于跳转到程序的任意位置;(跳出代码块,跳出特定循环)
- for循环的3个条件都是可以省略的，如果没有退出循环的判断条件，就必须使用break语句退出循环，否则就是死循环；
- 结束本次循环,并开始下次循环
``` js
var x = 0;
for (;;) { // 将无限循环下去
    if (x > 100) {
        break; // 通过if判断来退出循环
    }
    x ++;
}
```

- `for ... in`: for循环的一个变体是`for ... in`循环，它可以把一个对象的所有属性依次循环出来
``` js
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    console.log(key); // 'name', 'age', 'city'
}
```
 
- 要过滤掉对象继承的属性，用hasOwnProperty()来实现：
``` js
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

- 由于Array也是对象，而它的每个元素的索引被视为对象的属性，所以for ... in循环可以直接循环出Array的索引
``` js
var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log(i); // '0', '1', '2'
    console.log(a[i]); // 'A', 'B', 'C'
}
```

- while循环只有一个判断条件，条件满足，就不断循环，条件不满足时则退出循环。
``` js
//计算100以内所有奇数之和：
var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n- 2;
}
x; // 2500
```

- 最后一种循环是`do{...}while()`循环，和while循环的唯一区别，不是在每次循环开始的时候判断条件，而是在每次循环完成的时候判断条件：
``` js
var n = 0;
do {
    n = n + 1;
} while (n < 100);
n; // 100
```
- 用`do { ... } while()`循环要小心，循环体会至少执行1次，而for和while循环则可能一次都不执行。

### 操作符
- 三元操作符:条件成立,执行1,否则执行代码2

- 与操作:第一个true 返回最后一个值;第一个false返回第一个操作符
- 只要有一个NAN,null,undefinde返回NaN....

- 或操作: 遇到第一个true则返回,全是false则返回最后

- 非操作: 不论什么类型都返回布尔类型

### Map and Set
#### Map
```javascript
var m = t.map (function () {item,index,array
	return item +2;
})
console.log(m);
console.log(t);
```
- 是一组简直对结构,具有极快的查找速度;
- 如果用Map实现，只需要一个“名字”-“成绩”的对照表，直接根据名字查找成绩，无论这个表有多大，查找速度都不会变慢。
- 用JavaScript写一个Map如下：

``` javascript
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael'); // 95
```

- 初始化Map需要一个二维数组，或者直接初始化一个空Map。
- Map具有以下方法：
``` js
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined
```
- 由于一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值覆盖

#### Set
- Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以在Set中，没有重复的key
- 要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set

``` javascript
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3
```

- 重复元素在Set中自动被过滤
``` js
var s = new Set([1, 2, 3, 3, '3']);
s; // Set {1, 2, 3, "3"}
```
- 注意数字3和字符串'3'是不同的元素

- 通过add(key)方法可以添加元素到Set中，可以重复添加，但不会有效果：
``` js
s.add(4);
s; // Set {1, 2, 3, 4}
s.add(4);
s; // 仍然是 Set {1, 2, 3, 4}
```

- 通过delete(key)方法可以删除元素：
``` js
var s = new Set([1, 2, 3]);
s; // Set {1, 2, 3}
s.delete(3);
s; //Set{1,2}
```

#### iterable
- 遍历Array可以采用下标循环，遍历Map和Set就无法使用下标
- 为了统一集合类型，js标准引入了新的iterable类型，Array、Map和Set都属于iterable类型
- 具有iterable类型的集合可以通过新的for ... of循环来遍历
- 用`for ... of`循环遍历集合，用法如下
```js
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    console.log(x);
}
for (var x of s) { // 遍历Set
    console.log(x);
}
for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
```

#### for...of循环和for...in循环有何区别？
- for ...in循环由于历史遗留问题，它遍历的实际上是对象的属性名称。一个Array数组实际上也是一个对象，它的每个元素的索引被视为一个属性
- 当我们手动给Array对象添加了额外的属性后，for ... in循环将带来意想不到的意外效果
``` js
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    console.log(x); // '0', '1', '2', 'name'
}
```

- for ... in循环将把name包括在内，但Array的length属性却不包括在内
- for ... of循环则完全修复了这些问题，它只循环集合本身的元素
```javascript
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x of a) {
    console.log(x); // 'A', 'B', 'C'
}
```

- 直接使用iterable内置的`forEach`方法，它接收一个函数，每次迭代就自动回调该函数

``` javascript
'use strict';
var a = ['A', 'B', 'C'];
a.forEach(function (item, index, array) {
    // item:	指向当前元素的值
    // index:	索引
    // array:	指向Array对象本身
    console.log(item + ', index = ' + index);
});

//foreEach	返回值为undefind
```

- Set与Array类似，但Set没有索引，因此回调函数的前两个参数都是元素本身

``` javascript
var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    console.log(element);
});
```

- Map的回调函数参数依次为value、key和map本身：

``` javascript
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    console.log(value);
});
```

- 如果对某些参数不感兴趣，由于JavaScript的函数调用不要求参数必须一致，因此可以忽略它们
- 例如，只需要获得Array的element：

``` javascript
var a = ['A', 'B', 'C'];
a.forEach(function (element) {
    console.log(element);
});
```

#### 数据类型和引用类型
- 引用类型在堆上:函数function 对象object 数组array 
- 基本类型在栈上:(string,number,boolean,null,undefined )
- 引用类型一个改都改,因为引用的是地址

## 函数
### 函数参数的引用传递和值传递的区别:
- 函数的参数如果是简单类型,会做一个值类型的数值副本传到函数内部,
- 如果是一个引用类型,会将引用类型的地址复制给传入函数的参数;

### 函数的定义和调用
- function指出这是一个函数定义；
- abs是函数的名称；
- (x)括号内列出函数的参数，多个参数以,分隔；
- `{ ... }`之间的代码是函数体，可以包含若干语句，甚至可以没有任何语句
- 请注意，函数体内部的语句在执行时，一旦执行到return时，函数就执行完毕，并将结果返回。因此，函数内部通过条件判断和循环可以实现非常复杂的逻辑。
- 如果`没有return语句`，函数执行完毕后也会返回结果，只是结果为undefined。
- JavaScript的函数也是一个对象，上述定义的abs()函数实际上是一个函数对象，而函数名abs可以视为指向该函数的变量。

- 第二种定义函数的方式如下：

``` javascript
var abs = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};
```
- 在这种方式下`function (x) { ...}`是一个匿名函数，它没有函数名。但是，这个匿名函数赋值给了变量abs，所以，通过变量abs就可以调用该函数。
- 两种定义完全等价，注意第二种方式按照完整语法需要在函数体末尾加一个`;`表示赋值语句结束。
- JavaScript允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题，虽然函数内部并不需要这些参数 
- 传入的参数比定义的少也没有问题

``` js
abs(); // 返回NaN
//此时abs(x)函数的参数x将收到undefined，计算结果为NaN。
```

- 要避免收到undefined，可以对参数进行检查

``` javascript
function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return-x;
    }
}
```

#### 消息对话框
- document.write()输入内容;
- JavaScript-警告（alert 消息对话框）
- JavaScript-确认（confirm 消息对话框）

``` javascript
confirm(str);

str：在消息对话框中要显示的文本
返回值: Boolean值
返回值:

当用户点击"确定"按钮时，返回true
当用户点击"取消"按钮时，返回false
注: 通过返回值可以判断用户点击了什么按钮
```

- prompt弹出消息对话框,通常用于询问一些需要与用户交互的信息

``` javascript
prompt(str1, str2);

str1: 要显示在消息对话框中的文本，不可修改
str2：文本框中的内容，可以修改
返回值:
- 点击确定按钮，文本框中的内容将作为函数返回值
- 点击取消按钮，将返回null
```

- open() 方法可以查找一个已经存在或者新建的浏览器窗口。

``` javascript
window.open([URL], [窗口名称], [参数字符串])

URL：可选参数，在窗口中要显示网页的网址或路径。如果省略这个参数，或者它的值是空字符串，那么窗口就不显示任何文档。
窗口名称：可选参数，被打开窗口的名称。
1.该名称由字母、数字和下划线字符组成。
2."_top"、"_blank"、"_self"具有特殊意义的名称。
   _blank：在新窗口显示目标网页
   _self：在当前窗口显示目标网页
   _top：框架网页中在上部窗口中显示目标网页
3.相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同
4.name 不能包含有空格
参数字符串：可选参数，设置窗口参数，各参数用逗号隔开。
```

- close()关闭窗口

``` javascript
用法：
window.close();   //关闭本窗口
或
<窗口对象>.close();   //关闭指定的窗口
```

#### arguments
- arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数
- 取得参数,与数组类似的访问方法
```js
function foo(x) {
    console.log('x = ' + x); // 10
    for (var i=0; i
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);
```

- 利用arguments，你可以获得调用者传入的所有参数，即使函数不定义任何参数，还是可以拿到参数的值：

``` javascript
function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x :-x;
}

abs(); // 0
abs(10); // 10
abs(-9); // 9
```

- 实际上arguments最常用于判断传入参数的个数。你可能会看到这样的写法：

``` javascript
// foo(a[, b], c)
// 接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null：
function foo(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是a和b，c为undefined
        c = b; // 把b赋给c
        b = null; // b变为默认值
    }
    // ...
}

```
- 要把中间的参数b变为“可选”参数，就只能通过arguments判断，然后重新调整参数并赋值。

### 变量作用域与解构赋值
- 如果一个变量在函数体内部申明，则该变量的作用域为整个函数体，在函数体外不可引用该变量
- 不同函数内部的同名变量互相独立，互不影响
- JavaScript的函数可以嵌套，内部函数可以访问外部函数定义的变量，反过来则不行
- JavaScript的函数在查找变量时从自身函数定义开始，从“内”向“外”查找。如果内部函数定义了与外部函数重名的变量，则内部函数的变量将“屏蔽”外部函数的变量。

#### 全局变量，命名空间
- 全局变量会绑定到window上，不同的JavaScript文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。
- 减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中；
- 把自己的代码全部放入唯一的名字空间MYAPP中，会大大减少全局变量冲突的可能

#### 局部作用域
- 用let替代var可以申明一个块级作用域的变量;

#### 常量
- js标准引入了新的关键字const来定义常量，const与let都具有块级作用域

### 方法
- 在一个对象中绑定函数，称为这个对象的方法

``` javascript
//写个age()方法，返回xiaoming的年龄：
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y- this.birth;
    }
};

xiaoming.age; // function xiaoming.age()
xiaoming.age(); // 今年调用是25,明年调用就变成26了
```

- 绑定到对象上的函数称为方法，和普通函数也没啥区别，但是它在内部使用一个this关键字
- 在一个方法内部，this是一个特殊变量，它始终指向当前对象，也就是xiaoming这个变量
- this.birth可以拿到xiaoming的birth属性

- 让我们拆开写：

``` javascript
function getAge() {
    var y = new Date().getFullYear();
    return y- this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 25, 正常结果
getAge(); // NaN
```
- 如果以对象的方法形式调用，比如xiaoming.age()，该函数的this指向被调用的对象，也就是xiaoming，这是符合我们预期的。
- 如果单独调用函数，比如getAge()，此时，该函数的this指向全局对象，也就是window。

- 更坑爹的是，如果这么写：
``` js
var fn = xiaoming.age; // 先拿到xiaoming的age函数
fn(); // NaN
```
- 也是不行的！要保证this指向正确，必须用obj.xxx()的形式调用!
- 由于这是一个巨大的设计错误，要想纠正可没那么简单。

- ECMA决定，在strict模式下让函数的this指向undefined，因此，在strict模式下，你会得到一个错误：

``` javascript
'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y- this.birth;
    }
};

var fn = xiaoming.age;
fn(); // Uncaught TypeError: Cannot read property 'birth' of undefined
```
- 这个决定只是让错误及时暴露出来，并没有解决this应该指向的正确位置。

- 有些时候，喜欢重构的你把方法重构了一下：

``` javascript
'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y- this.birth;
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // Uncaught TypeError: Cannot read property 'birth' of undefined
```
- 结果又报错了！原因是this指针只在age方法的函数内指向xiaoming，在函数内部定义的函数，this又指向undefined了！（在非strict模式下，它重新指向全局对象window！）

- 修复的办法也不是没有，我们用一个that变量首先捕获this：

``` javascript
'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this;		// 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y- that.birth;		// 用that而不是this
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // 25
```
- 用`var that = this`，你就可以放心地在方法内部定义其他函数，而不是把所有语句都堆到一个方法中

#### apply()
- 指定函数的this指向哪个对象，可以用函数本身的apply方法
- 第一个参数就是需要绑定的this变量
- 第二个参数是Array，表示函数本身的参数


``` javascript
//用apply修复getAge()调用：
function getAge() {
    var y = new Date().getFullYear();
    return y- this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 25
getAge.apply(xiaoming, []);		// 25, this指向xiaoming, 参数为空
```

#### call()
- 另一个与apply()类似的方法是call()，唯一区别是：
- apply()把参数打包成Array再传入；
- call()把参数按顺序传入。
- 比如调用Math.max(3, 5, 4)，分别用apply()和call()实现如下：

``` javascript
Math.max.apply(null, [3, 5, 4]); // 5
Math.max.call(null, 3, 5, 4); // 5
```
- 对普通函数调用，我们通常把this绑定为null

#### 装饰器
- 利用apply()可以动态地改变函数的行为
- JavaScript的所有对象都是动态的，即使内置的函数，我们也可以重新指向新的函数。
``` js
//假定想统计代码共调用了多少次parseInt()，可以把所有的调用都找出来，然后手动加上count += 1；
//最佳方案是用我们自己的函数替换掉默认的parseInt()：
'use strict';

var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};

// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
console.log('count = ' + count); // 3
```

### 高阶函数
- 函数其实都指向某个变量，既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。
- 编写高阶函数，就是让函数的参数能够接收别的函数
- 简单的高阶函数：

``` javascript
function add(x, y, f) {
    return f(x) + f(y);
}
```

#### map/reduce
- 由于map()方法定义在JavaScript的Array中，我们调用Array的map()方法，传入我们自己的函数，就得到了一个新的Array作为结果：

``` javascript
'use strict';
function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(results);
```
- 注意：map()传入的参数是pow，即函数对象本身
- map()作为高阶函数，事实上它把运算规则抽象了，因此，我们不但可以计算简单的f(x)=x2，还可以计算任意复杂的函数，比如，把Array的所有数字转为字符串：
``` js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
```

#### raduc
- Array的reduce()把一个函数作用在这个Array的[x1, x2,x3...]上，
- 这个函数必须接收两个参数
- reduce()把结果继续和序列的下一个元素做累积计算，其效果就是：
``` js
[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
```

- 比方说对一个Array求和，就可以用reduce实现

``` javascript
var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) { 
    return x + y;
}); // 25
```

#### filter
- 它用于把Array的某些元素过滤掉，然后返回剩下的元素。
- Array的filter()也接收一个函数。
- 和map()不同的是，filter()把传入的函数依次作用于每个元素，
- 然后根据返回值是true还是false决定保留还是丢弃该元素。 

在一个Array中，删掉偶数，只保留奇数，可以这么写
``` js
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; // [1, 5, 9, 15]
```

把一个Array中的空字符串删掉，可以这么写：
``` js
var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});
r; // ['A', 'B', 'C']
```

#### 回调函数
- filter()接收的回调函数，其实可以有多个参数。通常我们仅使用第一个参数，表示Array的某个元素。回调函数还可以接收另外两个参数，表示元素的位置和数组本身;
``` js
var arr = ['A', 'B', 'C'];
var r = arr.filter(function (element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C'
    console.log(index); // 依次打印0, 1, 2
    console.log(self); // self就是变量arr
    return true;
});
```



``` js
- 利用filter，可以巧妙地去除Array的重复元素：
'use strict';
var
    r,
    arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];

r = arr.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});

console.log(r.toString());
//去除重复元素依靠的是indexOf总是返回第一个元素的位置，后续的重复元素位置与indexOf返回的位置不相等，因此被filter滤掉了。
```

#### sort
- 对于两个元素x和y，如果认为x < y，则返回-1，如果认为x == y，则返回0，如果认为x > y，则返回1
- -1就是前面的在前,1就是后面的在前;

### 闭包
#### 函数作为返回值
- 高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回;
- 返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量

如果一定要引用循环变量怎么办？方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变：
```js
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

f1(); // 1
f2(); // 4
f3(); // 9
```

### generator
- generator和函数不同的是，generator由function*定义（注意多出的*号），并且，除了return语句，还可以用yield返回多次
//太难了  回头再去学习!!!

## 内置对象
封装好可直接调用的对象

### Array
- 索引从零开始
- new Array() 创建
- (n)可以放数值,表示数组长度
- array.length可获得数组长度 
- 数组方法有：push(),pop(),unshift(),shift()
- 数组转字符串：join()返回字符串;
- 数组反序：reverse()返回数组
- 排序sort：`return a-b`
- concat 连接两个或多个数组,返回数组
- slice(stard,end)截取start到end-1的数组,返回数组
- splice(index,count)删除,插入, 替换;返回被删除的元素数组
- 位置方法：indexOf(searchvalue,startIndex),lastIndexOf()前后后前,没找到返回-1,找到返回索引

### String
- charAt(index)要得到的字符本身
- charCodeAt(index)index位置的字符编码
- indexOf('')从字符串中搜索给定的字符串,返回字符串位置,没找到fN返回-1
- lastindexOf('')相反;
- slice(stard,end)同理,截取某段
- substring参数为负时,自动转换为0;自动小的为开始的数
- substr(start,len) 截取的字符串总数,start为负时,将传入的负值与字符串的长度相加,len负数时返回空字符串;
- split(separator)把一个字符串分割成字符串数组,返回Array (separator:必须,分隔符)

```js
var date= '2016/05/05';
var dataArr  date.split("/")
//根据括号中的特殊符号分隔
```
- replace(regexp,replacement)替换,返回新的String,不修改原来的字符串(第一个参数,你要替换谁,第二个参数替换成什么)
- toUpperCase()字符串全部大写
- toLowerCase()全部小写

## 标准对象
- 用typeof操作符获取对象的类型，它总是返回一个字符串
- number、string、boolean、function和undefined有别于其他类型。特别注意null的类型是object，Array的类型也是object，
- 如我们用typeof,将无法区分出null、Array和通常意义上的object
### 包装对象
- 包装对象用new创建,
- 包装对象看上去和原来的值一模一样，显示出来也是一模一样，但他们的类型已经变为object了！所以，包装对象和原始值用===比较会返回false

``` javascript

- 不要使用new Number()、new Boolean()、new String()创建包装对象；
- 用parseInt()或parseFloat()来转换任意类型到number；
- 用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；
- 通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；
- typeof操作符可以判断出number、boolean、string、function和undefined；
- 判断Array要使用Array.isArray(arr)；
- 判断null请使用myVar === null；
- 判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
- 函数内部判断某个变量是否存在用typeof myVar === 'undefined'。
最后有细心的同学指出，任何对象都有toString()方法吗？null和undefined就没有！确实如此，这两个特殊值要除外，虽然null还伪装成了object类型。
更细心的同学指出，number对象调用toString()报SyntaxError：
- 123.toString(); // SyntaxError 遇到这种情况，要特殊处理一下：
- 123..toString(); // '123', 注意是两个点！
- (123).toString(); // '123'

```

### Date
在JavaScript中，Date对象用来表示日期和时间。

``` javascript
要获取系统当前时间,本机操作系统的时间，用：
var now = new Date();
```

- 如果要创建一个指定日期和时间的Date对象，可以用：

``` javascript
var d = new Date(2015, 5, 19, 20, 15, 30, 123);
d; // Fri Jun 19 2015 20:15:30 GMT+0800 (CST)
```

- 第二种创建一个指定日期和时间的方法是解析一个符合ISO 8601格式的字符串：

``` javascript
var d = Date.parse('2015-06-24T19:49:22.875+08:00');
d; // 1435146562875
```

- 但它返回的不是Date对象，而是一个时间戳。不过有时间戳就可以很容易地把它转换为一个Date：

``` javascript
var d = new Date(1435146562875);
d; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
d.getMonth(); // 5
```
- 使用Date.parse()时传入的字符串使用实际月份01~12，转换为Date对象后getMonth()获取的月份值为0~11
- JavaScript的Date对象月份值从0开始，牢记0=1月，1=2月，2=3月，……，11=12月

### JSON
- number：和JavaScript的number完全一致；
- boolean：就是JavaScript的true或false； 
- string：就是JavaScript的string;
- null：就是JavaScript的null； 
- array：就是JavaScript的Array表示方式——[]；
- object：就是JavaScript的{ ... }表示方式。
`为了统一解析，JSON的字符串规定必须用双引号""，Object的键也必须用双引号""。`

#### 序列化
- JSON.stringify

``` javascript
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
```

变成JSON.stringify(xiaoming, null, '  ');
``` json
{
  "name": "小明",
  "age": 14,
  "gender": true,
  "height": 1.65,
  "grade": null,
  "middle-school": "\"W3C\" Middle School",
  "skills": [
    "JavaScript",
    "Java",
    "Python",
    "Lisp"
  ]
}  
```

第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入Array
``` json
JSON.stringify(xiaoming, ['name', 'skills'], '  ');
结果：
{
  "name": "小明",
  "skills": [
    "JavaScript",
    "Java",
    "Python",
    "Lisp"
  ]
}
```

还可以传入一个函数，这样对象的每个键值对都会被函数先处理：
``` js
function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}
JSON.stringify(xiaoming, convert, '  ');
```

上面的代码把所有**属性值**都变成大写：
``` json
{
  "name": "小明",
  "age": 14,
  "gender": true,
  "height": 1.65,
  "grade": null,
  "middle-school": "\"W3C\" MIDDLE SCHOOL",
  "skills": [
    "JAVASCRIPT",
    "JAVA",
    "PYTHON",
    "LISP"
  ]
}
```


如果我们还想要精确控制如何序列化小明，可以给xiaoming**定义一个toJSON()**的方法，直接返回JSON应该序列化的数据：

``` javascript
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};
```


``` js
JSON.stringify(xiaoming); // '{"Name":"小明","Age":14}'
```

#### 反序列化
拿到一个JSON格式的字符串，我们直接用JSON.parse()把它变成一个JavaScript对象：

``` javascript
JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
JSON.parse('true'); // true
JSON.parse('123.45'); // 123.45
JSON.parse()还可以接收一个函数，用来转换解析出的属性：
```



``` javascript
'use strict';
var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}

{"name":"小明同学","age":14}
```

## 浏览器
### 浏览器窗口可视区域大小
- 获得浏览器窗口的尺寸（浏览器的视口，不包括工具栏和滚动条）的方法:
1. 对于IE9+、Chrome、Firefox、Opera 以及 Safari：

```
- window.innerHeight- 浏览器窗口的内部高度
- window.innerWidth- 浏览器窗口的内部宽度
```

2. 对于 Internet Explorer 8、7、6、5：
```
- document.documentElement.clientHeight表示HTML文档所在窗口的当前高度。
- document.documentElement.clientWidth表示HTML文档所在窗口的当前宽度。
```

- Document对象的body属性对应HTML文档的`<body>`标签
```
- document.body.clientHeight
- document.body.clientWidth
```

- 在不同浏览器都实用的 JavaScript 方案:
```
var w= document.documentElement.clientWidth
      || document.body.clientWidth;
var h= document.documentElement.clientHeight
      || document.body.clientHeight;
```

### 网页尺寸scrollHeight
- scrollHeight和scrollWidth，获取网页内容高度和宽度。

一、针对IE、Opera:
- scrollHeight 是网页内容实际高度，可以小于 clientHeight。

二、针对NS、FF:
- scrollHeight 是网页内容高度，不过最小值是 clientHeight。也就是说网页内容实际高度小于 clientHeight 时，scrollHeight 返回 clientHeight 。

三、浏览器兼容性
```
var w=document.documentElement.scrollWidth
   || document.body.scrollWidth;
var h=document.documentElement.scrollHeight
   || document.body.scrollHeight;
```
注意:区分大小写
- scrollHeight和scrollWidth还可获取Dom元素中内容实际占用的高度和宽度

### 网页尺寸offsetHeight
offsetHeight和offsetWidth，获取网页内容高度和宽度(包括滚动条等边线，会随窗口的显示大小改变)。

### 网页卷去的距离与偏移量
```
scrollLeft:设置或获取位于给定对象左边界与窗口中目前可见内容的最左端之间的距离 ，即左边灰色的内容。
scrollTop:设置或获取位于对象最顶端与窗口中可见内容的最顶端之间的距离 ，即上边灰色的内容。
offsetLeft:获取指定对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置 。
offsetTop:获取指定对象相对于版面或由 offsetParent 属性指定的父坐标的计算顶端位置 。

```
1. 区分大小写
2. offsetParent：布局中设置postion属性(Relative、Absolute、fixed)的父容器，从最近的父节点开始，一层层向上找，直到HTML的body。
一、值
```
offsetHeight = clientHeight + 滚动条 + 边框。
```

二、浏览器兼容性
```
var w= document.documentElement.offsetWidth
    || document.body.offsetWidth;
var h= document.documentElement.offsetHeight
    || document.body.offsetHeight;
```

### 浏览器BOM对象
#### window对象方法
- window对象不但充当全局,而且还表示浏览器窗口;
- window对象有innerWidth和innerHeight属性，可以获取浏览器窗口的内部宽度和高度
- outerWidth和outerHeight属性，可以获取浏览器窗口的整个宽高。

#### JavaScript-打开新窗口（window.open）
- open() 方法可以查找一个已经存在或者新建的浏览器窗口。
``` js
window.open([URL], [窗口名称], [参数字符串])
```

#### navigator
navigator对象表示浏览器的信息，最常用的属性包括：

- navigator.appName：浏览器名称；
- navigator.appVersion：浏览器版本；
- navigator.language：浏览器设置的语言；
- navigator.platform：操作系统类型；
- navigator.userAgent：浏览器设定的User-Agent字符串。
```javascript
console.log('appName = ' + navigator.appName);
console.log('appVersion = ' + navigator.appVersion);
console.log('language = ' + navigator.language);
console.log('platform = ' + navigator.platform);
console.log('userAgent = ' + navigator.userAgent);
```

#### screen
screen对象表示屏幕的信息，常用的属性有：

- screen.width：屏幕宽度，以像素为单位；
- screen.height：屏幕高度，以像素为单位；
- screen.colorDepth：返回颜色位数，如8、16、24。

#### document
- document对象表示当前页面。由于HTML在浏览器中以DOM形式表示为树形结构，document对象就是整个DOM树的根节点。
- document的title属性是从HTML文档中的xxx读取的，但是可以动态改变：
```js
document.title = '努力学习JavaScript!';
```

- getElementById()和getElementsByTagName()可以按ID获得一个DOM节点和按Tag名称获得一组DOM节点

#### cookie
document对象还有一个cookie属性，可以获取当前页面的Cookie。
Cookie是由服务器发送的key-value标示符。因为HTTP协议是无状态的，但是服务器要区分到底是哪个用户发过来的请求，就可以用Cookie来区分。
当一个用户成功登录后，服务器发送一个Cookie给浏览器，例如user=ABC123XYZ(加密的字符串)...，此后，浏览器访问该网站时，会在请求头附上这个Cookie，服务器根据Cookie即可区分出用户。

- Cookie还可以存储网站的一些设置，例如，页面显示的语言等等。
- JavaScript可以通过document.cookie读取到当前页面的Cookie：
```js
  document.cookie; // 'v=123; remember=true; prefer=zh'
```

- 服务器在设置Cookie时可以使用httpOnly，设定了httpOnly的Cookie将不能被JavaScript读取。
- 这个行为由浏览器实现，主流浏览器均支持httpOnly选项,为了确保安全，服务器端在设置Cookie时，应该始终坚持使用httpOnly;

#### 屏幕宽高
- window.screen 对象包含有关用户屏幕的信息。
- screen.height 返回屏幕分辨率的高
- screen.width 返回屏幕分辨率的宽
- 单位以像素计。
- window.screen 对象在编写时可以不使用 window 这个前缀。 我们来获取屏幕的高和宽，代码如下:

```js
<script type="text/javascript">
  document.write( "屏幕宽度："+screen.width+"px<br />" );
  document.write( "屏幕高度："+screen.height+"px<br />" );
</script>
```

#### 屏幕可用高和宽度
- screen.availWidth 属性返回访问者屏幕的宽度，以像素计，减去界面特性，比如任务栏。
- screen.availHeight 属性返回访问者屏幕的高度，以像素计，减去界面特性，比如任务栏。

- 不同系统的任务栏默认高度不一样，及任务栏的位置可在屏幕上下左右任何位置，所以有可能可用宽度和高度不一样。
我们来获取屏幕的可用高和宽度，代码如下：
```js
<span class="lf"><br><span class="hd-lf" style="display: none">
</span></span>document.write("可用宽度：" + screen.availWidth);<span class="lf"><br><span class="hd-lf" style="display: none">
</span></span>document.write("可用高度：" + screen.availHeight);<span class="lf"><br><span class="hd-lf" style="display: none">
</span></span>
```

## DOM操作
### NodeList类数组对象
- 保存一组有序节点
- 可用方括号语法访问,有item方法和length属性
- 可以用childNodes输出类数组

### HTMLCollection类数组对象
- 提供了访问诸如表单、图像和链接等文档元素的便捷方式
- 用它可以通过元素在文档中的位置或它们的 id 属性、name属性获取元素
- document.getElementsByTagName()
- document.images
- document.scripts
- document.links
- document.forms
- 有一个namedItem方法,返回id为xx的元素,没有就返回name为xx的元素。
- 类数组对象中可以通过item()方法来获取集合中指定位置的对象

### NameNodeMap 类数组对象
- 是attribute元素属性集合 
- 通过`Ele.attributes`获取
- 类数组对象中可以通过item()方法来获取集合中指定位置的对象

### 创建DOM
- `document.createElement()` 新增元素节点方法,可返回一个 Element 对象,且可以实现html5标签。
- `document.createTextNode()` 创建一个文本节点(返回新创建的 Text 节点)
- `document.createDocumentFragment()` 创建文档片段
- `document.createent()` 传入一个注释节点
- `ele.innerHTML` 设置或获取起始到结束标签之间的内容。插入`script`有限制
- `ele.outerHTML` 返回调用它的元素及其所有子节点的HTML标签
- `innerText` 设置或获取起始到结束标签之间的所有文本节点,设置时会替换让标签也以文本形式显示
- `outerText` 设置或获取调用它的元素及其所有子节点的文本节点,设置时会替换让标签也以文本形式显示
- `textContent` 适用于火狐浏览器，这样可以自动对字符串进行HTML编码，保证无法设置任何HTML标签;
- 区别在于:读取属性时，innerText不返回隐藏元素的文本，而textContent返回所有文本。(另外注意IE<9不支持textContent)
- outerHtML

### 选择DOM
- firstChild
- firstElementChild
- lastElementChild
- nextElementSibling
- previousElementSibling
- children[0] 遍历所有元素节点
- ownerDocument
- childElementCount 返回元素的子元素的数量
- childNodes 获取所有子节点

### 查找DOM
``` js
- document.getElementById() //结果是div元素对象
- document.getElementsByName() //返回结点对象集合,结果是类数组
- document.getElementsByTagName() //返回带有指定标签名的节点对象的集合,'*'所有元素,'!'注释元素
- document.getElementsByClassName() //方法可返回带有指定类名的对象的集合，如果要获取某个元素的话，一定要带上下标
- document.querySelector() //css选择器,不存在,则返回null
- document.querySelectorAll() //不存在,则返回[]空集合
- nodeObject.nextSibling //之后的兄弟节点
- nodeObject.previousSibling //之前的兄弟节点
```

- 由于ID在HTML文档中是唯一的
- 所以`document.getElementById()`可以直接定位唯一的一个DOM节点。
- document.getElementsByTagName()和document.getElementsByClassName()总是返回一组DOM节点。
- 要精确地选择DOM，可以先定位父节点，再从父节点开始选择，以缩小范围。
<img src = "/JS/4.png">

``` js
var test = document.getElementById('test');// 返回ID为'test'的节点
var trs = document.getElementById('test-table').getElementsByTagName('tr');
// 先定位ID为'test-table'的节点，再返回其内部所有tr节点

var reds = document.getElementById('test-div').getElementsByClassName('red');
// 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点

var cs = test.children();
// 获取节点test下的所有直属子节点:

var first = test.firstElementChild();
var last = test.lastElementChild();
// 获取节点test下第一个、最后一个子节点：

var q1 = document.querySelector('#q1');
// 通过querySelector获取ID为q1的节点

var ps = q1.querySelectorAll('div.highlighted > p');
// 通过querySelectorAll获取q1节点内的符合条件的所有节点
```

### 操作DOM
#### appendChild
- 把一个子节点添加为父节点的最后一个子节点。
- 如果插入的js节点已经存在于当前的文档树，节点会从原先的位置删除，插入到新的位置(剪切操作)
- 一般会从零创建一个新的节点，然后插入到指定位置,返回新插入的节点


``` javascript
var list = document.getElementById('list'),
    haskell = document.createElement('p');//创建p标签

haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.appendChild(haskell); //插入为list的最后一个子节点
```

#### insertBefore
- 已有子节点之前插入新的子节点,`parentElement.insertBefore(新的节点newElement, 参照位置referenceElement)`;
- 子节点会插入到referenceElement之前,返回新插入的节点
- 第二个参数为null可实现`appendChild()`方法
- 第二个参数为xx.firstElementsChild可实现插入第一个节点之前
- 第二个参数为xx.lastElementsChild可实现插入最后一个节点之前

#### replaceChild()
- 用新节点替换元素的子节点,替换的节点必须是使用该方法的节点的子节点
- `el.replaceChild(要插入的节点,被替换的节点)`,返回被替换的节点

```javascript
node.replaceChild (newnode,oldnew ) 
```

#### cloneNode()
- 创建节点的拷贝,并返回该副本
- 拷贝的节点要有父节点,没有则需要通过一定的方法对其进行添加
- 参数布尔，默认false，不拷贝子节点

#### normalize()
- 合并相邻的Text
- `div.normalize()`div的文本合并

#### splitText()
- 按指定的位置把文本节点分割为两个节点,并返回新的节点
- div.firstChild.splitText(5)接受一个参数,截取到数字之前


### 删除DOM
#### removeChild()
- 必须要有参数,返回删除的子节点

```javascript
// 拿到待删除节点:
var self = document.getElementById('toRemove');
// 拿到父节点:
var parent = self.parentElement;
// 删除:
var removed = parent.removeChild(self);
removed === self; // true
```
- 注意到删除后的节点虽然不在文档树中了，但其实它还在内存中，可以随时再次被添加到别的位置。
- 当你遍历一个父节点的子节点并进行删除操作时，要注意`children`属性是一个**只读属性**，并且它在子节点变化时会**实时更新。**

#### removeNode()
- IE的私有实现
- 将目标节点从文档中删除,返回目标节点
- 参数布尔，默认false，仅删除目标节点，保留子节点

### 设置元素样式
```javascript
- ele.style.styleName = styleValue
name设置的样式名称,Value设置的样式值
```

### 添加类
- `ele.className()`返回元素的class属性
- `ele.className=''`设置ele元素的class属性
- `className`重新设置类,原来的被替换;

## DOM属性
### 固有属性
### 自定义属性
- 浏览器事先为元素绑定好的属性叫做固有属性，可以在控制台Properties区进行查看
- 不能通过`.`方法查询到,返回undefined
- 自定义属性自动转化为全小写
- 自定义属性同名属性,后面的被干掉
- `div.attributes.getNamedItem('xxx').nodeValue` 获得指定的属性节点
- `div.attributes.getNamedItem('id').nodeValue` 获得指定的属性节点
- `div.attributes['id'].nodeValue` 获得指定的属性节点
- `div.attributes.removeNamedItem('yyy')` 移除一个`yyy`属性。
- 创建一个自定义属性:
```
var attr = document.createAttribute('data-title');
attr.value = 'ddd'
div.attributes.setNamedItem(attr)
```
<img src = "/JavaScript/2.png">



### 操作属性
- 对于自带属性`标签.属性`可以取得属性,`标签.class`除外

``` javascript
- 获取
elementNode.getAttribute("name")  //通过元素节点获得指定属性名的属性的值
elementNode.name
//获取style和onclick两种方法有差异。

- 设置
elementNode.setAttribute("属性名","属性值") //为元素添加指定属性,并赋值，或者把一个现有的属性设定为指定的值

- 删除
elementNode.removeAttribute("name") //输入属性名即可删除属性
```

### 节点属性
在文档对象模型 (DOM) 中，每个节点都是一个对象。
DOM 节点有三个重要的属性：
1. nodeName：节点的名称
2. nodeValue：节点的值
3. nodeType：节点的类型

#### nodeName 属性: 节点的名称，是只读的。
1. 元素节点的 nodeName 与标签名相同
2. 属性节点的 nodeName 是属性的名称
3. 文本节点的 nodeName 永远是 #text
4. 文档节点的 nodeName 永远是 #document

#### nodeValue 属性：节点的值
1. 元素节点的 nodeValue 是 undefined 或 null
2. 文本节点的 nodeValue 是文本自身
3. 属性节点的 nodeValue 是属性的值

#### nodeType 属性: 节点的类型是只读的:

``` javascript
元素类型    节点类型
  元素          1
  属性          2
  文本          3
  注释          8
  文档          9
```

### 字符串属性
- 常见的属性: `id,class,title,href,src,lang,dir,naem,value,accesskey`
- `<bod dir= "RTL"></bod>`
- `className`可以设置class
- data用dataset获取
- classList中有方法：`ele.classList.add()`,`ele.classList.remove()`,`ele.classList.toggle()`,
- `ele.classList.contains()`

### 操作表单
HTML表单的输入控件主要有以下几种：
- 文本框，对应的<input type="text">，用于输入文本；
- 口令框，对应的<input type="password">，用于输入口令；
- 单选框，对应的<input type="radio">，用于选择一项；
- 复选框，对应的<input type="checkbox">，用于选择多项；
- 下拉框，对应的`select`，用于选择一项；
- 隐藏文本，对应的<input type="hidden">用户不可见，但表单提交时会把隐藏文本发送到服务器。

### 获取值
- 获得了一个<input>节点的引用，就可以直接调用value获得对应的用户输入值：
```javascript
var input = document.getElementById('email');
input.value; // '用户输入的值'
```
对于单选框和复选框，value属性返回的永远是HTML预设的值，而我们需要获得的实际是用户是否“勾上了”选项，所以应该用checked判断：


``` javascript
//  Monday
//  Tuesday
var mon = document.getElementById('monday');
var tue = document.getElementById('tuesday');
mon.value; // '1'
tue.value; // '2'
mon.checked; // true或者false
tue.checked; // true或者false
```

### 设置值
设置值和获取值类似，对于text、password、hidden以及select，直接设置value就可以：

``` javascript
var input = document.getElementById('email');
input.value = 'test@example.com'; // 文本框的内容已更新
	//对于单选框和复选框，设置checked为true或false即可
```

### HTML5控件
HTML5新增了大量标准控件，常用的包括date、datetime、datetime-local、color等，都用input标签：


``` javascript
2015/07/01
input type="date" value="2015-07-01"
 
2015/07/01 02:03:04
input type="datetime-local" value="2015-07-01T02:03:04"
```

- 不支持HTML5的浏览器无法识别新的控件，会把它们当做`type="text"`来显示。
- 支持HTML5的浏览器将获得格式化的字符串。例如，type="date"类型的input的value将保证是一个有效的YYYY-MM-DD格式的日期，或者空字符串。

### 提交表单
- 方式一是通过元素的submit()方法提交一个表单，例如，响应一个的click事件，在JavaScript代码中提交表单：

``` javascript
    form id="test-form"
    input type="text" name="test"
    button type="button" onclick="doSubmitForm()">Submit
    from
    
    function doSubmitForm() {
        var form = document.getElementById('test-form');
        // 可以在此修改form的input...
        rm:
        form.submit();
    }
    
```
  这种方式的缺点是扰乱了浏览器对form的正常提交。浏览器默认点击时提交表单，或者用户在最后一个输入框按回车键。因此，第二种方式是响应本身的onsubmit事件，在提交form时作修改：


``` javascript

    
    button type="submit">Submit button

function checkForm() {
    var form = document.getElementById('test-form');
    // 可以在此修改form的input...
    // 继续下一步:
    return true;
}
```
- 注意要return true来告诉浏览器继续提交，如果return false，
- 浏览器将不会继续提交form，这种情况通常对应用户输入有误，提示用户错误信息后终止提交form。
- 在检查和修改时，要充分利用****来传递数据。

很多登录表单希望用户输入用户名和口令，但是，安全考虑，提交表单时不传输明文口令，而是口令的MD5。普通JavaScript开发人员会直接修改：

``` javascript
    form id="login-form" method="post" onsubmit="return checkForm()">
    
    input type="password" id="password" name="password">
    Submit
    from>
    
function checkForm() {
    var pwd = document.getElementById('password');
     把用户输入的明文变为MD5:
    pwd.value = toMD5(pwd.value);
     继续下一步:
    return true;
}

```
- 这个做法看上去没啥问题，但用户输入了口令提交时，口令框的显示会突然从几个*变成32个*（因为MD5有32个字符）。

要想不改变用户的输入，可以利用实现：

``` javascript
form id="login-form" method="post" onsubmit="return checkForm()">
    
input type="password" id="input-password">
    
button type="submit">Submit


function checkForm() {
    var input_pwd = document.getElementById('input-password');
    var md5_pwd = document.getElementById('md5-password');
     把用户输入的明文变为MD5:
    md5_pwd.value = toMD5(input_pwd.value);
     继续下一步:
    return true;
}

```
注意到id为md5-password的标记了name="password"，而用户输入的id为input-password的没有name属性,**没有name属性的的数据不会被提交**

### 操作文件
- 在HTML表单中，可以上传文件的唯一控件就是<input type="file">
- 注意：当一个表单包含<input type="file">时，表单的enctype必须指定为multipart/form-data，method必须指定为post，浏览器才能正确编码并以multipart/form-data格式发送表单的数据。
- 出于安全考虑，浏览器只允许用户**点击**<input type="file">来选择本地文件
用JavaScript对<input type="file">的**value赋值**是没有任何效果的。当用户选择了上传某个文件后，JavaScript也无法获得该文件的真实路径
上传的文件都由后台服务器处理，JavaScript可以在提交表单时对文件扩展名做检查，以便防止用户上传无效格式的文件：


``` javascript
var f = document.getElementById('test-file-upload');
var filename = f.value; // 'C:\fakepath\test.png'
if (!filename || !(filename.endsWith('.jpg') || filename.endsWith('.png') || filename.endsWith('.gif'))) {
    alert('Can only upload image file.');
    return false;
}
```

#### File API
由于JavaScript对用户上传的文件操作非常有限，尤其是无法读取文件内容，使得很多需要操作文件的网页不得不用Flash这样的第三方插件来实现。
随着HTML5的普及，新增的File API允许JavaScript读取文件内容，获得更多的文件信息。HTML5的File API提供了File和FileReader两个主要对象，可以获得文件信息并读取文件。

下面的例子演示了如何读取用户选取的图片文件，并在一个中预览图像：


``` javascript
var
    fileInput = document.getElementById('test-image-file'),
    info = document.getElementById('test-file-info'),
    preview = document.getElementById('test-image-preview');
// 监听change事件:
fileInput.addEventListener('change', function () {
    // 清除背景图片:
    preview.style.backgroundImage = '';
    // 检查文件是否选择:
    if (!fileInput.value) {
        info.innerHTML = '没有选择文件';
        return;
    }
    // 获取File引用:
    var file = fileInput.files[0];
    // 获取File信息:
    info.innerHTML = '文件: ' + file.name + '' +
                     '大小: ' + file.size + '' +
                     '修改: ' + file.lastModifiedDate;
    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
        alert('不是有效的图片文件!');
        return;
    }
    // 读取文件:
    var reader = new FileReader();
    reader.onload = function(e) {
        var
            data = e.target.result; // 'data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...'            
        preview.style.backgroundImage = 'url(' + data + ')';
    };
    // 以DataURL的形式读取文件:
    reader.readAsDataURL(file);
});
```

- 上面的代码演示了如何通过HTML5的File API读取文件内容。以DataURL的形式读取到的文件是一个字符串，类似于data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...，常用于设置图像。如果需要服务器端处理，把字符串base64,后面的字符发送给服务器并用Base64解码就可以得到原始文件的二进制内容。

#### 回调
- 上面的代码还演示了JavaScript的一个重要的特性就是**单线程执行模式**。在JavaScript中，浏览器的JavaScript执行引擎在执行JavaScript代码时，总是以单线程模式执行，也就是说，任何时候，JavaScript代码都不可能同时有多于1个线程在执行。

你可能会问，单线程模式执行的JavaScript，如何处理多任务？
- 在JavaScript中，执行多任务实际上都是**异步调用**，比如上面的代码：`reader.readAsDataURL(file)`

就会发起一个异步操作来读取文件内容。因为是异步操作，所以我们在JavaScript代码中就不知道什么时候操作结束，因此需要先设置一个回调函数：
```
reader.onload = function(e) {
    // 当文件读取完成后，自动调用此函数:
};
```
当文件读取完成后，JavaScript引擎将自动调用我们设置的回调函数。执行回调函数时，文件已经读取完毕，所以我们可以在回调函数内部安全地获得文件内容。

## BOM
BOM浏览器对象模型

### windows对象
- 所有的全局变量和方法都在window上
- window即是通过JavaScript访问浏览器的接口,还是ECMAScript规定的Global对象

#### window对象的方法
- `window.alert('content')` 弹出一个警告框
- `window.confirm('message') `显示一个带有指定消息和ok及取消的对话框:确定返回true,取消返回false
```
window.confirm("你确定要删除吗?")
```

- `window.prompt()`弹出输入框:确定则返回输入的内容,点击取消则返回null;
```
var mes = prompt("请输入你的星座:","处女座");
console.log(message);
```

- `window.open(pageURL,name,parameters)`打开一个新的浏览器窗口或查找一个已命名的窗口
 - 三个参数分别表示:子窗口路径,子窗口句柄,窗口参数(逗号隔开)
- `window.close()`关闭浏览器窗口

#### 超时调用setTimeout
指定的毫秒数后调用函数或者计算表达式
语法:`setInterval(code,millisec)`;
1. code：要调用的函数或要执行的代码串
2. millisec：周期性执行或调用表达式之间的时间间隔，以毫秒计（1s=1000ms）。
返回值:一个可以传递给 clearInterval()的ID, 从而取消对"代码"的周期性执行的值。


``` javascript
setTimeout(function(){
	alert("hello");
},2000)
---------
var fnCall = function(){
	alert("hello");	
}
setTimeout(fnCall,2000);
```

- `clearTimeout(id_of_setTimeout)` 清除超时调用

``` javascript
语法：clearTimeout(id_of_setTimeout)
参数说明:
id_of_setTimeout：由 setTimeout() 返回的 ID 值。
```
- setTimeout()只执行一次如果想多次执行,则调用本身即可;

#### 间歇调用setInterval(code,millisec)
- 每隔指定的时间执行一次代码,毫秒单位

``` javascript
setInterval(function(){
	num++;
},1000)
```
- `clearInterval(id_of_setInterval)` 清除间歇调用;


### location
#### location属性
- location提供与当前窗口加载文档有关信息,是window也是document的属性;
- 可以用`location.href`获取一个完整的URL：
```
http://www.example.com:8080/path/index.html?a=1&b=2#TOP
```

- 要获得URL各个部分的值，可以这么写：

``` javascript
location.protocol; // 'http'返回页面使用的协议;
location.host; // 'www.example.com'返回服务器名称和端口号(如果有);
location.port; // '8080'返回端口号;
location.pathname; // '/path/index.html'返回url中的目录和文件名;
location.search; // '?a=1&b=2'返回URL的查询字符串,字符串以问号开头;
location.hash; // '#TOP'返回锚点;
```

#### location对象
- 位置操作: location.href

``` javascript
setTimeout(function(){
	location.href ='index7.html'
},1000)
```
- 也可以修改url: `location.hash` `location.search`

- location.replace('url')重新定向url,不会生成历史记录`location.replace('index7.html')`
- 如果要重新加载当前页面，调用`location.reload()`方法非常方便。
- `location.reload(true)` 从服务器重新加载;建议放在最后一行

### history方法(back)
history对象记录了用户曾经浏览过的页面(URL)，并可以实现浏览器前进与后退相似导航的功能。


``` javascript
注意:从窗口被打开的那一刻开始记录，
每个浏览器窗口、每个标签页乃至每个框架，都有自己的history对象与特定的window对象关联。
window.history.[属性|方法]
注意：window可以省略
```

#### History 对象属性
- history 对象保存了用户在浏览器中访问页面的历史记录

``` javascript
history.back() 回到历史记录的上一步---history.go(-n) 
location.forward() 回到历史记录的下一步---history.go(n)  
length:返回浏览器历史表列中URL数量;

back()加载列表中前一个url
window.history.javascript();
window.history.forward();
go()加载某个具体页面
window.history.go(number);
```

### Location对象
location用于获取或设置窗体的URL，并且可以用于解析URL。


``` javascript
语法:
location.[属性|方法]
```
location对象属性图示：
location 对象属性：
location 对象方法：


#### screen对象
screen对象用于获取用户的屏幕信息。
屏幕宽高:
- screen.availWidth()
- screen.availHeught()

窗口宽高:
- window.innerWidth()
- window.innerHeight()
``` js
语法：
window.screen.属性
```

#### Navigator对象
- Navigator 对象包含有关浏览器的信息，通常用于检测浏览器与操作系统的版本
- Navigator对象的userAgent属性:识别浏览器名称,版本,引擎,以及操作系统
```
console.log(navigator.userAgent);
```

## 事件
- 文档和浏览器交互瞬间
- 在事件触发函数中,this是对此dom元素的引用
- 事件对象
- 事件对象绑定一个事件类型
- 事件句柄

### 事件流
<img src = "/JS/3.jpg">
- 事件冒泡 子-->父(文档) 最具体到不具体
- 事件捕获 父-->子 不具体到具体

### 事件委托
- 事件委托就是利用冒泡的原理，把事件加到父级上，触发执行效果
- 使用事件委托可以提高性能

### HTML事件
- `<button onclick = "alertWindow()">点击我</button>`
缺点:
1. 多元素绑定相同事件,效率低
2. 不建议在html中写js
3. 强耦合,不利于代码复用

### DOM0级事件
语法:`ele.事件=执行脚本` 
- 获取html元素,在DOM对象上绑定事件
- 可以是一个匿名函数,也可以是一个函数调用
- 把一个函数赋值给另一个时间的处理函数
- 简单,可跨浏览器使用
- 可添加多个顺序触发
- 有且只能绑定一个事件类型

``` javaScript
var btn =..... //选中元素
btn.onclik = function () {
	console.log(this)
	//this是对Dom元素的引用
}
btn.onclick = null; //删除onclick属性
```

### DOM2级事件处理
1. addEventListeber() 添加
2. `btn2.addEventListener('click',function () {},false)`两个函数接收三个参数()
3. 要处理的事件名，作为事件处理程序的函数，布尔值true捕获阶段调用,反之冒泡)
4. removeEventListner() 删除
5. `btn2.removeEventListener('click',dom2)` 解绑成功主要原因:保持函数里参数一致
6. 不需要 + 'on'
7. 可添加多个顺序触发
8. 优点: 松耦合,绑定多个事件,事件捕获和冒泡
<img src = "/JS/1.jpg">

### IE事件处理程序
- 默认事件冒泡
- attachEvent()添加事件,可添加多个
- detachEvent()删除事件

```JavaScript
var click = function () {
	alert("clicked")
}

btn.attachEvent("onclick",click);

btn.datachEvent("onclick",click)

```
- 函数接收两个两个参数:事件处理程序的名称和事件处理程序的函数
- 匿名函数this指向window

### 跨浏览器处理

``` javascript
    var EventUtil = {
//添加句柄
    	addHandler:function (element,type,handler) {
    		if (element.addEventListener) {
    			element.addEventListener(type,handler,false)
    		} else if(element.attachEvent){
    			element.attachEvent('on' + type,handler)
    		} else {
    		 	element['on'+type] = handler
    		}
    	},

//删除句柄
    	removeHandler:function (element,type,handler) {
    		if (element.removeEventListener) {
    			element.removeEventListener(type,handler,false)
    		} else if(element.detachEvent){
    			element.detachEvent('on' + type,handler)
    		} else {
    		 	element['on'+type] = null
    		}
    	}
    }
```
区别:
- IE采用冒泡型事件 Netscape使用捕获型事件、DOM使用先捕获后冒泡型事件
- 冒泡型事件模型： button->div->body (IE事件流)
- 捕获型事件模型： body->div->button (Netscape事件流)
- DOM事件模型： body->div->button->button->div->body (先捕获后冒泡)
- 在IE8及以下的事件处理中，事件含有on，DOM则不用


### 事件对象event
#### DOM中的事件对象
- event.type 事件类型
- event.target 目标对象,事件源对象,添加在什么上
- event.currentTarget 事件的绑定对象
- event.stopPropagation() 阻止事件冒泡或者捕获
```javascript
var click = function (event) {
	alert("clicked")
	event.stopPropagation()
}
```
- event.preventDefault() 阻止默认行为
- event.cancelable 是否可以取消事件的默认行为
- detail 于事件相关的细节信息

#### Event的clientY,pageY,screenY
- clientY 浏览器顶部底边到鼠标位置,不计算滚动轴距离
- pageY 浏览器顶部底边到鼠标位置,但是他计算滚动轴距离
- screenY 屏幕顶部到鼠标位置
 
#### IE中的事件对象
- `attachEvent`绑定事件
1. `event.type` 属性用于获取事件类型
2. `srcElement` 属性用于获取事件的目标,添加在什么上
3. `event.cancelBubble = ture` 属性用于阻止事件冒泡：true表示阻止冒泡，false表示不阻止冒泡
4. `event.returnValue = false` 属性用于阻止事件的默认行为：false表示阻止事件的默认行为

### 事件类型
#### UI事件
- load 加载完成
```javascript
EventUtil.addHandler(window,"load",function (e) {
	alert("Loaded")
})
```
- unload 从一个切换到另一个
- resize 窗口大小发生变化
- scroll 滚动触发事件,重复触发,损耗性能!

#### 焦点事件
- blur 失去焦点
- focusout 失去焦点
- focus 获取焦点,不支持冒泡
- focusin 获取焦点,支持冒泡

#### 鼠标事件
- `event.button == 0` 鼠标左键
- `event.button == 1` 鼠标中
- `event.button == 2` 鼠标鼠标右键
- 鼠标点击事件 `click="函数()"`
- 双击事件 `dblclick`
- 鼠标按下事件 `mousedown`
- 鼠标松开事件 `mouseup`
- 鼠标移动事件 `mousemove`
- 鼠标离开目标元素或子元素事件 `mouseout`，
- 鼠标进入目标元素或子元素事件 `mouseover`
- 只能进入目标元素 `mouseenter`
- 只能离开目标元素 `mouseleave`

- 表单确认按钮被点击时发生 `submit`不是加在按钮上而在表单上
- 内容选中事件`select`
- clientX和clientY鼠标获取位置


- 选中事件，当文本框或者文本域中的文字被选中时，触发select事件，同时调用的程序就会被执行。
- 文本框内容改变事件（change）通过改变文本框的内容来触发change事件，同时执行被调用的程序。
- 一般用于select,checkbox或者radio单选按钮发生改变就...
- 元素内部移动时重复的触发

#### 键盘事件
- `keyCode`: 返回按下时的键值
- `onkeydown`: 按任意键触发


``` javascript
(event做参数接受事件对象)代表事件的状态
document.onkeydown = function(event){
	console.log(event.keyCode);
	}
```

- `onkeypress`: 在键盘按`字符键`时发生(ASCII event.charCode)
- `onkeyup`: 在键盘按键被松开时发生
- `textInput` 输入的值

#### 特殊事件
- `DOMNodeInserted` xx元素中添加任意事件触发
- `DOMNodeRemoved` xx元素中删除任意事件触发
```javascript
EventUtil.addHandler(document,"DOMNodeRemoved",function () {
	console.log('document下有元素被删除')
})

document.body.removeChild(myText);
```

- `DOMSubtreeModified` document结构中发生任何变化都会触发.
```javascript
EventUtil.addHandler(document,"DOMSubtreeModified",function () {
	console.log('document下有结构变化')
})
```

- `DOMNodeRemovedFromDocument`从文档中移除之前会触发
- `DOMNodeInsertedIntoDocument`从文档中添加之前会触发

- `DOMContentLoaded` 在DOM树后就触发,不理会图像,javascript文件.css文件或其他资源是否已经下载
- `readystatechange`
- `hashchange` 只能在window中添加, #号后面的值变化就触发 :`event.oldURL+event.newURL `

#### 移动端事件类型
- `touchstart`: 手指触摸屏幕 
- `event.touches` 触摸点数组
- `event.changedTouches` 数组中包含引起事件的触摸点信息
- `event.targetTouches` 只包含放在元素上的触摸点信息

- `touchmove`: 手指在屏幕上滑动
- `touchend`: 手指从屏幕离开
- `touchcancel`：当系统停止跟踪触摸时触发