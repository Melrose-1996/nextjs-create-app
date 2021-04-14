import {
  useState,
  useReducer,
  useRef,
  memo,
  useMemo,
  useCallback,
} from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
}
function MyCount() {
  const [count, dispatchCount] = useReducer(counterReducer, 0);
  const [name, setName] = useState("jokcy");

  const countRef = useRef();
  countRef.current = count;

  // 注意这里如果不传第二个参数，每次都还是会返回新的对象
  const config = useMemo(
    () => ({
      text: `count is ${count}`,
      color: count > 3 ? "indigo" : "cyan",
    }),
    [count]
  );
  // 注意这里的 dispatch 不受任何影响，不依赖任何参数
  const add = useCallback(() => dispatchCount({ type: "add" }), []);
  const clickAlert = function () {
    setTimeout(() => {
      alert(countRef.current);
    }, 2000);
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Child config={config} onButtonClick={add}></Child>
      <button onClick={clickAlert}>alert count</button>
    </div>
  );
}

// 是否要更新，完全却决于传入的 props 里的 onButtonClick 和 config 是否发生变化
const Child = memo(function Child({ onButtonClick, config }) {
  console.log("child render");
  return (
    <button onClick={onButtonClick} style={{ color: config.color }}>
      {config.text}
    </button>
  );
});

export default MyCount;
