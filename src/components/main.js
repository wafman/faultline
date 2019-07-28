import React from 'react';
import Video from './video.js';
import Intro from './intro.js';

class Main extends React.Component{
  render(){
    return(
  
      <main>
        <Video />
        <Intro />
        
      </main>

    )
  }
}

export default Main;