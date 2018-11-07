import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from 'graphql-tag';


const MUTATION_ADD_WORD = gql`
  mutation register($word: String, $title: String, $password: String, $content: String){
    registerUser(title:$title, password: $password, word: $word, content: $content){
      user{
        title
      }
      code,
      msg
    }
  }
`;


class AddWord extends Component {
  constructor(props){
    super(props);

    this.state = {
      word: '',
      title: '',
      content: '',
    };
    this.wordChange = this.wordChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.contentChange = this.contentChange.bind(this);
  }

  wordChange(event){
    this.setState({word: event.target.value});
  }

  titleChange(event){
    this.setState({title: event.target.value});
  }

  contentChange(event){
    this.setState({content: event.target.value});
  }

  render() {
    var msg = '';
    return (
      <Mutation
        mutation = { MUTATION_ADD_WORD }
        onCompleted = {(data) => {
          this.setCode(data.registerUser.code);
        }}
      >
        {(register, {data}) => (
          <form
            onSubmit = {e => {
              e.preventDefault();
              if (!this.state.word){
                this.setState({code: '2002'});
              } else if (!this.state.title){
                this.setState({code: '2003'});
              } else if (!this.state.password1){
                this.setState({code: '2004'});
              } else if (!this.state.password2){
                this.setState({code: '2005'});
              } else if (this.state.password1 !== this.state.password2){
                this.setState({code: '2001'});
              } else if (!this.state.content){
                this.setState({code: '2006'});
              } else {
                const input_data = {
                  'title': this.state.title,
                  'word': this.state.word,
                  'content': this.state.content
                };
                register({variables: input_data});
              }
            }}
          >
            <div className='row flex-center'>
              <div className='sm-10 col'>
                <h3> 添加笔记～ </h3>
                <div className="form-group">
                    <label htmlFor="word">单词</label>
                    <input type="text" placeholder="" id="word" value={this.state.word} onChange={this.wordChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="title">标题</label>
                    <input type="text" placeholder="" id="title" value={this.state.title} onChange={this.titleChange} />
                </div>
                <div className="form-group">
                  <label>内容</label>
                  <textarea placeholder="" value={this.state.content} onChange={this.contentChange}></textarea>
                </div>
                <button type='submit'>保存</button>
                <p className="text-danger">{msg}</p>
              </div>
            </div>
          </form>
        )}
      </Mutation>
    );
  }
}

export default AddWord;
