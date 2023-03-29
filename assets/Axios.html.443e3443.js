import{_ as n,o as i,c as e,d as s}from"./app.38db9df0.js";const l={},d=s(`<div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>// \u5C01\u88C5axios\u7684\u8BF7\u6C42\uFF0C\u8FD4\u56DE\u91CD\u65B0\u5C01\u88C5\u7684\u6570\u636E\u683C\u5F0F
// \u5BF9\u9519\u8BEF\u7684\u7EDF\u4E00\u5904\u7406
import axios from &#39;axios&#39;
import errorHandle from &#39;./errorHandle&#39;
import store from &#39;@/store&#39;
import publicConfig from &#39;@/config&#39;
const CancelToken = axios.CancelToken

class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
    this.pending = {}
  }

  // \u83B7\u53D6axios\u914D\u7F6E
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        &#39;Content-Type&#39;: &#39;application/json;charset=utf-8&#39;
      },
      timeout: 10000
    }
    return config
  }

  removePending (key, isRequest = false) {
    if (this.pending[key] &amp;&amp; isRequest) {
      this.pending[key](&#39;\u53D6\u6D88\u91CD\u590D\u8BF7\u6C42&#39;)
    }
    delete this.pending[key]
  }

  // \u8BBE\u5B9A\u62E6\u622A\u5668
  interceptors (instance) {
    // \u8BF7\u6C42\u62E6\u622A\u5668
    instance.interceptors.request.use((config) =&gt; {
      // Do something before request is sent
      let isPublic = false
      publicConfig.publicPath.map((path) =&gt; {
        isPublic = isPublic || path.test(config.url)
      })
      const token = store.state.user.token
      if (!isPublic &amp;&amp; token) {
        config.headers.Authorization = &#39;Bearer &#39; + token
      }
      const key = config.url + &#39;&amp;&#39; + config.method
      this.removePending(key, true)
      config.cancelToken = new CancelToken((c) =&gt; {
        this.pending[key] = c
      })
      return config
    }, (err) =&gt; {
      // debugger
      errorHandle(err)
      // Do something with request error
      return Promise.reject(err)
    })

    // \u54CD\u5E94\u8BF7\u6C42\u7684\u62E6\u622A\u5668
    instance.interceptors.response.use((res) =&gt; {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      const key = res.config.url + &#39;&amp;&#39; + res.config.method
      this.removePending(key)
      if (res.status === 200) {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res)
      }
    }, (err) =&gt; {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      // debugger
      errorHandle(err)
      return Promise.reject(err)
    })
  }

  // \u521B\u5EFA\u5B9E\u4F8B
  request (options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(newOptions)
  }

  get (url, config) {
    const options = Object.assign({
      method: &#39;get&#39;,
      url: url
    }, config)
    return this.request(options)
  }

  post (url, data) {
    return this.request({
      method: &#39;post&#39;,
      url: url,
      data: data
    })
  }
}

export default HttpRequest

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),r=[d];function v(a,c){return i(),e("div",null,r)}var u=n(l,[["render",v],["__file","Axios.html.vue"]]);export{u as default};
