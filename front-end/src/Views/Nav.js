import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Images/logo.svg';


class Nav extends Component {
  render() {

    const navsBrand = [
      <h4><Link to='/'> Too Hard Too Remeber ! </Link></h4>,
    ];
    const navBrandList = navsBrand.map((navsBrand) =>
      <li>{navsBrand}</li>
    );

    const navsRight = [
      <Link to='/'> &nbsp;+&nbsp; </Link>,
      <Link to='/login'> 我的 </Link>
    ];
    const navRightList = navsRight.map((navsRight) =>
      <li>{navsRight}</li>
    );

    return (
      <div className='row nav flex-edge'>
          <nav className="border fixed ">
            <div className="nav-brand md-8 sm-5 col">
              <ul className="inline"> {navBrandList} </ul>
            </div>
            <div className="collapsible md-4 sm-6 col">
              <input id="collapsible2" type="checkbox" name="collapsible2" />
              <button>
                <label htmlFor="collapsible2">
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </label>
              </button>
              <div className="collapsible-body">
                <ul className="inline"> {navRightList} </ul>
              </div>
            </div>
          </nav>
      </div>
    );
  }
}


export default Nav;
