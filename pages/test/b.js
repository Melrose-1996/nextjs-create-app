import { useState, useEffect } from "react";

function MyCount() {
  const [count, setCount] = useState(0);
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
