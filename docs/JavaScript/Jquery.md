---
title: Jquery
date: 2018-12-24 11:29:55
tags: Jquery
categories: [学习笔记,jQery]
---
Jquery真的锋利?
<!-- more -->
## jQuery基本概念
- CDN 节点服务器
- `$(document).ready(function(){})`判断DOM元素是否加载完成

### $全局变量
- window.jQuery === window.$
- $.xxx 调用本身属性和方法
- $(xxx) 调用本身的选择,返回jq对象()里是选择表达式,或者dom对象

### jQuery对象和DOM对象
- 通过jQuery方法包装后的对象，是一个类数组对象。它与DOM对象完全不同，唯一相似的是它们都能操作DOM。
- 通过jQuery处理DOM的操作，可以让开发者更专注业务逻辑的开发，而不需要我们具体知道哪个DOM节点有那些方法，
- 也不需要关心不同浏览器的兼容性问题，我们通过jQuery提供的API进行开发，代码也会更加精短。

### 如何检测jQuery对象和DOM对象?
- 检测DOM: Object:if(obj.nodeType)
- 检测jQuery: Object:if(obj.jquery)

### 如何把jQuery对象转成DOM对象?
- var jqueryObj = $(domObj); --->DOM
- var domObj = jqueryObj.get([index]); --->jQuery

- 利用**数组下标**的方式读取到jQuery中的DOM对象
- 数组的索引是从0开始的，也就是第一个元素下标是0
 
### 如何创建元素
- $('<div>Hello</div>');返回一个jQuery对象
- 设置属性
```
var link1 = $('<a>',{
	text:'baidu',
	href:'http://www.baidu.com',
	target:'_blank'
}); 
//空元素才可如此设置
var link2 = $('<a>baidu</a>').attr({
	text:'baidu',
	href:'http://www.baidu.com',
	target:'_blank'
})

link2.appendTo('body');
```

### 检察元素数量
- .length

### jQuery提取元素
- .[index] 返回DOM元素
- .get([index]) 返回DOM元素或元素集合可为负值从-1开始	越界返回undefind
- .eq(index) 返回jQuery对象,加索引返回对象,不加索引什么都不返回,索引从0开始,支持赋值-1开始
- .first() 第一;
- .last() 最后;
- .toArray()== get(不加参数) DOM数组

### 通过关系获取jQuery对象
- parents() 传参对父元素过滤;
- children()所有直接子元素的集合;
- contents()所有直接子元素的集合,且返回文本节点
- find() 筛选后代元素,子节点,孙子节点
- parent([selector]) 直接父元素,只返回一个
- parents([selector]) 所有祖先元素,会返回筛选的多个
- parentsUntil([selector]) 到哪个层级为止,必须带参数限制范围,不包含选择项
- next([selector]),nextAll([]),nextUntil([]) 往后查找同辈元素
- prev([selector]),prevAll([selector]),prevUntil([selector]) 往前同辈元素
- siblings([selector]) 元素的所有同辈元素的集合,没有单数形式,不包含本身!!
- closest(selector) 本身开始向上匹配,返回最先匹配元素,先从本身开始,没有就返回空(返回0个或者1个)
- slice[3,5) 开始结束位置来匹配子集	

### 筛选和遍历jQuery对象

### 转换元素-回调函数
- map(callback) 转换为另一个jq对象
```
.map(function ()index,domElement) //当前索引和dom元素
```
- jQuery 方法 attr()，也提供回调函数。
  - 回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。
  - 然后以函数新值返回您希望使用的字符串。
下面的例子演示带有回调函数的 attr() 方法：
``` javascript
$("button").click(function(){
  $("#runoob").attr("href", function(i,origValue){
    return origValue + "/jquery"; 
  });
});
```
- each() 遍历元素
- is() 是否包含某个元素
- end() 返回上一次破坏性操作(匹配的元素集合变为前一次的状态)(破坏性操作:改变所匹配对象)
- addBack() 破坏性操作的选择和原来的选择都一同被选中,被操作,被改变

