import React from 'react'
import CartItem from './CartItem'
import TotalAmount from './TotalAmount'
import { useDispatch, useSelector } from 'react-redux';
import { newOrder } from '../slices/productSlice';

// order confirmed modal
function OrderConfirmed() {
  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch()
  return (
    <div className='order-confirmed'>
      <div>

      <div className="confirm-header">
        <img src="images/icon-order-confirmed.svg" alt="order confirmed img" />
        <h1>Order Confirmed</h1>
        <p>We hope you enjoy your food</p>
      </div>
      {
        cart.map((item) => (
          
          <CartItem  item={item} key={item.productId} />
        ))
      }
      <TotalAmount />
      <button className='new-order-btn' onClick={() => dispatch(newOrder())}>Start New Order</button>
      </div>
    </div>
  )
}

export default OrderConfirmed