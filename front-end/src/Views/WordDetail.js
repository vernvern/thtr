import React, { Component } from 'react';

import ReactMarkdown from "react-markdown";


const text_center = {
  'textAlign': 'center',
}

const TextStyle = {
  width: 260,
  overflowX: 'visible',
  overflowY: 'visible'
}

const VerticalLineStyle = {
  content: '',
  height: '100%',
  display: 'inline-block',
  verticalAlign: 'middle',
  borderRight: '1px solid black',
}

export default class WordDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'test',
      content: '',
    }
    this.titleChange = this.titleChange.bind(this);
    this.contentChange = this.contentChange.bind(this);
 }

  titleChange(event){
    this.setState({title: event.target.value});
  }

  contentChange(event){
    this.setState({content: event.target.value});
  }

  render() {
    const word_id = this.props.match.params.word_id;
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
              <input id='titleInput' className='input-block' type="text" placeholder="" id="title" value={this.state.title} onChange={this.titleChange} />
              <br />
              <textarea id='contentTextarea' className='input-block' value={this.state.content} onChange={this.contentChange}/>
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