## jQuery语法
- 链式语法
```
$(#id)
.xxx
.xxx
```
**注意:**
- jQ中使用add,find,children,filter会缩小范围,用end()返回
- (window.onload等待全部加载),ready()dom加载完成就执行
```
//js
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
```

``` 
基础语法： $(selector).action()
```
 - 美元符号定义 jQuery 
 - 选择符（selector）"查询"和"查找" HTML 元素
 - jQuery 的 action() 执行对元素的操作
``` stylus
$(this).hide() - 隐藏当前元素

$("p").hide() - 隐藏所有 <p> 元素

$("p.test").hide() - 隐藏所有 class="test" 的 <p> 元素

$("#test").hide() - 隐藏所有 id="test" 的元素
```

## jQuery选择器
### 内容筛选器
- :empty 选择没内容的
- :contains(text) 选择包含给定文本的元素
- :has(selector) 选择包含给定标签元素
- :parent 包含子元素和文本元素 (选择有内容的)

### 其他筛选器
- $(':lang()') 选择语言
- :hidden 选择所有不可见元素 `display:none`不占位的元素
- :visible 与上面相反的选择器
- $(':not()') 只要不是(),都被选择
- :target:获取url中的hash来选择
- $(':root()') 该文档的根元素
- $(':animated()')选择运行动画的元素
- consolo.log('$(:header()')选中所有标题元素

- 元素:$("p")
- id:$("#test")
- class:$(".test")

### 选择器优化
- 尽量用css中有的选择器
- 避免过度约束
- 尽量以ID开头
- 让选择器右边有更多的特征
- 避免使用全局选择器
- 缓存选择器结果

## 操作jQuery
### 添加或修改 class
- addClass(names) 增加类
- removeClass(names) 移除类
可以添加函数,根据返回值修改

- hasClass('names') 判断是否有'naems'
- toggleClass('names',[switch]) 切换类,有就增加,没有就删除;第二个参数表示什么条件下切换

### 获取和设置 style
- css(name,value)
- width(value)
- height()
- innerWidth()
- outerWidth()
- html
- text
- append
- prepend
- befor
- after
- val()



### 操作元素
#### 特性attribute
- 特性名
- 值是`字符串`
- 获取某个元素特性的值:getAttribute

#### 属性property
- 属性获取方式:xxx.xxx
- 值有多种类型:`string`,`boolean`,`number`,`object`
- 多使用属性来获取值

#### 特性和属性
- 同步规则:attributes本来就在DOM对象中存在,则同步
- 如果:attributes本来就在DOM对象中存在,但是类型为Boolean,则不会同步
- 如果:attribute不是内建的元素则不会同步
- 有的同步却不相等:src 
- 属性className;特性Class

#### 操作元素的特性
不区分大小写
- 获取特性的值:attr(name)
- 设置特性的值:attr(name,value) attr(attributes)
- 删除特性:removeAttr(name),中间加空格一次删除多个

#### 操作元素的属性 
区分大小写
- 获取值:prop(name)
- 设置值:prop(name,value)prop(properties)
- 删除属性:removeProp(name),一次只能删除一个
```
checkbox.prop('checked');
checkbox.get(0).checked;
checkbox.attr('checked')
```

### 在元素中存取数据
- 获取数据的值:data([name])
- 设置数据的值:data(name,value)data(object)
- data() 可保存数据类型
- 优先级高于html的设置
- removeData([1,2])删除
- 判断是否有数据:jQuery.hasData(element) html设置不算,只看是否jQ有设置

## jQuery事件
- this指向DOM,类似于dom2级可绑定多个,且顺序执行。
- `on(eventType,[selector],[data],handler)`- 事件类型,选择,数据,执行函数;
``` gherkin
**$(document).ready()**
```
$(document).ready() 方法允许我们在文档完全加载完后执行函数。

### 1.鼠标事件
 - click-点击
 - dblclick-双击
 - mousseenter-当鼠标指针穿过元素时
 - mouseleave()-当鼠标指针离开元素时
 - mousedown()-当鼠标指针移动到元素上方，并按下鼠标按键时
 - mouseup()-当在元素上松开鼠标按钮时

