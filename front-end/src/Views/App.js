import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './Nav';
import AddWord from './AddWord';
import WordList from './WordList';
import WordDetail from './WordDetail';

import '../Css/index.css';


class App extends Component {
  render() {
    return (
      <div className="row site">
        <div className='sm-12 md-12 col'>
          <div className='page'>

            {/* nav */}
            <div className='row'> <Nav /> </div>

            <div className='Main row'>
              <div className='md-10 col'></div>

              <div className='md-10 col'>
                {/* body */}
                <Route exact path='/' component={WordList} />
                <Route exact path='/home' component={WordList} />
                <Route exact path='/page/add' component={AddWord} />
                <Route path='/page/detail/:word_id' component={WordDetail} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
