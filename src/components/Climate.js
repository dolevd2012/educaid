import React, { Component } from 'react'
import CaseBox from './CaseBox'

function Climate(){
    return(
        <div className = "ContentBody">
          <h1>פגיעות אקלים</h1>
          <p>בחר מקרה אותו תרצה ללמוד</p>
          <li> <CaseBox title="התייבשות" image= '/images/dehydration.png'/> </li>
          <li> <CaseBox title="מכת חום" image= '/images/heat.jpg'/> </li>
          <li> <CaseBox title="היפותרמיה (מכת קור)" image= '/images/cold.jpeg'/> </li>    
          <li> <CaseBox title="כוויות קור" image= '/images/coldhit.jpg'/> </li>    
        </div>
        );
}
export default Climate;
