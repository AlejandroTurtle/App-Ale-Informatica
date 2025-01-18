import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, dynamicSize} from '../../../Config';

import CustomButton from '../../../Components/CustomButton';
import CustomInput from '../../../Components/CustomInput';
import facebook from '../../../assets/icons/facebook.png';
import google from '../../../assets/icons/google.png';
import {baseURL} from '../../../services/api';
import axios from 'axios';
import Alert from '../../../Components/Alert';
import TextNavigation from '../../../Components/TextNavigation';

export const Register = ({navigation, route}: any) => {
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      setError('Todos os campos são obrigatórios');
      setShowAlert(true);
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      setShowAlert(true);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${baseURL}/api/register`, {
        name,
        email,
        password,
      });
      console.log('response', response);
      navigation.navigate('Login');
    } catch (err: any) {
      if (err.response.status === 400) {
        setError('Já existe um email igual a este cadastrado');
        setShowAlert(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Crie sua{'\n'}conta</Text>
          </View>
          <View style={styles.form}>
            <CustomInput
              iconName="account"
              placeholder="Nome"
              width={dynamicSize(320)}
              value={name}
              onChangeText={setName}
            />
            <CustomInput
              iconName="mail"
              placeholder="Email"
              width={dynamicSize(320)}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <CustomInput
              iconName="lock"
              placeholder="Senha"
              width={dynamicSize(320)}
              isPassword
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
            <CustomInput
              iconName="lock"
              placeholder="Confirme sua senha"
              width={dynamicSize(320)}
              isPassword
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              autoCapitalize="none"
            />
            <View style={{marginTop: dynamicSize(20)}}>
              <CustomButton
                title="Registrar"
                onPress={handleRegister}
                isLoading={loading}
              />
              <TextNavigation
                text1="Já possui uma conta?"
                text2="Entrar"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          </View>
          <View style={styles.line} />

          <Text style={styles.text}>Continuar com</Text>
          <View style={styles.containerIcons}>
            <TouchableOpacity>
              <Image source={facebook} style={styles.facebookIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.containerIcons}>
              <Image source={google} style={styles.googleIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Alert
        title="Aviso"
        message={error}
        onClose={() => setShowAlert(false)}
        visible={showAlert}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: dynamicSize(20),
    marginTop: dynamicSize(30),
  },
  title: {
    fontSize: 30,
    color: Colors.tertiary,
    fontFamily: 'Poppins-SemiBold',
  },
  form: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  facebookIcon: {
    alignSelf: 'center',
  },
  googleIcon: {
    alignSelf: 'center',
  },
  containerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: dynamicSize(100),
    alignSelf: 'center',
    marginBottom: dynamicSize(20),
  },
  text: {
    color: Colors.secondary,
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
    marginBottom: dynamicSize(20),
  },
  line: {
    height: dynamicSize(1),
    backgroundColor: Colors.quaternary,
    marginVertical: dynamicSize(20),
    opacity: 0.3,
  },
});
