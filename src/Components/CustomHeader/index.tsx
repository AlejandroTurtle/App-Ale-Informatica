import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, dynamicSize} from '../../Config';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {useCart} from '../../Context/CartContext';
import {Navigation} from '../../types/Navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  title?: string;
  noback?: boolean;
  color?: string;
};

type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export const CustomHeader = ({title, noback, color}: Props) => {
  const navigate = useNavigation<NavigationProps>();
  const {totalItems} = useCart();

  return (
    <View style={styles.container}>
      {!noback && (
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <Feather
            name="arrow-left"
            size={dynamicSize(25)}
            color={Colors.black}
          />
        </TouchableOpacity>
      )}
      <Text style={[styles.textHeader, {color}]}>{title}</Text>
      <View>
        <TouchableOpacity onPress={() => navigate.navigate('Cart')}>
          <Feather
            name="shopping-cart"
            size={dynamicSize(25)}
            color={Colors.black}
          />
        </TouchableOpacity>
        {totalItems > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{totalItems}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: dynamicSize(15),
  },
  textHeader: {
    fontSize: dynamicSize(20),
    color: Colors.black,
    fontFamily: 'Poppins-regular',
    fontWeight: 'normal',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'red',
    borderRadius: dynamicSize(10),
    padding: 2,
    minWidth: dynamicSize(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: dynamicSize(12),
    fontWeight: 'bold',
  },
});
