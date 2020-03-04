import React, { Component } from 'react';

const div = React.createElement('div', null, 100)// 知道

const div2 = (<div>100</div>);

(function (params) {
  console.log('run...');
})()

console.log(div, div2);

const Hell = () => {
  return (
    <div>
      <h2>1</h2>
    </div>
  )
}
function Hello(params) {
  return (
    <div>
      <h2>1</h2>
    </div>
  )
}

class Index extends Component {
  constructor() {
    super();
    this.state = {
      a: 1,
      b: 2
    }

  }

  handlerClick = (e) => {
    // this.state.a = this.state.a + 1
    // console.log(this.state.a);
    this.setState({
      // key:val
      a: this.state.a + 1,
      b: this.state.b + 2
    })
  }


  render() {
    return (
      <div>
        <p> {this.state.a} ,{this.state.b}</p>
        <button onClick={this.handlerClick}>点击加一</button>
        <hr />
        <Hello />
      </div>
    );
  }
}

export default Index;