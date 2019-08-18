import React from 'react';
import { Link } from 'react-router-dom';



export default class Header extends React.Component{
  

  render(){
    return(
      <header>
        <nav className="navbar navbar-expand-lg  headerNav" style={{width: "100%"}}>
          <Link to="/" style={{textDecoration: 'none'}} className="navbar-brand"><img src={require('../static/images/faultline.jpg')} alt="Home" className="navImg"/></Link>
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active farSide" style={{textDecoration: 'none'}}><Link to="/about-us" className="nav-link">About</Link></li> 
              <li className="nav-item active farSide" style={{textDecoration: 'none'}}><Link to="/news" className="nav-link">News</Link></li>
              <li className="nav-item active farSide" style={{textDecoration: 'none'}}><Link to="/calendar" className="nav-link">Calendar</Link></li>
              {/* <li className="farSide" style={{textDecoration: 'none'}}><Link to="/media">Media</Link></li> */}
            </ul>
            <a href="https://www.facebook.com/faultlinecoverband/" class="fa fa-facebook"></a>
             <a href="https://www.youtube.com/channel/UCOQ-qqxM0iJNMBUdH8N8zDw?fbclid=IwAR1PWpKDx9oXB-irwU6XY4zuipLWLpgRSzJ_t5w7LF3sEYlbOjcCij9zXvY" class="fa fa-youtube"></a>
            <a href="mailto:faultline05@gmail.com"><button type="button" id="myBtn" class=" btn-lg centerBtn">Book Us</button></a>
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

