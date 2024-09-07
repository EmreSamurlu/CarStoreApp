import {createAsyncThunk} from '@reduxjs/toolkit';
import storeApi from '../../../../api/store-api';
import {IStoreResponse} from '../../../../types/response-types';

export const getCarsThunk = createAsyncThunk(
  'cars/getCars',
  async (): Promise<IStoreResponse[] | undefined> => {
    const response = await storeApi.getStoreProducts();
    if (response && response.data) {
      return response.data;
    }
  },
);
