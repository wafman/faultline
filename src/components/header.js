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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" style={{textDecoration: 'none'}} className="navbar-brand">Home</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active farSide" style={{textDecoration: 'none'}}><Link to="/about-us" className="nav-link">About</Link></li> 
              <li className="nav-item active farSide" style={{textDecoration: 'none'}}><Link to="/news" className="nav-link">News</Link></li>
              <li className="nav-item active farSide" style={{textDecoration: 'none'}}><Link to="/calendar" className="nav-link">Calendar</Link></li>
              {/* <li className="farSide" style={{textDecoration: 'none'}}><Link to="/media">Media</Link></li> */}
              <li style={floatRight} ><a href="">Book Us</a></li>
            </ul>
          </div>
          
        </nav>
        
        
      </header>
    )
  }
}

