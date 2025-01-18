// filepath: /c:/Users/Alejandro/Documents/Projetos/ProjetoPessoal/src/Config/theme.ts
import {DefaultTheme, Theme} from '@react-navigation/native';
import {Colors} from './index';

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.primary,
  },
  fonts: {
    regular: {
      fontFamily: 'Poppins-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Poppins-Bold',
      fontWeight: 'bold',
    },
    heavy: {
      fontFamily: 'Poppins-Heavy',
      fontWeight: 'bold',
    },
  },
};

export default MyTheme;
