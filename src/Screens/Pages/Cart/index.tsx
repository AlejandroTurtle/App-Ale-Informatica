import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import {CustomHeader} from '../../../Components/CustomHeader';
import {useCart} from '../../../Context/CartContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors, dynamicSize} from '../../../Config';
import CustomButton from '../../../Components/CustomButton';

export const Cart = () => {
  const {
    cart,
    totalPrice,
    incrementItem,
    decrementItem,
    removeItem,
    sendCartToWhatsApp,
  } = useCart();

  return (
    <View style={styles.container}>
      <CustomHeader title="Carrinho" />
      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.cartItem}>
                <Image
                  source={{uri: item.photos[0]}}
                  style={styles.itemImage}
                  resizeMode="cover"
                />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemCategory}>{item.category}</Text>
                  <Text style={styles.itemPrice}>
                    R$ {(parseFloat(item.price) * item.quantity).toFixed(2)}
                  </Text>
                </View>
                <View style={styles.actionsContainer}>
                  <TouchableOpacity
                    onPress={() => decrementItem(item.id)}
                    style={styles.button}>
                    <Icon name="remove" size={20} color={Colors.blue} />
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity
                    onPress={() => incrementItem(item.id)}
                    style={styles.button}>
                    <Icon name="add" size={20} color={Colors.blue} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => removeItem(item.id)}
                    style={styles.button}>
                    <Icon name="delete" size={20} color={Colors.red} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalPrice}>{`R$ ${totalPrice}`}</Text>
          </View>
          <CustomButton
            title="Enviar para WhatApp"
            onPress={sendCartToWhatsApp}
            backgroundColor="#4ac959"
          />
        </>
      ) : (
        <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: dynamicSize(10),
    height: dynamicSize(80),
    borderRadius: dynamicSize(20),
    backgroundColor: Colors.grayCard,
    marginVertical: dynamicSize(5),
  },
  itemDetails: {
    flex: 1,
    marginLeft: dynamicSize(10),
  },
  itemName: {
    fontSize: dynamicSize(12),
    fontWeight: 'bold',
  },
  itemCategory: {
    fontSize: dynamicSize(12),
    color: Colors.gray,
  },
  itemPrice: {
    fontSize: dynamicSize(16),
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: dynamicSize(10),
    borderRadius: dynamicSize(10),
    marginTop: 20,
  },
  totalText: {
    fontSize: dynamicSize(16),
    color: Colors.blue,
    flex: 1,
  },
  totalPrice: {
    fontSize: dynamicSize(16),
    flex: 1,
    textAlign: 'right',
    color: Colors.blue,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#888',
  },
  itemImage: {
    width: dynamicSize(50),
    height: dynamicSize(60),
  },
  actionsContainer: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: dynamicSize(10),
    marginRight: dynamicSize(10),
  },
  button: {
    padding: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  whatsappButton: {
    marginHorizontal: dynamicSize(10), // Dá margem ao botão
    padding: dynamicSize(10),
    backgroundColor: '#25D366',
    borderRadius: 5,
    alignItems: 'center',
  },
  whatsappText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
