import React, { Component } from 'react'
import img33 from '../images/img33.jpg';
import imgs34 from '../images/imgs34.jpg';
import imgs35 from '../images/imgs35.jpg';
import imgs36 from '../images/imgs36.jpg';
import imgs33 from '../images/imgs33.jpg';
import imgs38 from '../images/imgs38.jpg';
import {FcBookmark} from 'react-icons/fc';

export default class Nearby extends Component {
  render() {
    return (
      <div><hr></hr>
       <h1 class="text-center "> <FcBookmark size={50}/>Store's In India   <FcBookmark size={50}/></h1> 
    <hr></hr>  <div class="row" >
        <div class="col">
  <img class="card-img-top" src={imgs33} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">Hyderabad</h4>
    <p class="card-text">Biggest mart in city SNAP-MART.</p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>
<div class="col" >
  <img class="card-img-top" src={img33} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">Gujarat</h4>
    <p class="card-text">Our pride mart snap mart.</p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>
<div class="col">
  <img class="card-img-top" src={imgs34} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">Nellore</h4>
    <p class="card-text">Our First store starting in this city.</p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div></div></div><hr></hr>
  <div class="row" >
        <div class="col">
  <img class="card-img-top" src={imgs35} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">Delhi</h4>
    <p class="card-text">One of the best mart in delhi is our snap mart.</p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>
<div class="col" >
  <img class="card-img-top" src={imgs36} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">Pune</h4>
    <p class="card-text">Our main Head couters snap mart.</p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>
<div class="col">
  <img class="card-img-top" src={imgs38} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">Bangalore</h4>
    <p class="card-text">The Biggest Snap mart.</p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div></div></div>
 
 
 
 
 
  </div>
    )
  }
}
