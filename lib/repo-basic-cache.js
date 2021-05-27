import LRU from "lru-cache";

const cache = new LRU({
  maxAge: 1000 * 60 * 60,
});

export function setCache(repo) {
  const full_name = repo.full_name;
  cache.set(full_name, repo);
}

// full_name:facebook/react
export function getCache(full_name) {
  return cache.get(full_name);
}

// 根据数组的一个列表插入
export function setArray(repos) {
  repos.forEach((repo) => setCache(repo));
}
