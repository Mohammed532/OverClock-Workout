import React, { Component } from 'react'
import { Button } from 'react-materialize'
import PageContext from './pagination/pageContext'
import Confirm from './Confirm'
import SetupHeader from './SetupHeader'
import SetupPage1 from './SetupPage1'
import SetupPage2 from './SetupPage2'
import './setup_style.css'

class SetupRoot extends Component{
    state = {
        confirmation: false,
        pageInfo: {
            currentPage: 1,
            numberOfPages: 5
        },
    }

    back = () =>{
        let page = this.state.pageInfo.currentPage - 1
        this.setState(prevState => ({pageInfo: {...prevState.pageInfo, currentPage: page}}))
    }

    next = () =>{
        let page = this.state.pageInfo.currentPage + 1
        this.setState(prevState => ({pageInfo: {...prevState.pageInfo, currentPage: page}}))
    }

    renderTarget = () =>{
        switch (this.state.pageInfo.currentPage) {
            case 1:
                return <SetupPage1 />
            case 2:
                return <SetupPage2 />
            default:
                break //me daddy;
        }
    }

    render() {
        const {currentPage, numberOfPages} = this.state.pageInfo
        return (
            <div>
                <PageContext.Provider value={this.state.pageInfo}>
                    <SetupHeader/>
                    <div className="setup-root">
                        {this.renderTarget()}
                        <Button 
                          className="setup-left-btn" 
                          style={{display: currentPage === 1 ? "none" : ""}}
                          large
                          onClick={this.back}
                        >Back</Button>
                        <Button
                          className="setup-right-btn right" 
                          style={{display: currentPage === numberOfPages ? "none" : ""}}
                          large
                          onClick={this.next}
                        >Next</Button>
                    </div>
                </PageContext.Provider>
            </div>

        )
    }
}

export default SetupRoot