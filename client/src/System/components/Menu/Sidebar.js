import {Fragment} from 'react';
import {Link} from 'react-router-dom';

import Menu from './Menu';

const Sidebar = () => {
    
    // const adminMenu = auth.role() === "admin" ? (
    //     <Link to="/admin">Dashboard</Link>
    // ) : null;

    // const renderMenu = (
    //     <Menu>
    //         {adminMenu}
    //         <Divider />
    //         <Link to="/app/records">Records</Link>
    //         <Link to="/app/calendar">Appointments</Link>
    //         <Link to="/app/profile">Profile</Link>
    //         <Link to ="/logout">Logout</Link>
    //         <Divider />
    //     </Menu>
    // );

    const renderMenu = (
        <Menu>
            <Link to="/app/records/patients">Pacientes</Link>
            <Link to="/app/records/clients">Clientes</Link>
        </Menu>
    );
    
    return(
        <Fragment>
            {renderMenu}
        </Fragment>
    )
}

export default Sidebar;