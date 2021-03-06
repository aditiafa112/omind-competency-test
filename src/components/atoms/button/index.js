import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../../utils';

const Button = ({text, onPress, btnColor, isLoading}) => {
  return (
    <TouchableOpacity
      style={styles.container(btnColor)}
      onPress={onPress}
      disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator
          color={btnColor === 'secondary' ? colors.primary : colors.secondary}
          size="large"
        />
      ) : (
        <Text style={styles.text(btnColor)}>{text}</Text>
      )}
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
    borderRadius: 7,
    height: 45,
    justifyContent: 'center',
  }),
  text: (btnColor) => ({
    fontSize: 18,
    textAlign: 'center',
    color:
      btnColor === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
});
