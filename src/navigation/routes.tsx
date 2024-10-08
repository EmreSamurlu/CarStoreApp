import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {Pages} from '../constants/pages.enum';
import {Favorites, Profile} from '../screens';
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
    component: Favorites,
  },
  {
    name: Pages.Cart,
    component: Cart,
  },
  {
    name: Pages.Profile,
    component: Profile,
  },
];

export const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};
