import React from 'react'
import * as ROUTES from '../../constants/routes';
import { Collection, CollectionItem } from 'react-materialize'
import { Link } from 'react-router-dom'

function SideNav(){
    return(
        <div className="side-nav">
            <div className="side-nav-header">
                <div className="user-pic"></div>
                <h5 className="user-name">Joey</h5>
            </div>
            <Collection className="side-nav-link-list">
                <CollectionItem>
                    <Link to="#">Excercise Plan</Link>
                </CollectionItem>
                <CollectionItem>
                    <Link to="#">Settings</Link>
                </CollectionItem>
                <CollectionItem>
                    <Link to={ROUTES.LANDING}>Exit</Link>
                </CollectionItem>
            </Collection>
        </div>
    )
}

export default SideNav