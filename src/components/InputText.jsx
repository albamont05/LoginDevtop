import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const InputText = ({
  onValueChange,
  title = 'Example',
  placeholder = '',
  icon = 'email',
  secure = false,
  strength = 0,
}) => {
  // CONSTANTS
  const [text, setText] = useState('');

  // FUNTIONS
  const handleChangeText = newText => {
    setText(newText);
    onValueChange(newText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>

      <ImageBackground
        source={require('../../assets/images/button-background.png')}
        style={styles.backgroundImage}
        resizeMode="contain">
        <View style={styles.inputContainer}>
          {icon === 'email' ? (
            <Image
              source={require('../../assets/images/email.png')}
              style={styles.icon}
            />
          ) : icon === 'user' ? (
            <Image
              source={require('../../assets/images/user.png')}
              style={styles.icon}
            />
          ) : (
            <Image
              source={require('../../assets/images/key.png')}
              style={styles.icon}
            />
          )}

          <TextInput
            style={[styles.input, secure && styles.inputPassword]}
            placeholder={placeholder}
            placeholderTextColor="#fff"
            value={text}
            maxLength={16}
            onChangeText={handleChangeText}
            secureTextEntry={secure}
          />
          {/* Secure indicator */}
          <View style={styles.securePassword}>
            {secure === true && strength <= 2 ? (
              // CASE LOW
              <View style={styles.secureRow}>
                <Image
                  source={require('../../assets/images/indicator-strong.png')}
                  style={styles.iconIndicator}
                />
                <Image
                  source={require('../../assets/images/indicator.png')}
                  style={styles.iconIndicator}
                />
                <Image
                  source={require('../../assets/images/indicator.png')}
                  style={styles.iconIndicator}
                />
                <Text style={styles.secureText}>Low</Text>
              </View>
            ) : secure === true && strength === 3 ? (
              // CASE MEDIUM
              <View style={styles.secureRow}>
                <Image
                  source={require('../../assets/images/indicator-low.png')}
                  style={styles.iconIndicator}
                />
                <Image
                  source={require('../../assets/images/indicator-strong.png')}
                  style={styles.iconIndicator}
                />
                <Image
                  source={require('../../assets/images/indicator.png')}
                  style={styles.iconIndicator}
                />
                <Text style={styles.secureText}>Medium</Text>
              </View>
            ) : secure === true && strength === 4 ? (
              // CASE STRONG
              <View style={styles.secureRow}>
                <Image
                  source={require('../../assets/images/indicator-low.png')}
                  style={styles.iconIndicator}
                />
                <Image
                  source={require('../../assets/images/indicator-low.png')}
                  style={styles.iconIndicator}
                />
                <Image
                  source={require('../../assets/images/indicator-strong.png')}
                  style={styles.iconIndicator}
                />
                <Text style={styles.secureText}>Strong</Text>
              </View>
            ) : null}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  backgroundImage: {
    width: 314,
    height: 55,
  },
  text: {
    color: '#fff',
    marginStart: 22,
    marginBottom: 10,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginStart: 10,
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 30,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    fontSize: 14,
    width: 200,
  },
  securePassword: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },
  iconIndicator: {
    width: 15,
    height: 3,
    marginStart: 5,
  },
  secureRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  secureText: {
    color: '#9FDBA1',
    marginStart: 10,
    fontSize: 10,
    textTransform: 'capitalize',
  },
  inputPassword: {
    width: 100,
  }
});

export default InputText;
