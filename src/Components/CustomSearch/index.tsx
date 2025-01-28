import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, dynamicSize} from '../../Config';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchInput = ({value, onChangeText}: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="magnify" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Procurar"
          placeholderTextColor={Colors.gray}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: dynamicSize(16),
    marginLeft: dynamicSize(-10),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: dynamicSize(12),
    paddingHorizontal: dynamicSize(10),
    paddingVertical: dynamicSize(3),
    width: dynamicSize(320),
    borderWidth: dynamicSize(1),
    borderColor: Colors.blue,
  },
  icon: {
    marginRight: dynamicSize(8),
  },
  input: {
    flex: 1,
    fontSize: dynamicSize(14),
  },
});

export default SearchInput;
