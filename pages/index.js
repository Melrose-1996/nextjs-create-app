import axios from "axios";

const api = require("../lib/api");

const Index = () => {
  return <span>去登录</span>;
};
// 注意我们在组件中（getInitialProps）中，只会使用到 request ，因为 request 会帮助我们去判断是客户端还是服务端

// 注意 getInitialProps 会在客户端不同页面跳转的时候使用，同样服务端如果我们访问的是 index 这个页面，也会调用 getInitialProps，在服务端渲染的时候调用的时候，我们的运行环境处于 node.js 环境，而不是浏览器的环境，如果我们在 node.js 的环境下请求就会出现请求的是 http://localhost:3000/ 这样的地址，所以会失败（默认的端口是80）

// 注意这里是 ctx 而不是 {ctx}
Index.getInitialProps = async (ctx) => {
  // 报 Error: connect ECONNREFUSED 127.0.0.1:80 的错误
  // 如果是在浏览器里面发送的，会根据我们提供的路径会自动加上我们当前网站的域名（就是http://localhost:3000/）所以它完整请求路径就是 http://localhost:3000/github/search/repositories?q=react
  // 如果是在服务端渲染的时候进行执行的话，所以没有浏览器里面的域名的，这个时候请求的路径自动在 axios 里面增加的 http://127.0.0.1（默认80端口）/github/search/repositories?q=react，这个时候就不对了，我们 80 端口没有启动，也不是我们想请求的地址
  // const result = await axios
  //   .get("/github/search/repositories?q=react")
  //   .then((resp) => console.log(resp));

  // 注意 req 和 res 只有在服务端渲染的时候才会有
  const result = await api.request(
    { url: "/search/repositories?q=react" },
    ctx.req,
    ctx.res
  );

  return {
    data: result.data,
  };
};

export default Index;
