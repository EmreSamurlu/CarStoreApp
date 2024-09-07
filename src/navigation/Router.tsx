import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTab} from './navigations';
import {routes, screenOptions} from './routes';

const Router = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={screenOptions}>
        {routes.map(route => (
          <BottomTab.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        ))}
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
