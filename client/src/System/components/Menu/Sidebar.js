import {Fragment} from 'react';

import {Link} from 'react-router-dom';

import Menu from './Menu';

import auth from '../../actions/authActions';

import profile from '../../assets/profile.png';

import { FaCalendarAlt, FaCut, FaFileInvoiceDollar, FaCashRegister  } from 'react-icons/fa';
import {FaPaw, FaUsers, FaClipboard} from 'react-icons/fa';

const Sidebar = (props) => {
    
    const profileSidebar = (
        <Menu>
            <p>Empleado(a)</p>
            <img alt="" src={profile}></img>
            <h1>{auth.name()}</h1>
        </Menu>
    );

    const regularSidebar = (
        <Menu>
            <Link to="/app/records"><FaClipboard /> <div>Expedientes</div></Link>
                <div className="submenuItems">
                    <Link to="/app/records/patients"><FaPaw /> <div>Pacientes</div></Link>
                    <Link to="/app/records/clients"><FaUsers /> <div>Clientes</div></Link>    
                </div>
            <Link to="/app/calendar"><FaCalendarAlt /> <div>Citas Médicas</div></Link>
                <div className="submenuItems">   
                </div>
            <Link to="/app/barbershop"><FaCut /> <div>Peluquería</div></Link>
                <div className="submenuItems">
                </div>
            <Link to="/app/invoices"><FaFileInvoiceDollar /> <div>Facturación</div></Link>
                <div className="submenuItems">
                </div>
            <Link to="/app/receipts"><FaCashRegister /> <div>Caja</div></Link>
                <div className="submenuItems">
                </div>
        </Menu>
    )
    
    return(
        <Fragment>
            {props.type === 'profile' ?  profileSidebar : regularSidebar}
        </Fragment>
    )
}

export default Sidebar;