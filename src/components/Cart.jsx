import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import TotalAmount from './TotalAmount';
import { getTotalQuantity } from '../slices/productSlice';

function Cart() {
  const cart = useSelector((state) => state.product.cart);
  const totalQuantity = useSelector(getTotalQuantity);
  //console.log(totalQuantity)
 // console.log(cart)
  return (
    <div className="cart-container">
      <h2 className='cart-header'> Your cart ({totalQuantity}) </h2>
      <div className="cartItem">
        {
          cart.map((item) => (
            <CartItem item={item} key={item.productId} />
          ))
        }
      </div>
      <TotalAmount />
        <div id='delivery-name'>
          <img src="images/icon-carbon-neutral.svg" alt="img" />
          <p>This is a <b>carbon-neutral</b> delivery</p>
        </div>

        <div className="confirm-order-btn">
          <button>Confirm Order</button>
        </div>
    </div>
  )
}

export default Cart