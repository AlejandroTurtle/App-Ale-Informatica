import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Cart} from '../../Screens/Pages/Cart';

const screens = [{name: 'HomeCart', component: Cart}];

export function CartStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {screens.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
}
