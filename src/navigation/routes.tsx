import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {Pages} from '../constants/pages.enum';
import {ProductList} from '../screens';
import {IRoutes} from '../types/route-types';
import ProductStack from './ProductStack/ProductStack';

export const routes: IRoutes[] = [
  {
    name: Pages.ProductStack,
    component: ProductStack,
  },
  {
    name: Pages.Favorites,
    component: ProductList,
  },
  {
    name: Pages.Cart,
    component: ProductList,
  },
  {
    name: Pages.Profile,
    component: ProductList,
  },
];

export const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};
