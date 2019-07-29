import React from 'react';
import ReactPlayer from 'react-player';

class Video extends React.Component{
  render(){
    return(
      <>
        <ReactPlayer 
            url='https://youtu.be/8Adx6P20Er8'
            className='react-player'
            // playing
            controls
            width='50%'
        />
      </>
    )
  }
}

export default Video;