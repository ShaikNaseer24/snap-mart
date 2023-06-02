import React, { Component } from 'react'


import { useCart } from "react-use-cart";
const Itemcart =(props)=>{
 
 const {addItem}= useCart();
    return (
      <div className="row">
          <div className="col-md-4">
        <div className="card mdb-color lighten-2 text-center z-depth-2">
<div class="card p-0 overflow-hidden h-700 shadow" >
<img  src={props.img} class="card-img-top img-fluid"/>
  <div class="col">
    <h5 class="card-title">{props.title}</h5>
    <h5 class="card-title">₹ {props.price}</h5>
    <p class="card-text">{props.desc}</p>
    <a class="btn btn-warning" onClick={() =>addItem(props.item)}>Add To Cart</a>
  </div>
  </div>
</div>
</div>

</div>
  
    )
  }

export default  Itemcart;