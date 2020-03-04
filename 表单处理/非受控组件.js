import React, { Component } from 'react';

/**
 * 非受控组件
 * 步骤：
 * 1. 调用 React.createRef() 方法创建一个 ref 对象 
 * 2. 将创建好的 ref 对象添加到文本框中 
 * 3. 通过 ref 对象获取到文本框的值
 */
// 函数组件
const Fnc = () => {
  let taRef = React.createRef();

  const getVal = () => {
    console.log(taRef.current.value);
  }

  return (
    <div>
      <h2>函数组件</h2>
      <textarea ref={taRef} />
      <button onClick={getVal}>提交</button>
    </div>
  )
}

// 类组件
class Index extends Component {

  txtRef = React.createRef();

  // fnRef = React.createRef();

  // 获取输入框中的值
  getVal = () => {
    // 通过创建的ref对象的current获取到元素对象
    this.txtRef.current.focus();
    this.txtRef.current.style.background = 'red';
    this.txtRef.current.style.color = '#fff'
    console.log(this.txtRef.current.value);
  }

  render() {
    return (
      <div>
        <h1>非受控组件</h1>
        <hr />
        <textarea ref={this.txtRef} />
        <button onClick={this.getVal}>提交</button>
        <hr />
        {/* // 函数组件不能绑定ref对象
        <Fnc ref={this.fnRef} /> */}
      </div>
    );
  }
}

export default Index;