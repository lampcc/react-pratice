import React from 'react'
import { connect } from 'react-redux'
import { addAction, subAction } from '../store/actions';

class Item extends React.Component {
  render() {
    const { num, pname, add, sub } = this.props;
    console.log(this.props)
    return (
      <div>
        <button onClick={() => { add() }}>+</button>
        <button onClick={() => { sub() }}>-</button>
        <span>【商品名】{pname} 商品的数量【{num}】</span>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const num = state[ownProps.pname];
  return {
    num
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(dispatch, ownProps)
  return {
    add: () => {
      dispatch(addAction(ownProps.pname))
    },
    sub: () => {
      dispatch(subAction(ownProps.pname))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
