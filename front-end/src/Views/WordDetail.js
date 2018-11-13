import React, { Component } from 'react';

import gql from 'graphql-tag';
import ReactMarkdown from "react-markdown";

import client from '../Components/client';


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


const WORD_DETAIL_QUERY = gql`
  query word_detail_query($wordId: String){
    word(wordId: $wordId){
          title,
            content
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
    }
    this.titleChange = this.titleChange.bind(this);
    this.contentChange = this.contentChange.bind(this);
 }

  componentDidMount() {

    // get word detail data
    const word_id = this.props.match.params.word_id;
    console.info(word_id);
    client.query({query: WORD_DETAIL_QUERY, variables: {wordId: word_id}})
      .then(data => {
        const word = data.data.word;
        this.setState({title: word.title, content: word.content});
      })
      .catch(error => console.error(error));
  }

  titleChange(event){
    this.setState({title: event.target.value});
  }

  contentChange(event){
    this.setState({content: event.target.value});
  }

  render() {

    return (
      <div>
        <div className="text-center" style={text_center}>
        <h2>test</h2>
        </div>
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
            <div className="form-group">
              <input id='titleInput' className='input-block' type="text" placeholder="" value={this.state.title} onChange={this.titleChange} />
              <br />
              <textarea className='input-block' value={this.state.content} onChange={this.contentChange}/>
            </div>
          </div>
          <div className='col sm-5 col-5'>
            <ReactMarkdown source={ '### ' + this.state.title + '\n' +  this.state.content} />
          </div>
        </div>
      </div>
    );
  }

}
