import React from 'react'
import Pagination from './pagination/Pagination'
import { pageContextWrapper } from './pagination/pageContext'

function SetupHeader({pageInfo}){
    const renderTitle = () =>{
        let title = ""

        switch (pageInfo.currentPage) {
            case 1:
                title = "WELCOME"
                break
            case 2:
                title = "GENERAL SETUP"
                break
            case 3:
                title = "WORKOUT PLAN"
                break
            default:
                break
        }

        return <h3 className="setup-page-title">{title}</h3>
    }

    return(
        <div className="setup-header">
            {renderTitle()}
            <Pagination/>
        </div>
    )
}

export default pageContextWrapper(SetupHeader)