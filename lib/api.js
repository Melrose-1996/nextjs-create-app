// 专门处理 getInitalProps 请求接口功能的相关函数
// 由于在客户端执行又要在服务端执行，所以不直接使用 exports 这语法，在 ndoe.js 目前不支持

const axios = require("axios");

const github_base_url = "https://api.github.com";

// 这个方法就是单纯的向服务端发起请求的方法
async function requestGithub(method, url, data, headers) {
  return await axios({
    url: `${github_base_url}${url}`,
    method,
    data,
    headers,
  });
}

// 服务端
const isServer = typeof window === "undefined";
async function request({ method = "GET", url, data = {} }, req, res) {
  if (!url) {
    throw Error("url must provide");
  }
  if (isServer) {
    // 服务端
    const session = req.session;
    const githubAuth = session.gethubAuth || {};
    // 请求 github 数据
    const headers = {};
    if (githubAuth.access_token) {
      headers[
        "Authorization"
      ] = `${githubAuth.token_type} ${githubAuth.access_token}`;
    }
    return await requestGithub(method, url, data, headers);
  } else {
    // 客户端 - 我们是需要请求自己的服务的，我们自己的服务对于 URL 也会进行处理
    // /search/repositories?q=react => /github/search/repositories?q=react
    // 这样我们服务端通过判断 /github 开头的这个请求的地址进行一个特殊的处理
    return await axios({
      url: `/github${url}`,
      method,
      data,
    });
  }
}

module.exports = {
  request,
  requestGithub,
};
