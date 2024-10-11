import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../slices/productSlice'

// all the single item in a cart will live here
function CartItem({item}) {
  const dispatch = useDispatch()
  const {productId, name, price, quantity, totalPrice, } = item
  return (
    <div id='cartItem'>
      <div>
        <p className='item-name'>{name}</p>
        <div className='qty-price'>
          <span id='qty'>{quantity}x</span>
          <span id='price'>@ ${price}</span>
          <span id='total-price'>@ ${totalPrice}</span>         
        </div>
      </div>
      <button className='cancel-btn' onClick={() => dispatch(deleteItem(productId))}>
      &times;
      </button>
    </div>
  )
}

export default CartItem