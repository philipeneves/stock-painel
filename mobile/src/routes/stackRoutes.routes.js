import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Compare, History } from '../screens';

const StackRoute = createNativeStackNavigator();

const MainRoutes = () => {
  return (
    <StackRoute.Navigator
      initialRouteName={'HOME'}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationTypeForReplace: 'pop',
      }}
    >
      <StackRoute.Screen name={'HOME'} component={Home} />
      <StackRoute.Screen name={'HISTORY'} component={History} />
      <StackRoute.Screen name={'COMPARE'} component={Compare} />
    </StackRoute.Navigator>
  );
};

export default MainRoutes;
