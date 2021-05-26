import Repo from "../../components/Repo";
import Link from "next/link";

import api from "../../lib/api";

import { withRouter } from "next/router";

// 这样我们把键值对的形式映射成了一个字符串
function makeQuery(queryObj) {
  // 遍历这个 obj
  const query = Object.entries(queryObj)
    .reduce((result, entry) => {
      result.push(entry.join("="));
      return result;
    }, [])
    .join("&");
  return `?${query}`;
}

function Detail({ repoBasic, router }) {
  const query = makeQuery(router.query);
  return (
    <div className="root">
      <div className="repo-basic">
        <Repo repo={repoBasic} />
        <div className="tabs">
          <Link href={`/detail${query}`}>
            <a className="tab index">Readme</a>
          </Link>
          <Link href={`/detail/issues${query}`}>
            <a className="tab issues">Issues</a>
          </Link>
        </div>
      </div>
      <div>Readme</div>
      <style jsx>{`
        .root {
          padding-top: 20px;
        }
        .repo-basic {
          padding: 20px;
          border: 1px solid #eee;
          margin-bottom: 20px;
          border-radius: 5px;
        }
        .tab + .tab {
          margin-left: 20px;
        }
      `}</style>
    </div>
  );
}

console.log(Detail.prop);

Detail.getInitialProps = async (ctx) => {
  console.log(ctx.query);
  const { owner, name } = ctx.query;
  //   return {
  //     name: "melrose",
  //   };
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({});
  //   }, 3000);
  // });
  const repoBasic = await api.request(
    { url: `/repos/${owner}/${name}` },
    ctx.req,
    ctx.res
  );
  return {
    repoBasic: repoBasic.data,
  };
};

export default withRouter(Detail);
