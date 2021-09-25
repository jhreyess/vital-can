import {Fragment} from 'react';
import auth from '../../actions/authActions';

import profile from '../../assets/profile.png';

import Menu from './Menu';

const ProfileSidebar = () => {

    const userName = auth.name();

    const renderMenu = (
        <Menu>
            <p>Empleado(a)</p>
            <img alt="" src={profile}></img>
            <h1>{userName}</h1>
        </Menu>
    );
    
    return(
        <Fragment>
            {renderMenu}
        </Fragment>
    )
}

export default ProfileSidebar;