import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
