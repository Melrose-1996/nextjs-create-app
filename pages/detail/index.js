import withRepo from "../../components/with-repo-basic.jsx";

import api from "../../lib/api";

import dynamic from "next/dynamic";

// 这样把 detail 的代码分离出来的好处就是，不会让 detail 变化影响到整体不变的 hash 值，而整体代码块大一点的话，只要 hash 值不变，都可以保存到起来。
// 当我们 loaded 这个 MDRenderer 的时候，它是一个异步的过程，loading 的时候一直在等待的，当我们传入第二参数配置，让它在 loading 之前显示的样式
const MDRenderer = dynamic(() => import("../../components/MarkFdownRenderer"), {
  loading: () => <p>Loading....</p>,
});

function Detail({ readme }) {
  // atob 注意在浏览器渲染的时候，window 是有这个方法的，但是在服务端渲染的时候 js 是没有这个方法的
  // 需要兼容是需要 import 一个公共模块，使得服务端和客户端都可以使用这些公共的方法
  // console.log(atob(readme.content), "++++++++++");

  // 注意这个 div 里面不能写任何东西
  return <MDRenderer content={readme.content} isBase64={true} />;
}

Detail.getInitialProps = async (ctx) => {
  const { owner, name } = ctx.query;

  const readmeResp = await api.request(
    {
      url: `/repos/${owner}/${name}/readme`,
    },
    ctx.req,
    ctx.res
  );
  return {
    readme: readmeResp.data,
  };
};

export default withRepo(Detail, "index");

// import Repo from "../../components/Repo";
// import Link from "next/link";

// import api from "../../lib/api";

// import { withRouter } from "next/router";

// // 这样我们把键值对的形式映射成了一个字符串
// function makeQuery(queryObj) {
//   // 遍历这个 obj
//   const query = Object.entries(queryObj)
//     .reduce((result, entry) => {
//       result.push(entry.join("="));
//       return result;
//     }, [])
//     .join("&");
//   return `?${query}`;
// }

// function Detail({ repoBasic, router }) {
//   const query = makeQuery(router.query);
//   return (
//     <div className="root">
//       <div className="repo-basic">
//         <Repo repo={repoBasic} />
//         <div className="tabs">
//           <Link href={`/detail${query}`}>
//             <a className="tab index">Readme</a>
//           </Link>
//           <Link href={`/detail/issues${query}`}>
//             <a className="tab issues">Issues</a>
//           </Link>
//         </div>
//       </div>
//       <div>Readme</div>
//       <style jsx>{`
//         .root {
//           padding-top: 20px;
//         }
//         .repo-basic {
//           padding: 20px;
//           border: 1px solid #eee;
//           margin-bottom: 20px;
//           border-radius: 5px;
//         }
//         .tab + .tab {
//           margin-left: 20px;
//         }
//       `}</style>
//     </div>
//   );
// }

// console.log(Detail.prop);

// Detail.getInitialProps = async (ctx) => {
//   console.log(ctx.query);
//   const { owner, name } = ctx.query;
//   //   return {
//   //     name: "melrose",
//   //   };
//   // return new Promise((resolve) => {
//   //   setTimeout(() => {
//   //     resolve({});
//   //   }, 3000);
//   // });
//   const repoBasic = await api.request(
//     { url: `/repos/${owner}/${name}` },
//     ctx.req,
//     ctx.res
//   );
//   return {
//     repoBasic: repoBasic.data,
//   };
// };

// export default withRouter(Detail);
