import React from 'react';
import {View, FlatList, Image, StyleSheet, Dimensions} from 'react-native';
import {dynamicSize} from '../../Config';

const {width} = Dimensions.get('window');

type ImageCarouselProps = {
  photos: string[];
};

export const ImageCarousel = ({photos}: ImageCarouselProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width,
    height: dynamicSize(230),
    resizeMode: 'cover',
  },
});
