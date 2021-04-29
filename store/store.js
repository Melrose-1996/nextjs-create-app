import { createStore, combineReducers, applyMiddleware } from "redux";
// applyMiddleware 是 redux 的中间件，构建一些第三方的一些扩展 redux 整个应用体系的方法。
import ReduxThunk from "redux-thunk";

const initalState = {
  count: 0,
};

const userInitialState = {
  username: "jokcy",
};

const ADD = "ADD";

function conuntReducer(state = initalState, action) {
  switch (action.type) {
    case ADD:
      // 这边 return 一定要是新的对象，这边 state 默认也是一个对象，不能使用 state.count += 1 (这样我们改变了原来 state 上面的属性，而 state 这个对象是没有变的)，我们通过 return 一个新的对象，这样 state 是有变化的。
      return { count: state.count + (action.num || 1) };
    default:
      return state;
  }
}

const UPDATE_USERNAME = "UPDATE_USERNAME";
function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        // 注意我们要保持现在的状态更原先一致
        ...state,
        username: action.name,
      };

    default:
      return state;
  }
}

const allReducers = combineReducers({
  count: conuntReducer,
  user: userReducer,
});
// 注意这里的 state 也会发生变化，会自动帮我进行模块区分 { count:initalState, user:userInitialState }

const store = createStore(
  allReducers,
  {
    count: initalState,
    user: userInitialState,
  },
  applyMiddleware(ReduxThunk)
);
// console.log(store.getState());

// action creatore - 有些 action 我们传输的内容会比较多，每次去申明对象，显示这个 type 会比较麻烦，写一个 function 来传递一些参数进去会比较方便一些.
// 注意我们用了 creatore 这个方法了之后，还是可以使用 { type: ADD } 这个方法来触发 action 的。 必须要保证 action 是一个对象
function add(num) {
  return {
    type: ADD,
    num,
  };
}

store.dispatch(add(3));
store.dispatch({ type: UPDATE_USERNAME, name: "Melrose" });

// 这个方法的调用实在第一次 dispatch 之前，所以只会监测到第二次 dispatch 发生的变化，这个 api 是让我们监听 store 变化的 api

store.subscribe(() => {
  console.log("+++++++++++++++++", store.getState());
});

store.dispatch({ type: ADD });

// console.log(store.getState());

export default store;
