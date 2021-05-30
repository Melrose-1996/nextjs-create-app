import { Avatar, Button, Select, Spin } from "antd";
import withRepo from "../../components/with-repo-basic.jsx";
import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";

import api from "../../lib/api";

const MdRenderer = dynamic(() => import("../../components/MarkFdownRenderer"));

// 转义时间
import { getLastUpdated } from "../../lib/util";

import SearchUser from "../../components/SearchUser";

// 使用 cache 来存储数据
const CACHE = {};

// 显示 detail 的内容
function IssueDetail({ issue }) {
  return (
    <div className="root">
      <MdRenderer content={issue.body} />
      <div className="actions">
        <Button href={issue.html_url} target="_blank">
          打开Issue讨论页面
        </Button>
      </div>
      <style jsx>{`
        .root {
          background: #fafafa;
          padding: 20px;
        }
        .actions {
          text-align: right;
        }
      `}</style>
    </div>
  );
}

function IssueItem({ issue }) {
  const [showDetail, setShowDetail] = useState(false);

  // 使用 useCallback 的方式更新我们的 state, 而不是依赖于 useState 返回的这个 state，这样我们就不依赖于外部声明的变量，这样就逃过了闭包。
  const toggleShowDetail = useCallback(() => {
    setShowDetail((detail) => !detail);
  }, []);
  return (
    <>
      <div className="issue">
        <Button
          type="primary"
          size="small"
          style={{ position: "absolute", right: 10, top: 10 }}
          onClick={toggleShowDetail}
        >
          {showDetail ? "查看" : "隐藏"}
        </Button>
        <div className="avatar">
          <Avatar src={issue.user.avatar_url} shape="square" size={50} />
        </div>
        <div className="main-info">
          <h6>
            <span>{issue.title}</span>
            {issue.labels.map((label) => (
              <Label label={label} key={label.id} />
            ))}
          </h6>
          <p className="sub-info">
            <span>Updataed at {getLastUpdated(issue.updated_at)}</span>
          </p>
        </div>
        <style jsx>{`
          .issue {
            display: flex;
            position: relative;
            padding: 10px;
          }
          .issue:hover {
            background: #fafafa;
          }
          .issue + .issue {
            border-top: 1px solid #eee;
          }
          .main-info > h6 {
            max-width: 600px;
            font-size: 16px;
            padding-right: 40px;
          }
          .avatar {
            margin-right: 20px;
          }
          .sub-info {
            margin-bottom: 0;
          }
          .sub-info > span + span {
            display: inline-block;
            margin-left: 20px;
            font-size: 12px;
          }
        `}</style>
      </div>
      {showDetail ? <IssueDetail issue={issue} /> : null}
    </>
  );
}

// 仓库是否是 open ， 处于 open 的阶段还是 close 的阶段
const Option = Select.Option;

// 拼装搜索 query 的方法
function makeQuery(creator, state, labels) {
  // 确保 url 后面不会拼接多余的参数
  let creatorStr = creator ? `creator=${creator}` : "";
  let stateStr = state ? `state=${state}` : "";
  let labelsStr = "";
  if (labels && labels.length > 0) {
    labelsStr = `labels=${labels.join(",")}`;
  }

  const arr = [];
  if (creatorStr) arr.push(creatorStr);
  if (stateStr) arr.push(stateStr);
  if (labelsStr) arr.push(labelsStr);

  return `?${arr.join("&")}`;
}

// 展示搜索到的 label
function Label({ label }) {
  return (
    <>
      <span className="label" style={{ backgroundColor: `#${label.color}` }}>
        {label.name}
      </span>
      <style jsx>{`
        .label {
          display: inline-block;
          line-height: 20px;
          margin-left: 15px;
          padding: 3px 10px;
          border-radius: 3px;
          font-size: 12px;
        }
      `}</style>
    </>
  );
}

// 判断环境
const isServer = typeof window === "undefined";

function Issues({ initialIssues, labels, owner, name }) {
  // console.log(issues, labels, "+++++++++++");

  const [creator, setCreator] = useState();

  // 对应于状态
  const [state, setState] = useState();
  // 对应于 Label
  const [label, setLabel] = useState([]);

  // 对应于搜索按钮
  const [issues, setIssues] = useState(initialIssues);

  // loading 动画
  const [fetching, setFetching] = useState(false);

  const handleCreatorChange = useCallback((value) => {
    setCreator(value);
  }, []);

  // 对应于状态
  const handleStateChange = useCallback((value) => {
    setState(value);
  }, []);
  // 对应于 Label
  const handleLabelChange = useCallback((value) => {
    setLabel(value);
  }, []);

  // 对应于搜索按钮
  const handleSearch = useCallback(() => {
    setFetching(true);
    // 发起搜索，并重新调用 issues 的 api
    api
      .request({
        url: `/repos/${owner}/${name}/issues${makeQuery(
          creator,
          state,
          label
        )}`,
      })
      .then((resp) => {
        setIssues(resp.data);
        setFetching(false);
      })
      .catch((err) => {
        console.error(err);
        setFetching(false);
      });
  }, [owner, name, creator, state, label]);

  // 存储数据
  useEffect(() => {
    if (!isServer) {
      CACHE[`${owner}/${name}`] = labels;
    }
  }, [owner, name, labels]);

  return (
    <div className="root">
      <div className="search">
        {/* 对应的其实就是 v-bind */}
        {/* 搜索 owner */}
        <SearchUser onChange={handleCreatorChange} value={creator} />
        {/* 搜索 状态 */}
        <Select
          placeholder="状态"
          onChange={handleStateChange}
          value={state}
          style={{ width: 200, marginLeft: 20 }}
        >
          <Option value="all">all</Option>
          <Option value="open">open</Option>
          <Option value="closed">closed</Option>
        </Select>
        {/* 搜索 Label */}
        <Select
          mode="multiple"
          placeholder="Label"
          onChange={handleLabelChange}
          value={label}
          style={{ flexGrow: 1, marginLeft: 20, marginRight: 20 }}
        >
          {labels.map((label) => (
            <Option value={label.name} key={label.id}>
              {label.name}
            </Option>
          ))}
        </Select>
        <Button type="primary" disabled={fetching} onClick={handleSearch}>
          搜索
        </Button>
      </div>
      {fetching ? (
        <div className="loading">
          <Spin />
        </div>
      ) : (
        <div className="issues">
          {issues.map((issue) => (
            <IssueItem issue={issue} key={issue.id} />
          ))}
        </div>
      )}
      <style jsx>
        {`
          .issues {
            border: 1px solid #eee;
            border-radius: 5px;
            margin-bottom: 20px;
            margin-top: 20px;
          }
          .search {
            display: flex;
          }
          .loading {
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
}

Issues.getInitialProps = async (ctx) => {
  const { owner, name } = ctx.query;

  const full_name = `${owner}/${name}`;

  // 由于这两个请求不会存在先后关系，所以可以使用 Promise.all 实现同步
  const fetchs = await Promise.all([
    await api.request(
      {
        url: `/repos/${owner}/${name}/issues`,
      },
      ctx.req,
      ctx.res
    ),
    CACHE[full_name]
      ? Promise.resolve({ data: CACHE[full_name] })
      : await api.request(
          {
            url: `/repos/${owner}/${name}/labels`,
          },
          ctx.req,
          ctx.res
        ),
  ]);

  return {
    owner,
    name,
    initialIssues: fetchs[0].data,
    labels: fetchs[1].data,
  };
};

export default withRepo(Issues, "issues");
