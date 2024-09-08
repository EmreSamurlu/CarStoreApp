import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Pages} from '../../constants/pages.enum';
import {ProductDetail, ProductList} from '../../screens';
import {IStackRoutes} from '../../types/route-types';
import React from 'react';
import {HeaderComponent} from '../../components';

const renderHeaderComponent = (props: NativeStackHeaderProps) => (
  <HeaderComponent {...props} />
);
export const productRoutes: IStackRoutes[] = [
  {
    name: Pages.ProductList,
    component: ProductList,
    options: {
      headerShown: false,
    },
  },
  {
    name: Pages.ProductDetail,
    component: ProductDetail,
    options: {
      header: renderHeaderComponent,
    },
  },
];
