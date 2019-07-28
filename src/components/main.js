import React from 'react';
import Video from './video.js';
import Intro from './intro.js';
import Calendar from './calendar.js';
import News from './news.js';

class Main extends React.Component{
  render(){
    return(
  
      <main>
        <div className="videoDiv">
          <Video />
          <Intro />
        </div>
        <section>
          <Calendar />
          <News />
        </section>
        
      </main>

    )
  }
}

export default Main;