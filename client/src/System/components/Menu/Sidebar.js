import {Fragment} from 'react';

import Menu from './Menu';

const Sidebar = (props) => {
    
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
            {props.children}
        </Menu>
    );
    
    return(
        <Fragment>
            {renderMenu}
        </Fragment>
    )
}

export default Sidebar;