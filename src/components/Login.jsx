import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import InputText from './InputText';
import ButtonGradient from './ButtonGradient';
import ButtonAccount from './ButtonAccount';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [errors, setErrors] = useState([]);

  const validatePassword = password => {
    const errors = [];

    if (password.length < 8) {
      errors.push('La contraseña debe tener al menos 8 caracteres');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('La contraseña debe tener al menos una letra mayúscula');
    }
    if (!/[0-9]/.test(password)) {
      errors.push('La contraseña debe tener al menos un número');
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push('La contraseña debe tener al menos un símbolo');
    }

    setErrors(errors);
    setStrength(4 - errors.length);
    return errors.length === 0;
  };

  const handleEmailChange = newValue => {
    setEmail(newValue);
  };

  const handleUsernameChange = newValue => {
    setUsername(newValue);
  };

  const handlePasswordChange = text => {
    setPassword(text);
    validatePassword(text);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/LoginScreen2.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.form}>
          <Text style={styles.title}>Get Started Free</Text>
          <Text style={styles.subtitle}>
            Free Forever. No Credit Card Needed 
          </Text>

          <InputText
            onValueChange={handleEmailChange}
            title="Email Address"
            placeholder="yourname@gmail.com"
            icon="email"
          />

          <InputText
            onValueChange={handleUsernameChange}
            title="Your Name"
            placeholder="@yourname"
            icon="user"
          />

          <InputText
            onValueChange={handlePasswordChange}
            title="Password"
            placeholder="•••••••••"
            icon="key"
            secure={true}
            strength={strength}
          />

          {/* ERRORS */}
          {errors.map(error => (
            <Text key={error} style={styles.textError}>
              {error}
            </Text>
          ))}

          <ButtonGradient title="Sign up" />
          <Image
            source={require('../../assets/images/sign.png')}
            style={styles.imageSign}
          />

          <View style={styles.buttonsAccount}>
            <ButtonAccount icon="google" />
            <ButtonAccount icon="mac" />
            <ButtonAccount icon="facebook" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: windowWidth,
    height: windowHeight,
  },
  form: {
    flex: 1,
    marginBottom: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    color: '#efefef',
    fontSize: 43,
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#a4a4a4',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    paddingBottom: 10,
  },
  imageSign: {
    marginVertical: 10,
  },
  buttonsAccount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 44,
    width: 230,
  },
  textError: {
    color: '#F03636',
    fontSize: 11,
    width: 300,
    textAlign: 'center',
  },
});

export default Login;
