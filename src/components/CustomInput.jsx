import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../themes/Colors';

const CustomInput = ({
  imageSource,
  onChangeText,
  value,
  style,
  label,
  placeholder,
  onPressIcon,
  icon,
  ...rest
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {icon && <Image source={imageSource} style={styles.image} />}
        <TextInput
          placeholder={placeholder}
          {...rest}
          value={value}
          onChangeText={onChangeText}
          style={styles.textInput}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 15,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    padding: 10,
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
  },
  date: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.black,
  },
});
