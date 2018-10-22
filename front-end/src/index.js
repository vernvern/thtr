import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

import App from './Views/App';
import Login from './Views/Login';
import Auth from './Components/auth';


let  auth = new Auth();

const supportsHistory = 'pushState' in window.history


ReactDOM.render(
  <BrowserRouter forceRefresh={!supportsHistory}>
    <Switch>
      <Route exact path='/login' render={(props)=>{
        if (auth.isLogin) {
          return <Redirect to='/home' />
        } else {
          return <Login auth={auth} {...props} />
        }
      }} />
      <Route path='/' render={(props)=>{
        if (auth.isLogin) {
          return <App />
        } else {
          return <Redirect to='/login' />
        }
      }} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
