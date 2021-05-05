import React from "react";
import createStore from "../store/store";

// 用于判断是否处于 window 的环境
const isServer = typeof window === "undefined";

const __NEXT_REUDEX_STORE__ = "__NEXT_REUDEX_STORE__";

// 创建 store 的方法
function getOrCreateStore(initialState) {
  // 服务端的情况
  if (isServer) {
    return createStore(initialState);
  }
  // 不是服务端的情况
  if (!window[__NEXT_REUDEX_STORE__]) {
    window[__NEXT_REUDEX_STORE__] = createStore(initialState);
  }
  return window[__NEXT_REUDEX_STORE__];
}

export default (Comp) => {
  class WithReduxApp extends React.Component {
    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }
    render() {
      const { Component, pageProps, ...rest } = this.props;
      console.log(Component, pageProps);
      if (pageProps) {
        pageProps.test = "123";
      }
      return (
        <Comp
          Component={Component}
          pageProps={pageProps}
          {...rest}
          reduxStore={this.reduxStore}
        />
      );
    }
  }

  WithReduxApp.getInitialProps = async (ctx) => {
    // 我们需要创建一个 store

    let reduxStore;

    if (isServer) {
      const { req } = ctx.ctx;
      const session = req.session;
      if (session && session.userInfo) {
        reduxStore = getOrCreateStore({
          user: session.userInfo,
        });
      } else {
        reduxStore = getOrCreateStore();
      }
    } else {
      reduxStore = getOrCreateStore();
    }

    // 初始化 store
    // const reduxStore = getOrCreateStore();

    ctx.reduxStore = reduxStore;
    let appProps = {};
    if (typeof Comp.getInitialProps === "function") {
      appProps = await Comp.getInitialProps(ctx);
    }

    return {
      ...appProps,
      initialReduxState: reduxStore.getState(),
    };
  };
  return WithReduxApp;
};
