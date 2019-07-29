import React from 'react';
import Video from './video.js';
import Intro from './intro.js';
import Contact from './contact.js';


class Main extends React.Component{
  render(){
    return(
  
      <main>
        <div className="videoDiv">
          <Video />
          {/* <Contact /> */}
        </div>
 
        <Intro />
      </main>

    )
  }
}

export default Main;