### 2.键盘事件 
 - keypress-键按下的过程
 - keydown-键被按下
 - keyup-键被松开
 - hover-用于模拟光标悬停事件mouseenter+mouseleave;

### 3.表单事件
 - submit
 - change
 - focus
 - blur

### 4.文档/事件
 - load
 - resize
 - scroll
 - unload

### 5.文档就绪事件
您也许已经注意到在我们的实例中的所有 jQuery 函数位于一个 document ready 函数中：

``` javascript
$(document).ready(function(){

  // 开始写 jQuery 代码...

});
```

这是为了防止文档在完全加载（就绪）之前运行 jQuery 代码，即在 DOM 加载完成后才可以对 DOM 进行操作。
如果在文档没有完全加载之前就运行函数，操作可能失败。下面是两个具体的例子：
 - 试图隐藏一个不存在的元素 
 - 获得未完全加载的图像的大小
提示：简洁写法（与以上写法效果相同）:
```
$(function(){
   // 开始写 jQuery 代码...
});
```

### 统一的属性和方法
- 阻止冒泡: `stopPropagaton()`
- 阻止默认行为: `preventDefault()`
- 都阻止: `return false`
- `one(eventType,[selector],[data],handler)`执行一次

### 移除事件处理
- `off(eventType,[selector],handler)`不传参移除所有绑定事件.

### 触发事件
- tirgger(eventType[,data])
- tirggerHandler(eventType[,data])
- 区别:不会触发浏览器默认事件;不会产生事件冒泡;
- 只触发jQuery对象集合中的第一个元素的事件处理函数;返回处理函数的返回值,不是jq对象

### 命名空间
- eventName.namespace

## jQuery HTML
### 1.获得内容和属性
- text()、html() 以及 val()
- 三个简单实用的用于 DOM 操作的 jQuery 方法：
```
text() - 设置或返回所选元素的文本内容
html() - 设置或返回所选元素的内容（包括 HTML 标记）
val() - 设置或返回表单字段的值
```
实例:

```	
$("#btn1").click(function(){
  alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
  alert("HTML: " + $("#test").html());
});
```


**jQuery attr()** 方法用于获取属性值。
实例:
``` javascript
$("button").click(function(){
  alert($("#runoob").attr("href"));
});
```

### 2.设置内容和属性
设置内容 - text()、html() 以及 val()

``` stylus
text() - 设置或返回所选元素的文本内容
html() - 设置或返回所选元素的内容（包括 HTML 标记）
val() - 设置或返回表单字段的值
```
实例:
``` javascript
$("#btn1").click(function(){
    $("#test1").text("Hello world!");
});
$("#btn2").click(function(){
    $("#test2").html("Hello world!");
});
$("#btn3").click(function(){
    $("#test3").val("RUNOOB");
});
```

 - 下面的例子演示带有**回调函数**的 text() 和 html()

实例:

``` javascript
$("#btn1").click(function(){
    $("#test1").text(function(i,origText){
        return "旧文本: " + origText + " 新文本: Hello world! (index: " + i + ")"; 
    });
});
 
$("#btn2").click(function(){
    $("#test2").html(function(i,origText){
        return "旧 html: " + origText + " 新 html: Hello world! (index: " + i + ")"; 
    });
});
```

**设置属性 - attr()**
jQuery attr() 方法也用于设置/改变属性值。
下面的例子演示如何改变（设置）链接中 href 属性的值：
``` javascript
$("button").click(function(){
  $("#runoob").attr("href","http://www.runoob.com/jquery");
});
```

 - attr() 方法也允许您同时设置多个属性。
下面的例子演示如何同时设置 href 和 title 属性：

``` javascript
$("button").click(function(){
    $("#runoob").attr({
        "href" : "http://www.runoob.com/jquery",
        "title" : "jQuery 教程"
    });
});
```

### 3.添加元素
 - append() - 在被选元素的结尾插入内容
 - prepend() - 在被选元素的开头插入内容
 - after() - 在被选元素之后插入内容
 - before() - 在被选元素之前插入内容

