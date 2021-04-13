import { withRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
// import moment from "moment";

import dynamic from "next/dynamic";

const Comp = dynamic(import("../comonents/lazyComp"));

const Title = styled.h1`
  color: gold;
  font-size: 88px;
`;

const A = ({ router, name, time }) => (
  <>
    <Title>This is title {time}</Title>
    <Comp />
    <Link href="#aaa">
      <a className="link">
        AAAAAA {router.query.id} {name}
      </a>
    </Link>
    {/* css-in-js 根据组件的挂载和卸载来渲染页面的，一旦组件卸载了，哪怕定义了全局的样式，也不会生效 */}
    {/* 组件内的样式，不会影响其他组件内的样式，形成一个它编译完成之后的 className */}
    <style jsx>
      {`
        a {
          color: indigo;
        }
        .link {
          color: gold;
        }
      `}
    </style>
    {/* 全局样式 */}
    <style jsx global>
      {`
        a {
          color: indigo;
        }
        .link {
          color: gold;
        }
      `}
    </style>
  </>
);

// 这个方法 return 的每一项属性都会作为对应 A 这个组件的 props 默认被获取
// 注意只有放在 pages 目录下的 getInitialProps 才会被调用，放在其他目录下的都不会被调用，因为在 pages 下面的每一个组件，它们对应的是一个页面，这个页面就是 nextjs 给我们生成的某一个路由对应的一个渲染的组件，只有路由对应的组件才会被路由的这个特定的功能去处理。即我们在进行路由切换的时候， nextjs 在路由真正切换成功之前调用我们这个组件的 getInitialProps ，然后拿到它 return 的内容。
// 这个会让我们服务端渲染的时候就去拿到这个数据并进行渲染，从而快速展示我们的内容，而不需要客户端加载完 js 再去渲染。
// 当发起异步请求获取数据时，我们会等到异步结束之后再真正去渲染内容的，这个服务端和客户端都是一样，都需要等到 getInitialProps 方法结束之后再去做。
A.getInitialProps = async () => {
  const moment = await import("moment");

  return {
    name: "Melrose",
    // fromNow() - 表示的是1min之前
    time: moment.default(Date.now() - 60 * 1000).fromNow(),
  };
};

export default withRouter(A);
