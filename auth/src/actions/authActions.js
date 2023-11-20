export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const loginSuccess = (email) => {
  // Save the email to localStorage when logging in
  localStorage.setItem('userEmail', email);

  return {
    type: LOGIN_SUCCESS,
  };
};

export const logoutSuccess = () => {
  // Remove the email from localStorage when logging out
  localStorage.removeItem('userEmail');

  return {
    type: LOGOUT_SUCCESS,
  };
};
