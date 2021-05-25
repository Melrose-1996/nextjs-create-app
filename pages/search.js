import { withRouter } from "next/router";

import { Row, Col, List } from "antd";

import Link from "next/link";
/**
 * sort: 排序方式
 * order: 排序顺序
 * lang: 仓库的项目开发主语言
 * page: 分页页面
 *
 */

const api = require("../lib/api");

// 搜索条件
const LANGUAGES = ["JavaScript", "HTML", "CSS", "TypeScript", "Java", "Rust"];

const SORT_TYPE = [
  { name: "Best Match" },
  { name: "Most Stars", value: "stars", order: "desc" },
  { name: "Fewest Stars", value: "stars", order: "asc" },
  { name: "Most Forks", value: "forks", order: "desc" },
  { name: "Fewest Stars", value: "forks", order: "asc" },
];

function Search({ router, repos }) {
  console.log(repos);
  return (
    <div className="root">
      <Row gutter={20}>
        <Col gutter={6}>
          <List
            bordered
            header={<span className="list-header">语言</span>}
            style={{ marginBottom: 20, marginTop: 10 }}
            dataSource={LANGUAGES}
            renderItem={(item) => {
              return (
                <List.Item>
                  <Link href="/search">
                    <a>{item}</a>
                  </Link>
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
              return (
                <List.Item>
                  <Link href="/search">
                    <a>{item.name}</a>
                  </Link>
                </List.Item>
              );
            }}
          />
        </Col>
      </Row>
    </div>
  );
}

Search.getInitialProps = async (ctx) => {
  console.log(ctx, 11111);
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
