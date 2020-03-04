import React, { Component } from 'react';


// 子组件
const Fnc = (props) => {
  console.log(props);
  const { fn } = props;
  let abc = 100;
  console.log(fn);
  // 子组件传递数据的事件
  function transformData(params) {
    fn(abc)
  }

  // 改变abc
  function setAbc() {
    abc = 1000000;
    console.log(abc);
  }
  return (
    <div>
      <h2>子组件</h2>
      <p>{abc}</p>
      <button onClick={() => fn(abc)}>子传父</button>
      <button onClick={setAbc}>改变abc的值</button>
    </div>
  )
}

// 子传父步骤：
// 1. 父组件提供一个回调函数（用于接收数据）
// 2. 将该函数作为属性的值，传递给子组件 
// 3. 子组件通过 props 调用回调函数 
// 4. 将子组件的数据作为参数传递给回调函数 
class Parent extends Component {

  state = {
    a: 1
  }

  a = 10;

  getChildData = (data) => {
    console.log('接收子组件传递的数据：', data);
  }

  render() {
    return (
      <div>
        <h1>子传父</h1>
        <hr />
        <Fnc fn={this.getChildData} />
      </div>
    );
  }
}

export default Parent;