``` stylus
$("p").append("追加文本");
$("p").prepend("在开头追加文本");

 - 添加若干新元素
function appendText()
{
    var txt1="<p>文本。</p>";              // 使用 HTML 标签创建文本
    var txt2=$("<p></p>").text("文本。");  // 使用 jQuery 创建文本
    var txt3=document.createElement("p");
    txt3.innerHTML="文本。";               // 使用 DOM 创建文本 text with DOM
    $("body").append(txt1,txt2,txt3);        // 追加新元素
}

$("img").after("在后面添加文本");
$("img").before("在前面添加文本");

```

### 4.删除元素
 - remove() - 删除被选元素（及其子元素） 
 - empty() - 从被选元素中删除子元素

``` stylus
$("#div1").remove();
$("#div1").empty();
```
 - jQuery remove() 方法也可接受一个参数，允许您对被删元素进行过滤。

``` javascript
该参数可以是任何 jQuery 选择器的语法。
$("p").remove(".italic");
```

### 5.操作css类

 - addClass() - 向被选元素添加一个或多个类 
 - removeClass() - 从被选元素删除一个或多个类
 - toggleClass() - 对被选元素进行添加/删除类的切换操作 
 - css() - 设置或返回样式属性


在添加类时，您也可以选取多个元素：
``` javascript

实例:
$("button").click(function(){
  $("h1,h2,p").addClass("blue");
  $("div").addClass("important");
});
```

在 addClass() 方法中规定多个类：
``` javascript
实例
$("button").click(function(){
  $("body div:first").addClass("important blue");
});
```

下面的例子演示如何在不同的元素中删除指定的 class 属性：

``` javascript
实例
$("button").click(function(){
  $("h1,h2,p").removeClass("blue");
});
```
下面的例子将展示如何使用 jQuery toggleClass() 方法。该方法对被选元素进行添加/删除类的切换操作：

``` javascript
实例
$("button").click(function(){
  $("h1,h2,p").toggleClass("blue");
});
```

### 6.CSS()方法
+ 返回css的属性css```("propertyname")```;
+ 设置一个或多个css的属性:```css("propertyname","value")```;
```
$("p").css("background-color","yellow");//一个
$("p").css({"background-color":"yellow","font-size":"200%"});//多个
```

下面的例子将返回首个匹配元素的 background-color 值：
```
实例
$("p").css("background-color");
```
### 7.尺寸
+ width()--方法设置或返回元素的宽度（不包括内边距、边框或外边距）
+ height()
+ innerWidth()--方法返回元素的宽度（包括内边距）
+ innerHeight()
+ outerWidth()--方法返回元素的宽度（包括内边距和边框）
+ outerHeight()
```
$("button").click(function(){
  var txt="";
  txt+="div 的宽度是: " + $("#div1").width() + "</br>";
  txt+="div 的高度是: " + $("#div1").height();
  $("#div1").html(txt);
});


$("button").click(function(){
  var txt="";
  txt+="div 宽度，包含内边距: " + $("#div1").innerWidth() + "</br>";
    txt+="div 高度，包含内边距: " + $("#div1").innerHeight();
  $("#div1").html(txt);
});


$("button").click(function(){
  var txt="";
  txt+="div 宽度，包含内边距和边框: " + $("#div1").outerWidth() + "</br>";
  txt+="div 高度，包含内边距和边框: " + $("#div1").outerHeight();
  $("#div1").html(txt);
});

```

## jQuery遍历
### 祖先
- parent() 父元素
- parents() 所有祖先元素
- parentsUntil() 介于两个给定元素之间的所有祖先元素
```
$(document).ready(function(){
  $("span").parentsUntil("div");
});
```

### 后代
- children() 返回被选元素的所有直接子元素
- find() 返回被选元素的后代元素，一路向下直到最后一个后代
```
下面的例子返回属于 <div> 后代的所有 <span> 元素：
实例
$(document).ready(function(){
  $("div").find("span");
});

下面的例子返回 <div> 的所有后代：
实例
$(document).ready(function(){
  $("div").find("*");
});
```

