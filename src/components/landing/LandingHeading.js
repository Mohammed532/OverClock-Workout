import React, { Component } from 'react'
import { Modal } from 'react-responsive-modal'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

class LandingHeading extends Component{
    state = {
        loginOpen: false,
        signupOpen: false,
    }

    //open and closes login modal
    openLoginModal = () =>{this.setState({loginOpen: true})}
    closeLoginModal = () =>{this.setState({loginOpen: false})}

    //open and closes signup modal
    openSignupModal = () =>{this.setState({signupOpen: true})}
    closeSignupModal = () =>{this.setState({signupOpen: false})}

    render(){
        const { loginOpen, signupOpen } = this.state;
        return(
            <div>
                <nav className="landing-nav">
                    <div className="nav-wrapper deep-purple darken-2">
                        <a href="/" className="brand-logo">Workout Time</a>
                        <ul id="nav-mobile" className="right">
                            <li><p className="landing-nav-items" onClick={this.openLoginModal}>Login</p></li>
                            <li><p className="landing-nav-items" onClick={this.openSignupModal}>Signup</p></li>
                        </ul>
                    </div>
                </nav>
                <Modal 
                  open={loginOpen} 
                  onClose={this.closeLoginModal} 
                  showCloseIcon={false}
                  center
                >
                    <LoginForm closeLoginModal={this.closeLoginModal} {...this.props} />
                </Modal>
                <Modal 
                  open={signupOpen} 
                  onClose={this.closeSignupModal} 
                  showCloseIcon={false}
                  center
                >
                    <SignupForm closeSignupModal={this.closeSignupModal} {...this.props} />
                </Modal>
            </div>
        )
    }

}

export default LandingHeading