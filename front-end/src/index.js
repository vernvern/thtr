import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

import App from './Views/App';
import Auth from './Components/auth';


const supportsHistory = 'pushState' in window.history;


ReactDOM.render(
  <BrowserRouter forceRefresh={!supportsHistory}>
    <Switch>
      <Route path='/auth' component={Auth} />
      <Route path='/' render={(props)=>{
        var access_token = localStorage.getItem('access_token');
        if (access_token){
          return <App />;
        } else {
          return <Redirect to='/auth/login' />;
        }
      }}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
