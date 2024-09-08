import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './initialState';

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload.id;
      const checkIfExists = state.cart.filter(item => item.id === productId);

      if (checkIfExists.length) {
        state.cart.filter(item => item.id === productId && item.quantity++);
      } else {
        state.cart.push({id: productId, quantity: 1, product: action.payload});
      }
    },
    removeFromCart: state => {
      state.cart = [];
    },
    increaseQuantity: (state, action) => {
      state.cart.filter(item => item.id === action.payload && item.quantity++);
    },
    decreaseQuantity: (state, action) => {
      state.cart.filter(item => item.id === action.payload && item.quantity--);
      if (
        state.cart.filter(
          item => item.id === action.payload && item.quantity === 0,
        ).length
      ) {
        const updatedCart = state.cart.filter(
          item => item.id !== action.payload,
        );
        state.cart = updatedCart;
      }
    },
  },
});

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} =
  cartSlice.actions;
export default cartSlice.reducer;
