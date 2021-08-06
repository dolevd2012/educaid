import React from 'react'


export default class Footer extends React.Component {
    render() {
        const footer = "Thanks for hanging out with us!";
        return ( 
            <div className = 'Footer' >
                <h5>{footer}</h5> 
            </div>
        )
    }
}