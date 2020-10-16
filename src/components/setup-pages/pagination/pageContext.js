import React from 'react'

const PageContext = React.createContext(null)

export const pageContextWrapper = Component => props => (
    <PageContext.Consumer>
        {pageInfo => <Component {...props} pageInfo={pageInfo} />}
    </PageContext.Consumer>
)

export default PageContext