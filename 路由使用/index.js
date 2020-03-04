import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';

import Menu from './menu';

import Login from './login';

import "./index.css";

// 1. 安装：npm i react-router-dom 
// 2. 导入路由的三个核心组件：Router / Route / Link 
// 3. 使用 Router 组件包裹整个应用（重要）
// 4. 使用 Link 组件作为导航菜单（路由入口） 
// 5. 使用 Route 组件配置路由规则和要展示的组件（路由出口） 

// 其它视图的组件
const Home = (props) => {
  console.log(props);

  return (
    <div>
      <h2>首页</h2>
    </div>
  )
}

console.log('s', Home, <p>100</p>);

// About 子组件
const FnAbo = (props) => {
  console.log('About 子组件', props);
  return (
    <h1>About 子组件</h1>
  )
}
// 使用路由提供的高阶组件withRouter
const WithFnabo = withRouter(FnAbo);

const About = () => {

  return (
    <div>
      <h2>关于我们</h2>
      <hr />
      <WithFnabo />
    </div>
  )
}



// 动态路由组件
class Detail extends Component {
  render() {
    // console.log(this.props);
    const { id, name } = this.props.match.params;

    return (
      <div>
        <h2>详情组件:{id}, {name}</h2>
      </div>
    );
  }
}


// 联系我
//二级路由组件
const FnTwo = () => (<p>我是二级路由</p>);
const Contact = () => {
  return (
    <div>
      <h3>联系我</h3>
      {/* 配置联系我的二级路由 */}
      <Link to='/contact/two'>联系我的下级</Link>
      <Route path='/contact/two' component={FnTwo} />
    </div>
  )
}

// 404页面
const FourComponent = () => (
  <div>
    <h3>找不到家了。。。404！</h3>
  </div>
)



// 自定义鉴权组件：根据是否有token决定是否显示某个组件
// 函数组件
const Auth = ({ path, component: Component }) => {
  // console.log(props);
  const token = sessionStorage.getItem('auth');
  console.log('获取登录后保存的token', token);
  return (
    <Route path={path} render={(props) => {
      console.log(props);
      if (token) {
        return <Component />
      } else {
        return <Redirect to="/login" />
      }
    }} />
  )
}

// 配置
const config = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]


// 根组件
class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        {/* 配置路由 */}
        <div className="app">
          <Switch>
            {/* 重定向 */}
            <Redirect exact from="/" to="/home" />
            {
              config.map((item, index) => <Auth key={index} path={item.path} component={item.component} />)
            }
            {/* <Route path="/home" exact component={Home} /> */}
            {/* <Auth path="/home" component={Home} /> */}
            {/* <Route path="/about" component={About} /> */}
            {/* <Auth path="/about" component={About} /> */}
            {/* <Route path="/about" render={() => <About />} /> */}
            <Route path="/detail/:id/:name" component={Detail} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            {/* 404页面 */}
            <Route component={FourComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;