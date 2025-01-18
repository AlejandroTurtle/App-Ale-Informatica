import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import CustomSearch from '../../../Components/CustomSearch';
import {Colors, dynamicSize} from '../../../Config';
import {useIndex} from './UseIndex';
import Alert from '../../../Components/Alert';
import {CustomIconMenu} from '../../../Components/CustomIconMenu';

export const Home = () => {
  const {searchUser, setSearchUser, showAlert, setShowAlert, error, banner} =
    useIndex();
  const [currentIndex, setCurrentIndex] = useState(0); // Armazena o índice atual
  const flatListRef = useRef(null); // Referência para o FlatList

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % banner.length;
        flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
        return nextIndex;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [banner.length]);

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 50,
          backgroundColor: 'white',
        }}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <View style={styles.containerTitle}>
              <Text style={styles.title}>{'Olá Alejandro!'}</Text>
              <Feather
                name="shopping-cart"
                size={dynamicSize(25)}
                color={Colors.quarternary}
                style={styles.icon}
              />
            </View>
            <CustomSearch value={searchUser} onChangeText={setSearchUser} />
            <FlatList
              // ref={flatListRef}
              data={banner}
              renderItem={({item}) => (
                <View style={styles.carouselItem}>
                  {item.photo && (
                    <Image
                      source={{uri: item.photo}}
                      style={styles.carouselImage}
                      resizeMode="cover"
                    />
                  )}
                </View>
              )}
              keyExtractor={item => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={dynamicSize(300)}
              decelerationRate="normal"
              snapToAlignment="center"
            />
            <View style={styles.menuContainer}>
              <Text style={styles.textMenu}>Categorias</Text>
              <CustomIconMenu />
            </View>
          </View>

          <Alert
            title="Aviso"
            message={error}
            onClose={() => setShowAlert(false)}
            visible={showAlert}
          />
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: dynamicSize(20),
    marginVertical: dynamicSize(15),
  },
  title: {
    fontSize: dynamicSize(18),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.quarternary,
    flex: 1,
  },
  icon: {
    marginLeft: dynamicSize(10),
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: dynamicSize(20),
    marginHorizontal: dynamicSize(10),
    borderRadius: dynamicSize(8),
    width: dynamicSize(300),
    elevation: dynamicSize(5),
    height: dynamicSize(144),
    backgroundColor: Colors.primary,
  },
  carouselImage: {
    width: dynamicSize(300),
    height: dynamicSize(144),
    borderRadius: dynamicSize(8),
  },
  menuContainer: {
    marginBottom: dynamicSize(130),
    paddingHorizontal: dynamicSize(20),
    alignItems: 'flex-start',
  },
  textMenu: {
    fontSize: dynamicSize(16),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.secondary,
  },
  iconMenu: {
    marginTop: dynamicSize(10),
    marginLeft: dynamicSize(30),
  },
});
