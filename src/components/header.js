import React from 'react';
import { Link } from 'react-router-dom';


export default class Header extends React.Component{

  

  render(){
    var floatRight = {
      float: 'right',
      marginRight: '30px',
      textDecoration: 'none'
    };
    return(
      <header>
        <ul>
          <li><Link to="/" style={{textDecoration: 'none'}}><img src={require('../static/images/faultline.jpg')} alt="Home Button" className="bannerImg"></img></Link></li>
          <li className="farSide" style={{textDecoration: 'none'}}><Link to="/about-us">About</Link></li> 
          <li className="farSide" style={{textDecoration: 'none'}}><Link to="/news">News</Link></li>
          <li className="farSide" style={{textDecoration: 'none'}}><Link to="/calendar">Calendar</Link></li>
          {/* <li className="farSide" style={{textDecoration: 'none'}}><Link to="/media">Media</Link></li> */}
          <li style={floatRight} ><a href="">Book Us</a></li>
        </ul>
        
      </header>
    )
  }
}

