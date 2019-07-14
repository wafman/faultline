import React from 'react';

class NavBar extends React.Component{
  render(){
    return(
      <>
        <ul>
          <li><a href="#"><img src={require('../static/images/faultline.jpg')} alt="Home Button" className="bannerImg"></img></a></li>
          <li><a href="#">About</a></li>
        </ul>
      </>
    )
  }
}

export default NavBar;