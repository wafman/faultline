import React from 'react';

class News extends React.Component{
  render(){
    return(
      <>
        <center>
            <h1>News && Announcements</h1>
        </center>
      
        <div className="news">
          <article>
            <h3>News Title</h3>
            <p>News/announcement guts</p>
          </article>
        </div>
      </>
      
    )
  }
}

export default News;