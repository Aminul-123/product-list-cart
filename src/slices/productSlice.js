import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart : [],
    isOrderConfirm : false
}
const productSlice = createSlice({
    name : 'product',
    initialState: initialState,
    reducers : {
        addItem (state, action) {
            //payload is the new clicked item object-> newItem
            state.cart.push(action.payload);
        },
        increaseItemQuantity (state, action) {
            // payload will be the id
            const item = state.cart.find((item) => item.productId === action.payload);
            item.quantity ++;
            item.totalPrice = item.quantity * item.price;
        },
        decreaseItemQuantity (state, action) {
            //payload will be the id
            const item = state.cart.find((item) => item.productId === action.payload);
            item.quantity --;
            item.totalPrice = item.quantity * item.price;

            if (item.quantity === 0) productSlice.caseReducers.deleteItem(state, action);
        },
        deleteItem (state, action) {
            // again payload will be id;
            state.cart = state.cart.filter((item) => item.productId !== action.payload)
        },
        orderConfirmed (state, action) {
            state.isOrderConfirm = true
        },
        newOrder (state) {
            state.isOrderConfirm = false;
        }

       
    }
})

 export const {addItem, increaseItemQuantity, decreaseItemQuantity, deleteItem, orderConfirmed, newOrder} = productSlice.actions;
export default productSlice.reducer;

export const getCurrentQuantityById = (id) => (state) => state.product.cart.find((item) => item.productId === id)?.quantity ?? 0;

export const getTotalPrice = (state) => state.product.cart.reduce((sum, item ) => sum + item.totalPrice, 0);

export const getTotalQuantity = (state) => state.product.cart.reduce((sum, item) => sum + item.quantity, 0)
