import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, dynamicSize} from '../../Config';

type TableProps = {
  name: string;
  age: number;
};

export const CustomTable = ({name, age}: TableProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.header}>Data</Text>
        <Text style={styles.header}>Entrada</Text>
        <Text style={styles.header}>Saída</Text>
        <Text style={styles.header}>Atividade</Text>
        <Text style={styles.header}>Editar</Text>
        <Text style={styles.header}>Excluir</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: dynamicSize(20),
  },
  header: {
    flexDirection: 'row',
    marginLeft: dynamicSize(10),
    marginRight: dynamicSize(10),
    color: Colors.gray,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: dynamicSize(1),
    borderBottomColor: Colors.quaternary,
    width: dynamicSize(335),
  },
});
