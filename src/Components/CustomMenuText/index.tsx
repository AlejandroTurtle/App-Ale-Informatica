import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, dynamicSize} from '../../Config';

export const CustomMenuText = ({text, color, fontWeight, fontSize}: any) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color, fontWeight, fontSize}]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: dynamicSize(15),
  },
  text: {
    fontSize: dynamicSize(16),
    fontFamily: 'Poppins-regular',
    color: Colors.blue,
  },
});
