import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';

class Menu extends Component {
  state = {
    isShow: true
  }

  componentDidMount() {
    this.props.history.listen((e) => {
      console.log('监控路由跳转：', e);
      if (e.pathname.indexOf('login') > -1) {
        this.setState({
          isShow: false
        })
      } else {
        this.setState({
          isShow: true
        })
      }
    })
  }

  render() {
    // console.log(this.props);
    return this.state.isShow ? (<nav className="menu">
      <Link to="/">首页</Link>
      <Link to="/about">关于我们</Link>
      <Link to="/detail/1/2">详情</Link>
      <Link to="/contact">联系我</Link>
    </nav>) : null

  }
}

const WithMenu = withRouter(Menu)

export default WithMenu;