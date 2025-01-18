import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import {RegisterFilm} from './Pages/RegisterFilm';
import {DisplayContent} from './Pages/DisplayContent';
import {Colors, dynamicSize} from '../Config';
import {Home} from './Pages/Home';

const Tab = createBottomTabNavigator();

export const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.primary,
          borderTopWidth: 0,
          height: dynamicSize(40),
        },
        tabBarIcon: ({color, size, focused}) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'RegisterFilm') {
            iconName = 'shopping-cart';
          } else if (route.name === 'DisplayContent') {
            iconName = 'settings';
          }

          return (
            <Feather
              name={iconName}
              size={focused ? size + 2 : size} // Tamanho maior quando ativo
              color={color}
            />
          );
        },
        tabBarActiveTintColor: Colors.secondary, // Cor ativa
        tabBarInactiveTintColor: Colors.tertiary, // Cor inativa
        tabBarShowLabel: false, // Esconde os labels dos ícones
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="RegisterFilm" component={RegisterFilm} />
      <Tab.Screen name="DisplayContent" component={DisplayContent} />
    </Tab.Navigator>
  );
};
