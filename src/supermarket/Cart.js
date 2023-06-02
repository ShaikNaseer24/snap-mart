import React ,{ Component } from 'react'
import { useCart } from "react-use-cart";
const Cart=() => {
  const{
 isEmpty,
 totalUniqueItems,
 items,
 totalItems,
 cartTotal,
 updateItemQuantity,
 removeItem,
 emptyCart,}= useCart();
 if (isEmpty) return <h1 class="text-center">Your cart is Empty</h1>
    return (
      <secetion class="py-4 container">
      <div class="row justify-content-center">
        <div class="col-12">
          <h4 class="bg-warning" >Selected Items In Your Cart ({totalUniqueItems})</h4>
          <h4 class="bg-info">Total Items: ({totalItems})</h4>
          <table class="table table-light table-hover m-0">
            <tbody>
            {items.map((item,index)=>{
              return (
<tr key={index}>
  <td>
    <img src={item.img} style={{height:'6rem'}}/>
  </td>
  <td>{item.title}</td>
  <td>{item.price}</td>
  <td>Quantity({item.quntity})</td>
<button class="btn btn-info m-2" onClick={() =>updateItemQuantity(item.id, item.quantity -1)}>-</button>
<button class="btn btn-info m-2"onClick={() =>updateItemQuantity(item.id, item.quantity +1)}>+</button>
<button class="btn btn-info m-2" onClick={() =>removeItem(item.id)}>Remove Item</button>


</tr>)})}
</tbody>

          </table>
         
        </div>
        <div className="cpl-auto ms-auto">
            <h1 class="bg-danger">Add Items Worth ₹ {cartTotal}</h1>
            </div>
            <div className="cpl-auto ">
           <button className="btn btn-danger m-2" onClick={()=>emptyCart()}>Clear Cart</button>
            <button className="btn btn-success m-2">Buy Now</button></div>
        </div></secetion>
    )
  }

export default Cart;
