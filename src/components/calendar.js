import React from 'react';

class Calendar extends React.Component{
  render(){
    return (
      <>
      <h1>Calendar</h1>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
          </tr>

        </tbody>
      </table>
      </>
      
    )
  }
}

export default Calendar;