import React from 'react'
//import Itemcart from './itemcart';
import Data from './Data';
import Vegetables from './Vegetables';
 const mycart =() => {
 
    return (
      <div class="row" className="row text-center justify-content-center scroll" >
        <h1 class="text-center mt-12 col-md-12" className="col" >all items</h1>
        <section class="py-4 container">
            <div class="row justify-content-center">
              {Vegetables.map((item,index)=>{
                return(
                <Vegetables img={item.img}
                 title={item.title} 
                 desc={item.desc} 
                 price={item.price} 
                 item={item}
                 key={index}/>
              )})}
            </div>
        </section>
        
      </div>
    )
  }

export default  mycart;
