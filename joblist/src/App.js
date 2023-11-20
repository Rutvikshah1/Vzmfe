import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Joblist from './components/Joblist/Joblist';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Joblist} />
      </Switch>
    </Router>
  );
};

export default App;
