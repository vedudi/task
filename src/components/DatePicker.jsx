//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../themes/Colors';
import formatDate from '../utils/formatDate';

// create a component
const DatePicker = ({label, value, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text>{label}</Text>
      </View>
      <TouchableOpacity
        onPress={() => onPress()}
        style={{
          height: 50,
          backgroundColor: 'white',
          margin: 10,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{value?formatDate(value?.toString()) : 'please select date'} </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 15,
  },
  label: {
    fontSize: 15,
    color: colors.text.primary,
    fontWeight: '600',
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default DatePicker;
