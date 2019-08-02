import React from 'react';

class Calendar extends React.Component{
  render(){
    return (
      <>
        <div className="centerHolder">
          < h1 style={{"margin-bottom": "30px"}}>Calendar</h1>
          <table className="table table-hover">
            <tbody>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Location</th>
                <th scope="col">Address</th>
              </tr>
              <tr>
                <td>Thursday August 1 2019</td>
                <td>6:00 pm</td>
                <td><a href="https://www.fobbrewingcompany.com/">Forward Operating Base Brewery</a></td>
                <td>
                  <p>2750 Williamson Place Suite 100 DuPont, WA 98327</p>
                  {/* <p>DuPont, WA 98327</p>  */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
       
        
        
        
      </>
      
    )
  }
}

export default Calendar;