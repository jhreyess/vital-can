import {Fragment} from 'react'
import {Link} from 'react-router-dom'

import Subheader from '../../../Menu/Subheader'

const Barbershop = () => {

    const path = (
        <Fragment>
            <Link to="/app" className="nav">Página Principal</Link><div className="arrow" />
            <Link to="/app/barbershop" className="nav">Peluquería</Link>
        </Fragment>
    )

    return(
        <Fragment>
            <Subheader title={path}/>
        </Fragment>
    )
}

export default Barbershop;