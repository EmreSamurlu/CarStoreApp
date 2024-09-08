import React from 'react';
import {Stack} from '../navigations';
import {productRoutes} from './productRoutes';

const ProductStack = () => {
  return (
    <Stack.Navigator>
      {productRoutes.map(route => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default ProductStack;
