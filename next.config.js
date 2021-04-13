const configs = {
  // 编译文件的输出目录,当我们没有配置的时候是默认放在 .next 目录里面的。
  distDir: "dest",
  // 是否给每个路由生成 Etag，默认给每个页面生成一个 Etag(用来进行缓存验证的)，注意当我们使用了 neginx 代理之后，会有配置项
  generateEtags: true,
  // 页面内容缓存配置
  onDemandEntries: {
    // 内容在内存缓存的时长(ms)
    maxInactiveAge: 25 * 1000,
    // 同时存储多少个页面
    pageBufferLength: 2,
  },
  // 在 pages 目录下那种后缀的文字被认为是页面
  pageExtension: ["jsx", "js"],
  // 配置 buildId - 我们在创建一个 build 要提供一个 id ，对同一个项目要进行多个节点部署的时候才会用到
  generateBuildId: async () => {
    if (process.env.YOUR_BUILD_ID) {
      return process.env.YOUR_BUILD_ID;
    }

    // 返回 null 使用默认的 unique id
    return null;
  },
  // 手动修改 webpack config - 默认去修改 nextjs 的默认的 webpack 的配置的
  webpack(config, options) {
    return config;
  },
  // 修改 webpackDevMiddleware 配置
  webpackDevMiddleware: (config) => {
    return config;
  },
  // 可以在页面上通过 process.env.customKey 获取 value
  env: {
    customKey: "value",
  },
  // 下面两个要通过 "next/config" 来读取
  // 只有在服务端渲染时才会获取的配置
  serverRuntimeConfig: {
    mySecret: "secret",
    secondSecret: process.env.SECOND_SECRET,
  },
  // 在 服务端渲染和客户端渲染都可以获取的配置
  publicRuntimeConfig: {
    staticFolder: "/static",
  },
};
