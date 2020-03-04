import React, { Component } from 'react';

import MsgContext, { Provider, a as j } from './msgContext';

import Child3 from './child';

console.log(Provider, j, MsgContext);

/**
 * Context
 * 作用：跨组件通信问题
 * 1. 引入React核心包，调用React.createContext()创建context对象
 * 2. 使用Provider组件包裹跟组件，在这个组件的value属性上加上要传递的数据
 * 3. 在需要接收数据的子组件中使用Consumer组件，在其下边{传入一个回调函数接收跟组件传递的数据}
 */




class Child2 extends Component {

  // 接收根组件传递的数据并显示
  getAppData = (msg) => {
    console.log(msg);
    return (
      <h4>{msg}</h4>
    )
  }

  render() {
    return (
      <div>
        <h2>Child2</h2>
        <hr />
        <MsgContext.Consumer>{this.getAppData}</MsgContext.Consumer>
        <Child3 />
      </div>
    );
  }
}

class Child1 extends Component {
  render() {
    return (
      <div>
        <h2>Child1</h2>
        <hr />
        <Child2 />
      </div>
    );
  }
}



// 根组件 
class App extends Component {

  state = {
    name: '范斌'
  }

  // 改变name
  changeName = () => {
    this.setState({
      name: '李晨'
    })
  }

  render() {
    return (
      <Provider value={this.state.name}>
        <h1>根组件</h1>
        <button onClick={this.changeName}>改变name</button>
        <hr />
        <Child1 />
      </Provider>
    );
  }
}

export default App;
