import { useState, useEffect } from "react";

function countReducer(state, action) {}

function MyCount() {
  const [count, setCount] = useState(0);
  // 这里传入的什么，就会把 count 设置为这个值，这个值是不基于我们最新的 count
  setCount(1);
  // 这个 c 是我们调用的这个 setcount 最新的 count 值
  setCount((c) => c + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    // 组件卸载的时候，执行我们返回的这个回调
    return () => clearInterval(interval);
  }, []);
  return <span>{count}</span>;
}

export default MyCount;
