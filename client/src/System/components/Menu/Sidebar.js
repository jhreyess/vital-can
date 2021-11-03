import {NavLink} from 'react-router-dom';

import Menu from './Menu';

import { FaCalendarAlt, FaCut, FaFileInvoiceDollar, FaCashRegister  } from 'react-icons/fa';
import {FaPaw, FaUsers, FaClipboard, FaHome} from 'react-icons/fa';

const Sidebar = () => {
    
    return(
        <Menu>
            <NavLink exact to="/app" activeClassName="activeSidebar"><FaHome /> <div>Inicio</div></NavLink>
            <NavLink to="/app/records" activeClassName="activeSidebar" ><FaClipboard /> <div>Expedientes</div></NavLink>
                <div className="submenuItems">
                    <NavLink to="/app/records/patients" ><FaPaw /> <div>Pacientes</div></NavLink>
                    <NavLink to="/app/records/clients" ><FaUsers /> <div>Clientes</div></NavLink>    
                </div>
            <NavLink to="/app/calendar" activeClassName="activeSidebar"><FaCalendarAlt /> <div>Citas Médicas</div></NavLink>
                <div className="submenuItems">   
                </div>
            <NavLink to="/app/barbershop" activeClassName="activeSidebar"><FaCut /> <div>Peluquería</div></NavLink>
                <div className="submenuItems">
                </div>
            <NavLink to="/app/invoices" activeClassName="activeSidebar"><FaFileInvoiceDollar /> <div>Tickets</div></NavLink>
                <div className="submenuItems">
                </div>
            <NavLink to="/app/receipts" activeClassName="activeSidebar"><FaCashRegister /> <div>Caja</div></NavLink>
                <div className="submenuItems">
                </div>
        </Menu>
    )
}

export default Sidebar;