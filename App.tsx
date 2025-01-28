import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/Screens/MainStack';
import MyTheme from './src/Config/theme';
import {LogBox} from 'react-native';
import {CartProvider} from './src/Context/CartContext';

LogBox.ignoreLogs([
  'Warning: DatePicker: Support for defaultProps will be removed from function components in a future major release.',
  'Warning: Header: Support for defaultProps will be removed from function components in a future major release.',
]);

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer theme={MyTheme}>
        <MainStack />
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
