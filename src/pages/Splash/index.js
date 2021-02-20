import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {SetLogin} from '../../redux/actions';
import {colors, getData} from '../../utils';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      getData('login').then((res) => {
        if (res) {
          dispatch(SetLogin(res));
          navigation.replace('MainApp');
        } else {
          navigation.replace('Login');
        }
      });
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.page}>
      <Text>Welcome</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.primary,
    padding: 20,
    justifyContent: 'center',
  },
});
