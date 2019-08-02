import React from 'react';
import { Link } from 'react-router-dom';



export default class Header extends React.Component{
  

  render(){
    return(
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{width: "100%"}}>
          <Link to="/" style={{textDecoration: 'none'}} className="navbar-brand">Home</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active farSide" style={{textDecoration: 'none'}}><Link to="/about-us" className="nav-link">About</Link></li> 
              <li className="nav-item active farSide" style={{textDecoration: 'none'}}><Link to="/news" className="nav-link">News</Link></li>
              <li className="nav-item active farSide" style={{textDecoration: 'none'}}><Link to="/calendar" className="nav-link">Calendar</Link></li>
              {/* <li className="farSide" style={{textDecoration: 'none'}}><Link to="/media">Media</Link></li> */}
            </ul>
            <a href="mailto:faultline05@gmail.com"><button type="button" id="myBtn" class="btn btn-primary btn-lg centerBtn">Book Us</button></a>
          </div>
        </nav>

       

            {/* <div class="modal">
              <div class="modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Book Us!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <p>Whether you want to book us right away, or just find out more, click the link below to get in contact.</p>
                        <a href={`mailto:${this.props.email}`}>Email</a>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                  </div>
              </div>
            </div> */}
        
        
      </header>
    )
  }
}

