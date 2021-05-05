const axios = require("axios");

const config = require("../config");

const { client_id, client_secret, request_token_url } = config.github;

module.exports = (server) => {
  server.use(async (ctx, next) => {
    if (ctx.path === "/auth") {
      const code = ctx.query.code;
      if (!code) {
        ctx.body = "code not exist";
        return;
      }
      const result = await axios({
        // 这个地址可以放在 config.js 里面
        url: request_token_url,
        method: "POST",
        // 注意参数不要写错了
        data: { client_id, client_secret, code },
        // 返回的数据是以什么样的形式（JSON）
        headers: {
          Accept: "application/json",
        },
      });
      console.log(result.status, result.data);
      // 注意在错误的情况下也是返回 200 的 code
      if (result.status === 200 && result.data && !result.data.error) {
        ctx.session.githubAuth = result.data;
        const { access_token, token_type } = result.data;
        const userInfoRes = await axios({
          // 除了认证的请求，其他的 api 都是在 https://api.github.com 这个域名下面的
          url: "https://api.github.com/user",
          method: "GET",
          headers: {
            Authorization: `${token_type} ${access_token}`,
          },
        });
        // console.log(userInfoRes.data);
        ctx.session.userInfo = userInfoRes.data;
        ctx.redirect("/");
      } else {
        const errorMsg = result.data && !result.data.error;
        ctx.body = `request token failed ${errorMsg}`;
      }
    } else {
      await next();
    }
  });
};
