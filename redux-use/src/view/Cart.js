import React from 'react'
import Item from './Item'
import Total from './Total'

class Cart extends React.Component {
  render() {
    return (
      <div>
        <h2>购物车</h2>
        <hr />
        <Item pname="num1" />
        <Item pname="num2" />
        <Item pname="num3" />
        <hr />
        <Total />
      </div>
    )
  }
}

export default Cart
