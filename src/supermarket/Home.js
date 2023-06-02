import React, { Component } from 'react'
import Categories1 from '../supermarket/Categories1';
import Slider from '../supermarket/slider';
import Nearby from './Nearby';
import Products from './Products';
import Lightbox from '../Lightbox';
export default class Home extends Component {
  render() {
    return (
      <div> <Slider/>
      <Categories1/>
      <Products></Products>
      <Lightbox></Lightbox> 
     <Nearby></Nearby>
     </div>
    )
  }
}
