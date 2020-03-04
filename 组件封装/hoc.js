import React, { Component } from 'react';
// 1. 创建一个函数，名称约定以 with 开头
// 2. 指定函数参数，参数应该以大写字母开头（作为要渲染的组件）
// 3. 在函数内部创建一个类组件，提供复用的状态逻辑代码，并返回 
// 4. 在该组件中，渲染参数组件，同时将状态通过prop传递给参数组件
// 5. 调用该高阶组件，传入要增强的组件，通过返回值拿到增强后的组件,并将其渲染到页面中


const withMouse = (WrappedComponent) => {
  // 提供复用的状态逻辑代码
  return class Mouse extends Component {

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
      // console.log(this.props);
      return (
        <div>
          {/* 同时将状态通过prop传递给参数件 */}
          {/* <WrappedComponent x={this.state.x} y={this.state.y} title={this.props.title}  /> */}
          <WrappedComponent {...this.state} {...this.props} />
        </div>
      );
    }
  }

}

// 要包装的组件
const Fnc = (props) => {
  console.log('要包装的组件:', props);
  return (
    <div>
      <h2>{props.title}{props.x},{props.y}</h2>
    </div>
  )
}

// 调用
// 返回的事高阶组件里边定义的：类组件
const WithFnc = withMouse(Fnc)

// 根组件
class Index extends Component {
  render() {
    return (
      <div>
        <WithFnc title={'鼠标位置：'} />
      </div>
    );
  }
}

export default Index