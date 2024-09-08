import {IStoreResponse} from '../../../types/response-types';

export const initialState: {
  cart: {
    id: string;
    quantity: string;
    product: IStoreResponse;
  }[];
} = {
  cart: [],
};
