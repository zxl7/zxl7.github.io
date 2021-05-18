---
title: JavaScript 正则表达式丶
date: 2019-03-09 11:30:52
tags: JavaScript
categories: [学习笔记,JavaScript]
---
正则表达式!
<!-- more -->

## 创建方式
- 一种是字面量，格式是写在/ /中，字面量 /js/
- 另一种是用构造方法，里面写字符串或者是字符串的变量 `构造函数new RegExp()`
- 匹配字符串的值,区别一方便,二则可以传递变量;
- 普通字符: 字母、数字、下划线(_)、汉字、空格以及其他一些没有特殊含义的字符(!@,;等)
- 特殊字符: .
```javascript
var str = 'i love js';
var pattern = /js/;
var pattern = new RegExp('js',i);
```

### 匹配方法
- test `pattern.test(str)`用正则去匹配相应字符串,匹配成功返回ture
- exec `pattern.exec(str)`找到匹配的字符串就添加数组中,返回数组 找不到返回null;

- exec会匹配两个属性：
- `index`	匹配的值在数组中的位置
- `input`	匹配的字符串的位置

### 模式修饰符
- i ignoreCase 不区分大小写`/js/i`
- `var pattern = new RegExp('js','i')`;
- g global 全局匹配，修饰符g，匹配所有元素，如有多个匹配时，返回数组`/js/ig`
- m multiline 多行匹配`/hss/igm`
- 写在右斜杠后面

## 字符匹配
### 转义字符
- `\`
- `\n,\x0A,/\u000A/`	换行
- `\t`	制表符	Tab
- 中文的编码:`\4e00--\u9fa5`

### 字符类
- `/[js]/`		只要一个
- `/[^js]/`		取反，除了js都可以匹配
- `/[a-z]/`		匹配a到z，前面的小于等于后面的
- `/[a-zA-Z]/`	所有字母
- `/[0-9]/`		匹配数字
- `/^\n/ === /. /`
- `/[a-zA-Z0-9_]/`和`/\w/`	小写w：包括下划线的任何单词字符，类似但不等价于“[A-Za-z0-9_]”
- `/[^a-zA-Z0-9_]/`和`/\W/`	大写W、
- `/[0-9]/` == `/\d/`		数字
- `\D`	除了数字
- `\s`	匹配空格和制表符(	tab)
- `\S`	除了匹配空格和制表符(	tab)
- `.（点）`匹配除`\n换行`和`\r回车`之外的任何单个字符。

### 量词重复
- `{n}` 匹配n次
- `{1,2}` 一个或者两个，不能有空格
- `{1，}`至少一个
- 只能没有上限，不能没有下限
- `?`	零次或者一次
- `+`	大于等于一次
- `*`	大于等于零次
- 量词只对紧靠的前一个有效

- 正整数`/[1-9]\d{0,}/`或者`/[1-9]\d*/`
- 正整数和负整数的正则：`/-？[1-9]\d{0,}/`或者`/-{0,1}[1-9]\d*/`或者`/-？[1-9]\d*/`或者`/-{0,1}[1-9]\d{0,1}/`

### 非贪婪的重复
- 默认匹配多
- 量词后加`?`	非贪婪匹配模式
- `/a+?`	多个a也只匹配一个a

- 贪婪与非贪婪的概念只有当你使用量词的时候才有意义。
- 正则表达式的模式匹配总是会寻找字符串中第一个可能匹配的位置。
- 要想将贪婪转换成非贪婪匹配，只需在量词后面加上?

### 选择
- `/|/` 类似于或
- `/html|css|js/`	从最左侧开始匹配
- 匹配整数	`/0|-?[1-9]\d*/`
- 在匹配的时候，会在`字符串`中从前往后一 一的匹配

### 分组
- `()` 分组、
- `/(ab)+/`		多次匹配ab、
- `/(ab)c/`		可单独捕获
- `/?:(ab)c/`	非捕获
- `/(ab) cd \1/` 可匹配第一个分组

```javascript
var str = '<div> <a>午饭加个鸡蛋呀</a> </div>'
var patten = /<([a-zA-Z]+)>(.*?)<\/\1>/
```

## 匹配位置
- `/^js/`		匹配开头
- `/js$/`		末尾匹配
- `/^\d+$/`		全是数字

### 单词边界匹配
- `\b`

- `/java(?=script)/`	前瞻性匹配，只有后面跟的值相同才会匹配
- `/java(?!script)`		负前瞻性匹配，后面跟的值不一样就可以匹配


## RegExp
- /js/
- new RegExp('js')

### 实例方法
- exec	属性·input	·index
```es6
var str = 'js js js'
var pattern = /js/g;
//全局匹配

