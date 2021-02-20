import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../utils';

const ImagePicker = ({onPress, imgSource}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{width: 100}}>
      {imgSource ? (
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'cover',
            borderRadius: 8,
          }}
          source={imgSource}
        />
      ) : (
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: colors.background.grey,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="camera" size={24} color={colors.text.grey} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ImagePicker;
