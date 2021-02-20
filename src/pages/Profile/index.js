import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';

const Profile = () => {
  return (
    <View style={styles.page}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
