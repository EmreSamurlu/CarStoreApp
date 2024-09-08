import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTab} from './navigations';
import {routes, screenOptions} from './routes';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs/src/types';
import {BottomTabComponent} from '../components';

const BottomComponent = (props: BottomTabBarProps) => (
  <BottomTabComponent {...props} />
);

const Router = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBar={BottomComponent}
        screenOptions={screenOptions}>
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
