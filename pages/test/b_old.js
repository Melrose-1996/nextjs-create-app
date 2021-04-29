import {
  useState,
  useReducer,
  useLayoutEffect,
  useEffect,
  useContext,
  useRef,
} from "react";

import MyContext from "../../lib/my-context";

// reducer 产生的原因：如果我们在使用 useState(0) 的时候，传入的对象比较复杂的话，我们通过 setCount 去更新它，我们传入的必须是一个新的对象，跟 redux 一样,我们必须每一次都返回一个 Object.assign({}) 这个新的对象，只有对象改变了它的本身，才可以认为是这个对象是修改的。
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
  // const [count, setCount] = useState(0);
  // 注意这里需要传两个参数，第一个就是 reducer 函数，第二个参数是初始值
  const [count, dispatchCount] = useReducer(counterReducer, 10);
  const [name, setName] = useState("jokcy");

  // Hooks 都要写在函数里面
  const ctx = useContext(MyContext);

  const inputRef = useRef();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setCount((c) => c + 1);
  //     dispatchCount({ type: "minus" });
  //   }, 1000);
  //   // 组件卸载的时候，执行我们返回的这个回调
  //   return () => clearInterval(interval);
  // }, []);
  // return <span>{count}</span>;

  // 这里用的是 useEffect，当组件第一渲染的时候就用到了这个 useEffect，每次修改 state 数据，这个函数组件就会重新渲染，从而就会触发这个 useEffect
  // 第二个参数可以是一个数组，数组里面也可以传入不同的值（state），如果在这次更新中没有发生变化，则不会触发 useEffect ，第二个值称为依赖，通过这个依赖来判断是否需要执行 useEffect
  useEffect(() => {
    console.log(inputRef);
    console.log("effect invoked");
    return () => console.log("effect deteched");
  });
  // useLayoutEffect 永远比 useEffect 优先执行的，会在任何组件更新之前优先执行，等里面代码执行完了之后， DOM 才能挂载到 HTML 里面，才能显示出更新的内容
  // useLayoutEffect(() => {
  //   console.log("Layout effect invoked");
  //   return () => console.log("Layout effect deteched");
  // });
  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => dispatchCount({ type: "add" })}>{count}</button>
      <p>{ctx}</p>
    </div>
  );
}

export default MyCount;
