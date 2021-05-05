import { createStore, combineReducers, applyMiddleware } from "redux";
// applyMiddleware 是 redux 的中间件，构建一些第三方的一些扩展 redux 整个应用体系的方法。
import ReduxThunk from "redux-thunk";

const userInitialState = {};

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
  user: userReducer,
});

// console.log(store.getState());
export default function initialzeStore(state) {
  const store = createStore(
    allReducers,
    Object.assign(
      {},
      {
        user: userInitialState,
      },
      state
    ),
    applyMiddleware(ReduxThunk)
  );
  return store;
}
