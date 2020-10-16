import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Landing from './components/landing/Landing'
import HomeRoot from './components/home/HomeRoot'
import SetupRoot from './components/setup-pages/SetupRoot'
import 'react-responsive-modal/styles.css'

class App extends Component{
    render() {
        return (
            <div className='app'>
                <BrowserRouter>
                    <Route exact path={ROUTES.LANDING} component={Landing} />
                    <Route path={ROUTES.HOME}><HomeRoot /></Route>
                    <Route path={ROUTES.SETUP}><SetupRoot /></Route>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
