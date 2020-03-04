import React from 'react';

// 登录页面

class Login extends React.Component {

  login = () => {
    // 跳转到首页
    let { push, go } = this.props.history;
    // 保存token
    sessionStorage.setItem('auth', Math.random() * 1000)
    push('/')
    // go(1)
  }
  render() {
    console.log('login:', this.props)
    return (
      <div>
        <h1>用户</h1>
        <button onClick={this.login}>
          登录
        </button>
      </div>
    );
  }
}

export default Login