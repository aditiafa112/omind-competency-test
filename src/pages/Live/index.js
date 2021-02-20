import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';

const Live = () => {
  return (
    <View style={styles.page}>
      <Text>Live</Text>
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
});
