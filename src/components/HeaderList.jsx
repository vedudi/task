import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../themes/Colors';

const HeaderList = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>List</Text>
    </View>
  );
};

export default HeaderList;

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
});
