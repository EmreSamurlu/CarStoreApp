import {AsyncStatus} from '../constants/async-status.enum';
import {IStoreResponse} from './response-types';

export interface ICarStoreState {
  carStore: IStoreResponse[] | undefined;
  filteredStore: IStoreResponse[] | undefined;
  status: AsyncStatus;
  error: object | null;
}

export interface IFilterState {
  brandFilter: {checked: boolean; label: string; key: string}[];
  modelFilter: {checked: boolean; label: string; key: string}[];
  selectedModels: string[];
  selectedBrands: string[];
  selectedSort: string;
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
