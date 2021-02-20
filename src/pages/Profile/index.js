import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {API_ASSET} from '../../config';
import {Logout} from '../../redux/actions';
import {colors} from '../../utils';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.userData);

  const logout = () => {
    dispatch(Logout());
    navigation.replace('Login');
  };

  return (
    <View style={styles.page}>
      <View>
        <Image source={{uri: API_ASSET + userData.foto}} style={styles.img} />
        <Text style={styles.text}>Nama : {userData.nama}</Text>
        <Text style={styles.text}>Lokasi Mengajar : {userData.nama}</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={logout}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.secondary,
    justifyContent: 'space-between',
    padding: 20,
  },
  text: {
    fontSize: 16,
    color: colors.text.tertiery,
    marginTop: 12,
  },
  img: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.button.danger.text,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: colors.button.danger.background,
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
});
