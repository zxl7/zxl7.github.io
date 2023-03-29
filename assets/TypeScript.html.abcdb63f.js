import{_ as e,o as i,c as a,d as n}from"./app.38db9df0.js";const l={},d=n(`<h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1><h2 id="interface-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#interface-\u63A5\u53E3" aria-hidden="true">#</a> interface \u63A5\u53E3</h2><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>// duck typing
interface LikeArray {
    [index: number]: string
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> Class</h2><ul><li>constructor</li><li>extends</li><li>super</li><li>public</li><li>private</li><li>protected</li></ul><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>interface Aaa {
    currentTime:number;
    alert():void
}
class Clock implements Aaa{
    currentTime:number = 123,
    alert(){
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B" aria-hidden="true">#</a> \u6CDB\u578B</h2><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>function withAPI&lt;T&gt;(url:string):Promise&lt;T&gt; {
    return fetch(url).then(res=&gt;{
        resp.json())
    })
}

withAPI&lt;Aaa&gt;(&#39;country.resp&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EA4\u53C9-\u8054\u5408\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u53C9-\u8054\u5408\u7C7B\u578B" aria-hidden="true">#</a> \u4EA4\u53C9,\u8054\u5408\u7C7B\u578B</h2><ul><li>&amp;</li><li>|</li></ul><h2 id="\u7C7B\u578B\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00" aria-hidden="true">#</a> \u7C7B\u578B\u65AD\u8A00</h2><ul><li>as</li></ul><h2 id="partial" tabindex="-1"><a class="header-anchor" href="#partial" aria-hidden="true">#</a> Partial</h2><ul><li>\u63A5\u53D7\u6CDB\u578B,\u4F20\u5165\u7C7B\u578B\u90FD\u53D8\u6210\u53EF\u9009</li></ul><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>type Partial&lt;T&gt; = {
    [P in keyof T]?: T[P]
}

type CountOpt = {
    [p in Keys]?: CountOpt[p]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h2><ul><li>\u662F\u5426\u6EE1\u8DB3\u7EA6\u675F</li><li>\u53EF\u4EE5\u7528\u5728\u6CDB\u578B \u6216\u8005 \u6761\u4EF6\u7C7B\u578B</li></ul><h2 id="declare" tabindex="-1"><a class="header-anchor" href="#declare" aria-hidden="true">#</a> declare</h2><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>declare var Jquery:(select:string)=&gt;any)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),r=[d];function s(c,t){return i(),a("div",null,r)}var v=e(l,[["render",s],["__file","TypeScript.html.vue"]]);export{v as default};
