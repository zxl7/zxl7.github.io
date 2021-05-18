

# 基本规则
## 清除浮动
 1. 父级包裹浮动盒子元素用`overflow:hidden`清除
 2. `clear:both;`清除两边的浮动
 3. BFC独立：有包裹性(不设置宽高)
 4. BFC子元素的任何排版不影响
 5. 触发BFC：绝对,相对定位`display:table;`
 6. 触发BFC：只要不是`overflow:visible;`
## 闭合浮动
 <img src="1.jpg" alt="">

## 定位

子绝父相定位
- `相对定位relative`:相对于原来位置移动 
- `绝对定位absolute`:相对于relative特性的父容器定位
- `相对定位`:只改变位置不影响文档流布局;
- `绝对定位`:包裹性:实际内容撑开;破坏性:脱离文档流; 悬浮性:在原始流之上;
- 当元素的 position 设置为`relative`时，它允许你通过 CSS 指定该元素在当前普通流页面下的相对偏移量。 
- CSS的position属性的取值选项`absolute`，absolute相对于其包含块定位。和relative定位不一样，absolute定位会将元素从当前的文档流里面移除，周围的元素会忽略它。
- absolute定位比较特殊的一点是元素的定位参照于最近的已定位祖先元素。如果它的父元素没有添加定位规则（默认是position:relative;）,浏览器会继续寻找直到默认的 body 标签。
- `fixed定位`，它是一种特殊的绝对（absolute）定位，区别是其包含块是浏览器窗口。
- `float:浮动定位`
- `z-index属性`指定元素的堆叠次序。z-index的取值是整数，数值大的元素优先于数值小的元素显示。
- 使用 `margin 属性`将元素水平居中
## 背景图
- background-repeat:;平铺
- background-position:;图片起始位置
- background-attachment:;是否滚动  默认scroll;   fixed保持不动;
 background背景图合写:背景颜色,背景图地址,平铺地址,背景图滚动,背景图位置;
