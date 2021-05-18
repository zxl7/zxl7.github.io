# AJAX
## 什么是AJAX
 - **Ajax**它向服务器发出异步请求以传输数据，然后将返回的数据加载到页面中。
 - 正是因为 AJAX 是异步的，所以浏览器不会停止加载页面来等待服务器的响应，也无需刷新整个页面就可以将更新的数据插入页面。
```
 - AJAX = 异步 JavaScript 和 XML。
 - AJAX 是一种用于创建快速动态网页的技术。
 - 通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。
```
**AJAX是基于现有的Internet标准**
并且联合使用它们：

```
XMLHttpRequest 对象 (异步的与服务器交换数据)
JavaScript/DOM (信息显示/交互)
CSS (给数据定义样式)
XML (作为转换数据的格式)
```
## AJAX创建 XMLHttpRequest 对象
 - XMLHttpRequest 对象用于在后台与服务器交换数据
创建 XMLHttpRequest 对象的语法
``` vhdl
var xmlhttp;
if (window.XMLHttpRequest)
{
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp=new XMLHttpRequest();
}
else
{
    // IE6, IE5 浏览器执行代码
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
```

## AJAX向服务器发送请求请求
向服务器发送请求:
 - 如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：
``` js
xmlhttp.open("GET","ajax_info.txt",true);
xmlhttp.send();
```

### open(method,url,async)
 - 规定请求的类型、URL 以及是否异步处理请求。
 - method：请求的类型；GET 或 POST
 - url：文件在服务器上的位置
 - async：true（异步）或 false（同步）

### send(string)
- **string**：仅用于 POST 请求

### GET 还是 POST？
与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。
然而，在以下情况中，请使用 **POST** 请求：
 - 无法使用缓存文件（更新服务器上的文件或数据库）
 - 向服务器发送大量数据（POST 没有数据量限制）
 - 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

### GET 请求一个简单的 GET 请求：
``` js
xmlhttp.open("GET","/try/ajax/demo_get.php",true);
xmlhttp.send();
```
 - 在上面的例子中，您可能得到的是缓存的结果。
 - 为了避免这种情况，请向 URL 添加一个唯一的 ID：
``` js
xmlhttp.open("GET","/try/ajax/demo_get.php?t=" + Math.random(),true);
xmlhttp.send();
```
 - 如果您希望通过 GET 方法发送信息，请向 URL 添加信息：
``` js
xmlhttp.open("GET","/try/ajax/demo_get2.php?fname=Henry&lname=Ford",true);
xmlhttp.send();
```

### POST 请求
实例
``` js
xmlhttp.open("POST","/try/ajax/demo_post.php",true);
xmlhttp.send();
```

 - 如果需要像 HTML 表单那样 POST 数据
 - 请使用 setRequestHeader() 来添加 HTTP 头。
 - 然后在 send()方法中规定您希望发送的数据：

``` js
xmlhttp.open("POST","/try/ajax/demo_post2.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fname=Henry&lname=Ford");
```
方法:

``` stylus
setRequestHeader(header,value)	
```
向请求添加 HTTP 头:

``` http
header: 规定头的名称
value: 规定头的值
```

**url-服务器上的文件**

 - open() 方法的 url 参数是服务器上文件的地址：
``` js
xmlhttp.open("GET","ajax_test.html",true);
```
该文件可以是任何类型的文件，比如 .txt 和 .xml，或者服务器脚本文件，比如 .asp 和 .php （在传回响应之前，能够在服务器上执行任务）

### 异步 - True 或 False？
AJAX 指的是异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。

 - XMLHttpRequest 对象如果要用于 AJAX 的话，其 open() 方法的 async 参数必须设置为 true：

``` js
xmlhttp.open("GET","ajax_test.html",true);
```
通过 AJAX，JavaScript 无需等待服务器的响应，而是：

 - 在等待服务器响应时执行其他脚本 
 - 当响应就绪后对响应进行处理

#### Async=true
 - 当使用 async=true 时，请规定在响应处于 onreadystatechange 事件中的就绪状态时执行的函数：
``` javascript
xmlhttp.onreadystatechange=function()
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
}
xmlhttp.open("GET","/try/ajax/ajax_info.txt",true);
xmlhttp.send();
```

#### Async = false
如需使用 async=false，请将 open() 方法中的第三个参数改为 false：
``` js
xmlhttp.open("GET","test1.txt",false);
```
不推荐使用 **async=false**，但是对于一些小型的请求，也是可以的
 - 请记住，JavaScript 会等到服务器响应就绪才继续执行。如果服务器繁忙或缓慢，应用程序会挂起或停止。
 - **注意：**当您使用 async=false 时，请不要编写 onreadystatechange 函数 - 把代码放到 send()
   语句后面即可：

``` js
xmlhttp.open("GET","/try/ajax/ajax_info.txt",false);
xmlhttp.send();
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
```
## AJAX - 服务器响应
### 服务器响应
如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 **responseText** 或 **responseXML** 属性。

#### responseText 属性
 - 来自服务器的响应并非 XML，请使用 responseText 属性。
 - responseText 属性返回字符串形式的响应

``` stylus
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
```
#### responseXML 属性
 - 来自服务器的响应是 XML，而且需要作为 XML 对象进行解析，请使用 responseXML 属性
``` stylus
实例
请求 cd_catalog.xml 文件，并解析响应：

xmlDoc=xmlhttp.responseXML;
txt="";
x=xmlDoc.getElementsByTagName("ARTIST");
for (i=0;i<x.length;i++)
{
    txt=txt + x[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("myDiv").innerHTML=txt;
```
## AJAX - onreadystatechange 事件
 - 浏览器和服务器之间传输的数据通常使用一种叫 **JSON**（JavaScript Object Notation）的格式。JSON 类似于 JavaScript 的对象字面量语法，只是它是以字符串的形式传输，一旦接收，就可以将其转换成对象在脚本中使用。
 - 异步能在多方面提升用户的体验，由于浏览器不用在渲染页面的时候等待服务器做出响应，因而页面的加载速度更快。请求和传输都在后台进行，不会中断用户当前的操作。当浏览器接受到新的数据的时候，只有特定的区域会刷新，这些特性很大程度上增强了单页应用程序的用户体验。
 - **API**（或叫应用程序编程接口）是计算机用来互相通信的工具。你将学习如何通过 AJAX技术 从 API 获得的数据来跟新 HTML
 - JSON 是由 API 以bytes 形式传输的，你的程序以string接受它。它们能转换成为 JavaScript 对象，但默认情况下它们不是 JavaScript 对象。 **JSON.parse方法**解析字符串并构造它描述的 JavaScript 对象。
 - **open 方法**初始化请求 - 此示例从 API 请求数据，因此是个 "GET" 请求。第二个参数 open 是你要从中请求数据的 API 的 URL。第三个参数是一个布尔值， true使其成为异步请求
 - 访问数组和对象中的数据，数组使用括号表示法来访问项目的特定索引，对象使用括号或点表示法来访问给定属性的值

# JSON
 - number：和JavaScript的number完全一致；
 - boolean：就是JavaScript的true或false； 
 - string：就是JavaScript的string;
 - null：就是JavaScript的null； 
 - array：就是JavaScript的Array表示方式——[]；
 - object：就是JavaScript的{ ... }表示方式。
**为了统一解析，JSON的字符串规定必须用双引号""，Object的键也必须用双引号""。**
**序列化**
 - JSON.stringify

``` stylus
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

``` prolog
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

``` cs
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


``` haskell
JSON.stringify(xiaoming); // '{"Name":"小明","Age":14}'
```

**反序列化**
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




















