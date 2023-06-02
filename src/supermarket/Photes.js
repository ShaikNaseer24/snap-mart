import React, { Component } from 'react';
import imgv2 from '../images/imgv2.jpg';
import imgd from '../images/imgd.jpg';
import imgv3 from '../images/imgv3.jpg';
import imgf2 from '../images/imgf2.jpg';
import imgf3 from '../images/imgf3.jpg';
import img2 from '../images/img2.jpg';
import img13 from '../images/img13.jpg';
import img10 from '../images/img10.jpg';
import img8 from '../images/img8...jpg';
import img7 from '../images/img7...jpg';
import {FcBookmark} from 'react-icons/fc';
export default class Photes extends Component {
  render() {
    return (
      <div>
        <h1><hr></hr></h1><h1 class="text-center font-style-italic ">
        <FcBookmark size={50}/>     My Gallery  <FcBookmark size={50}/>
      </h1>
        <div class="container-fluid">
  <div class="row pb-5" onclick="preview(event)">
    <div class="col-md-3">
      <img class="img-fluid img-thumbnail" src={imgv2}  title="Fresh Vegetables Available in our Mart"/>
      <div class="h5 text-success "> 
          <p>All Fresh Vegetables Available in Our Mart...</p>
        </div>
    </div>
    <div class="col-md-3">
        <img class="img-fluid img-thumbnail" src={imgd} title="Fresh Vegetables Available in our Mart"/>
        <div class="h5 text-primary "> 
          <p>All Fresh Dairy Products Available in Our Mart...</p>
        </div>
    </div>
    <div class="col-md-3">
        <img class="img-fluid img-thumbnail" src={imgf2} title="Fresh Fruits Available in our Mart"/>
        <div class="h5 text-dark "> 
          <p>All Fresh Fruits Products Available in Our Mart...</p>
        </div>
    </div>
    <div class="col-md-3">
        <img class="img-fluid img-thumbnail" src={imgv3} title="Fres Vegetables Available in our Mart"/>
        <div class="h5 text-info "> 
          <p>All Fresh Vegetables Products Available in Our Mart...</p>
        </div> </div>
    <div class="col-md-3">
    <img class="img-fluid img-thumbnail" src={imgf3} title="Fresh Fruits Available in our Mart"/>
   
    <div class="h5 text-warning"> 
          <p>All Fresh Fruits Products Available in Our Mart...</p>
        </div> </div>
    <div class="col-md-3">
    <img class="img-fluid img-thumbnail" src={img2} title="Fresh watermelon Available in our Mart"/>
    
    <div class="h5 text-success "> 
          <p> Fresh WaterMelon Available in Our Mart...</p>
        </div></div>
    <div class="col-md-3">
    <img class="img-fluid img-thumbnail" src={img13} title="Fresh Milk Available in our Mart"/>   
    
    <div class="h5 text-primary "> 
          <p> Fresh Milk....</p>
        </div></div><div class="col-md-3">
        <img class="img-fluid img-thumbnail" src={img10}title="Our Mart logo"/>
        <div class="h3 text-success "> 
          <p> Our Mart Logo!!!!
          </p>
        </div></div>
    <div class="col-md-3">
        <img class="img-fluid img-thumbnail" src={img8}title=" Our Mart Our pride!!!!"/>
       
        <div class="h5 text-success "> 
          <p>Our Mart Our Pride!!!!!!!</p>
        </div>  </div>
  </div>
  

  <div class="row">
    <div class="col-4">

        <p><b>Thanks for you are interested in our photos:</b></p>
        <p>
          One of the best photes gallery 
          </p>
    </div>
    <div class="col-8 d-none d-lg-block">

        <img  class="img-fluid" src={img7} title="Inside Our Mart"/>
        <div class="h1 text-warning bg-dark "> 
          <p>SNAP-MART Always For Peoples....Your Satisfaction Is our Goal..!!!!!!</p>
        </div>
    </div>
    </div>

</div>
      </div>
    )
  }
}
