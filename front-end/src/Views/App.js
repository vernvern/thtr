import React, { Component } from 'react';
import { Route } from 'react-router';

import Home from './Home';
import { Register } from './Login';
import Nav from './Nav';


import '../Css/index.css';

class App extends Component {
  render() {
    return (
      <div className="row site">
        <div className='sm-12 md-12 col'>
          <div className='page'>

            {/* nav */}
            <div className='row'> <Nav /> </div>
            <div className='row'> <br /> </div>

            <div className='Main row'>
              <div className='md-10 col'></div>

              <div className='md-10 col'>
                {/* body */}
                <Route exact path='/register' component={Register} />
                <Route exact path='/' component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
