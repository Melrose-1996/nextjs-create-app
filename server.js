const Koa = require("koa");
const Router = require("koa-router");
const next = require("next");

const session = require("koa-session");

const Redis = require("ioredis");
const RedisSessionStore = require("./server/session-store");

// 必须用在 session 后面
const auth = require("./server/auth");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// 创建 redis client
// 里面可以传递一些相应的配置，但是本地传的话是没有必要
const redis = new Redis();

// 引入 koaBody
const koaBody = require("koa-body");

// api
const api = require("./server/api");

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  // 使用 session 模块
  // keys 是用与给字符串加密的
  server.keys = ["Melrose develop Github App"];

  // 使用 koa-body
  server.use(koaBody());

  const SESSION_CONFIG = {
    // 设置在浏览器的 cookie 的 key 名字
    key: "rose",
    // 用来存储内容的，连接数据库的一个功能，功能需要手动实现，会使用 redis 实现 koa-session 来存储 redis 来保存用户 session 数据的一个功能
    store: new RedisSessionStore(redis),
    // 可以用于设置过期时间
    // maxAge: 10 * 1000
  };

  server.use(session(SESSION_CONFIG, server));

  // 配置处理 github OAuth 的登录
  auth(server);
  // 传入 API
  api(server);

  // 服务端设置路由自动跳转到对应页面
  router.get("/a/:id", async (ctx) => {
    const id = ctx.params.id;
    await handle(ctx.req, ctx.res, {
      pathname: "/a",
      query: { id },
    });
    // 不再使用 koa 内部的对 body 的处理，而改成手动的返回的 http 响应的内容，即上面的 handle 所返回的 http 内容
    ctx.respond = false;
  });

  router.get("/api/user/info", async (ctx) => {
    const user = ctx.session.userInfo;
    if (!user) {
      ctx.status = 401;
      ctx.body = "Need Login";
    } else {
      ctx.body = user;
      // ctx.set() 就是用来设置 header 的
      ctx.set("Content-Type", "application/json");
    }
  });

  // 注意这个要放在 router.get 的后面
  server.use(router.routes());

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(async (ctx, next) => {
    // ctx.cookies.set("id", "userid:xxxxxx");
    ctx.req.session = ctx.session;
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(3000, () => {
    console.log("koa server listening in 3000");
  });

  // 如果不写 ctx.respond = false ，当处理所有的中间键之后，会根据 ctx.body 的内容，再去通过 http 模块的 node.js 的默认的 http 模块去写一个返回的内容
});
