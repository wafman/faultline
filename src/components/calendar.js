import React from 'react';

class Calendar extends React.Component{
  render(){
    return (
      <>
        <center style={{margin: "30px auto 90px auto"}}>
        < h1>Calendar</h1>
        </center>
        
        <table className="table table-hover">
          <tbody>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Location</th>
            </tr>
            <tr>
              <td>Thursday August 1 2019</td>
              <td>6:00 pm</td>
              <td>FOB -- Dupont, WA</td>
            </tr>

          </tbody>
        </table>
      </>
      
    )
  }
}

export default Calendar;