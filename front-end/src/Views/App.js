import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

import Home from './Home';
import Register from './Register';
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
                <Route exact path='/register' render={(props)=>{
                  var access_token = localStorage.getItem('access_token');
                  if (access_token){
                    return <Redirect to='/' />;
                  } else {
                    return <Register />;
                  }
                }}/>
                <Route exact path='/home'  render={(props)=>{
                  var access_token = localStorage.getItem('access_token');
                  if (access_token){
                    return <Home />;
                  } else {
                    return <Redirect to='/login' />;
                  }
                }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
