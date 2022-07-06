<template><div><ul>
<li>缓存的优点：
<ol>
<li>减少冗余的数据传输，可节省流量</li>
<li>缓解带宽瓶颈问题，可更快加载页面</li>
<li>缓解瞬间拥塞，可缓解原始服务器的压力</li>
<li>降低距离延时，加快响应速度</li>
</ol>
</li>
</ul>
<h2 id="地址栏网址缓存" tabindex="-1"><a class="header-anchor" href="#地址栏网址缓存" aria-hidden="true">#</a> 地址栏网址缓存</h2>
<h2 id="dns-缓存" tabindex="-1"><a class="header-anchor" href="#dns-缓存" aria-hidden="true">#</a> DNS 缓存</h2>
<ol>
<li>浏览器的 DNS 缓存</li>
<li>操作系统中的 DNS 缓存</li>
<li>操作系统的 hosts 文件（可手动写入的缓存）</li>
</ol>
<h3 id="域名解析的具体过程" tabindex="-1"><a class="header-anchor" href="#域名解析的具体过程" aria-hidden="true">#</a> 域名解析的具体过程</h3>
<ol>
<li>浏览器搜索自己的 DNS 缓存（浏览器维护一张域名与 IP 地址的对应表）；如果没有命中，进入下一步</li>
<li>搜索操作系统中的 DNS 缓存；如果没有命中，进入下一步</li>
<li>搜索操作系统的 hosts 文件（ Windows 环境下，维护一张域名与 IP 地址的对应表）；如果没有命中，进入下一步</li>
</ol>
<p><code v-pre>浏览器 DNS 缓存的时间一般不会太长，因为时间过长也会影响 DNS 在 IP 变更时不能及时解析到最新的 IP。</code></p>
<h3 id="arp-地址解析协议-缓存" tabindex="-1"><a class="header-anchor" href="#arp-地址解析协议-缓存" aria-hidden="true">#</a> ARP（地址解析协议）缓存</h3>
<p><code v-pre>ARP 是一种用以解释地址的协议，根据通信方的 IP 地址就可以查出对应方的 MAC 地址。</code>
<code v-pre>ARP 缓存是个用来储存 IP 地址和 MAC 地址的缓冲区，其本质就是一个 IP 地址与 MAC 地址的对应表，表中每一个条目分别记录了其他主机的 IP 地址和对应的 MAC 地址。</code></p>
<h3 id="tcp-发送缓冲区-接收缓冲区" tabindex="-1"><a class="header-anchor" href="#tcp-发送缓冲区-接收缓冲区" aria-hidden="true">#</a> TCP 发送缓冲区 &amp; 接收缓冲区</h3>
<ul>
<li>建立 TCP 连接这一步也涉及到缓存 —— 用来临时存放双方通信的数据，保证通信数据不会丢包。</li>
<li>TCP 的全双工的工作模式以及 TCP 的流量(拥塞)控制便是依赖于这两个独立的 buffer 以及 buffer 的填充状态。</li>
</ul>
<h2 id="http-请求缓存" tabindex="-1"><a class="header-anchor" href="#http-请求缓存" aria-hidden="true">#</a> HTTP 请求缓存</h2>
<h3 id="强缓存-cache-control-和-expires" tabindex="-1"><a class="header-anchor" href="#强缓存-cache-control-和-expires" aria-hidden="true">#</a> 强缓存 ( Cache-Control 和 Expires )</h3>
<ul>
<li>
<p>强缓存主要是采用响应头中的 Cache-Control 和 Expires 两个字段进行控制的。
<code v-pre>其中 Expires 是 HTTP1.0 中定义的，它指定了一个绝对的过期时期。而 Cache-Control 是 HTTP1.1 时出现的缓存控制字段。 由于 Expires 是 HTTP1.0 时代的产物，因此设计之初就存在着一些缺陷，如果本地时间和服务器时间相差太大，就会导致缓存错乱。</code></p>
</li>
<li>
<p>这两个字段同时使用的时候 Cache-Control 的优先级会更高一点。</p>
</li>
<li>
<p>可缓存性</p>
<ul>
<li>public：响应可以被任何对象（客户端、代理服务器等）缓存</li>
<li>private：只能被单个用户缓存，不能作为共享缓存</li>
<li>no-cache：使用缓存副本之前，需要将请求提交给原始服务器进行验证，验证通过才可以使用</li>
<li>only-if-cached：客户端只接受已缓存的响应，并且不向原始服务器检查是否有更新的拷贝</li>
</ul>
</li>
<li>
<p>到期</p>
<ol>
<li><code v-pre>max-age=&lt;seconds&gt;</code>：缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。与 Expires 相反，时间是相对于请求的时间</li>
<li><code v-pre>s-maxage=&lt;seconds&gt;</code>：覆盖 max-age 或者 Expires 头，但是仅适用于共享缓存(比如各个代理)，并且私有缓存中它被忽略</li>
<li><code v-pre>max-stale[=&lt;seconds&gt;]</code>：表明客户端愿意接收一个已经过期的资源。可选的设置一个时间(单位秒)，表示响应不能超过的过时时间</li>
<li><code v-pre>min-fresh=&lt;seconds&gt;</code>：表示客户端希望在指定的时间内获取最新的响应</li>
</ol>
</li>
<li>
<p>重新验证和重新加载</p>
<ol>
<li>must-revalidate：缓存必须在使用之前验证旧资源的状态，并且不可使用过期资源。</li>
<li>proxy-revalidate：与 must-revalidate 作用相同，但它仅适用于共享缓存（例如代理），并被私有缓存忽略</li>
</ol>
</li>
<li>
<p>其他</p>
<ol>
<li>no-store：彻底禁用缓存，本地和代理服务器都不缓存，每次都从服务器获取</li>
<li>no-transform：不得对资源进行转换或转变：Content-Encoding, Content-Range, Content-Type 等 HTTP 头不能由代理修改。</li>
</ol>
</li>
</ul>
<h3 id="协商缓存-last-modified-和-etag" tabindex="-1"><a class="header-anchor" href="#协商缓存-last-modified-和-etag" aria-hidden="true">#</a> 协商缓存 ( Last-Modified 和 Etag )</h3>
<ul>
<li>
<p>协商缓存机制下，浏览器需要向服务器去询问缓存的相关信息，进而判断是重新发起请求还是从本地获取缓存的资源。如果服务端提示缓存资源未改动（ Not Modified ），资源会被重定向到浏览器缓存，这种情况下网络请求对应的状态码是 304。</p>
</li>
<li>
<p>*Last-Modified 和 If-Modified-Since *</p>
<ol>
<li>基于资源在服务器修改时间而验证缓存的过期机制</li>
<li>当客户端再次请求该资源的时候，会在其请求头上附带上 If-Modified-Since 字段（值就是第一次获取请求资源时响应头中返回的 Last-Modified 值）。如果修改时间未改变则表明资源未过期，命中缓存，服务器就直接返回 304 状态码，客户端直接使用本地的资源。否则，服务器重新发送响应资源，从而保证资源的有效性。</li>
</ol>
</li>
<li>
<p>Etag 和 If-None-Match</p>
<ol>
<li>基于资源校验码（一般为md5值）而验证缓存的过期机制</li>
<li>当客户端再次请求该资源的时候，会在其请求头上附带上 If-None-Match 字段（值就是第一次获取请求资源时响应头中返回的 Etag 值），其值与服务器端资源文件的验证码进行对比，如果匹配成功直接返回 304 状态码，从浏览</li>
<li>本地缓存取资源文件。如果不匹配，服务器会把新的验证码放在请求头的 Etag 字段中，并且以 200 状态码返回资源。</li>
</ol>
<p><code v-pre>当响应头中同时存在 Etag 和 Last-Modified 的时候，会先对 Etag 进行比对，随后才是 Last-Modified。</code></p>
</li>
<li>
<p>Etag 的问题</p>
<ol>
<li>相同的资源，在两台服务器产生的 Etag 是不是相同的，所以对于使用服务器集群来处理请求的网站来说， Etag 的匹配概率会大幅降低。所在在这种情况下，使用 Etag 来处理缓存，反而会有更大的开销。</li>
</ol>
</li>
</ul>
<h2 id="静态资源和动态资源的请求过程解析" tabindex="-1"><a class="header-anchor" href="#静态资源和动态资源的请求过程解析" aria-hidden="true">#</a> 静态资源和动态资源的请求过程解析</h2>
<h3 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h3>
<ul>
<li>强缓存和协商缓存同时存在，如果强缓存还在有效期内则直接使用缓存；如果强缓存不在有效期，协商缓存生效。即：<code v-pre>强缓存优先级 &gt; 协商缓存优先级</code></li>
<li>强缓存的 expires 和 cache-control 同时存在时， cache-control 会覆盖 expires 的效果， expires 无论有没有过期，都无效。即： <code v-pre>cache-control 优先级 &gt; expires 优先级</code></li>
<li>协商缓存的 Etag 和 Last-Modified 同时存在时， Etag 会覆盖 Last-Modified的效果。即：<code v-pre>ETag 优先级 &gt; Last-Modified 优先级</code>
<code v-pre>其实我们第一次获取的资源极有可能是从 CDN 节点的缓存中获取的，也很有可能是从中间代理服务器（nginx，node 等）的缓存中读取的；其中的好处不言而喻。</code></li>
</ul>
<h3 id="动态资源" tabindex="-1"><a class="header-anchor" href="#动态资源" aria-hidden="true">#</a> 动态资源</h3>
<ul>
<li>由于动态资源的返回结果不一致，所以这个我们肯定不会在浏览器（中间代理服务器）缓存动态的结果。</li>
<li>可以在后端缓存一些重复率比较高的相关的计算结果。</li>
<li>关于动态资源一般前端是不做缓存的,后端缓存主要通过保留数据库连接，存储处理结果等方式缩短处理时间，尽快响应客户端请求。</li>
</ul>
</div></template>
