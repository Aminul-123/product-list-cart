import React, {useState} from 'react'
import AddToCart from './AddToCart'
import ItemIncreaseDecrease from './ItemIncreaseDecrease'

// single products
function Products({product}) {
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  return (
    <div className='products'>
        <div className="img-cont">
          <img src={product?.image?.desktop} alt={product?.name} />
        </div>
        {
          isAddedToCart ? (
            <ItemIncreaseDecrease />
          ) : (
            <AddToCart />
          )
        }
        <div className="product-details">
          <p className='product-category'> {product?.category} </p>
          <p className='product-name'> {product?.name} </p>
          <p className='product-price'> ${product?.price} </p>
        </div>

    </div>
  )
}

export default Products