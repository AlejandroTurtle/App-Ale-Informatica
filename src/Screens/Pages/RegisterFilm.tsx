import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, dynamicSize} from '../../Config';
import CustomInput from '../../Components/CustomInput';

export const RegisterFilm = () => {
  const [name, setName] = React.useState('');
  const [sumary, setSumary] = React.useState('');
  return (
    <View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>
          Cadastre aqui seu filme, série ou livro
        </Text>
      </View>
      <View style={styles.containerInput}>
        <CustomInput
          placeholder="Procurar"
          width={dynamicSize(320)}
          value={name}
          onChangeText={setName}
        />
        <CustomInput
          placeholder="Escreva aqui um breve resumo"
          width={dynamicSize(320)}
          value={sumary}
          onChangeText={setSumary}
          multiline={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: dynamicSize(18),
    fontFamily: 'Poppins-Medium',
    color: Colors.tertiary,
    marginVertical: dynamicSize(15),
    textAlign: 'center',
  },
  containerInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dynamicSize(20),
  },
});
