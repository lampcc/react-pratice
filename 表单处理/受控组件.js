import React, { Component } from 'react';

class Index extends Component {

  // 实现react下：vue里的v-model功能
  /**
   * 1. 定义input默认状态数据值
   * 2. 把定义的值绑定到模版上（input）
   * 3. 调用setState()方法：
   *     3.1 改变了状态数据
   *     3.2 刷新界面
   */
  state = {
    val: ''
  }

  // 获取表单输入框的值
  handlerForm = () => {
    // 场景：获取状态值，提交（注册、登录）
    console.log(this.state.val);
  }

  // 设置表单元素的值
  setInputVal = (event) => {
    // 获取当前事件对象的值
    console.log(event);
    this.setState({
      val: event.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>表单处理</h1>
        <hr />
        <p>{this.state.val}</p>
        <input type="text" value={this.state.val} onChange={this.setInputVal} />
        <button onClick={this.handlerForm}>提交</button>
      </div>
    );
  }
}

export default Index;