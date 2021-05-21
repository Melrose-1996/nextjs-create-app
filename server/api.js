// const axios = require("axios");

// const github_base_url = "https://api.github.com";

const { requestGithub } = require("../lib/api");

module.exports = (server) => {
  server.use(async (ctx, next) => {
    const path = ctx.path;
    const method = ctx.method;
    if (path.startsWith("/github/")) {
      const session = ctx.session;
      const githubAuth = session && ctx.session.gethubAuth;
      // 请求 github 数据
      const headers = {};
      if (githubAuth && githubAuth.access_token) {
        headers[
          "Authorization"
        ] = `${githubAuth.token_type} ${githubAuth.access_token}`;
      }
      const result = await requestGithub(
        method,
        ctx.url.replace("/github/", "/"),
        {},
        headers
      );

      ctx.status = result.status;
      ctx.body = result.data;
    } else {
      await next();
    }
  });
};

// module.exports = (server) => {
//   server.use(async (ctx, next) => {
//     const path = ctx.path;
//     if (path.startsWith("/github/")) {
//       const githubAuth = ctx.session.githubAuth;
//       // 这里的不应该使用 path.replace 因为 path 是不包含 query的
//       const githubPath = `${github_base_url}${ctx.url.replace(
//         "/github/",
//         "/"
//       )}`;

//       const token = githubAuth && githubAuth.access_token;
//       let headers = {};
//       if (token) {
//         // 注意：这里是 token_type ，必须要加上这个 access_token 不然回报 404 的错误
//         headers["Authorization"] = `${githubAuth.token_type} ${token}`;
//       }
//       await axios({
//         url: githubPath,
//         method: "GET",
//         headers,
//       })
//         .then((res) => {
//           //成功回调
//           console.log(res);
//           if (res.status === 200) {
//             ctx.body = res.data;
//             ctx.set("Content-Type", "application/json");
//           } else {
//             ctx.status = res.status;
//             ctx.body = {
//               success: false,
//             };
//             ctx.set("Content-Type", "application/json");
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//           ctx.body = {
//             success: false,
//           };
//           ctx.set("Content-Type", "application/json");
//         });
//     } else {
//       await next();
//     }
//   });
// };
