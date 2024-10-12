import React, { useEffect, useState } from 'react'
import AddToCart from './AddToCart'
import ItemIncreaseDecrease from './ItemIncreaseDecrease'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, getCurrentQuantityById } from '../slices/productSlice'

// single products
function Products({product}) {
  const [mainWidth , setMainWidth] = useState(1024)
  const {id , category, name , price } = product
  const dispatch = useDispatch()
   const productQuantity  = useSelector(getCurrentQuantityById(id));
  // const isInCart = productQuantity.value > 0
 // console.log(isInCart)
// console.log(productQuantity)

useEffect(function () {
  const windowsWidth = window.innerWidth
  setMainWidth(windowsWidth);
  
}, [window.innerWidth])


  
  function handleAddToCart () {
    
    const newItem = {
      productId : id ,
      name : name,
      image : product.image.desktop || '',
      category : category,
      price : price,
      quantity: 1,
      totalPrice : price
    }
  //  console.log(newItem);
   dispatch(addItem(newItem))
  }

  return (
    <div className='products'>
        <div className="img-cont">
          {
            mainWidth < 500 ? <img src={product?.image?.mobile} alt={name} /> :
            <img src={product?.image?.desktop} alt={name} />

          }
        </div>
        {
          productQuantity ? (
            <ItemIncreaseDecrease id={id} />
          ) : (
            <AddToCart product={product} handleAddToCart={handleAddToCart} />
          )
        }
        <div className="product-details">
          <p className='product-category'> {category} </p>
          <p className='product-name'> {name} </p>
          <p className='product-price'> ${price} </p>
        </div>

    </div>
  )
}

export default Products