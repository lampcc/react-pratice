import React, { Component } from 'react';

import List from './list';

import './index.css'

class Index extends Component {

  state = {
    list: [
      // { id: 1, name: '小红', content: '发评论了！' }
    ],
    // 发布人
    name: '',
    content: ''
  }


  /**
   * 受控组件
   * 1. 元素的value绑定state状态
   * 2. 注册change事件改变状态
   * 多个情况
   * 给对应的元素绑定name属性，对应state的状态名
   */
  handlerPub = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  /**
   * 发表评论
   * 1. 受控组件
   * 2. setState({key:val})
   */
  publish = () => {
    const { name, content } = this.state;
    if (!name || !content) {
      return alert('评论人或者内容不能为空！')
    }
    console.log(name, content);
    const { list } = this.state;
    // 发布成功，更新列表
    // list.push({ id: list.length + 1, name, content })(不推荐)
    this.setState({
      list: [...list, { id: list.length + 1, name, content }],
      name: '',
      content: ''
      // list
    })
  }

  render() {
    return (
      <div className="box">
        <h1>评论</h1>
        {/* 发表评论 */}
        <div className="pub">
          <p><input type="text" name="name" onChange={this.handlerPub} value={this.state.name} /></p>
          <p><textarea name="content" onChange={this.handlerPub} value={this.state.content} /></p>
          <p><button onClick={this.publish} className="btn">发表评论</button></p>
        </div>
        {/* 评论列表 */}
        <hr className="line" />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default Index;