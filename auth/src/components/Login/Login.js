import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Login.module.css';
import { loginSuccess } from '../../actions/authActions';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (isAuth) {
      history.push('/joblist');
    }
  }, [isAuth, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginSuccess(email)); // Pass the email value to loginSuccess action
    setEmail('');
    history.push('/joblist');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form className={styles.loginForm} onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          placeholder="Enter your email"
          className={styles.emailInput}
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
