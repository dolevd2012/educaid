import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { BrowserRouter as Router} from 'react-router-dom'
import TestsPage from './TestsPage'
import RatingPage from './RatingPage'
import MyTests from './MyTests'
import Statistics from './Statistics'
import PrivateRoute from './PrivateRoute'


class Myzone extends Component {
    
    render() {
        return (
        <div>
                <Router>
                    <Sidebar />
                    <PrivateRoute path='/myzone' exact={true} component={TestsPage} />
                    <PrivateRoute path='/Myzone/rating' exact={true} component={RatingPage}/>
                    <PrivateRoute path='/myzone/my_tests' component={MyTests} />
                    <PrivateRoute path='/myzone/statistics' component={Statistics} />
                </Router>     
         </div>
        
        )
    }
}
export default Myzone;