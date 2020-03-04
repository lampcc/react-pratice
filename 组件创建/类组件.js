import React from 'react';

/**
 * 类组件
 */

class ClassCp extends React.Component {
  constructor() {
    super()
  }

  num = 10;
  handler() {
    console.log(1);
  }
  render() {
    return (
      <h2>类组件</h2>
    )
  }
}

export default ClassCp