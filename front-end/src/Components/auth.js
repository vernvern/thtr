import React from 'react';


class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.isLogin = false;
  }

  login(e) {
    this.isLogin = true;
    return this.isLogin;
  }

}


export default Auth;
