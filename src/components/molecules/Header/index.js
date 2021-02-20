import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils';
import {useNavigation} from '@react-navigation/native';
import {ICBackButton} from '../../../assets';

const Header = ({title, backButton}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backButton && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <ICBackButton />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
  },
  title: {
    color: colors.text.secondary,
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  backButton: {
    paddingVertical: 12,
    paddingLeft: 10,
  },
});
