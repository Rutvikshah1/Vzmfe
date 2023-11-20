import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/authActions';

const initialState = {
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};

export default authReducer;
