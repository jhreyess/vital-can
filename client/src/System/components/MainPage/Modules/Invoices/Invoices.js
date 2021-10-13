import {Fragment} from 'react'
import {Link} from 'react-router-dom'

import Header from '../../../Menu/Header'
import Subheader from '../../../Menu/Subheader'
import Sidebar from '../../../Menu/Sidebar'

const Invoices = () => {

    const path = (
        <Fragment>
            <Link to="/app" className="nav">Página Principal</Link><div className="arrow" />
            <Link to="/app/invoices" className="nav">Facturación</Link>
        </Fragment>
    )

    return(
        <Fragment>
            <Header showModules={true}/>
            <div className="content">
                <Sidebar />
                <div className="data">
                    <Subheader title={path}/>
                </div>
            </div>
        </Fragment>
    )
}

export default Invoices;