import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTab} from './navigations';
import {routes} from './routes';

const Router = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        {routes.map(route => (
          <BottomTab.Screen name={route.name} component={route.component} />
        ))}
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
