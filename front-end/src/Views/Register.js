import React, { Component } from 'react';
import gql from 'graphql-tag';


export class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      nickName: '',
      email: '',
      password1: '',
      password2: '',
      code: ''
    };

    this.nickNameChange = this.nickNameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.password1Change = this.password1Change.bind(this);
    this.password2Change = this.password2Change.bind(this);
    this.register = this.register.bind(this);
  }

  nickNameChange(event){
    this.setState({nickName: event.target.value});
  }

  emailChange(event){
    this.setState({email: event.target.value});
  }

  password1Change(event){
    this.setState({password1: event.target.value});
  }

  password2Change(event){
    this.setState({password2: event.target.value});
  }

  register(){
    if (!this.state.nickName){
      this.setState({code: '2002'});
    } else if (!this.state.email){
      this.setState({code: '2003'});
    } else if (!this.state.password1){
      this.setState({code: '2004'});
    } else if (!this.state.password2){
      this.setState({code: '2005'});
    } else if (this.state.password1 !== this.state.password2){
      this.setState({code: '2001'});
    } else {
      const mutation = gql`
        mutation mutation($nickName: String, $email: String, $password: String, $description: String){
          registerUser(email:$email, password: $password, nickName: $nickName, description: $description){
            user{
              email
            }
            code,
            msg
          }
        }
      `;

      let data = {
        "nickName": this.state.nickName,
        "email": this.state.email,
        "password": this.state.password1,
        "description": this.state.descrition
      };

    }
  }

  render() {

    let msg = '';
    switch (this.state.code){
      case '2001': msg = '两个密码不一致'; break;
      case '2002': msg = '请填写昵称'; break;
      case '2003': msg = '请填写邮箱'; break;
      case '2004': msg = '请填写密码'; break;
      case '2005': msg = '请再次填写密码'; break;
      case '1001': msg = '账号已存在'; break;
      default: msg = '';

    }

    return (
      <div className='row flex-center'>
        <div className='sm-10 col'>
          <h3> 注册～ </h3>
          <div className="form-group">
              <label htmlFor="nickName">昵称</label>
              <input type="text" placeholder="balabala~" id="nickName" value={this.state.nickName} onChange={this.nickNameChange} />
          </div>
          <div className="form-group">
              <label htmlFor="email">邮箱(账号)</label>
              <input type="text" placeholder="*****@**.com" id="email" value={this.state.email} onChange={this.emailChange} />
          </div>
          <div className="form-group">
              <label htmlFor="password1">密码</label>
              <input type="password" placeholder="🙈" id="password1" value={this.state.password1} onChange={this.password1Change} />
          </div>
          <div className="form-group">
              <label htmlFor="password2">再次密码</label>
              <input type="password" placeholder="(✩_✩)" id="password2" value={this.state.password2} onChange={this.password2Change} />
          </div>
          <div class="form-group">
            <label>签名</label>
            <textarea class="" placeholder="必填!"></textarea>
          </div>
          <button onClick={this.register}> 注册 </button>
          <p className="text-danger">{msg}</p>
        </div>
      </div>
    );
  }
}


export default Register;
