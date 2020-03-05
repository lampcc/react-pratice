import React from 'react'
import { connect } from 'react-redux'

class Total extends React.Component {
  render() {
    const { sum } = this.props;
    return <div>商品总数：【{sum}】</div>
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps)
  return {
    sum: Object.values(state).reduce((p, n) => p + n)
  }
}

export default connect(
  mapStateToProps
)(Total)

