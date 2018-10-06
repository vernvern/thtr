import React, { Component } from 'react';
import { Route } from 'react-router';

import Home from './Home';
import { Register } from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='Nav' id='nav' />
        <div className='Body' id='body'>
          <Route path='/register' component={Register} />
          <Route exact path='/' component={Home} />
        </div>
      </div>
    );
  }
}

export default App;
