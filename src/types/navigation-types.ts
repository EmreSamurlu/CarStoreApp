import {RouteProp} from '@react-navigation/native';
import {Pages} from '../constants/pages.enum';
import {IStoreResponse} from './response-types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface RootTabParams {
  [key: string]: undefined;
}

export type RootStackParams = {
  [Pages.ProductList]: undefined;
  [Pages.ProductDetail]: {product: IStoreResponse};
  [Pages.Filter]: undefined;
};

export type ProductScreenNavigationProp = NativeStackNavigationProp<
  RootStackParams,
  Pages.ProductDetail
>;

export type ProductDetailRouteProp = RouteProp<
  RootStackParams,
  Pages.ProductDetail
>;
