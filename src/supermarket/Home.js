import React, { Component } from 'react'
import Categories1 from '../supermarket/Categories1';
import Slider from '../supermarket/slider';
import Nearby from './Nearby';
import Products from './Products';
import Lightbox from '../Lightbox';
import Products1 from './Products1';
import Cards from './Cards';
export default class Home extends Component {
  render() {
    return (
      <div> <Slider/>
      <Categories1/>
      <Products></Products>
   
     <Cards/>
     </div>
    )
  }
}
