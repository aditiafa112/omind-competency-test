import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  ICHomeOutline,
  ICHomeFilled,
  ICLiveOutline,
  ICLiveFilled,
  ICDiscussionOutline,
  ICDiscussionFilled,
  ICProfileOutline,
  ICProfileFilled,
} from '../../../assets';
import {colors} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <ICHomeFilled /> : <ICHomeOutline />;
    }
    if (title === 'Live') {
      return active ? <ICLiveFilled /> : <ICLiveOutline />;
    }
    if (title === 'Diskusi') {
      return active ? <ICDiscussionFilled /> : <ICDiscussionOutline />;
    }
    if (title === 'Profil') {
      return active ? <ICProfileFilled /> : <ICProfileOutline />;
    }
    return <ICHomeOutline />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: (active) => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    marginTop: 4,
  }),
});
