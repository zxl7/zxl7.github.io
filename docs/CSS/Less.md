- 复用,减少冗余
## 变量-Variables
- 只可定义一次
- @开头定义变量,使用时直接键入@名称
### 值变量
```less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
编译为：
#header {
  width: 10px;
  height: 20px;
}
```
### 选择器变量
```less
@{mySelector}{....} //给选择器赋值
```
- 具体例子如下:
```less
 /* Less */
      @mySelector: #wrap;
      @Wrap: wrap;
      @{mySelector}{ //变量名 必须使用大括号包裹
        color: #999;
        width: 50%;
      }
      .@{Wrap}{
        color:#ccc;
      }
      #@{Wrap}{
        color:#666;
      }

      /* 生成的 CSS */
      #wrap{
        color: #999;
        width: 50%;
      }
      .wrap{
        color:#ccc;
      }
      #wrap{
      }
        color:#666;
```
### 属性变量
```less
 @borderStyle: border-style;
 @Soild:solid;
 
      #wrap{
        @{borderStyle}: @Soild;//变量名 必须使用大括号包裹
      }
    
      /* 生成的 CSS */
      #wrap{
        border-style:solid;
      }
```
### url变量
项目结构改变时，修改其变量即可。
```less
      /* Less */
      @images: "../img";//需要加引号
      body {
        background: url("@{images}/dog.png");//变量名 必须使用大括号包裹
      }
    
      /* 生成的 CSS */
      body {
        background: url("../img/dog.png");
      }
```

### 声明变量
- 类似于 下面的 混合方法
- 结构: `@name: { 属性: 值 ;}`;
- 使用：`@name()`;
```less
      /* Less */
      @background: {background:red;};
      @Rules:{
          width: 200px;
          height: 200px;
          border: solid 1px red;
      };

      #main{
          @background();
      }
      #con{
        @Rules();
      }
    
      /* 生成的 CSS */
      #main{
        background:red;
      }
      #con{
        width: 200px;
        height: 200px;
        border: solid 1px red;
      }
```

### 变量运算
- 加减法时 以第一个数据的单位为基准
- 乘除法时 注意单位一定要统一
``` less
      /* Less */
      @width:300px;
      @color:#222;
      #wrap{
        width:@width-20;
        height:@width-20*5;
        margin:(@width-20)*5;
        color:@color*2;
        background-color:@color + #111;
      }
    
      /* 生成的 CSS */
      #wrap{
        width:280px;
        height:200px;
        margin:1400px;
        color:#444;
        background-color:#333;
      }
    
```

### 变量作用域
- 就近原则
```less
 /* Less */
      @var: @a;
      @a: 100%;
      #wrap {
        width: @var;
        @a: 9%;
      }
    
      /* 生成的 CSS */
      #wrap {
        width: 9%;
      }
```
- 用变量去定义变量
```less
      /* Less */
      @fnord:  "I am fnord.";
      @var:    "fnord";
      #wrap::after{
        content: @@var; //将@var替换为其值 content:@fnord;
      }
      /* 生成的 CSS */
      #wrap::after{
        content: "I am fnord.";
      }
```

## 混合 Mixins
- 将一组属性从一个规则集包含（“混入”）到另一个规则集的方法
```less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
其他规则集中使用这些属性,我们只需要输入我们想要属性的类的名称;

#menu a {
  color: #111;
  .bordered();
}

.post a {
  color: red;
  .bordered();
}
```

### 参数逻辑条件混合 Mixin-Guards
```less
#color (@name) when (@naem = white) {
	color: white;
}
```

## 嵌套 Nested Rules
- Less使您能够使用嵌套代替或与级联结合使用:
```less
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

- 在Less中，这样写：
```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```
- 生成的代码更简洁，并模仿HTML的结构。
- 还可以使用此方法将伪选择器与mixins捆绑在一起。
- 这是经典的clearfix hack，重写为mixin（&代表当前的选择器父级）：
```less
.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

### & 的妙用
 - &:代表的上一层选择器的名字


### 媒体查询
```less
    #wrap{
      width:500px;
    }
    @media screen and (max-width:768px){
      #wrap{
          width:100px;
      }
    }
```
## 运算
1. 算术运算+，-，*，/可以在任意数量，颜色或可变的操作,如果可能，数学运算会考虑单位并在添加，减去或比较数字之前转换数字。
2. 结果最左边是明确说明的单位类型; 如果转换不可能或没有意义，则忽略单位。
3. 不可能转换的示例：px到cm或rad到％;



源文档来自:[思否--less看这篇就够了](https://segmentfault.com/a/1190000012360995?utm_source=tag-newest)