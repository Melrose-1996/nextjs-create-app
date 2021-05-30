import { memo, useMemo } from 'react'
// 具体渲染内容都是跟 props 有关，如果 props 没有变化，则无需重新渲染

import MarkdownIt from "markdown-it";
import "github-markdown-css";


// html: true -- 当传递了这个参数会把我们的 html 中的内容转化成 html
// linkify: true -- 当 html 里面有链接就会转化为可以点击的链接
const md = new MarkdownIt({
    html: true,
    linkify: true,
});


// 中文解码
function b64_to_utf8(str) {
    return decodeURIComponent(escape(atob(str)));
}

export default memo(function markdownRenderer({ content, isBase64 }) {
    const markdown = isBase64 ? b64_to_utf8(content) : content
    // markdown 的内容没有变化，则 html 的内容就不会变化(md.render 转化过程比较耗时)
    const html = useMemo(() => md.render(markdown), [markdown])
    return (
        <div className="markdown-body">
            <div dangerouslySetInnerHTML={{ __html: html }}></div>;
        </div>
    );
})