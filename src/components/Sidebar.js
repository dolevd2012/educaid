import React, { Component } from 'react'
import UserDetails from './UserDetails'
import LogoutButton from './LogoutButton'


 class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <UserDetails/>
                <hr width="240"/>
                <nav>
                    <ul>
                        <li><a href="/Myzone">תרגול מבחנים</a></li>
                        <li><a href="/Myzone/my_tests">מבחנים שעשיתי</a></li>
                        <li><a href="/Myzone/statistics">סטטיסטיקה</a></li>
                        <li><a href="/Myzone/rating">דרג אותנו</a></li>
                    </ul>
                </nav> 
                <LogoutButton />
            </div>
        )
    }
}
export default Sidebar