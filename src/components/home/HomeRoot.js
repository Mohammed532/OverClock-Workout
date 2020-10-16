import React, { Component } from 'react'
import { Redirect, Switch, Route, Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import HomeNav from './HomeNav'
import HomePage from './HomePage'
import Planner from './Planner'
import SideNav from '../other/SideNav'
import './home_style.css'
import { Button } from 'react-materialize'

class HomeRoot extends Component{
    state = {
        target: 'home',
        sideNavActivate: false
    }

    activateSideNav = () =>{
        if(!this.state.sideNavActivate){
            document.querySelector(".main-page").classList.add("side-nav-activate")
            document.querySelector(".side-nav").classList.add("side-nav-activate")

            this.setState({sideNavActivate: true})
        }else{
            document.querySelector(".main-page").classList.remove("side-nav-activate")
            document.querySelector(".side-nav").classList.remove("side-nav-activate")

            this.setState({sideNavActivate: false})
        }

    }

    render() {
        return (
            <div className="home-root">
                <SideNav />
                <div className="main-page">
                    <HomeNav />
                    <Switch>
                        <Route exact path={ROUTES.PLANNER}>
                            <Planner />
                        </Route>
                        <Route exact path={ROUTES.HOME}>
                            <HomePage />
                        </Route>
                    </Switch>
                    <Button onClick={this.activateSideNav}>Click</Button>
                    <br/>
                    <Link to={ROUTES.PLANNER}>Hi</Link> 
                </div>
            </div>
        )
    }
}

export default HomeRoot