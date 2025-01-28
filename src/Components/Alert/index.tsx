import React from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';
import {Colors, dynamicSize} from '../../Config';
import CustomButton from '../CustomButton';

export type AlertProps = {
  message: string | number;
  title: 'Alerta' | 'Sucesso' | 'Aviso';
  onClose: () => void;
  visible: boolean;
};

export const Alert = ({message, title, onClose, visible}: AlertProps) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.messageContainer}>
              <Text style={styles.message}>{message}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                title="Fechar"
                onPress={onClose}
                width={dynamicSize(280)}
                height={dynamicSize(50)}
                fontsize={dynamicSize(20)}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    marginVertical: dynamicSize(200),
    marginHorizontal: dynamicSize(20),
    borderRadius: dynamicSize(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray,
  },
  container: {
    width: dynamicSize(300),
    borderRadius: dynamicSize(10),
    padding: dynamicSize(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.blue,
    fontSize: dynamicSize(20),
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: dynamicSize(10),
  },
  messageContainer: {
    justifyContent: 'center',
  },
  message: {
    color: 'white',
    fontSize: dynamicSize(16),
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: dynamicSize(20),
  },
});

export default Alert;
