import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function ButtonGradient({title = 'Example'}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#9D40E1', '#C5554D']}
          style={styles.linearGradient}>
          <Text style={styles.text}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  buttonContainer: {
    borderRadius: 100,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    width: 276,
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
});
