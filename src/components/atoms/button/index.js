import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';

const Button = ({text, onPress, btnColor}) => {
  return (
    <TouchableOpacity style={styles.container(btnColor)} onPress={onPress}>
      <Text style={styles.text(btnColor)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (btnColor) => ({
    backgroundColor:
      btnColor === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    borderRadius: 10,
    height: 45,
    justifyContent: 'center',
  }),
  text: (btnColor) => ({
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color:
      btnColor === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
});
