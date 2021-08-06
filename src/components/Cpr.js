import React, { Component } from 'react'
import CaseBox from './CaseBox'

function Cpr () {
    return(
        <div className = "ContentBody">
          <h1>החייאות וחנק</h1>
          <p>בחר מקרה אותו תרצה ללמוד</p>
            <li> <CaseBox title="חנק - תינוקות" image= '/images/gordon_hits.jpg'/> </li>
            <li> <CaseBox title="חנק - מבוגרים" image= '/images/Heimlich.jpg'/> </li>
            <li> <CaseBox title="החייאה - תינוקות" image= '/images/cpr_baby.jpg'/> </li>  
            <li> <CaseBox title="החייאה - מבוגרים" image= '/images/cpr_adult.jpg'/> </li>   
        </div>
        );
}
export default Cpr;