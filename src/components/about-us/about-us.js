import React from 'react';
import Hanisch from './hanisch.js';
import Cosorous from './cosorous.js';
import Coots from './coots.js';
import Guitar from './guitar.js';
import Singer from './singer.js';

export default class AboutUs extends React.Component{
  render(){
    return(
      <>
        <center>
          <h1>About Us</h1>
        </center>
        
        <div className="aboutUs">
          <Hanisch />
          <Cosorous />
          <Coots />
          <Guitar />
          <Singer />
        </div>
      </>
      
  
    )
  }
}
