import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess } from 'auth/authAction'; // Replace 'path_to_your_auth_actions' with the actual path to your auth actions

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutSuccess());
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/81/Verizon_2015_logo_-vector.svg"
            alt="Verizon Logo"
          />
        </Link>
      </div>
      <div className={styles.navbarLinks}>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/joblist">Joblist</Link>
          </li>
          {!isAuth ? (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          ) : (
            <li>
              <Link to="/auth" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
