import React, { Component } from 'react';


// 子组件:类组件
class Child extends Component {
  constructor() {
    super();
    console.log('constructor(props)', this.props);
  }
  render() {
    // 单向数据流
    // 不能修改传递的props数据
    // 类组件通过：this.props
    console.log(this.props);
    // this.props.a = 10;
    let { msg, a, fn } = this.props;
    return (
      <div>
        <h2>类子组件</h2>
        <p>{msg} | {a}</p>
        <button onClick={fn}>调用父组件的方法</button>
      </div>
    );
  }
}

// 子组件：函数组件
function Fnc(props) {
  console.log(props);
  return (
    <div>
      <h3>函数组件</h3>
      <p>{props.msg}</p>
    </div>
  )
}


// 父组件
class Parent extends Component {



  state = {
    msg: 'hello!',
    num: 10
  }

  handler = () => {
    console.log('父组件：', this);
  }

  render() {
    return (
      <div>
        <h1>接收数据</h1>
        <hr />
        <Child msg={this.state.msg} a="10" num={this.state.num} fn={this.handler} />
        <hr />
        <Fnc msg={this.state.msg} />
      </div>
    );
  }
}

export default Parent;