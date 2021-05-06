import React, { Component } from 'react';

class CurrentYrStudentTotal extends Component {


    render(){
        return(
            <div className="current-yr-container">
                Current Year (Ages 6-21)
                {/* <div className="total">
                </div>
                <div className="ethnicities">

                </div> */}
                <table>
                <tr>
                    <th className="table-hdr">Total</th>
                    <th className="table-hdr">Ethnicity</th> 
                </tr>
                <tr>
                    <td>20</td>
                    <td>White</td>
                </tr>
                <tr>
                    <td>30</td>
                    <td>Black</td>
                </tr>
  
                </table>
            </div>

        )
    }
}

export default CurrentYrStudentTotal;