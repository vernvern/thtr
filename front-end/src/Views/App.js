import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Nav from './Nav';
import AddWord from './AddWord'

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
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/page/add' component={AddWord} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
