import React from 'react';
import {Stack} from '../navigations';
import {productRoutes, productStackOptions} from './productRoutes';

const ProductStack = () => {
  return (
    <Stack.Navigator screenOptions={productStackOptions}>
      {productRoutes.map(route => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default ProductStack;
