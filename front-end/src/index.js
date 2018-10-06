import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';

import * as serviceWorker from './serviceWorker';
import App from './App';
import history from './history';
import Login, { Register } from './login';


ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
