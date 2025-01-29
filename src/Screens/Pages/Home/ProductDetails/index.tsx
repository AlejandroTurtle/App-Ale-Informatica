import React from 'react';

import {CustomHeader} from '../../../../Components/CustomHeader';
import {Navigation} from '../../../../types/Navigation';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {useIndex} from './useIndex';
import {ImageCarousel} from '../../../../Components/ImageCarousel';
import {CustomMenuText} from '../../../../Components/CustomMenuText';
import {Colors, dynamicSize} from '../../../../Config';
import CustomButton from '../../../../Components/CustomButton';

export const ProductDetails = ({navigation, route}: Navigation) => {
  const {product, handleAddToCart} = useIndex({navigation, route});

  console.log('produ', product?.photos);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CustomHeader title="Detalhes do produto" />

      {product ? (
        <>
          <ImageCarousel photos={product?.photos || []} />
          <View style={styles.containerText}>
            <CustomMenuText
              text={product?.name}
              color={Colors.black}
              fontWeight={'bold'}
            />
          </View>
          <CustomMenuText
            text={`R$ ${product?.price}`}
            color={Colors.black}
            fontWeight={'bold'}
            fontSize={dynamicSize(20)}
          />
          <View style={styles.line} />
          <View style={styles.containerText}>
            <CustomMenuText
              text="Descrição"
              color={Colors.black}
              fontWeight={'bold'}
            />
          </View>
          <View style={styles.containerText}>
            <CustomMenuText text={product?.description} color={Colors.black} />
          </View>
          <CustomButton
            title="Adicionar ao carrinho"
            onPress={() => handleAddToCart(product)}
          />
        </>
      ) : (
        <ActivityIndicator size="large" color={Colors.blue} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerText: {
    marginVertical: dynamicSize(10),
  },
  line: {
    marginTop: dynamicSize(15),
    borderWidth: 1,
    borderColor: Colors.grayCard,
  },
});
