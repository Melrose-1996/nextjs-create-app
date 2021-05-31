// pm2 的配置文件
module.exports = {
  // app 是执行 pm2 命令的时候，所需要启动的应用，而配置在该数组里面的
  apps: [
    {
      // name 是在 pm2 显示的 node.js 的实例的名字
      name: "next-project",
      // 启动的脚本
      script: "./server.js",
      // 启动的实例个数
      instances: 1,
      // 是否要自动重启
      autorestart: true,
      watch: false,
      // 1G 内存强制重启，并将内存清空
      max_memory_restart: "1G",
      // 配置启动时的一些 env 变量
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
