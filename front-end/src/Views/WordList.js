import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { GetAccessToken } from '../Components/util';


const WORD_LIST_QUERY = gql`
  query word_list_query($index: Int, $size: Int, $accessToken: String){
    words(index:$index, size:$size, accessToken: $accessToken){
      words{
        id,
        word,
        title
      }
      total,
      code,
      msg
    }
  }
`;

class WordListView extends Component {
  render(){
    const {data: {words} } = this.props;
    if (!words | JSON.stringify(words) === '{}') {
      return (<div />);
    } else {
      const pages = words.total/this.props.size;
      const index = this.props.index;
      return (
        <div>
          <ul>
            {words.words.map(({ id, word, title }) => (
              <li key={id}><Link to={'/page/detail/'+id}>{word} {title}</Link></li>
            ))}
          </ul>
          <div>
            <button className="btn-small" onClick={this.props.setIndex} value={this.props.index - 1} disabled={index-1<1}>{'<<'}</button>
            {Array.from({length: Math.ceil(pages)}, (x,i) => (
              <button className="btn-small" key={i} onClick={this.props.setIndex} value={i+1}>{i+1}</button>
            ))}
            <button className="btn-small" onClick={this.props.setIndex} value={this.props.index - 1} disabled={index+1>pages}>{'>>'}</button>
          </div>
        </div>
      );
    }
  }
}


class WordList extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 1,
      size: 10,
    };
    this.setIndex = this.setIndex.bind(this);
  }


  setIndex(event){
    this.setState({index: event.target.value});
  }

  render() {
    const accessToken = GetAccessToken();
    const kwargs = {
      "index": this.state.index,
      "size": this.state.size,
      "accessToken": accessToken
    };
    const WordListViewObject = graphql(WORD_LIST_QUERY, {
        options: { variables: kwargs },
      })(WordListView);

    return (
      <WordListViewObject
        setIndex={this.setIndex}
        index={this.state.index}
        size={this.state.size}
      />
    );
  }
}


export default WordList;
