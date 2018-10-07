import React, { Component } from 'react';


class Login extends Component {
  render() {
    return (
      <div className="Login">
        <a> Login test </a>
        <button className="btn-large">Large</button>
      </div>
    );
  }
}


export class Register extends Component {
  render() {
    return (
      <div className='row flex-center'>
        <div className='sm-10 col'>
          <h3> 注册～ </h3>
          <div className="form-group">
              <label htmlFor="nickName">昵称</label>
              <input type="text" placeholder="balabala~" id="nickName" />
          </div>
          <div className="form-group">
              <label htmlFor="account">邮箱(账号)</label>
              <input type="text" placeholder="*****@**.com" id="account" />
          </div>
          <div className="form-group">
              <label htmlFor="password">密码</label>
              <input type="text" placeholder="🙈" id="password" />
          </div>
          <div className="form-group">
              <label htmlFor="password2">再次密码</label>
              <input type="text" placeholder="(✩_✩)" id="password2" />
          </div>

          <button> 注册 </button>
        </div>
      </div>
    );
  }
}


export default Login;

