import React, { Component } from 'react';

/**
 * 兄弟组件通信思想：
 * 共享-状态-提升
 */
// 两个兄弟组件
class BroA extends Component {

  render() {
    console.log(this.props);
    let { own, fn } = this.props;
    return (
      <div style={{ marginRight: '20px' }}>
        <h2>BroA</h2>
        <p>兄弟组件A：{own}</p>
        <button onClick={fn}>改变共享数据</button>
      </div>
    );
  }
}

class BroB extends Component {
  render() {
    console.log(this.props);
    let { own } = this.props;
    return (
      <div>
        <h2>BroB</h2>
        <p>兄弟组件B：{own}</p>
      </div>
    );
  }
}




// 最近的共同父组件
class Index extends Component {
  // 状态提升的共享数据
  state = {
    own: 10
  }
  // 修改状态提升数据的方法
  changeOwn = () => {
    this.setState({
      own: this.state.own + 10
    })
  }


  render() {
    return (
      <div>
        <h1>父组件</h1>
        <p>父组件own:{this.state.own}</p>
        <hr />
        <div style={{ display: 'flex' }}>
          <BroA own={this.state.own} fn={this.changeOwn} />
          <BroB own={this.state.own} />
        </div>
      </div>
    );
  }
}

export default Index;