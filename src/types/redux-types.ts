import {AsyncStatus} from '../constants/async-status.enum';
import {IStoreResponse} from './response-types';

export interface ICarStoreState {
  carStore: IStoreResponse[] | undefined;
  status: AsyncStatus;
  error: object | null;
}

export interface ICartState {
  cart: {
    id: string;
    quantity: number;
    product: IStoreResponse;
  }[];
}

export interface IProductState {
  product: IStoreResponse | null;
}

export interface IFavoritesState {
  favorites: IStoreResponse[];
}
