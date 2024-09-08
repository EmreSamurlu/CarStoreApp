import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './initialState';
export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      const updatedFavorites = state.favorites.filter(
        favorite => favorite.id !== action.payload,
      );

      state.favorites = updatedFavorites;
    },
  },
});

export const {addToFavorites, removeFromFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;
