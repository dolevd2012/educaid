import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function UserDetails() {
    const {user,isAuthenticated,isLoading} = useAuth0();
    
    if (isLoading) {
        return (
        <div className="user-details">
            <h2>!ברוך הבא לאזור האישי</h2>
            <div className="loader"></div>
            <br/>
            <br/>
            <br/>
        </div>

    )}
    return (
        isAuthenticated &&(
            
        <div className="user-details">
            <h2>!ברוך הבא לאזור האישי</h2>
            <img src={user.picture} width="100" height="100"/>
            <h3>{user.name}</h3> 

        </div>
        
        )
    )
}

export default UserDetails
