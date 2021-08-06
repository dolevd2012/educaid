import React, { Component } from 'react'
import CaseBox from './CaseBox'


function Dressings(){
    return(
        <div className = "ContentBody">
          <h1>עצירת דימומים וחבישות</h1>
          <p>בחר מקרה אותו תרצה ללמוד</p>
          <li> <CaseBox title="ח.ע רוסי"  image= '/images/russian.jpg'/> </li>
          <li> <CaseBox title="ח.ע גומי" image= '/images/gumi.jpg'/> </li>
          <li> <CaseBox title="חבישת ראש" image= '/images/head_dressing.jpg'/> </li>
          <li> <CaseBox title="חבישת אצבע" image= '/images/finger.jpg'/> </li>
          <li> <CaseBox title="חבישת גפיים" image= '/images/armdressing.jpg'/> </li>
           
        </div>
        );
}
export default Dressings;