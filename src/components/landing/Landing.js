import React, { Component } from 'react'
import LandingHeading from './LandingHeading'
import './landing_style.css'

class Landing extends Component{
    render() {
        return (
            <div>
                <LandingHeading {...this.props} />
            </div>
        )
    }
}

export default Landing