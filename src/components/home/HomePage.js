import React from 'react'
import { withFirebase } from '../../Firebase'

function HomePage(props){
    props.firebase.printAuth()
    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default withFirebase(HomePage)