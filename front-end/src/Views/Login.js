import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import gql from 'graphql-tag';

import client from '../Components/client';

import logo from '../Images/logo.svg';


class Login extends Component {
  constructor(props){
    super(props);
    const access_token = localStorage.getItem('access_token');
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

  render() {
    if (this.state.isLogin) {
      return <Redirect to='/home' />
    }

    let msg = '';
    switch (this.state.code){
      case '2001': msg = '请输入账号'; break;
      case '2002': msg = '请输入密码'; break;
      case '2003': msg = '网络错误，请稍后再试'; break;
      case '1002': msg = '账号不存在'; break;
      case '1003': msg = '密码错误'; break;
      default: msg = '';
    }

    return (

      <div id='login'>

        <div className="row flex-center">
          <div className=''>

            <div className="row">
              <div className='sm-12 col'>
                <img src={logo}  alt="logo" />
              </div>
            </div>

            <div className="row">
              <div className='sm-12 col'>
                <p style={{ textAlign: 'center' }}> Sign in to thtr </p>
              </div>
            </div>

            <div className="row flex-space child-borders" >
              <div className="sm-12 md-12 col padding-left-large">
                <div className="form-group">
                    <label htmlFor="account">账号</label>
                    <input type="text" className='border border-primary' placeholder="邮箱 | 账号" id="account" value={this.state.account} onChange={this.accountChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">密码</label>
                    <input type="text" className='border border-primary' placeholder="🙈" id="password" value={this.state.password} onChange={this.passwordChange}/>
                </div>

                <button type='submit' className='btn-block' onClick={this.login}> 登录 </button>
                <p className="text-danger">{msg}</p>
              </div>
            </div>

            <div className="row flex-space child-borders" >
              <div className="sm-12 col padding-smal">
                <p>没有thtr账号？<Link to='/register' style={{ color: '#0066CC', textDecorationColor:'#ffffff',textDecorationLine: "underline",textDecorationStyle: "solid" }}>注册一个</Link></p>
              </div>
            </div>

          </div>
        </div>

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

