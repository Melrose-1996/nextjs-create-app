import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  /* 我们可以在 extends 的时候不去写 render和getInitialProps，但是如果写了这些组件是必须要写的 */
  static async getInitialProps(ctx) {
    // 让它在我们初次渲染的时候去执行某些行为，从而制定一些比较高级的内容
    ctx.rederPage = () => {};
    const props = await Document.getInitialProps(ctx);
    return {
      ...props,
    };
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
