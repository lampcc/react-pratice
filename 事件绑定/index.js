import React, { Component } from 'react';


// 函数组件
const Fnc = function () {
  let handlerMouse = (e) => {
    // console.log('mouse move....', e);
  }

  return (
    <div>
      <h2 onMouseMove={handlerMouse}>函数组件：事件绑定</h2>
    </div>
  )
}



// 类组件事件绑定
class Index extends Component {

  constructor() {
    super();
    // 使用bind方法绑定this
    this.handlerClick = this.handlerClick.bind(this);
  }

  num = 10;


  handlerClick(e) {
    console.log(e, this);
  }

  // 使用es6 箭头函数绑定this
  handlerA = (event) => {
    event.preventDefault()
    event.stopPropagation()
    // console.log(event);
    // return false
    console.log(this);
  }

  render() {
    console.log('render()', this);
    return (
      <div onClick={() => alert(1)}>
        <h1 onClick={this.handlerClick}>事件绑定</h1>
        <a onClick={this.handlerA} href="http://www.baidu.com">点我跳转</a>
        <hr />
        <Fnc />
      </div>
    );
  }
}

export default Index;