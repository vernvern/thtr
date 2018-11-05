import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from "react-apollo";


import * as serviceWorker from './serviceWorker';

import App from './Views/App';
import Login from './Views/Login';
import client from './Components/client';


const supportsHistory = 'pushState' in window.history;


const ApolloDecorator = () => (
  <ApolloProvider client={client}>
    <BrowserRouter forceRefresh={!supportsHistory}>
      <Switch>
        <Route path='/login' render={(props)=>{
          return <Login />;
        }}/>
        <Route path='/' component={App} />
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
