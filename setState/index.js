import React, { Component } from 'react';

/**
 * setState()是异步的
 */
class Index extends Component {
  state = {
    count: 0
  }

  // 数字加一
  // 第一个参数是对象
  add = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log('获取最新的状态：', this.state.count)
    })
    console.log(this.state.count)
    this.setState({
      count: this.state.count + 2
    }, () => {
      console.log('获取最新的状态2：', this.state.count)
    })
    // 只会执行最后一个
    this.setState({
      count: this.state.count + 3
    })
  }

  // 第一个参数是函数
  addFn = () => {
    this.setState((state, props) => {
      return {
        count: state.count + 1
      }
    })
    // console.log(this.state.count)
    this.setState((state, props) => {
      return {
        count: state.count + 2
      }
    }, () => {
      console.log('第二步：最终结果', this.state.count);
    })
    this.setState((state, props) => {
      return {
        count: state.count + 3
      }
    }, () => {
      console.log('第三步：最终结果', this.state.count);
    })
  }


  render() {
    return (
      <div>
        <p>数字加一：{this.state.count}</p>
        <button onClick={this.add}>加一</button>
      </div>
    );
  }
}

export default Index;