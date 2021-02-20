import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';
import {ILHome} from '../../assets';

const Home = () => {
  return (
    <View style={styles.page}>
      <ILHome />
      <Text style={styles.pageName}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginTop: 12,
  },
});
