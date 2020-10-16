import React, { Component } from 'react'
import { Button } from 'react-materialize'

class SignupForm extends Component{
    signup = (e) =>{
        e.preventDefault()
        this.props.history.push('/setup')
    }

    render() {
        return (
            <div className="signup-modal">
                <h2 className="signup-modal-heading">Signup</h2>
                <div className="signup-modal-body">
                    <p>Signup is quick and easy!</p>
                    <Button
                        node="button"
                        onClick={this.signup}
                        waves="light">Signup!</Button>
                    <Button
                        className="right red"
                        type="button"
                        node="button"
                        waves="light"
                        onClick={this.props.closeSignupModal}>Close</Button>
                </div>
                
            </div>
        )
    }
}

export default SignupForm