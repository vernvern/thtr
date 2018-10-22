import React from 'react';


class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    var access_token = localStorage.getItem('access_token');
    this.isLogin = access_token ? true : false;
  }

  login(e) {
    this.isLogin = true;
    localStorage.setItem('access_token', '2333');
    return this.isLogin;
  }

  logout(e) {
    this.isLogin = false;
    localStorage.removeItem('access_token');
    return this.isLogin;
  }

}


export default Auth;
