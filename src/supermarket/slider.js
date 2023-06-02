import React, { Component } from 'react'
import img7 from '../images/img7...jpg';
import img8 from '../images/img8...jpg';
import img9 from '../images/img9..jpg';
export default class slider extends Component {
  render() {
    return (
      <div>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img7} className="d-block w-100" alt="img7"/>
    </div>

    <div className="carousel-item ">
      <img src={img8} className="d-block w-100 " alt="img8"/>
    </div>
    <div className="carousel-item ">
      <img src={img9} className="d-block w-100" alt="img9"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
</div>
     </div>
    )
  }
}
