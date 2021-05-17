import { createStore, combineReducers, applyMiddleware } from "redux";
// applyMiddleware 是 redux 的中间件，构建一些第三方的一些扩展 redux 整个应用体系的方法。
import ReduxThunk from "redux-thunk";

import axios from "axios";

const userInitialState = {};

const LOGOUT = "LOGOUT";

const UPDATE_USERNAME = "UPDATE_USERNAME";
function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.name,
      };
    case LOGOUT: {
      // 这里state拿到的就是 user:{}
      // 注意我们要保持现在的状态更原先一致
      return {};
    }

    default:
      return state;
  }
}

/* 
{ 
  user: {},
  count: {}
}
*/
const allReducers = combineReducers({
  user: userReducer,
  // 如果还有一个 count
});

// action creators
export function logout() {
  return (dispatch) => {
    axios
      .post("/logout")
      .then((resp) => {
        if (resp.status === 200) {
          dispatch({
            type: LOGOUT,
          });
        } else {
          console.log("logout failed", resp);
        }
      })
      .catch((err) => {
        console.log("logout failed", err);
      });
  };
}

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
