import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Pages} from '../../constants/pages.enum';
import {ProductList} from '../../screens';
import {IRoutes} from '../../types/route-types';

export const productRoutes: IRoutes[] = [
  {
    name: Pages.ProductList,
    component: ProductList,
  },
  {
    name: Pages.Filter,
    component: ProductList,
  },
  {
    name: Pages.ProductDetail,
    component: ProductList,
  },
];

export const productStackOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
