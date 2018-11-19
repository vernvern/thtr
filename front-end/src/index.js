import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";
import Register from './Views/Register';

import * as serviceWorker from './serviceWorker';

import App from './Views/App';
import Login from './Views/Login';
import client from './Components/client';
import { GetAccessToken } from './Components/util';


const supportsHistory = 'pushState' in window.history;


const ApolloDecorator = () => (
  <ApolloProvider client={client}>
    <BrowserRouter forceRefresh={!supportsHistory}>
      <Switch>

        <Route path='/login' render={(props)=>{
          var access_token = GetAccessToken();
          if (access_token){
            return <Redirect to='/' />;
          } else {
            return <Login />;
          }
        }}/>

        <Route exact path='/register' render={(props)=>{
          var access_token = GetAccessToken();
          if (access_token){
            return <Redirect to='/' />;
          } else {
            return <Register />;
          }
        }}/>

        <Route path='/' render={(props)=>{
          var access_token = GetAccessToken();
          if (access_token){
            return <App />;
          } else {
            return <Redirect to='/login' />;
          }
        }}/>
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);


ReactDOM.render(
  <ApolloDecorator />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
