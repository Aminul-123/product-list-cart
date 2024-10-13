import React from 'react'
import AllProducts from './AllProducts'
import Cart from './Cart'
import { useSelector } from 'react-redux'
import OrderConfirmed from './OrderConfirmed'

function Main() {
  const isOrderConfirmed = useSelector((state) => state?.product?.isOrderConfirm)
 // console.log(isOrderConfirmed) //  false or true
  return (
    <>
    <div className="main-item">

        <AllProducts />
        <Cart />
        <div className='order-detail'>
        {
          isOrderConfirmed && <OrderConfirmed />
        }
        </div>
       

    </div>
    </>
  )
}

export default Main