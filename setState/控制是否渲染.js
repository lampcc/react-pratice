import React, { Component, PureComponent } from 'react';


const Fnc = (props) => {
  console.log(props);
  return (
    <div>
      <h3>子组件</h3>
    </div>
  )
}


class Index extends PureComponent {
  state = {
    a: 0,
    list: [{ id: 0, name: '李晨' }]
  }


  // 自加一函数
  add = () => {
    this.setState({
      a: 1
    })
  }

  // 改变列表
  changeList = () => {
    const { list } = this.state;
    // list.push({ id: 1, name: '黎明' })
    let narr = [...list, { id: Math.random() * 1000, name: '黎明' }]
    this.setState({
      list: narr
    })
  }

  // 解决状态数据相同时，不去渲染
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.a !== this.state.a) {
  //     return true
  //   } else {
  //     return false
  //   }

  // }


  render() {
    console.log(
      '组件刷新了！', <p>100</p>
    );
    return (
      <div>
        <h1>控制组件是否刷新</h1>
        <p>{this.state.a}</p>
        <button onClick={this.changeList}>自加一</button>
        <hr />
        <ul>
          {
            this.state.list.map((item) => <li key={item.id}>{item.name}</li>)
          }
        </ul>
        <hr />
        <Fnc key='1' />
      </div>
    );
  }
}

export default Index;