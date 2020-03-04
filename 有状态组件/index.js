import React, { Component } from 'react';

/**
 * 定义类组件状态
 * 语法：state
 * 1. constructor()中
 * 2. 类属性形式定义
 */
class Index extends Component {
  constructor() {
    super();
    // this.state = {
    //   num: 0
    // }
  }

  state = {
    name: '李晨',
    num: 0
  }


  // num加一
  handlerNum = () => {
    // 不能直接给状态数据赋值
    // this.state.num = this.state.num + 1
    this.setState({
      // key:val
      num: this.state.num + 1
    })
  }





  render() {
    return (
      <div>
        <h1 onClick={this.handlerNum}>有状态组件</h1>
        <p>{this.state.num}</p>
        {/* <p>{this.state.name}</p> */}
      </div>
    );
  }
}

export default Index;