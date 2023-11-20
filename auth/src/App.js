import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
