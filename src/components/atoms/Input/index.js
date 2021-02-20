import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../../utils';

const Input = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  placeholder,
  bgDark,
}) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiery);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border, bgDark)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
        placeholder={placeholder}
        placeholderTextColor={colors.text.grey}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
  },
  input: (border, bgDark) => ({
    borderWidth: 1,
    borderRadius: 7,
    borderColor: border,
    paddingHorizontal: 12,
    height: 45,
    backgroundColor: bgDark
      ? colors.background.grey
      : colors.background.secondary,
  }),
});
