import React, { Component } from 'react'
import CaseBox from './CaseBox'


function MoreCases (){
    return(
        <div className = "ContentBody">
          <h1>מקרים נוספים</h1>
          <p>בחר מקרה אותו תרצה ללמוד</p>
          <li> <CaseBox title="טיפול בכוויות" image= '/images/burns.jpg'/> </li> 
          <li> <CaseBox title="קיבוע שבר" image= '/images/lay.png'/> </li>
          <li> <CaseBox title="תגובה אלרגית (אנפילקסיס)" image= '/images/elergy.jpg'/> </li>   
 
        </div>
        );
}
export default MoreCases;