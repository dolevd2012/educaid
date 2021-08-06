import React from 'react'
import {Link } from 'react-router-dom'
import{useAuth0} from '@auth0/auth0-react'

function Options (){
    const {loginWithRedirect} = useAuth0();
    return(
        <div className ='Options'>  
                <Link className='MainMenuLinks' to= '/'>ראשי<i className='fas fa-home'></i></Link>
                <Link className='MainMenuLinks' to= '/cpr'>החייאות וחנק<i className='fas fa-heartbeat'></i></Link>
                <Link className='MainMenuLinks' to= '/dressings'>עצירת דימומים וחבישות<i className='fas fa-tint'></i></Link>
                <Link className='MainMenuLinks' to= '/animals'>פגיעות בעלי חיים<i className='fas fa-dog'></i></Link>
                <Link className='MainMenuLinks' to= '/climate'>פגיעות אקלים<i className='fas fa-cloud-sun-rain'></i></Link>
                <Link className='MainMenuLinks' to= '/moreCases'>מקרים נוספים<i className="fa fa-book"></i></Link>
                <button onClick={() => loginWithRedirect()} className= 'LoginLink' to='/myzone'>איזור אישי<i className='fas fa-user-graduate'></i></button>

        </div>
    );
}
export default Options;
