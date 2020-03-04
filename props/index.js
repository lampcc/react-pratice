import React, { Component } from 'react';

/**
 * props的children属性：
 * 代表的是组件下边的子节点
 */

//子组件
class Child extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>子组件</h2>
        {this.props.children}
      </div>
    );
  }
}


// 父组件 
class Index extends Component {
  render() {
    return (
      <div>
        <h1>Props深入</h1>
        <hr />
        <Child>
          <p>d</p>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>

        </Child>
      </div>
    );
  }
}

export default Index;