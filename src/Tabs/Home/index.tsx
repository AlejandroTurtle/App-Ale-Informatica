import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ProductDetails} from '../../Screens/Pages/Home/ProductDetails';
import {Home} from '../../Screens/Pages/Home';
import {ListProducts} from '../../Screens/Pages/Home/ListProducts';

const screens = [
  {name: 'HomeScreen', component: Home},
  {name: 'ProductDetails', component: ProductDetails},
  {name: 'ListProducts', component: ListProducts},
];

export function HomeStack() {
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