console.log(patten.exec(str));
console.log(patten.exec(str));
```
- `toString`		对象转化为字符串,正则的字面量形式
- `toLocaleString`	本地特色的字符串
- `valueOf`			返回正则本身

### 实例属性
```es6
var str = 'js js js'
var pattern = /js/g;
```
- `pattern.ignoreCase`		判断有没有i	忽略大小写
- `pattern.global`			判断有没有g	全局匹配
- `pattern.multiline`		判断有没有m	多行匹配
- 都返回布尔值、、

- `source`	返回字面量形式对应的字符串
- `lastIndex`	全局匹配才会工作，·`lastIndex`起始的匹配位置匹配成功自动后移，匹配到`null`自动重置，重头开始

### 构造函数属性
- `RegExp.input`			匹配的字符串			(RegExp['$_']
- `RegExp.lastMatch`		最近匹配的			(简写RegExp['$&'])
- `RegExp.leftCotext`		上一次匹配的左		(RegExp['$`'])
- `RegExp.RightCotext`		上一次匹配的右		(RegExp["$'"])
- `RegExp.lastParen`		上一次匹配的子选项	(RegExp['$+'])
- `$1`		分组是构造函数的属性`$1`来引用

### String中与正则有关的方法
```es6
var str = 'html js'
var pattern = /js2/

console.log(str.search(pattern));
```
- `search`		搜寻正则找到的位置，找不到返回-1；与全局无关
- `match`		匹配不到返回null，匹配到返回一个数组；有分组第二个为分组元素，全局匹配全都显示，但是不显示分组内容
- `exec`		无论是否全局匹配的都会返回分组中匹配到的内容，都只返回当前匹配的一个内容，而不是全部返回。
- `·$·`			尾匹配和`^`首匹配		`match+m`	多行匹配；
- `split`		替换结合正则`str.split(pattern)`		`pattern = /\s*,\s*/`
- `replace`		替换`(str.replace('js','html'))`，可将字符串js直接替换为html；全局匹配就会全局替换
```es6
var str = '111-111-111'
var pattern = /-/g

console.log(str.replace(pattern,'.'))		//111.111.111
```
- replace引用`（js）`的方式为`$1`
```
console.log(str.replace(pattern,function ($0){
	var result = '';
	for(var i = 0; $0.length; i++){
		result += '*';
	}
	return result;
}))
```

## 实际案例
### QQ昵称和密码
- 账号		全是数字，首位不为0，最少5位	`/^[1-9]\d{4,}$/`
- 昵称		中，英文，数字及下划线，2-18  位	`/^[\u4e00-u9fa5a-zA-Z0-9_]{2,18}$/`	简化：`/^[\u4e00-u9fa5a\w]{2,18}$/`
- 密码		6-16位，区分大小写，不能用空白字符\s		`/^\S{6-16}$/`

### 去除字符串首位空白字符
```es6
var str = '		Alex	';
var pattern = /^\s+|\s+$/
// var pattern1 = /^\s+/
// var pattern2 = /\s+$/

console.log('|'+str.replace(pattern,'')+'|')
```

可以修改为：
```es6
function trim(str) {
	return str.replace(/^\s+/,'').replace(/\s+$/,'')
}
var str = '		Alex	';
trim(str)
```

### 转驼峰-
```es6
var str = background-color;
var pattern = /-([a-z])/gi;
console.log(str.replace(pattern,function (all,letter) {
	return letter.toUpperCase()
}))

function toCameCase(str) {
	return letter.toUpperCase()
}
```

### 匹配HTML标签
```es6
//正向思考
var str = '<p class = "odd" id = "odd"> 123 </p>'
var pattern = /<\/?[a-zA-Z]+(\s+[a-zA-Z]+=".*")>/g
console.log(str.match(pattern))

// 逆向思考
var pattern = /<[^>]+>/g;

var pattern = /<(?:[^"'>]|"[^"]*"|'[^']*')*>/g
//改良
var pattern = /<(?:[^"'>]|([^"'])|'[^"']*'\1)*>/g
```

### 邮箱
```es6
/(\w+\.)*(\w+)@(\w+\.)+([a-z])/i;
/(?:\w+\.)*\w+@(?:\w+\.)+[a-z]/i;
```

### URL地址
```es6
// 协议:\/\/主机名(:端口号)/(路径))

// 简化版
var pattern = /^(https?:\/\/)?([^:\/]+)(:\d+)?(\/.*)?$/
```

### 汇总
```es6
var regexp = {
	'chinese': /[\u4e00-\u9fa5]/,
	'qq':/^[1-9]\d{4,}$/
}
```
