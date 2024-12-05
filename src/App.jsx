import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './navigationss/Routes';

import Toast from 'react-native-toast-message';


const App = () => {
  return (
    <NavigationContainer>
      <Routes />
      <Toast/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
