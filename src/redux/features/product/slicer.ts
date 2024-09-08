import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './initialState';
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const {setSelectedProduct} = productSlice.actions;
export default productSlice.reducer;
