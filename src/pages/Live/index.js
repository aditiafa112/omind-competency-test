import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';
import {ILLive} from '../../assets';

const Live = () => {
  return (
    <View style={styles.page}>
      <ILLive />
      <Text style={styles.pageName}>Live</Text>
    </View>
  );
};

export default Live;

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
