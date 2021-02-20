import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';

const Discussion = () => {
  return (
    <View style={styles.page}>
      <Text>Discussion</Text>
    </View>
  );
};

export default Discussion;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
