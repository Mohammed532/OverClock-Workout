import React, { Component } from 'react'
import { TextInput, Button } from 'react-materialize'


class LoginForm extends Component{
    login = (e) =>{
        e.preventDefault()
        this.props.history.push('/home')
    }

    render() {
        return (
            <div className="form-container">
                <h2 className="form-heading">Login</h2>
                <form className="login-form" onSubmit={this.login}>
                    <TextInput 
                      id="login-email"
                      label="Username"
                    />
                    <TextInput
                      id="login-password"
                      label="Password"
                      type="password"
                    />
                    <Button
                      node="button"
                      type="submit"
                      waves="light">Login</Button>
                    <Button
                      className="right red"
                      type="button"
                      node="button"
                      waves="light"
                      onClick={this.props.closeLoginModal}>Close</Button>
                </form>
            </div>
        )
    }
}

export default LoginForm