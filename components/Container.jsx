import {cloneElement} from 'react'

const style = {
    width: '100%',
    maxWidth: 1200,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
}


const Container = ({ children, renderer=<div /> }) => {
    /* 当传入的 props 是以小写字母开头的，当 babel 编译 react 的 jxs 语法的时候，如果标签的类型是小写字母开头的，就会认为是原生的标签（div,p），不会翻译成一个变量 */
    /* 通过这种方式可以改变 Container 渲染的标签使用的组件类型的一种方式，却无法修改该组件需要的一些 props，就是当我们传入的是一个自己写的组件 */


    return cloneElement(renderer, {
        style:Object.assign({},renderer.props.style,style),
        children
    })
    // return <Comp style={style} children={ children}/>
}

// 版心
export default Container