---
title: 箭头函数
date: 2018-12-13 23:14:51
tags: ES6
categories: [学习笔记,ES6]
---
哈~还需要学习
<!-- more -->
## 箭头函数 ##

[MDN箭头函数][1]

**箭头函数表达式**的语法比函数表达式更短，并且没有自己的this，arguments，super或 new.target。这些函数表达式更适用于那些本来需要匿名函数的地方，并且它们不能用作构造函数。

语法:

```js
(参数1,参数2,..,参数n) =>{函数声明}
(参数1, 参数2, …, 参数N) => 表达式（单一）
//相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }

// 当只有一个参数时，圆括号是可选的：
(单一参数) => {函数声明}
单一参数 => {函数声明}

// 没有参数的函数应该写成一对圆括号。
() => {函数声明}
```

```js
//加括号的函数体返回对象字面表达式：
参数=> ({foo: bar})

//支持剩余参数和默认参数
(参数1, 参数2, ...rest) => {函数声明}
(参数1 = 默认值1,参数2, …, 参数N = 默认值N) => {函数声明}

//同样支持参数列表解构
let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f();  // 6
```
**引入箭头函数有两个方面的作用：**
 - 更简短的函数并且不绑定this
**通过 call 或 apply 调用**
 - 箭头函数没有自己的this指针，通过 call() 或 apply() 方法调用一个函数时，只能传递参数（不能绑定this---译者注）
 - 他们的第一个参数会被忽略。（这种现象对于bind方法同样成立---译者注
**不绑定arguments**
 - 箭头函数不绑定Arguments 对象。因此，在本示例中，arguments只是引用了封闭作用域内的arguments：

    var arguments = [1, 2, 3];
    var arr = () => arguments[0];
    
    arr(); // 1
    
    function foo(n) {
      var f = () => arguments[0] + n; // 隐式绑定 foo 函数的 arguments 对象. arguments[0] 是 n
      return f();
    }
    
    foo(1); // 2

 - 箭头函数不能用作构造器，和 new一起用会抛出错误。

```
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor

```

 - 箭头函数没有prototype属性。

```
var Foo = () => {};
console.log(Foo.prototype); // undefined
```

**箭头函数可以有一个“简写体”或常见的“块体”。**  
 - 在一个简写体中，只需要一个表达式，并附加一个隐式的返回值。在块体中，必须使用明确的return语句。

    var func = x => x * x;                  
    // 简写函数 省略return
    
    var func = (x, y) => { return x + y; }; 
    //常规编写 明确的返回值

**箭头函数在参数和箭头之间不能换行。**

``` coffeescript
    var func = ()
               => 1; 
    // SyntaxError: expected expression, got '=>'
```




  [1]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
