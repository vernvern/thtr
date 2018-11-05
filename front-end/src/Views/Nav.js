import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
  render() {

    const navsBrand = [
      <h4><Link to='/home'> Too Hard Too Remeber ! </Link></h4>,
    ];
    const navBrandList = navsBrand.map(function(object, i){
      return <li key={i}>{object}</li>
    });

    const navsRight = [
      <Link to='/page/add'> &nbsp;+&nbsp; </Link>,
      <Link to='/about'> 我的 </Link>
    ];
    const navRightList = navsRight.map(function(object, i){
      return <li key={i}>{object}</li>
    });
    return (
     <nav className="border fixed split-nav">
       <div className="nav-brand">
         <ul className="inline"> {navBrandList} </ul>
       </div>
       <div className="collapsible">
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
    );
  }
}


export default Nav;
