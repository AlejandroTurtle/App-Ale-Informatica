import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {dynamicSize} from '../../Config';

export const CustomCard = ({data}: any) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.wrapper}>
          <View style={styles.card}>
            <Image
              source={{uri: item.photo}}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.info}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.price}</Text>
            </View>
          </View>
        </View>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginHorizontal: dynamicSize(10),
    marginBottom: dynamicSize(10),
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    borderRadius: dynamicSize(8),
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: dynamicSize(150),
    height: dynamicSize(100),
    borderRadius: dynamicSize(8),
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: dynamicSize(16),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
