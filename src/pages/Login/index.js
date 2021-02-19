import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Button, Input, Gap} from '../../components';
import {colors} from '../../utils';

const Login = () => {
  const [state, setState] = useState({
    username: 'tentor@gmail.com',
    password: '123123',
  });

  const updateState = (field, value) => {
    setState((prevState) => {
      return {...prevState, [field]: value};
    });
  };

  const submit = () => {
    if (state.username !== '' && state.password !== '') {
      console.log('success');
    } else {
      console.log('failed');
    }
  };

  return (
    <View style={styles.page}>
      <StatusBar
        backgroundColor={colors.background.primary}
        barStyle="dark-content"
      />
      <Input
        label={'Username'}
        value={state.username}
        onChangeText={(val) => updateState('username', val)}
        placeholder={'Username'}
      />
      <Gap height={12} />
      <Input
        label={'Password'}
        value={state.password}
        onChangeText={(val) => updateState('password', val)}
        secureTextEntry
      />
      <Gap height={36} />
      <Button text="LOGIN" onPress={submit} btnColor={'secondary'} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.primary,
    padding: 20,
    justifyContent: 'center',
  },
});
