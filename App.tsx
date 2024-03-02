/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import Login from '../LoginDevtop/src/components/Login';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView scrollEnabled={false}>
        <View>
          <Login />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
