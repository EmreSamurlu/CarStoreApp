import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './initialState';
import {getCarsThunk} from './thunk/getCarsThunks';
import {AsyncStatus} from '../../../constants/async-status.enum';
const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCarsThunk.pending, state => {
        state.status = AsyncStatus.Loading;
      })
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.carStore = action.payload;
      })
      .addCase(getCarsThunk.rejected, (state, action) => {
        state.status = AsyncStatus.Error;
        state.error = action.error;
      });
  },
});

export default carSlice.reducer;