### 同胞
- siblings() --返回所有同胞元素

- next() --返回备选元素的下一个同胞元素
- nextAll() --返回被选元素的所有跟随的同胞元素
- nextUntil() --返回介于两个给定参数之间的所有跟随的同胞元素

- 后三个工作方式与上面的方法类似,
- 只不过方向相反而已：它们返回的是前面的同胞元素
- prev()
- prevAll()
- prevUntil()

### 过滤
- first() 方法返回被选元素的首个元素
- last() 最后...
- eq() 方法返回被选元素中带有指定索引号的元素
- filter(selecyor) 方法允许您规定一个值,不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回
- not(selecyor) 与上一个相反,除了匹配值的所有元素
- has(selecyor) 保留包含特定后代的元素

```
$(document).ready(function(){
  $("div p").last();
});
```

## jQuery Ajax
定义和用法:
- ajax() 方法用于执行 AJAX（异步 HTTP）请求。
- 所有的 jQuery AJAX 方法都使用 ajax() 方法。该方法通常用于其他方法不能完成的请求。

语法:
```
$.ajax({name:value, name:value, ... })

```

|$.ajax()			|执行异步 AJAX 请求																|
|$.ajaxPrefilter()	|在每个请求发送之前且被 $.ajax() 处理之前，处理自定义 Ajax 选项或修改已存在选项	|
|$.ajaxSetup()		|为将来的 AJAX 请求设置默认值													|
|$.ajaxTransport()	|创建处理 Ajax 数据实际传送的对象												|


**load()** 方法从服务器加载数据，并把返回的数据放入被选元素中。

语法:
```
$(selector).load(URL,data,callback);
```
- 必需的 URL 参数规定您希望加载的 URL。
- 可选的 data 参数规定与请求一同发送的查询字符串键/值对集合。
- 可选的 callback 参数是 load() 方法完成后所执行的函数名称。
```
下面的例子会把文件 "demo_test.txt" 的内容加载到指定的 <div> 元素中：
$("#div1").load("demo_test.txt");

下面的例子把 "demo_test.txt" 文件中 id="p1" 的元素的内容，加载到指定的 <div> 元素中：
$("#div1").load("demo_test.txt #p1");
```

- 可选的 **callback **参数规定当 load() 方法完成后所要允许的回调函数。
- 回调函数可以设置不同的参数：

```
responseTxt - 包含调用成功时的结果内容
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
```

### GET vs POST
- GET - 从指定的资源请求数据
- GET 基本上用于从服务器获得（取回）数据。注释：GET 方法可能返回缓存数据。
- POST - 向指定的资源提交要处理的数据
- POST 也可用于从服务器获取数据。
- 不过，POST 方法不会缓存数据，并且常用于连同请求一起发送数据。

**$.get()**:方法通过 HTTP GET 请求从服务器上**请求**数据。

```
$.get(URL,callback);
```
- 必需的 URL 参数规定您希望请求的 URL。
- 可选的 callback 参数是请求成功后所执行的函数名。
```
下面的例子使用 $.get() 方法从服务器上的一个文件中取回数据：

$("button").click(function(){
  $.get("demo_test.php",function(data,status){
    alert("数据: " + data + "\n状态: " + status);
  });
});
```
- $.get()的第一个参数是我们希望请求的 URL（"demo_test.php"）。

- 第二个参数是回调函数。第一个回调参数存有被请求页面的内容，第二个回调参数存有请求的状态

**提示：** 这个 PHP 文件 ("demo_test.php") 类似这样：
```
demo_test.php 文件代码:
<?php
echo '这是个从PHP文件中读取的数据。';
?>
```

