import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStack} from './Auth/Auth';
import {TabStack} from './TabStack';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{}}
      initialRouteName="Tabs" // Define a rota inicial
    >
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tabs"
        component={TabStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
