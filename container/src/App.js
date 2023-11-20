import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import DashboardApp from './components/DashboardApp';
import AuthApp from './components/AuthApp';
import JoblistApp from './components/JoblistApp';
import Homepage from './components/Homepage';
import { useDispatch } from 'react-redux';
import { loginSuccess } from 'auth/authAction';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      dispatch(loginSuccess());
    }
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/dashboard" component={DashboardApp} />
        <Route path="/joblist" component={JoblistApp} />
        <Route path="/auth" component={AuthApp} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
