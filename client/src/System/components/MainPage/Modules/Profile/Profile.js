import {Fragment} from 'react'
import {Link} from 'react-router-dom'

import Subheader from '../../../Menu/Subheader'

const Profile = () => {

    const path = (
        <Fragment>
            <Link to="/app" className="nav">Página Principal</Link><div className="arrow" />
            <Link to="/app/profile" className="nav">Perfil</Link>
        </Fragment>
    )

    return(
        <Fragment>
            <Subheader title={path}/>
        </Fragment>
    )
}

export default Profile;