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
      isLogin: access_token ? true : false,
      code: '0'
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

  // return code:
  // - 2001: didn`t input account
  // - 2002: didn`t input password
  // - 2003: network failed
  // - 1002: account did`t exist
  // - 1003: wrong password
  login() {
    var code = this.state.code;
    if (!this.state.account){
      this.setState({code: '2001'});
    } else if (!this.state.password){
      this.setState({code: '2002'});
    } else {
      const query = gql`
        query dsa($email: String, $password: String){
          login(email: $email, password: $password){
            accessToken,
            code,
            msg
          }
        }
      `;
      const input = {
        "email": this.state.account,
        "password": this.state.password
      };
      // async...
      client
        .query({query: query, variables: input})
        .then(ret => {
          // request success
          code = ret.data.login.code;
          var isLogin = code === '0';
          if (isLogin) {
            localStorage.setItem('access_token', ret.data.login.access_token);
          }
          this.setState({code: code, isLogin: isLogin});
        })
        .catch(error => {
          // request fail
          console.error(error);
          this.setState({code: '2003'});
        });
    }
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
            code={this.state.code}
          />
        }
      }} />
    );
  }

}


export default Auth;
