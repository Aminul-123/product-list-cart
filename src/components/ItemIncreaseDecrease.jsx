import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../slices/productSlice";

// after adding to cart , this component will be displayed in the UI.
function ItemIncreaseDecrease({ id }) {
  const dispatch = useDispatch();
  const quantity = useSelector(
    (state) =>
      state.product.cart.find((item) => item.productId === id)?.quantity
  );
 // console.log(quantity);
  return (
    <div className="increaseDecrease">
      <button onClick={() => dispatch(decreaseItemQuantity(id))}>-</button>
         <span className="item-quantity">{quantity}</span>
      <button onClick={() => dispatch(increaseItemQuantity(id))}>+</button>
    </div>
  );
}

export default ItemIncreaseDecrease;
