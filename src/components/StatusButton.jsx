import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const StatusButton = ({iconName, color, size = 20, style, onPress}) => {
  return (
    <TouchableOpacity onPress={()=>onPress()}>
      <Icon name={iconName} color={color} size={size} style={{}} />
    </TouchableOpacity>
  );
};

export default StatusButton;

const styles = StyleSheet.create({});
