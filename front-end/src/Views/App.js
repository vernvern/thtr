import React, { Component } from 'react';
import { Route } from 'react-router';

import Home from './Home';
import { Register } from './Login';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='Nav'/>
        <div className='Main'>
          <Route exact path='/register' component={Register} />
          <Route exact path='/' component={Home} />
        </div>
      </div>
    );
  }
}

export default App;
