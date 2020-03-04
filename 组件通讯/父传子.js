import React, { Component } from 'react';

// 子组件: 函数组件
const Fnc = (props) => {
  const { msg } = props;
  let a = 10;
  return (
    <div>
      <h2>子组件</h2>
      <p>{msg} {a}</p>
    </div>
  )
}

// 子组件：类组件
class Child extends Component {
  state = {
    a: 1
  }

  render() {
    const { msg } = this.props;
    return (
      <div>
        <h3>类组件</h3>
        <p>接收数据：{msg}</p>
      </div>
    );
  }
}




// 父组件
class Parent extends Component {
  state = {
    msg: '范冰冰',
    other: '李晨'
  }

  render() {
    return (
      <div>
        <h1>父传子</h1>
        <hr />
        <Fnc msg={this.state.msg} />
        <Child msg={this.state.other} />
      </div>
    );
  }
}

export default Parent;