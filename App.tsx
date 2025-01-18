import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/Screens/MainStack';
import MyTheme from './src/Config/theme';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'Warning: DatePicker: Support for defaultProps will be removed from function components in a future major release.',
  'Warning: Header: Support for defaultProps will be removed from function components in a future major release.',
]);

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
