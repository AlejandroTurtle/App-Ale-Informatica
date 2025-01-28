import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {Colors, dynamicSize} from '../../Config';

interface TextNavigationProps {
  text1: string;
  text2: string;
  onPress: () => void;
}

const TextNavigation: React.FC<TextNavigationProps> = ({
  text1,
  text2,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text1} </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>{text2}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: dynamicSize(20),
  },
  text: {
    color: Colors.gray,
    fontFamily: 'Poppins-Regular',
  },
  link: {
    color: Colors.blue,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default TextNavigation;
