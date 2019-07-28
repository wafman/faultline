import React from 'react';

class Video extends React.Component{
  render(){
    return(
  
      <div className="videoDiv">
        <h1>Check out a live video of us below</h1>
        <video controls>
          <source src="/../public/Videos/Major-Tom.mp4" type="video/mp4"></source>
          Your browser does not support video
        </video>
      </div>
      
  
    )
  }
}

export default Video;