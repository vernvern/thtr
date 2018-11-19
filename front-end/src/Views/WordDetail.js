import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from 'graphql-tag';
import ReactMarkdown from "react-markdown";

import client from '../Components/client';

import { GetAccessToken } from '../Components/util';


const text_center = {
  'textAlign': 'center',
}

const VerticalLineStyle = {
  content: '',
  height: '100%',
  display: 'inline-block',
  verticalAlign: 'middle',
  borderRight: '1px solid black',
}

const EDIT_WORD_MUTAION = gql`
  mutation editWord($wordId: String, $title: String, $content: String, $access_token: String) {
    editWord(title:$title, wordId: $wordId, content: $content, accessToken: $access_token){
      code,
      msg
    }
  }
`;


const WORD_DETAIL_QUERY = gql`
  query word_detail_query($wordId: String, $accessToken: String){
    word(wordId: $wordId, accessToken: $accessToken){
          title,
          content,
          isAuthor,
          code
        }
  }
`;


export default class WordDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      content: '',
      mode: 'detail',
    }
    this.titleChange = this.titleChange.bind(this);
    this.contentChange = this.contentChange.bind(this);
    this.modeChange = this.modeChange.bind(this);
 }

  componentDidMount() {

    // get word detail data
    const kwargs = {
      wordId: this.props.match.params.word_id,
      accessToken: GetAccessToken()
    }
    client.query({query: WORD_DETAIL_QUERY, variables: kwargs})
      .then(data => {
        const word = data.data.word;
        this.setState({
          title: word.title,
          content: word.content,
          mode: word.isAuthor ? this.state.mode : 'readonly'
        });
      })
      .catch(error => console.error(error));
  }

  titleChange(event){
    this.setState({title: event.target.value});
  }

  contentChange(event){
    this.setState({content: event.target.value});
  }

  modeChange(){
    this.setState({mode: this.state.mode === 'detail' ? 'edit' : 'detail'})
  }

  render() {
    const detail = (
      <div className='row'>
        <div className='col'>
          <ReactMarkdown source={ '### ' + this.state.title + '\n\n' + this.state.content} />
        </div>
      </div>
    );

    const edit = (
      <div className='row'>
        <div className='col sm-1 col-1'>
          <br />
          <br />
          <p>title:</p>
          <br />
          <p>content:</p>
        </div>
        <div className='col sm-6 col-6' style={VerticalLineStyle}>
          <br />
          <br />
          <Mutation
            mutation = { EDIT_WORD_MUTAION }
            onCompleted = {(data) => {
              console.info(data);
              if (data.editWord.code === '0') {
                this.setState({'mode': 'detail'});
              }
            }}
          >
            {(editWord, {data}) => (
              <form
                onSubmit = { e => {
                  e.preventDefault();
                  if (!this.state.title) {
                    this.setState({'code': '2001'});
                  } else if (!this.state.content) {
                    this.setState({'code': '2001'});
                  } else {
                    const input_data = {
                      wordId: this.props.match.params.word_id,
                      title: this.state.title,
                      content: this.state.content,
                      access_token: GetAccessToken()
                    }
                    editWord({variables: input_data});
                  }
                }}
              >
                <div className="form-group">
                  <input id='titleInput' className='input-block' type="text" placeholder="" value={this.state.title} onChange={this.titleChange} />
                  <br />
                  <textarea className='input-block' value={this.state.content} onChange={this.contentChange}/>
                  <br />
                  <button type='submit' className='btn-small'>保存</button>
                </div>
              </form>
            )}
          </Mutation>
        </div>
        <div className='col sm-5 col-5'>
          <ReactMarkdown source={ '### ' + this.state.title + '\n' +  this.state.content} />
        </div>
      </div>
    );
    const mode = this.state.mode;

    return (
      <div>
        <div className="text-center" style={text_center}>
        <h2>test</h2>
        </div>
        <button className='btn-small' onClick={this.modeChange} hidden={mode === 'readonly'}> {mode === 'edit' ? '查看' : '编辑'} </button>
        {mode === 'edit' ? edit : detail}
      </div>
    );
  }

}
