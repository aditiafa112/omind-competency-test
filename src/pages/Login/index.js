import React, {useState} from 'react';
import {StatusBar, StyleSheet, View, Alert} from 'react-native';
import {Button, Input, Gap} from '../../components';
import {colors} from '../../utils';
import {useDispatch} from 'react-redux';
import {Login as SignIn} from '../../redux/actions';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
  const [state, setState] = useState({
    email: 'tentor@gmail.com',
    password: '123123',
  });

  const updateState = (field, value) => {
    setState((prevState) => {
      return {...prevState, [field]: value};
    });
  };

  const submit = async () => {
    setisLoading(true);
    if (state.username !== '' && state.password !== '') {
      await dispatch(SignIn(state));
      setisLoading(false);
      navigation.replace('MainApp');
    } else {
      setisLoading(false);
      Alert.alert('login failed!', 'please check your input');
    }
  };

  return (
    <View style={styles.page}>
      <Input
        label={'Email'}
        value={state.email}
        onChangeText={(val) => updateState('email', val)}
        placeholder={'email'}
      />
      <Gap height={12} />
      <Input
        label={'Password'}
        value={state.password}
        onChangeText={(val) => updateState('password', val)}
        secureTextEntry
      />
      <Gap height={36} />
      <Button
        text="LOGIN"
        onPress={submit}
        btnColor={'secondary'}
        isLoading={isLoading}
      />
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