## 精灵图 
三中实现对齐方式：
- background-position:x,y;
- 对齐方式:display:inline-block;
- 浮动 默认为块级元素 然后定位(不推荐)
## CSS内容移除某区域
常用于logo优化：
- 利用text-indent:-2000em;(首行缩进)
- 利用padding挤开盒子并且overflow切割;
- 利用margin拉动盒子配合overflow;
- line-height;行高
## text 特征
- text-align:justify;两端对齐,(水平对齐方式);
- vertical-align:;垂直对齐方式;(sub,super上下)
- line-height:;设置对象的行高;
- text-indent文本缩进,可以为负值;
- `text-justify`检索或者调整文本使用的对齐方式
- CSS 里面的text-align属性可以控制文本的对齐方式。
- 术语：Horizontal Rule => hr => 水平线
- 术语：Strikethrough => s => 删除线
- 术语：emphasis => em => 强调
- 术语：Underline => u => 下划线
- 术语：Strong => s => 加粗,强调
- b ==>只是加粗
## 阴影
- box-shadow属性的每个阴影依次由下面这些值描述：
- offset-x阴影的水平偏移量；
- offset-y阴影的垂直偏移量;
- blur-radius模糊距离；
- spread-radius阴影尺寸；
- 颜色(其中blur-raduis和spread-raduis是可选的)
- css中,`opacity属性`用来设置元素的透明度。
- CSS 提供`line-height属性`来设置行间的距离。行高，顾名思义，用来设置每行文字所占据的垂直空间。
- 超链接可以使用:hover伪类选择器定义它的悬停状态样式
## hsl颜色描述
-  CSS3 引入了对应的hsl()属性做为对应的颜色描述方式。描述了色相（hue）、饱和度（saturation）、亮度（lightness）
-  `色相`是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等。以颜色光谱为例，光谱左边从红色开始，移动到中间的绿色，一直到右边的蓝色，色相值就是沿着这条线的取值。在hsl()里面，色相用色环来代替光谱，色相值就是色环里面的颜色对应的从 0 到 360 度的角度值。
-  `饱和度`是指色彩的纯度，也就是颜色里灰色的占比，越高色彩越纯，低则逐渐变灰，取0-100%的数值。
-  `亮度`决定颜色的明暗程度，也就是颜色里白色或者黑色的占比，100% 亮度是白色， 0% 亮度是黑色，而 50% 亮度是“一般的”。  
## 渐变色
-  渐变色:::`background: linear-gradient(gradient_direction, 颜色 1, 颜色 2, 颜色 3, ...);`
-  第一个参数指定了颜色过渡的方向- 它的值是角度，90deg 代表垂直渐变，45deg 的渐变角度和反斜杠方向一样,剩下的参数指定了渐变颜色的顺序
-  主要区别是`repeating-linear-gradient()`重复指定的渐变;
-  background属性支持使用`url()函数`通过链接的方式引入一个指定纹理或样式的图片
-  CSS 属性transform里面的`scale()函数`，可以用来改变元素的显示比例。
-  `transform属性是skewX,skewY`，skewX使选择的元素沿着 X 轴（横向）翻转指定的角度。
-  术语表：blur-radius => 模糊半径
-  border-radius => 圆角边框。
## 选择器
- 选择一个祖先的所有子孙节点，例如 div p{…}
- 选择一个父元素的所有直属节点，例如 div > p{…}
- 选择某一个元素紧挨着的兄弟节点，例如 li + li{…}
- 选择某一个元素的所有同胞节点，例如 span ~ a{…}
- 权重! 行间样式=1000--ID=100--class=10--标签=1--通配符=0
## 伪元素选择器
-  :before和:after伪类。这些伪类用来在选择元素之前和之后添加一些内容.
-  :before和:after必须配合content来使用。两个伪元素分别在真正元素的前后;
## 动画
-  如果要给元素添加动画，你需要了解animation属性以及@keyframes规则。
-  `animation-name`指定@keyframes描述动画关键帧的at规则的名称。
-  `animation-duration`配置动画完成一个循环所需的时间长度。
-  `animation-timing-function`通过建立加速度曲线，动画如何通过关键帧进行转换。linear,ease;
-  `ation-delay:`配置元素加载时间和动画序列开始之间的延迟。
-  `animation-iteration-count`配置动画应重复的次数; 您可以指定infinite无限期重复动画。
-  `animation-direction`配置动画是否应在每次运行序列中交替方向或重置为起点并重复自身。
-  `animation-fill-mode`配置动画执行前后动画应用的值 
-  `animation-play-state`允许您暂停和恢复动画序列。(检索或设置对象的状态.)
-  `@keyframes`规则控制动画中各阶段的变化:0%,50%,100%;
-  `CSS 贝塞尔曲线`的例子：`animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);`
## 过渡transition
- transition-property:|指定CSS属性的name，transition效果
- transition-duration:|transition效果需要指定多少秒或毫秒才能完成
- transition-timing-function:|指定transition效果的转速曲线
- transition-delay:|定义transition效果开始的时候
## 语义化
- 图片的alt属性;
- main标签用于呈现网页的主体内容，且每个页面只能有一个。这意味着它只应包含与页面中心主题相关的信息，而不应包含如导航连接、网页横幅等可以在多个页面中重复出现的内容。
- article是一个分段标签，用于呈现独立及完整的内容。这个标签适用于博客入口、论坛帖子或者新闻文章。
- section用于对与主题相关的内容进行分组。它们可以根据需要嵌套着使用.
- header也是一个具有语义化的、提升页面可访问性的 HTML5 标签。它可以为父级标签呈现简介信息或者导航链接，适用于那些在多个页面顶部重复出现的内容
- nav也是一个具有语义化特性的 HTML5 标签，用于呈现页面中的主导航链接。它可以使屏幕阅读器快速识别页面中的导航信息。
- footer也具有语义化特性，可以使辅助设备快速定位到它。它位于页面底部，用于呈现版权信息或者相关文档链接。
使用 `audio 元素`提高音频内容的可访问性
- HTML5 的audio标签用于呈现音频内容，它也具有语义化特性。可以在audio上下文中为音频内容添加文字说明或者字幕链接，使听觉障碍用户也能获取音频中的信息。
- audio支持controls属性，可以使浏览器为音频提供具有开始、暂停等功能的播放控件。controls属性是一个布尔属性，只要这个属性出现在audio标签中，浏览器就会开启播放控件
使用 `figure 元素`提高图表的可访问性
- HTML5 引入了figure标签以及与之相关的figcaption标签。它们一起用于展示可视化信息（如：图片、图表）及其标题
使用 `label 元素`提高表单的可访问性
- label标签用于呈现特定表单控件的文本，通常是选项的名称。这些文本代表了选项的含义，使表单具有更好的可读性。label标签的for属性指定了与label绑定的表单控件，并且屏幕阅读器也会读取for属性
- 将单选按钮包裹在 `fieldset 元素`中以获得更好的可访问性
- fieldset标签将单选按钮组包含在里面就可以实现这个目的，通常还会使用legend标签来为单选按钮组提供文字说明。屏幕阅读器也可以朗读这些文字。
- 当选项的含义很明确时，如：性别选择，fieldset标签与legend标签就可以省略。这时，使用含有for属性的label标签就足够了。
- HTML5 引入了`date类型`来创建时间选择器:<input type="date" name="date">;
使用 HTML5 的 `datatime 属性`标准化时间
- HTML5 还引入了time标签与datetime属性来标准化时间。time是一个行内标签，用于在页面中呈现日期或时间，而datetime属性保存了日期的有效格式;
- <time datetime="2013-02-13">last Wednesday</time>
通过给元素添加 `accesskey 属性`来让用户可以在链接之间快速导航
- HTML提供accesskey属性，用于指定激活标签或者使标签获得焦点的快捷键，这可以使键盘用户的导航更加有效。
- HTML的`tabindex属性`有三个不同与标签焦点的功能。当它在标签上时，表示标签可以获得焦点。它的值可以是零、负整数及正整数，并决定了标签的行为
- tabindex属性还可以指定标签的 tab 键顺序，将它的值设置为大于或等于 1 就可以实现这个功能。
## 响应式web设计原则
- 四个不同的视窗单位分别是：
- vh： 如 3vh 的意思是视窗高度的 3%。
- vw：如 10vw 的意思是视窗宽度的 10%。 
- vmin： 如 70vmin的意思是视窗中较小尺寸的 70% (高度 VS 宽度)。 
- vmax： 如 100vmax 的意思是视窗中较大尺寸的 100% (高度 VS宽度)。
### 针对高分辨率屏幕应使用视网膜图片
- 为优化图片在高分辨率设备下的显示效果，最简单的方式是定义它们的 width 和 height 值为源文件宽高的一半。
### 使图片根据设备尺寸自如响应:
``` css
img {
  max-width: 100%;
  display: block;
  height: auto;
}
```
- `max-width` 属性能让图片以 100% 的最大宽度适应其父容器的宽度，但图片不会拉伸得比原始宽度还宽。
- 将 display 属性设置为 block 可以让 image 标签从内联元素（默认值）更改为块级元素。设置 height 属性为 auto 保持图片的原始宽高比。
- 下面是一个`媒体查询`的例子，当设备宽度小于或等于 100px 时返回内容：
- @media (max-width: 100px) { /* CSS Rules */ }
- 以下定义的`媒体查询`，是当设备高度大于或等于 350px 时返回内容：
- @media (min-height: 350px) { /* CSS Rules */ }
## Flex 布局
- display:flex; 会成为flex容器;
- 注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。
## 容器属性
- flex-direction 主轴方向
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content
- `flex-direction属性`决定主轴方向 row横向-->, column竖向,(逆序) row-reverse和column-reverse
- `flex-wrap属性` nowrap | wrap | wrap-reverse倒序换行  是否换行
- `flex-flow属性`是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
- `align-content`多行在交叉轴上的排列方式(有换行才有效果)`flex-start,center`
- `justify-content属性`子元素沿`主轴`的对齐模式
```css
  flex-start（默认值）：左对齐 
  flex-end：右对齐
  center： 居中
  space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
  space-between：两端对齐，项目之间的间隔都相等。
```
- `align-items属性`子元素在`交叉轴`上如何对齐:flex-start | flex-end | center | baseline | stretch;
``` css
  `flex-start`从 flex 容器的前端开始排列项目。对行来说是把项目都靠顶部放，对于列是把项目都靠左放。 
  `flex-end`从flex 容器的后端开始排列项目。对行来说是把项目都靠底部放，对于列是把项目都靠右放。
  `center`把项目的位置调整到中间。对于行，垂直居中（项目上下方空间相等），对于列，水平居中（项目左右方空间相等）。
  `baseline`项目的内容的基线对齐,字体大小的最下面
  `space-around`每根轴线两侧的间隔都相等。所以轴线之间的间隔比轴线与边框的间隔大一倍。
  `space-between`与交叉轴两端对齐，轴线之间的间隔平均分布。
`  stretch`拉伸项目，填满 flex 容器。例如排成行的项目从容器顶部拉伸到底部。
```
## 项目的属性
- order
- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self
- `order属性`定义项目的排列顺序。数值越小，排列越靠前，默认为0
- `flex-grow属性`如何分配剩余空间，默认为0，如果存在剩余空间，也不放大
```
  数值相同,分配一样
  数值谁大谁多,可接受小数
  剩余空间的分配
```
- `flex-shrink属性`定义了项目剩余空间缩小比例，默认为1，即如果空间不足，该项目将缩小；0则不压缩，负值则无效
```
剩余空间不足谁缩放的多
```
- `flex-basis属性`定义了在分配多余空间之前，项目占据的主轴空间,它的默认值为auto
```
width:分配之前先减去设置的空间
0不占用空间
auto默认样式,项目的内容尺寸为font-basis
```
- `flex属性`是flex-grow, shrink,basis的简写，属性有两个快捷值：1 0 auto和 none (0 0 auto)
```
flex:1=1 1 0; flex=2:2 1 0;
```
- `align-self属性`允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性
- 默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch

