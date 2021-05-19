const axios = require("axios");

const github_base_url = "https://api.github.com";

module.exports = (server) => {
  server.use(async (ctx, next) => {
    const path = ctx.path;
    if (path.startsWith("/github/")) {
      const githubAuth = ctx.session.githubAuth;
      const githubPath = `${github_base_url}${ctx.url.replace(
        "/github/",
        "/"
      )}`;

      const token = githubAuth && githubAuth.access_token;
      let headers = {};
      if (token) {
        headers["Authorization"] = `${githubAuth.access_token} ${token}`;
      }
      const result = await axios({
        url: githubPath,
        method: "GET",
        headers,
      })
        .then((res) => {
          //成功回调
          console.log(res);
          if (res.status === 200) {
            ctx.body = result.data;
            ctx.set("Content-Type", "application/json");
          } else {
            ctx.status = result.status;
            ctx.body = {
              success: false,
            };
            ctx.set("Content-Type", "application/json");
          }
        })
        .catch((err) => {
          console.log(err);
          ctx.body = {
            success: false,
          };
          ctx.set("Content-Type", "application/json");
        });
    } else {
      await next();
    }
  });
};
