import { useEffect } from 'react'
import Repo from "./Repo";
import Link from "next/link";

import api from "../lib/api";

import { withRouter } from "next/router";

import { getCache, setCache } from '../lib/repo-basic-cache'

const isServer = typeof window === 'undefined'



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
        useEffect(() => {
            // 服务端渲染对于这段代码是没有必要去执行的，如果重复执行会导致我们的内存没有意义的使用，这段是跟用户的搜索有关的，跟服务端整体渲染是没有关系的，所以需要屏蔽掉。
            if (!isServer) setCache(repoBasic)
        })
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
    // 注意在客户端第一次渲染的时候，是不会调用这个 getInitialProps ，所以不会在里面进行 cache
    WithDetail.getInitialProps = async (ctx) => {
        const { owner, name } = ctx.query;

        const full_name = `${owner}/${name}`



        let pageData = {}
        if (Comp.getInitialProps) {
            pageData = await Comp.getInitialProps(ctx)
        }


        if (getCache(full_name)) {
            return {
                repoBasic: getCache(full_name),
                ...pageData
            };
        }

        const repoBasic = await api.request(
            { url: `/repos/${owner}/${name}` },
            ctx.req,
            ctx.res
        );



        return {
            repoBasic: repoBasic.data,
            ...pageData
        };
    };


    return withRouter(WithDetail)
}


// export default withRouter(withRepo);