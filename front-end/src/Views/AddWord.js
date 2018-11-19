import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Mutation } from "react-apollo";
import ReactMarkdown from "react-markdown";
import gql from 'graphql-tag';

import { GetAccessToken } from '../Components/util';


const MUTATION_ADD_WORD = gql`
  mutation add_word($word: String, $title: String, $content: String, $access_token: String) {
    addWord(title:$title, word: $word, content: $content, accessToken: $access_token){
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

    if (this.state.code === '0') {
      return <Redirect to='/home' />;
    }

    let msg = '';
    switch (this.state.code){
      case '2001': msg = '请填写单词'; break;
      case '2002': msg = '请填写标题'; break;
      case '2003': msg = '请填写内容'; break;
      default: msg = '';
    }

    return (
      <Mutation
        mutation = { MUTATION_ADD_WORD }
        onCompleted = {(data) => {
          this.setState({code: data.addWord.code});
        }}
      >
        {(addWord, {data}) => (
          <form
            onSubmit = {e => {
              e.preventDefault();
              if (!this.state.word){
                this.setState({code: '2001'});
              } else if (!this.state.title){
                this.setState({code: '2002'});
              } else if (!this.state.content){
                this.setState({code: '2003'});
              } else {
                const input_data = {
                  'title': this.state.title,
                  'word': this.state.word,
                  'content': this.state.content,
                  'access_token': GetAccessToken()
                };
                addWord({variables: input_data});
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
                <ReactMarkdown source={ '# ' + this.state.title + '\n' +  this.state.content} />
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
