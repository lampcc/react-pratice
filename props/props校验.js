import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 引入样式
import './props.css'

/**
 * props校验
  1. 安装包 prop-types （yarn add prop-types / npm i props-types）
  2. 导入 prop-types 包 
  3. 使用组件名.propTypes = {} 来给组件的props添加校验类型
  4. 校验类型通过 PropTypes 对象来指定 
 */

//子组件
// 接收一个数组（项都是颜色值），渲染颜色值列表
// ['red', 'blue', 'green']
class Child extends Component {
  render() {
    console.log(this.props);
    const { colors, num, name } = this.props;
    return (
      <div>
        <h2>子组件</h2>
        <ul>
          {
            colors.map((item, index) => <li className="item" style={{ backgroundColor: item }} key={index}>{item}</li>)
          }
        </ul>
        <p>{name},{num}</p>
      </div>
    );
  }
}

// 校验？
Child.propTypes = {
  colors: PropTypes.array.isRequired,
  name: PropTypes.string,
  num: PropTypes.number,
  obj: PropTypes.shape(
    {
      a: PropTypes.number,
      b: PropTypes.bool
    }
  )
  // fn: PropTypes.func.isRequired
}

// 设置默认值
Child.defaultProps = {
  num: 100,
  name: '李晨'
}


// 父组件 
class Index extends Component {

  state = {
    colors: ['red', 'blue', 'green'],
    obj: { a: 1, b: true }
    // colors: 1
  }
  render() {
    return (
      <div>
        <h1>Props深入</h1>
        <hr />
        <Child colors={this.state.colors} name={'范冰冰'} obj={this.state.obj} />
      </div>
    );
  }
}

export default Index;