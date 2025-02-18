import React, {useState} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {dynamicSize} from '../../Config';
import {FullScreenZoomImage} from '../FullScreenZoomImage';

const {width} = Dimensions.get('window');

type ImageCarouselProps = {
  photos: string[];
};

export const ImageCarousel = ({photos}: ImageCarouselProps) => {
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImagePress = (uri: string) => {
    setSelectedImage(uri);
    setVisible(true);
  };

  const handleRequestClose = () => {
    setVisible(false);
    setSelectedImage(null);
  };

  const handleScroll = (event: any) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({item}) => (
          <TouchableOpacity key={item} onPress={() => handleImagePress(item)}>
            <Image source={{uri: item}} style={styles.image} />
          </TouchableOpacity>
        )}
      />
      <View style={styles.dotsContainer}>
        {photos.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, {opacity: index === currentIndex ? 1 : 0.5}]}
          />
        ))}
      </View>
      {selectedImage && (
        <FullScreenZoomImage
          uri={selectedImage}
          onRequestClose={handleRequestClose}
          visible={visible}
        />
      )}
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
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: dynamicSize(10),
  },
  dot: {
    width: dynamicSize(8),
    height: dynamicSize(8),
    borderRadius: dynamicSize(4),
    backgroundColor: 'black',
    marginHorizontal: dynamicSize(4),
  },
});
