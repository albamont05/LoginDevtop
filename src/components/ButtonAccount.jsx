import React from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function ButtonAccount({icon = 'google'}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <ImageBackground
          source={require('../../assets/images/account-button.png')}
          style={styles.backgroundImage}
          resizeMode="contain">
          {icon === 'google' ? (
            <Image
              source={require('../../assets/images/google.png')}
              style={styles.icon}
            />
          ) : icon === 'mac' ? (
            <Image
              source={require('../../assets/images/apple.png')}
              style={styles.icon}
            />
          ) : (
            <Image
              source={require('../../assets/images/facebook.png')}
              style={styles.icon}
            />
          )}
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    width: 58,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
