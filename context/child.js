import React from 'react';

import MsgContext from './msgContext';
// 子孙组件
class Child3 extends React.Component {

  // 接收根组件传递的数据并显示
  getAppData = (msg) => {
    console.log(msg);
    return (
      <h3>{msg}</h3>
    )
  }

  render() {
    return (
      <div>
        <h2>Child3</h2>
        <div>
          <MsgContext.Consumer>{this.getAppData}</MsgContext.Consumer>
        </div>
      </div>
    );
  }
}

export default Child3