## Grid 布局
- display的值设为grid，使 HTML 元素变为网格容器
- grid-template-columns:50px 50px;属性可以添加一些列,属性值的个数表示网格的列数，而每个值表示对应列的宽度
- grid-template-rows为网格设置行数,同上规则;
- CSS 网格中，可以使用绝对定位和相对定位单位如px和em来确定行或列的大小。下面的单位也可以使用：
- fr：设置列或行占剩余空间的一个比例，
- auto：设置列宽或行高自动等于它的内容的宽度或高度，
- %：将列或行调整为它的容器宽度或高度的百分比，
- `grid-column-gap` 创建多列之间的间距
- `grid-row-gap` 创建多行之间的间距
- `grid-gap`是grid-row-gap和grid-column-gap的简写,如果有两个值，第一个值将作为行间隙的高度值，第二个值是列间隙的宽度值。
- `grid-column`属性定义网格项开始和结束的位置，进而控制每个网格项占用的列数。
``` css
grid-column: 1 / 3;
grid-row : 1 / 3;
```
- `用grid-row`属性来确定开始和结束的水平线,(占用的行数)
- `justify-self属性`，设置其内容的位置在单元格内沿行轴对齐的方式(stretch默认,start左,center中,end)
- `align-self属性`,沿列轴对齐的方式排列,上中下
- 对网格容器使用`justify-items`使它们一次性沿行轴对齐。
- 对网格容器使用`align-items`属性可以给网格中所有的网格项设置沿列轴对齐的方式。
- 将网格中的一些网格单元格组合成一个区域（area），并为该区域指定一个自定义名称。你可以通过给容器加上grid-template-areas来实现：
``` css
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```
- 在为网格容添加区域模板后，对网格项使用`grid-area`可以通过添加你定义的名称将网格项放入自定义区域。
``` css
.item1 { grid-area: header; }
```
- 网格中没有定义区域模板，你也可以像这样为它添加一个模板`grid-area: 起始水平线 / 起始垂直线 / 末尾水平线 / 终止垂直线 ;`

