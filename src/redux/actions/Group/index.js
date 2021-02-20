import {requestPostMultipart} from '../../../helpers/api';
import {API_URL, CREATE_GROUP} from '../../../config';
import {Alert} from 'react-native';

export const CreateGroup = (data, token) => {
  return async (dispatch) => {
    try {
      let res = await requestPostMultipart(
        data,
        `${API_URL}${CREATE_GROUP}`,
        token,
      );
      if (res.success) {
        Alert.alert('Success', 'Grub berhasil di buat');
      } else {
        console.Error('Failed', res.message);
      }
    } catch (error) {
      console.error('failed internet');
    }
  };
};
