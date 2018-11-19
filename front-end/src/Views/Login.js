import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';


import logo from '../Images/logo.svg';


const LOGIN_QUERY = gql`
  query login_query($email: String, $password: String){
    login(email: $email, password: $password){
      accessToken,
      expiresIn,
      code,
      msg
    }
  }
`;


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      code: '',
    };

    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.setCode = this.setCode.bind(this);
  }

  emailChange(event){
    this.setState({email: event.target.value});
  }

  passwordChange(event){
    this.setState({password: event.target.value});
  }

  setCode = (code) => this.setState(() => ({code}));

  render() {
    if (this.state.code === '0') {
      return <Redirect to='/home' />
    }
    let msg = '';
    switch (this.state.code){
      case '1002': msg = '账号不存在'; break;
      case '1003': msg = '密码错误'; break;
      case '2001': msg = '请填写账号'; break;
      case '2002': msg = '请填写密码'; break;
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
                    <label htmlFor="email">账号</label>
                    <input type="text" className='border border-primary' placeholder="邮箱 | 账号" id="email" value={this.state.email} onChange={this.emailChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">密码</label>
                    <input type="text" className='border border-primary' placeholder="🙈" id="password" value={this.state.password} onChange={this.passwordChange}/>
                </div>

                <div className="form-group">
                  <ApolloConsumer>
                    {client => (
                      <button type='submit' className='btn-block'
                        onClick={async () => {
                          if (!this.state.email){
                            this.setCode('2001');
                          } else if (!this.state.password){
                            this.setCode('2002');
                          } else {
                            const { data } = await client.query({
                              query: LOGIN_QUERY,
                              variables: {'email': this.state.email, 'password': this.state.password}
                            });
                            if (data.login.code === '0'){
                              localStorage.setItem('access_token', data.login.accessToken);
                              localStorage.setItem('expires_in', data.login.expiresIn);
                            }
                            this.setCode(data.login.code);
                          }
                        }}
                      >
                        登录
                      </button>
                    )}
                  </ ApolloConsumer>

                  <p className="text-danger">{msg}</p>
                </div>
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


export default Login;

