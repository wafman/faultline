import React from 'react';

class Footer extends React.Component{
  render(){
    return(
      <>
        <div class="wrapper">
          <div class="push"></div>
        </div>
        <footer>
          <p>This production is brought to you by William Fritts</p>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-youtube"></a>
          {/* <img src="x" alt="youtube link"></img>
          <img src="x" alt="facebook link"></img> */}
        </footer>
      </>
    )
  }
}

export default Footer;