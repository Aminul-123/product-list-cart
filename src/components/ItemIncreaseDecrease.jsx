import React from 'react'

// after adding to cart , this component will be displayed in the UI.
function ItemIncreaseDecrease() {
  return (
    <div className='increaseDecrease'>
        <button>-</button>
        <span className='item-quantity'>1</span>
        <button>+</button>
    </div>
  )
}

export default ItemIncreaseDecrease