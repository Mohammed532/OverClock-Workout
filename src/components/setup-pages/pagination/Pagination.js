import React, {useEffect} from 'react'
import {pageContextWrapper} from './pageContext'
import './pagination.css'

function Pagination({pageInfo}){
    const renderPaginationButtons = () =>{
        let paginationButtons = []

        for(let i = 0; i < pageInfo.numberOfPages; i++){
            paginationButtons[i] = (<li className={`pagination-button-${i + 1}`} key={i + 1}></li>)
        }

        return paginationButtons
    }


    useEffect(() => {
        // gets pagination buttons AFTER it has been rendered to DOM, and applies activated pagination button
        // class to the number of pages passed through
        for(let i = 1; i <= pageInfo.numberOfPages; i++){
            if(i <= pageInfo.currentPage){
                document.querySelector(`.pagination-button-${i}`).classList.add('pagination-button-activated')
            }else{
                document.querySelector(`.pagination-button-${i}`).classList.remove('pagination-button-activated')
            }
        }
    })


    return(
        <ul className="pagination">
            {renderPaginationButtons()}
        </ul>
    )
}

export default pageContextWrapper(Pagination)