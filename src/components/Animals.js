import React, { Component } from 'react'
import CaseBox from './CaseBox'


function Asphyxia(){
    return(
        <div className = "ContentBody">
             <h1>פגיעות בעלי חיים</h1>
             <p>בחר מקרה אותו תרצה ללמוד</p>
             <li> <CaseBox title="נשיכת כלב" image= '/images/dog.jpg'/> </li>
             <li> <CaseBox title="עקיצת דבורה" image= '/images/bee.jpg'/> </li> 
             <li> <CaseBox title="הכשת נחש" image= '/images/snake.jpg'/> </li>    
        </div>
    );
}
export default Asphyxia;