import React from 'react'
import { useSelector } from 'react-redux'
import { getTotalPrice } from '../slices/productSlice'

// this component will live in cart component.
function TotalAmount() {
  const totalPrice = useSelector(getTotalPrice);
 // console.log(totalPrice)
  return (
    <div className='total-price'>
        <p>Order Total</p>
        <span>${totalPrice.toFixed(2)} </span>
    </div>
  )
}

export default TotalAmount