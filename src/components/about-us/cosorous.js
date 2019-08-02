import React from 'react';

export default class Cosorous extends React.Component{
  render(){
    return(
      <div className="aboutUs">
          <div className="card border-primary mb-3 bandCard" style={{"max-width" : "20rem"}}>
              <div className="card-header">
                <h1>Member</h1>
              </div>
              <div className="card-body">
                  <img src={require('../../static/images/faultline.jpg')} alt="Home Button" className="profileImg"></img>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula nulla sit amet ullamcorper dictum. Nulla et eros eu enim ultrices blandit sed eu metus. Phasellus ac vulputate tellus. Sed varius leo et eleifend luctus. Vivamus aliquet turpis nec dignissim aliquam. Curabitur malesuada ultricies mi ut lacinia. Donec nulla odio, tempor eu porttitor in, accumsan et arcu. Aenean pellentesque aliquet aliquet. Cras tincidunt viverra felis, eget dapibus libero varius sed. Integer posuere lorem id aliquam aliquam.
                  </p>
              </div>
          </div>
      </div>
    )
  }
}