- 使用`repeat方法`指定行或列的重复次数，后面加上逗号以及需要重复的值:
```css
这里有一个添加 100 行网格的例子，使每行高度均为 50px:
grid-template-rows: repeat(100, 50px);
你还可以用 repeat 方法重复多个值，并在定义网格结构时与其他值一起使用。举个例子：
grid-template-columns: repeat(2, 1fr 50px) 20px;
效果相当于:
grid-template-columns: 1fr 50px 1fr 50px 20px;
注意:
1fr 50px重复了两次，后面跟着 20px
```
- 内置函数`minmax`也可以可用于设置grid-template-columns和grid-template-rows的值。它的作用是在网格容器改变大小时限制网格项的大小。为此，你需要指定网格项允许的尺寸范围
```css
grid-template-columns: 100px minmax(50px, 200px);
grid-template-columns 被设置为添加两列，第一列 100px 宽，第二列宽度最小值是 50px，最大值是 200px。
```
- 重复方法带有一个名为自动填充`auto-fill`的功能，功能是根据容器的大小，尽可能多地放入指定大小的行或列。你可以通过结合`auto-fill`和`minmax`来更灵活地布局
- `auto-fit`效果几乎和`auto-fill`一样，不同点仅在于，当容器的大小大于各网格项之和时，`auto-fill` 将会持续地在一端放入空行或空列，这样就会使所有网格项挤到另一边
- 而`auto-fit`则不会在一端放入空行或空列，而是会将所有网格项拉伸至合适的大小。




