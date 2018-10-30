import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import gql from 'graphql-tag';

import Login from '../Views/Login';
import client from './client.js';


class Auth extends React.Component {
  constructor(props) {
    super(props);

    // this.logout = this.logout.bind(this);
    var access_token = localStorage.getItem('access_token');
    this.state = {
      account: '',
      password: '',
      isLogin: access_token ? true : false
    };

    this.accountChange = this.accountChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.login = this.login.bind(this);
  }

  accountChange(event){
    this.setState({account: event.target.value});
  }

  passwordChange(event){
    this.setState({password: event.target.value});
  }

  login(event) {
    if (this.state.account && this.state.password){
      const access_token = '2333';
      const test = gql`
        query dsa($email: String, $password: String){
          login(email: $email, password: $password){
            accessToken,
            code,
            msg
          }
        }
      `;
      const input = {"email": "test", "password": "test"};
      client.query({query: test, variables: input})
            .then(data => console.log(data))
            .catch(error => console.error(error));
      // localStorage.setItem('access_token', access_token);
      // this.setState({isLogin: true});
    } else {
    }
    return this.isLogin;
  }

  // logout(e) {
  //   this.isLogin = false;
  //   localStorage.removeItem('access_token');
  //   return this.isLogin;
  // }

  render() {
    return (
      <Route exact path='/auth/login' render={(props)=>{
        if (this.state.isLogin) {
          return <Redirect to='/home' />
        } else {
          return <Login
            account={this.state.account}
            accountChange={this.accountChange}
            password={this.state.password}
            passwordChange={this.passwordChange}
            login={this.login}
            {...props}
          />
        }
      }} />
    );
  }

}


export default Auth;
