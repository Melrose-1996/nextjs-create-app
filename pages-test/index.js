import Link from "next/link";
// 注意这个跳转是没有浏览器去加载过程，更刷新不同，直接是由前端跳转的
import Router from "next/router";
import { Button } from "antd";

// import store from "../store/store";

const events = [
  "routeChangeStart",
  "routeChangeComplete",
  "routeChangeError",
  "beforeHistoryChange",
  "hashChangeStart",
  "hashChangeComplete",
];

function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args);
  };
}

events.forEach((event) => {
  Router.events.on(event, makeEvent(event));
});

export default function Home() {
  function getTestB() {
    Router.push(
      {
        pathname: "/test/b",
        query: {
          id: 1111111111,
        },
      },
      "/test/b/111111111"
    );
  }
  return (
    <>
      {/* 问题在于每次刷新会出现 404  ，原因是 nextjs 是没有这个真正的路由的，只是进行了一个单映射关系*/}
      {/* <Link href="./a?id=1" as="/a/1">
        <Button>A</Button>
      </Link>
      <Button onClick={getTestB}>test b</Button> */}
      <h1>children 组件</h1>
    </>
  );
}
