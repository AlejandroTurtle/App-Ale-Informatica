import {Text, Touchable, TouchableOpacity, View} from 'react-native';
import React from 'react';

export const DisplayContent = ({navigation, route}: any) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('AuthStack')}>
        <Text>goback</Text>
      </TouchableOpacity>
    </View>
  );
};
