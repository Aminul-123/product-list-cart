import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../slices/productSlice';

// add to cart button
function AddToCart({product, handleAddToCart}) {
  const {name, category, price , id } =product
 // const dispatch = useDispatch();

  return (
    <div className='add-to-cart'>
      <button onClick={handleAddToCart} >
        <img src="images/icon-add-to-cart.svg" alt="cart-img" />
        <p >Add to cart</p>
      </button>
    </div>
  )
}

export default AddToCart