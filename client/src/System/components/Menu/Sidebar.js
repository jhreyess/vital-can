import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import auth from '../../actions/authActions';

import Menu from './Menu';

const Sidebar = () => {
    
    const adminMenu = auth.role() === "admin" ? (
        <Link to="/admin">Dashboard</Link>
    ) : null;

    const renderMenu = (
        <Menu>
            {adminMenu}
            <Link to="/records">Records</Link>
            <Link to="/calendar">Appointments</Link>
            <Link to="/profile">Profile</Link>
            <Link to ="/logout">Logout</Link>
        </Menu>
    );
    
    return(
        <Fragment>
            {renderMenu}
        </Fragment>
    )
}

export default Sidebar;