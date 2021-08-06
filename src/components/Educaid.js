import React from 'react';
import Footer from './Footer';
import Header from './Header'
import Options from './Options'
import Cpr from './Cpr'
import Animals from './Animals'
import Climate from './Climate'
import Dressings from './Dressings'
import MoreCases from './MoreCases'
import Home from './Home'
import {BrowserRouter as Router,Route } from 'react-router-dom'
import Myzone from './Myzone'
import PrivateRoute from './PrivateRoute'
import '../styles/styles.css';

export default class MyApp extends React.Component{
    render(){
        return (
            <div className="completePage">
                <Router>
                    <Header/>
                    <Options/>
                    <Route exact path = "/" component = {Home}/>
                    <PrivateRoute path='/myzone' component={Myzone} />
                    <Route path = "/cpr" component = {Cpr}/>
                    <Route path = "/animals" component = {Animals}/>
                    <Route path = "/climate" component = {Climate}/>
                    <Route path = "/dressings" component = {Dressings}/>
                    <Route path = "/moreCases" component = {MoreCases}/>
                    <Footer/>
                     <hr className="BreakLine"/>
                </Router>
            </div>  
        )
    }
}
