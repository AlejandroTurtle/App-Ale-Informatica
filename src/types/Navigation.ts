import {typeNavigation} from './Navigate';

export interface Navigation {
  navigation: typeNavigation;
  route: {
    name: string;
    params?: any | {screen: string; params?: any};
  };
}
