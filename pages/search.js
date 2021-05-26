import { useCallback, memo, isValidElement } from "react";

import { withRouter } from "next/router";

import { Row, Col, List, Pagination } from "antd";

import Router from "next/router";

import Link from "next/link";
/**
 * sort: 排序方式
 * order: 排序顺序
 * lang: 仓库的项目开发主语言
 * page: 分页页面
 *
 */

const api = require("../lib/api");

import Repo from "../components/Repo";

// 搜索条件
const LANGUAGES = ["JavaScript", "HTML", "CSS", "TypeScript", "Java", "Rust"];

const SORT_TYPE = [
  { name: "Best Match" },
  { name: "Most Stars", value: "stars", order: "desc" },
  { name: "Fewest Stars", value: "stars", order: "asc" },
  { name: "Most Forks", value: "forks", order: "desc" },
  { name: "Fewest Stars", value: "forks", order: "asc" },
];

const selectedItemStyle = {
  borderLeft: "2px solid #e36209",
  fontWeight: 100,
};

// 这是一个纯粹的方法，方法一旦声明，不存在任何副作用
// const doSearch = useCallback((config) => {
//   Router.push({
//     pathname: "/search",
//     query: config,
//   });
// }, []);

// react 是一个组件化的框架，组件依靠 props 和 states 进行运行的，如果能够抽象成 props 那么就可以重新申明一个组件，让组件帮忙使用，在代码维护变得更加简单
// 防止了组件在点击的过程中重新声明渲染
// FilterLink 组件是纯粹根据 props 进行更新的，可以 memo 进行优化，当 props 没有进行变化的时候，这个组件不会被重新渲染

const per_page = 20;
const FilterLink = memo(({ name, query, lang, sort, order, page }) => {
  let queryString = `?query=${query}`;
  if (lang) queryString += `&lang=${lang}`;
  if (sort) queryString += `&sort=${sort}&order=${order || "desc"}`;
  if (page) queryString += `&page=${page}`;

  queryString += `&per_page=${per_page}`;
  // if (page) queryString += `&page=${page}`;

  // const doSearch = (config) => {
  //   Router.push({
  //     pathname: "/search",
  //     query: {
  //       query,
  //       lang,
  //       sort,
  //       order,
  //     },
  //   });
  // };
  // 注意 a 标签不放链接，很难去做 SEO ，因为 SEO 会解析 HTML 的内容
  return (
    <Link href={`/search${queryString}`}>
      {/* isValidElement 是用来判断是否为一个标签 */}
      {isValidElement(name) ? name : <a>{name}</a>}
    </Link>
  );
});

const noop = () => {};

function Search({ router, repos }) {
  console.log(repos);
  // 注意这些数据都没有在 state 里面去创建，希望是这些页面显示的内容完全根据 url 来定的，使得整个组件是个受控的组件，不会产生任何的副作用。

  // 该路由是 withRouter 传递过来的
  const { ...querys } = router.query;
  const { sort, order, lang, page } = router.query;

  // 用于拼接路径的方法
  // 注意语言变化了，但是当时选中了一个排序方式，在语言变化的时候，不应该变化其排序，所以要把排序的参数放在 query 里面。
  // const handleLanguageChange = (language) => {
  //   Router.push({
  //     pathname: "/search",
  //     query: {
  //       query,
  //       lang: language,
  //       sort,
  //       order,
  //     },
  //   });
  // };
  // const handleSortChange = (sort) => {
  //   Router.push({
  //     pathname: "/search",
  //     query: {
  //       query,
  //       lang,
  //       sort: sort.value,
  //       order: sort.order,
  //     },
  //   });
  // };

  return (
    <div className="root">
      <Row gutter={20}>
        <Col gutter={6}>
          <List
            bordered
            header={<span className="list-header">语言</span>}
            style={{ marginBottom: 20 }}
            dataSource={LANGUAGES}
            renderItem={(item) => {
              const selected = lang === item;
              return (
                <List.Item style={selected ? selectedItemStyle : null}>
                  {selected ? (
                    <span>{item}</span>
                  ) : (
                    <FilterLink {...querys} lang={item} name={item} />
                  )}
                  {/* <a
                    onClick={() => doSearch({ sort, order, query, lang: item })}
                  >
                    {item}
                  </a> */}
                </List.Item>
              );
            }}
          />
          <List
            bordered
            header={<span className="list-header">排序</span>}
            style={{ marginBottom: 20 }}
            dataSource={SORT_TYPE}
            renderItem={(item) => {
              let selected = false;
              if (item.name === "Best Match" && !sort) {
                selected = true;
              } else if (item.value === sort && item.order === order) {
                selected = true;
              }
              return (
                <List.Item style={selected ? selectedItemStyle : null}>
                  {selected ? (
                    <span>{item.name}</span>
                  ) : (
                    <FilterLink
                      {...querys}
                      sort={item.value}
                      order={item.order}
                      name={item.name}
                    />
                  )}

                  {/* <a
                    onClick={() =>
                      doSearch({
                        sort: item.value || "",
                        order: item.order || "",
                        query,
                        lang,
                      })
                    }
                  >
                    {item.name}
                  </a> */}
                </List.Item>
              );
            }}
          />
        </Col>
        <Col span={18}>
          <h3 className="repos-title">{repos.total_count} 个仓库</h3>
          {repos.items.map((repo) => (
            <Repo repo={repo} key={repo.id} />
          ))}
          <div className="pagination">
            {/* itemRender 就是我们每个 item 显示的内容，itemRender 就是每个 page 对应的页码，type 就是这个分页向前还是向后还是中间的按钮，ol 就是类似于 icon ，注意 page ， type 都是 a 标签  */}
            <Pagination
              pageSize={per_page}
              current={Number(page) || 1}
              total={1000}
              onChange={noop}
              itemRender={(page, type, ol) => {
                const p =
                  type === "page"
                    ? page
                    : type === "prev"
                    ? page - 1
                    : page + 1;
                const name = type === "page" ? page : ol;
                return <FilterLink {...querys} page={p} name={name} />;
              }}
            />
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .root {
          padding: 20px 0;
        }
        .list-header {
          font-weight: 800;
          font-size: 16px;
        }
        .repos-title {
          border-bottom: 1px solid #eee;
          font-size: 24px;
          line-height: 50px;
        }
        .pagination {
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

Search.getInitialProps = async (ctx) => {
  const { query, sort, lang, order, page } = ctx.query;
  if (!query) {
    return {
      repos: {
        total_count: 0,
      },
    };
  }
  let queryString = `?q=${query}`;
  if (lang) queryString += `+language:${lang}`;
  if (sort) queryString += `&sort=${sort}&order=${order || "desc"}`;
  if (page) queryString += `&page=${page}`;
  queryString += `&per_page=${per_page}`;
  const result = await api.request(
    {
      url: `/search/repositories${queryString}`,
    },
    ctx.req,
    ctx.res
  );

  return {
    repos: result.data,
  };
};

export default withRouter(Search);
