import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../Images/logo.svg';


class Login extends Component {
  constructor(props){
    super(props);

    this.noticeMsg = this.noticeMsg.bind(this);
  }

  noticeMsg(code){
    let msg = '';
    switch (code){
      case '2001': msg = '请输入账号'; break;
      case '2002': msg = '请输入密码'; break;
      case '2003': msg = '网络错误，请稍后再试'; break;
      case '1002': msg = '账号不存在'; break;
      case '1003': msg = '密码错误'; break;
      default: msg = '';
    }
    return msg;
  }

  render() {
    const msg = this.noticeMsg(this.props.code);
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
                    <input type="text" className='border border-primary' placeholder="邮箱 | 账号" id="account" value={this.props.account} onChange={this.props.accountChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">密码</label>
                    <input type="text" className='border border-primary' placeholder="🙈" id="password" value={this.props.password} onChange={this.props.passwordChange}/>
                </div>

                <button type='submit' className='btn-block' onClick={this.props.login}> 登录 </button>
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

