import React, { Component } from 'react'
import { CartProvider } from 'react-use-cart'
import Cart from '../supermarket/Cart';
import Mycart from '../supermarket/mycart';
export default class Carts extends Component {
  render() {
    return (
      <div><CartProvider><Cart></Cart>
      <Mycart></Mycart></CartProvider></div>
    )
  }
}
