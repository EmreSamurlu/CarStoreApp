import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './initialState';

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
