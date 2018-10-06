import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';

import App from './App';
import history from './history';
import Login, { Register } from './login';


let AppRouter =
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  </Router>;


export default AppRouter;
