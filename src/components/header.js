import React from 'react';
import NavBar from './nav.js';

class Header extends React.Component{
  render(){
    return(
      <header>
        {/* <img src={require('../static/images/faultline.jpg')} alt="banner here" className="bannerImg"></img>   */}
        <NavBar />
      </header>
    )
  }
}

export default Header;