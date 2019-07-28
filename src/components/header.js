import React from 'react';


class Header extends React.Component{
  render(){
    return(
      <header>
        <ul>
          <li><a href="#"><img src={require('../static/images/faultline.jpg')} alt="Home Button" className="bannerImg"></img></a></li>
          <li className="farSide"><a href="#">About</a></li> 
          <li className="farSide"><a href="#">Media</a></li>
        </ul>
        {/* <ul >
          
        </ul>  */}
        {/* <NavBar /> */}
      </header>
    )
  }
}

export default Header;