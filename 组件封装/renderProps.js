import React, { Component } from 'react';

// 引入样式
import './cursor.css';

class Mouse extends Component {

  // 定义状态数据
  state = {
    x: 0,
    y: 0
  }

  // 改变鼠标位置值
  handlerPosition = (e) => {
    // console.log(e.x, e.y);
    this.setState({
      x: e.x,
      y: e.y
    })
  }


  // 注册mousemove事件
  componentDidMount() {
    window.addEventListener('mousemove', this.handlerPosition)
  }

  // 移除mousemove事件
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handlerPosition)
  }

  render() {
    console.log(this.props.render);
    let { x, y } = this.state;
    return this.props.render(x, y)
  }
}


// 父组件
class Index extends Component {

  // 自定义Mouse组件的UI
  hanlderShow = (x, y) => {
    console.log('收到Mouse组件的数据：', x, y);
    return (
      <div>
        <h3 style={{ color: 'green' }}>显示坐标位置：{x}:{y}</h3>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Mouse render={this.hanlderShow} />
      </div>
    );
  }
}

export default Index;
