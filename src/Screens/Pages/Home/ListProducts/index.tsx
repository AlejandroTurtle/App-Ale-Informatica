import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, dynamicSize} from '../../../../Config';
import CustomSearch from '../../../../Components/CustomSearch';
import {Navigation} from '../../../../types/Navigation';
import {useIndex} from './useIndex';
import {CustomHeader} from '../../../../Components/CustomHeader';

export const ListProducts = ({navigation, route}: Navigation) => {
  const {
    product,
    favoriteProduct,
    navigateFromDetails,
    searchUser,
    setSearchUser,
  } = useIndex({
    navigation,
    route,
  });

  const CardProduct = ({
    product,
    favoriteProduct,
    navigateFromDetails,
  }: any) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigateFromDetails(product?.id)}>
          <Image
            source={{uri: product?.photos[0] || undefined}}
            style={styles.image}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => favoriteProduct()}>
          <Feather
            name="heart"
            size={dynamicSize(18)}
            color={Colors.blue}
            style={styles.heartIcon}
          />
        </TouchableOpacity>
        <View style={styles.cardContent}>
          <Text style={styles.textName} numberOfLines={2}>
            {product?.name}
          </Text>
          <Text style={styles.textCategory}>{product?.category}</Text>
          <Text style={styles.text}>{`R$ ${product?.price}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <CustomHeader title="Produtos" />
      <CustomSearch value={searchUser} onChangeText={setSearchUser} />

      <FlatList
        data={product}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <CardProduct
            product={item}
            favoriteProduct={favoriteProduct}
            navigateFromDetails={navigateFromDetails}
          />
        )}
        ListEmptyComponent={() => (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Nenhum produto encontrado</Text>
          </View>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: dynamicSize(10),
    borderRadius: dynamicSize(10),
    flex: 1,
    marginHorizontal: dynamicSize(10),
    alignItems: 'center',
    overflow: 'hidden',
    height: dynamicSize(250),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    backgroundColor: Colors.white,
  },
  image: {
    width: dynamicSize(200),
    height: dynamicSize(140),
  },
  heartIcon: {
    position: 'absolute',
    top: dynamicSize(10),
    right: dynamicSize(10),
    color: Colors.red,
  },
  cardContent: {
    paddingHorizontal: dynamicSize(10),
    paddingVertical: dynamicSize(8),
    alignItems: 'center',
  },
  textName: {
    fontSize: dynamicSize(14),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.blue,
    textAlign: 'center',
  },
  textCategory: {
    fontSize: dynamicSize(12),
    fontFamily: 'Poppins-Regular',
    color: Colors.black,
    marginTop: dynamicSize(4),
    textAlign: 'center',
  },
  text: {
    fontSize: dynamicSize(16),
    fontFamily: 'Poppins-Bold',
    color: Colors.blue,
    marginTop: dynamicSize(8),
    textAlign: 'center',
  },
});
