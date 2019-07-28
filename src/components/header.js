import React from 'react';
import { Link } from 'react-router-dom';


export default class Header extends React.Component{
  render(){
    return(
      <header>
        <ul>
          <li><Link to="/"><img src={require('../static/images/faultline.jpg')} alt="Home Button" className="bannerImg"></img></Link></li>
          <li className="farSide"><Link to="/about-us">About</Link></li> 
          <li className="farSide"><Link to="/media">Media</Link></li>
        </ul>
        
      </header>
    )
  }
}

