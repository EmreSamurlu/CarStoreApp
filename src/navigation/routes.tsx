import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {Pages} from '../constants/pages.enum';
import {ProductList} from '../screens';
import {ITabRoutes} from '../types/route-types';
import ProductStack from './ProductStack/ProductStack';
import Cart from '../screens/Cart/Cart';

export const routes: ITabRoutes[] = [
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
    component: Cart,
  },
  {
    name: Pages.Profile,
    component: ProductList,
  },
];

export const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};
