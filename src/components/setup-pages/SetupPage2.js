import React, { Component } from 'react'
import { TextInput } from 'react-materialize'

class SetupPage2 extends Component{

    signup = (e) =>{
        e.preventDefault()
    }

    render() {
        return (
            <div className="setup-page-2">
                <p>First, let's do some general account setup</p>
                <form className="signup-form" onSubmit={this.signup}>
                    <TextInput 
                      id="signup-fname"
                      name="first-name"
                      label="First Name"
                      m={6}
                    />
                    <TextInput
                      id="signup-lname"
                      name="last-name"
                      label="Last Name"
                      m={6}
                    />
                    <TextInput
                      id="signup-email"
                      name="email"
                      label="Email"
                      email
                      validate
                    />
                    <TextInput 
                      id="signup-password"
                      name="password"
                      label="Password"
                      password
                    />
                    <TextInput 
                      id="signup-password-confirm"
                      name="password-confirm"
                      label="Confirm Password"
                      password
                    />
                </form>
            </div>
        )
    }
}

export default SetupPage2