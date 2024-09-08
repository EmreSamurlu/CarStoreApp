import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './initialState';

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setBrandsFilter: (state, action) => {
      state.brandFilter = action.payload;
    },
    setModelsFilter: (state, action) => {
      state.modelFilter = action.payload;
    },
    setSelectedBrands: (state, action) => {
      state.selectedBrands = action.payload;
    },
    setSelectedModels: (state, action) => {
      state.selectedModels = action.payload;
    },
  },
});

export const {
  setBrandsFilter,
  setModelsFilter,
  setSelectedBrands,
  setSelectedModels,
} = carSlice.actions;

export default carSlice.reducer;
