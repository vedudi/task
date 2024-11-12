import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../themes/Colors';
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({label, style, onPress}) => {

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={() => onPress()}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  label: {
    color: colors.white,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.primary,
    height: 50,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',

  },
});
