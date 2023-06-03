import React, { Component } from 'react'
import Categories1 from '../supermarket/Categories1';
import Slider from '../supermarket/slider';
import Nearby from './Nearby';
import Products from './Products';
import Products1 from './Products1';
import Cards from './Cards';
import Lightbox from '../Lightbox1/Lightbox';


export default class Home extends Component {
  render() {
    return (
      <div> <Slider/>
      <Categories1/>
      <Products></Products>
   <Lightbox/>
     <Cards/>
     </div>
    )
  }
}
