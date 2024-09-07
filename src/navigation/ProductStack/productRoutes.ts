import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Pages} from '../../constants/pages.enum';
import {ProductDetail, ProductList} from '../../screens';
import {IRoutes} from '../../types/route-types';

export const productRoutes: IRoutes[] = [
  {
    name: Pages.ProductList,
    component: ProductList,
  },
  {
    name: Pages.ProductDetail,
    component: ProductDetail,
  },
  {
    name: Pages.Filter,
    component: ProductList,
  },
];

export const productStackOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
