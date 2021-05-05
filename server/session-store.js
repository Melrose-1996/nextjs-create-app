function getRedisSessionId(sid) {
  return `ssid:${sid}`;
}

class RedisSessionStore {
  constructor(client) {
    this.client = client;
  }
  // 获取 Redis 中存储的 session 数据
  async get(sid) {
    const id = getRedisSessionId(sid);
    // 这里就是对应于 redis 命令行的 get 指令，获取到 keys 对应的 value
    const data = await this.client.get(id);
    if (!data) {
      return null;
    }
    try {
      const result = JSON.parse(data);
      return result;
    } catch (error) {
      console.error(error);
    }
    console.log("get session", sid);
  }

  // 存储 session 数据到 redis
  // ttl 就是个保质期
  async set(sid, sess, ttl) {
    const id = getRedisSessionId(sid);
    if (typeof ttl === "number") {
      // 将毫秒转化为秒
      ttl = Math.ceil(ttl / 1000);
    }
    try {
      const sessStr = JSON.stringify(sess);
      if (ttl) {
        await this.client.setex(id, ttl, sessStr);
      } else {
        await this.client.set(id, sessStr);
      }
    } catch (error) {
      console.error(error);
    }
    console.log("set session", sid);
  }

  // 从 redis 当中删除某个 session
  async destroy(sid) {
    console.log("destroy session", sid);
    const id = getRedisSessionId(sid);
    await this.client.del(id);
  }
}
module.exports = RedisSessionStore;
