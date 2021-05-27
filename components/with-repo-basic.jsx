import Repo from "./Repo";
import Link from "next/link";

import api from "../lib/api";

import { withRouter } from "next/router";




export default function withRepo(Comp, type = 'index') {
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

    function WithDetail({ repoBasic, router, ...rest }) {
        const query = makeQuery(router.query);
        return (
            <div className="root">
                <div className="repo-basic">
                    <Repo repo={repoBasic} />
                    <div className="tabs">
                        {type === 'index' ? <span className="tab">Readme</span> : <Link href={`/detail${query}`}>
                            <a className="tab index">Readme</a>
                        </Link>}
                        {type === 'issues' ? <span className="tab">Issues</span> : <Link href={`/detail/issues${query}`}>
                            <a className="tab issues">Issues</a>
                        </Link>}
                    </div>
                </div>
                <div>
                    {/* 注意我们在使用 HOC 的过程，我们在获取 HOC 自己要用的 props 剩下所有的传递给 Comp 的 props 都要传下去，而这个 props 就是 Comp 真实要使用的 props */}
                    <Comp {...rest} />
                </div>
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

    WithDetail.getInitialProps = async (ctx) => {
        const { owner, name } = ctx.query;
        const repoBasic = await api.request(
            { url: `/repos/${owner}/${name}` },
            ctx.req,
            ctx.res
        );

        let pageData = {}
        if (Comp.getInitialProps) {
            pageData = await Comp.getInitialProps(ctx)
        }
        return {
            repoBasic: repoBasic.data,
            ...pageData
        };
    };


    return withRouter(WithDetail)
}


// export default withRouter(withRepo);