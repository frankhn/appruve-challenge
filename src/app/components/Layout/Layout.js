import React, { Fragment } from 'react'


const Layout = (props) => (
        <Fragment>
            <section>
                {props.children}
            </section>
        </Fragment>
)

export default Layout