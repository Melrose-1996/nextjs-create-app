import Link from "next/link";
import { Button, Layout, Input, Avatar, Tooltip, Dropdown, Menu } from "antd";
import { UserOutlined, GithubOutlined } from '@ant-design/icons';
import { useCallback, useState } from 'react'
// import { Children } from "react";
import Container from '../components/Container'

import { withRouter } from 'next/router'

// 注意这个 connect 是小写
import { connect } from 'react-redux'

import { logout } from '../store/store'

import axios from 'axios'

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const { Header, Content, Footer } = Layout


const gitHubIconStyle = {
  color: 'white',
  fontSize: 40,
  display: 'block',
  marginRight: 20,

}

const footerStyle = {
  textAlign: 'center'
}


const Comp = ({ color, children, style }) => <div style={{ color, ...style }}>{children}</div>



const myLayout = ({ children, user, logout, router }) => {

  const urlQuery = router.query && router.query.query

  const [search, setSearch] = useState(urlQuery || '')
  const handleSearchChange = useCallback((event) => {
    setSearch(event.target.value)
  }, [setSearch])


  // 注意：我们传入的是跟 search 有关的，所以要写下跟 search 的依赖
  const handleOnSearch = useCallback(() => {
    // 进行路由跳转
    router.push(`/search?query=${search}`)
  }, [search])

  const handleLogout = useCallback(() => {

    // 这里要触发一个 action ，因为用户的状态是保存在 action 里面的
    logout()
    // this.forceUpdate();
  }, [logout])


  // 使用 withRouter 包含着组件里面，就可以拿到 router 的内容
  const handleGotoOAuth = useCallback((e) => {
    e.preventDefault()
    axios.get(`/prepare-auth?url=${router.asPath}`).then(resp => {
      if (resp.status === 200) {
        location.href = publicRuntimeConfig.OAUTH_URL
      } else {
        console.log('prepare auth failed', resp);
      }
    }).catch(err => {
      console.log('prepare auth failed', err);
    })
  }, [])


  const userDropDown = (
    <Menu>
      <Menu.Item>
        <a onClick={handleLogout}>
          登 出
        </a>
      </Menu.Item>
    </Menu>
  )

  return (<Layout>
    <Header>
      <Container renderer={<div className="header-inner" />}>
        <div className="header-left">
          <div className="logo"></div>
          <Link href='/'>
            <GithubOutlined style={gitHubIconStyle} />
          </Link>
          <Input.Search placeholder='搜索仓库' value={search} onChange={handleSearchChange} onSearch={handleOnSearch} />
        </div>
        <div className="header-right">
          <div className="user">
            {/* 判断 user 信息是否存在 */}
            {
              user && user.id ? (
                <Dropdown overlay={userDropDown}>
                  <a href='/'>
                    <Avatar size={40} src={user.avatar_url} icon={<UserOutlined />} />
                  </a>
                </Dropdown>
              ) : (
                <Tooltip title='点击进行登录'>
                  <a href={`/prepare-auth?url=${router.asPath}`} >
                    <Avatar size={40} icon={<UserOutlined />} />
                  </a>
                </Tooltip>
              )
            }
          </div>
        </div>
      </Container>
    </Header>
    <Content>

      {/* 注意 jsx 标签 === React.createElement('div') */}
      {/* 如果没有任何对于div标签的一个需求，而只是希望Container以某种标签的形式进行渲染 */}
      {/* <Container renderer={<Comp color='red' style={{fontSize:40}}/>}> */}
      <Container>
        {/* 在这里设置的 color 是无法通过 Container 里面的 Comp 去设置这个 color 这个 props */}

        {/* 通过 cloneElement 这个方法拓展了 Container 组件的使用范围，可以非常方便的把 Container 的属性集成到一个具体的组件上面，可以传入一个 Comp 组件，并且令 props 生效，同时我们又可以传一个 div 组件 */}
        {/* cloneElement 实际上就是把 renderer 进行了拷贝，然后增加了一些 props 以此拓展我们想要 render 的节点，使得任何的组件，任何的排列组合的类型都可以去实现，而不需要其他的方式去兼容 */}
        {children}
      </Container>
    </Content>
    <Footer style={footerStyle}>
      Develop by Jokey @
     <a href="mailto:jokey@hotmail.com">jokey@hotmail.com</a>
    </Footer>
    <style jsx>{`
      .header-inner {
        display: flex;
        justify-content: space-between;
      }
      .header-left {
        display: flex;
        align-items: center;
      }
      .header-left {
        display: flex;
        justify-content: flex-start;
      }
   `}</style>
    <style jsx global>{`
     #__next {
       height: 100%;
     }
     {/* 让 top 栏 和 bottom 栏 始终稳定在该位置，不会因为高度而固定死 */}
     .ant-layout {
       min-height: 100%;
     }
     .ant-layout-header {
       padding-left: 0;
       padding-right: 0;
     }
     .ant-layout-content {
       background: #fff;
     }
    `}</style>
  </Layout>)
}

export default connect(function mapState(state) {
  return {
    user: state.user
  }
}, function mapReducer(dispatch) {
  return {
    logout: () => dispatch(logout())
  }
})(withRouter(myLayout))