import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, dynamicSize} from '../../Config';

type propsButton = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  isLoading?: boolean;
  width?: number;
  icon?: string;
  height?: number;
  fontsize?: number;
};

const CustomButton = ({
  title,
  onPress,
  backgroundColor = Colors.secondary,
  color = Colors.primary,
  isLoading,
  width = dynamicSize(320),
  icon,
  height = dynamicSize(60),
  fontsize = dynamicSize(16),
}: propsButton) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.pressable, {backgroundColor, width, height}]}
        onPress={() => !isLoading && onPress()}
        disabled={isLoading}>
        <View style={styles.content}>
          {isLoading ? (
            <ActivityIndicator color={color} />
          ) : (
            <>
              {icon && <Text style={[styles.icon, {color}]}>{icon}</Text>}
              <Text style={[styles.titleText, {color, fontSize: fontsize}]}>
                {title}
              </Text>
            </>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: dynamicSize(10),
    borderRadius: dynamicSize(12),
    marginVertical: dynamicSize(10),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: dynamicSize(16),
    fontFamily: 'Poppins-SemiBold',
  },
  icon: {
    marginRight: dynamicSize(10),
  },
});

export default CustomButton;
