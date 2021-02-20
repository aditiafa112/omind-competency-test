import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {useDispatch} from 'react-redux';
import {SetLogin} from '../../redux/actions';
import {colors, getData} from '../../utils';
import {ICSplash} from '../../assets';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();
  const translateY = useRef(new Animated.Value(80)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      useNativeDriver: true,
      toValue: 0,
      duration: 1000,
    }).start();

    Animated.timing(opacity, {
      useNativeDriver: true,
      toValue: 1,
      duration: 1000,
      delay: 500,
    }).start(() => {
      getData('login').then((res) => {
        if (res) {
          dispatch(SetLogin(res));
          navigation.replace('MainApp');
        } else {
          navigation.replace('Login');
        }
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.page}>
      <Animated.View
        style={[
          styles.logoWrapper,
          {
            transform: [{translateY}],
          },
        ]}>
        <ICSplash />
      </Animated.View>
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
  logoWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
