import React, {useState} from 'react';
import {
  DimensionValue,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, dynamicSize} from '../../Config';

interface CustomInputProps extends TextInputProps {
  iconName?: string;
  placeholder: string;
  width?: DimensionValue;
  height?: DimensionValue;
  isPassword?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  multiline?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  iconName,
  placeholder,
  width = '100%',
  height = dynamicSize(60),
  isPassword = false,
  value,
  onChangeText,
  multiline = false,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {width},
        {height: multiline ? 'auto' : height},
      ]}>
      <MaterialCommunityIcons name={iconName} size={20} style={styles.icon} />
      <TextInput
        style={[styles.input, {height: multiline ? 'auto' : height}]}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
        secureTextEntry={isPassword && !isPasswordVisible}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        {...rest}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <MaterialCommunityIcons
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={20}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: dynamicSize(12),
    paddingHorizontal: 10,
    padding: dynamicSize(10),
    marginTop: dynamicSize(20),
    backgroundColor: Colors.white,
    color: Colors.gray,
    borderWidth: dynamicSize(1),
    borderColor: Colors.gray,
  },
  icon: {
    marginRight: 10,
    color: Colors.gray,
  },
  input: {
    flex: 1,
    color: Colors.gray,
    fontFamily: 'Poppins-Regular',
    textAlignVertical: 'center',
  },
});

export default CustomInput;
