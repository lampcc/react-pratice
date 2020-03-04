import React, { Component } from 'react';

// 导入组件样式
import './index.css'

// 导入列表组件
import List from './list';

/**
 * 列表渲染
 * 步骤：
 * 1. 模拟数据：state = {list: []}
 * 2. 使用js的数组map()
 */
class Index extends Component {

  state = {
    // 列表数据
    list: [
      { id: 1, name: '范冰冰', content: '我要出道了' },
      { id: 2, name: '李晨', content: '我们结婚吧 范爷！' }
    ],
    name: '',
    content: ''
  }



  // 受控组件改变状态数据
  handlerForm = (e) => {
    console.log(e.target.name);
    this.setState({
      // key: val
      [e.target.name]: e.target.value
    })
  }

  // 发布评论
  handlerPublic = () => {
    let { name, content, list } = this.state;
    console.log(name, content);
    if (!name || !content) {
      return alert('评论人或者评论内容不能为空！')
    }
    // 主逻辑：提交
    // 修改状态数据：不能直接修改
    // 不能push
    let nlist = [...list, { id: list.length + 1, name: name, content: content }];
    this.setState({
      list: nlist,
      name: '',
      content: ''
    })
  }


  render() {
    return (
      <div className="box">
        <h1>评论</h1>
        {/* 发表评论 */}
        <div className="pub">
          <p><input className="test" style={{color:'green'}} type="text" name="name" value={this.state.name} onChange={this.handlerForm} /></p>
          <p><textarea name="content" value={this.state.content} onChange={this.handlerForm} /></p>
          <p><button className="btn" onClick={this.handlerPublic}>发表评论</button></p>
        </div>
        {/* 评论列表 */}
        <hr className="line" />
        <List list={this.state.list} />
        {/* <li>
            <p className="pline">小红</p>
            <p>发表评论了！</p>
          </li>
          <li>
            <p className="pline">小蓝</p>
            <p>刚发表过！</p>
          </li>
          <li className="nodata"><p>暂无评论！</p></li> */}

      </div>
    );
  }
}

export default Index;