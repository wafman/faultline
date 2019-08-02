import React from 'react';

class News extends React.Component{
  render(){
    return(
      <>
        <center style={{margin: "75px"}}>
            <h1>News && Announcements</h1>
        </center>
      
        <div className="news">
            <div className="outerNewsContainer">
              <div className="innerNewsContainer">
                <article>
                  <h3>News Title</h3>
                  <p>News/announcement guts</p>
                </article>
              </div>
              
            </div>
          
        </div>
      </>
      
    )
  }
}

export default News;