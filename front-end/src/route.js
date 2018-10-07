import React from 'react';
import { Router, Route, Switch } from 'react-router';

import history from './history';
import App from './Views/App';
import Login from './Views/Login';


let AppRouter =
  <Router history={history}>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/' component={App} />
    </Switch>
  </Router>;

export default AppRouter;
