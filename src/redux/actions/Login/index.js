import {requestPost} from '../../../helpers/api';
import {
  API_URL,
  TENTOR_LOGIN,
  SUCCESS_LOGIN,
  LOGOUT_LOGIN,
} from '../../../config';
import {storeData} from '../../../utils';

export const Logout = () => {
  return async (dispatch) => {
    try {
      storeData('login', null);
      dispatch({type: LOGOUT_LOGIN});
    } catch (error) {
      console.log(error);
    }
  };
};

export const Login = (data) => {
  return async (dispatch) => {
    try {
      let res = await requestPost(data, `${API_URL}${TENTOR_LOGIN}`);
      if (res.success) {
        storeData('login', res.data);
        dispatch({type: SUCCESS_LOGIN, value: res.data});
      } else {
        console.error('failed request');
      }
    } catch (error) {
      console.error('failed internet');
    }
  };
};

export const SetLogin = (data) => {
  return async (dispatch) => {
    try {
      dispatch({type: SUCCESS_LOGIN, value: data});
    } catch (error) {
      console.error('failed');
    }
  };
};
