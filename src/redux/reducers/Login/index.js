import {SUCCESS_LOGIN, LOGOUT_LOGIN} from '../../../config';
const initialState = {
  isLogin: false,
  userData: {},
  tokenData: null,
};

const Login = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_LOGIN:
      return {
        ...state,
        isLogin: true,
        userData: action.value.user,
        tokenData: action.value.token_access,
      };
    case LOGOUT_LOGIN:
      return {
        ...state,
        isLogin: false,
        userData: {},
        tokenData: null,
      };
    default:
      return state;
  }
};

export default Login;
