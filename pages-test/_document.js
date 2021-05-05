import Document, { Html, Head, Main, NextScript } from "next/document";
import { Component } from "react";

import { ServerStyleSheet } from "styled-components";

function withLog(Comp) {
  return (props) => {
    console.log(props, "++++++++++++++++");
    return <Comp {...props} />;
  };
}

class MyDocument extends Document {
  /* 我们可以在 extends 的时候不去写 render和getInitialProps，但是如果写了这些组件是必须要写的 */
  static async getInitialProps(ctx) {
    // 初始化
    const sheet = new ServerStyleSheet();

    // 获取一个方法
    const originalRenderPage = ctx.rederPage;

    try {
      ctx.rederPage = () =>
        originalRenderPage({
          // 这是一个方法，它会接收一个 App 作为参数，然后返回一个我们对它进行增强的 APP
          // 这个 app 就是我们写的 _app.js（如果我们没写的话，就是默认 nextjs 的 app.js ）

          // enhanceApp: (App) => withLog(App),
          // component 其实就是我们在 pages 目录下定义的每一个文件(暂时只对 APP 进行操作)
          // enhanceComponent: (Component) => withLog(Component),

          // 最终不管是 app 还是 component ，我们都是可以拿过来进行包装的
          // 这里返回的是一个方法

          enhanceApp: (App) => (props) =>
            // 通过 sheet.collectStyles 这个方法，我们其实拿到了我们在 sheet 上挂载的所有我们渲染完成的整个 app 之后，渲染完成整个 app，我们会执行一些代码，这个时候我们会产生一系列 css 的代码，这个代码最终都会挂载在 sheet 上面，这个时候我们可以通过 sheet.getStyleElement() 去返回一段 style 对应的代码
            sheet.collectStyles(<App {...props} />),
        });

      // 让它在我们初次渲染的时候去执行某些行为，从而制定一些比较高级的内容
      ctx.rederPage = () => {};
      const props = await Document.getInitialProps(ctx);
      return {
        ...props,
        styles: (
          <>
            {/* 这个是使用 nextjs 内置的所有的 stylecss 所产生的样式，这是原来所有的内容 */}
            {props.styles}
            {/* 这是覆盖的内容 */}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
