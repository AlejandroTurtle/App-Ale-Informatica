import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomInput from '../../../Components/CustomInput';
import {Colors, dynamicSize} from '../../../Config';
import CustomButton from '../../../Components/CustomButton';
import facebook from '../../../assets/icons/facebook.png';
import google from '../../../assets/icons/google.png';
import {storeData} from '../../../AsyncStorage/storage';
import {baseURL} from '../../../services/api';
import axios from 'axios';
import {Alert} from '../../../Components/Alert';
import TextNavigation from '../../../Components/TextNavigation';

export const Login = ({navigation, route}: any) => {
  const [email, setEmail] = useState('alejandrogomes23@hotmail.com');
  const [password, setPassword] = useState('12345678');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Todos os campos são obrigatórios');
      setShowAlert(true);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${baseURL}/user/login`, {
        email,
        password,
      });
      const data = response.data;
      storeData('token', data.token);
      navigation.reset({
        index: 0,
        routes: [{name: 'Tabs'}],
      });
      console.log(data);
    } catch (err) {
      setError('Erro, por favor tente novamente');
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <View style={{flex: 1, backgroundColor: Colors.primary}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Faça seu{'\n'}login</Text>
          </View>
          <View style={styles.containerInput}>
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
              isPassword={true}
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </View>
          <CustomButton
            title="Login"
            onPress={handleLogin}
            isLoading={loading}
          />
          <TextNavigation
            text1="Não tem uma conta?"
            text2="Crie"
            onPress={() => navigation.navigate('Register')}
          />
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
        </ScrollView>
      </View>
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
  containerInput: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: dynamicSize(20),
  },
  forgotPassword: {
    color: Colors.secondary,
    fontFamily: 'Poppins-Regular',
    marginTop: dynamicSize(20),
    alignSelf: 'flex-end',
    marginRight: dynamicSize(20),
  },
  line: {
    height: dynamicSize(1),
    backgroundColor: Colors.tertiary,
    marginVertical: dynamicSize(20),
    opacity: 0.3,
  },
  newAccount: {
    color: Colors.tertiary,
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
    marginBottom: dynamicSize(20),
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
});
