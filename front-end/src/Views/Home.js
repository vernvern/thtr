import React, { Component } from 'react';

import '../Css/Home.css';

import logo from '../Images/logo.svg';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>
            Edit <code>src/Home.js</code> and save to reload.test
          </p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <input type="text" value="Hello!" />
        </header>
      </div>
    );
  }
}

export default Home;