**$.post() **方法通过 HTTP POST 请求向服务器**提交**数据。
```
$.post(URL,data,callback);

```
- 必需的 URL 参数规定您希望请求的 URL。
- 可选的 data 参数规定连同请求发送的数据。
- 可选的 callback 参数是请求成功后所执行的函数名。
- 下面的例子使用 $.post() 连同请求一起发送数据：
```
实例
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

```
- $.post() 的第一个参数是我们希望请求的 URL ("demo_test_post.php")。
- 然后我们连同请求（name 和 url）一起发送数据。
- "demo_test_post.php" 中的 PHP 脚本读取这些参数，对它们进行处理，然后返回结果。
- 第三个参数是回调函数。第一个回调参数存有被请求页面的内容，而第二个参数存有请求的状态。

**提示：** 这个 PHP 文件 ("demo_test_post.php") 类似这样：
```
demo_test_post.php 文件代码:
<?php
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$url = isset($_POST['url']) ? htmlspecialchars($_POST['url']) : '';
echo '网站名: ' . $name;
echo "\n";
echo 'URL 地址: ' .$url;
?>
```



## jQuery效果
### - 隐藏和显示

**jQuery hide() 和 show()**
``` gcode
$(selector).hide(speed,callback);

$(selector).show(speed,callback);
```

 - 可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
 - 可选的 callback 参数是隐藏或显示完成后所执行的函数名称

**jQuery toggle()**

 - 通过 jQuery，您可以使用 toggle() 方法来切换 hide() 和 show() 方法。
 - 显示被隐藏的元素，并隐藏已显示的元素：
``` javascript
实例
$("button").click(function(){
  $("p").toggle();
});
```
语法:
``` mel
$(selector).toggle(speed,callback);
```
 - 可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
 - 可选的 callback 参数是隐藏或显示完成后所执行的函数名称。
 - 对于可选的 callback 参数，有以下说明：
``` haxe
1.$(selector)选中的元素的个数为n个，则callback函数会执行n次；
2.callback函数名后加括号，会立刻执行函数体，而不是等到显示/隐藏完成后才执行；
3.callback既可以是函数名，也可以是匿名函数；
```

### - 淡入淡出
- fade方法
- jQuery fadeIn() 用于淡入已隐藏的元素。

语法:
``` javascript
$(selector).fadeIn(speed,callback);
```
- jQuery fadeOut()方法用于淡出可见元素。
```
$(selector).fadeOut(speed,callback);
```
- jQuery fadeToggle() 方法可以在 fadeIn() 与 fadeOut() 方法之间进行切换。
 - 如果元素已淡出，则 fadeToggle() 会向元素添加淡入效果。
 - 如果元素已淡入，则 fadeToggle() 会向元素添加淡出效果。
```
$(selector).fadeToggle(speed,callback);
```
- 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
- 可选的 callback 参数是 fading 完成后所执行的函数名称。
- jQuery fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）。
```
$(selector).fadeTo(speed,opacity,callback);
```
 - fadeTo() 方法中必需的 opacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。

### - 滑动
- jQuery 拥有以下滑动方法：
```
slideUp()
slideDown()
slideToggle()
```
语法:
```
$(selector).slideToggle(speed,callback);
```

### - 动画animate()
`$(selector).stop(stopAll,goToEnd)`
- 可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
- 可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。
- 因此，stop() 会清除在被选元素上指定的当前动画。
### - 链(Chaining)
- 通过 jQuery，可以把动作/方法链接在一起。
- `Chaining` 允许我们在一条语句中运行多个 jQuery 方法（在相同的元素上）。

```
$("#p1").css("color","red").slideUp(2000).slideDown(2000);
```


## jQ 插件
### 插件机制
- jQuery.extend() 本身添加
- jQuery.fn.extend() 对象添加

### 如何使用
- 引用插件
- 查看并实现实例代码
- 阅读文档 

### 常用插件
- chosen 选择
- pickadate 时间格式
- Magnific-Popup 图片放大查看

### 编写插件
- 处理复杂参数
```
function xxx(options) {
	var defaultOptions = $.extend({
		p1.defaultValue1,
		p1.defaultValue2
	},options||{})
} 
```

- 使用命名空间防止冲突
```
$('.lightbox').cool('init',{
	p1:val1,
	p1:val2
})
```
- 链式语法
```
init:function () {
	...
	return this
}
```













