import {Link} from 'react-router-dom';

import Menu from './Menu';

import { FaCalendarAlt, FaCut, FaFileInvoiceDollar, FaCashRegister  } from 'react-icons/fa';
import {FaPaw, FaUsers, FaClipboard, FaHome} from 'react-icons/fa';

const Sidebar = () => {
    
    return(
        <Menu>
            <Link to="/app"><FaHome /> <div>Inicio</div></Link>
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
            <Link to="/app/invoices"><FaFileInvoiceDollar /> <div>Tickets</div></Link>
                <div className="submenuItems">
                </div>
            <Link to="/app/receipts"><FaCashRegister /> <div>Caja</div></Link>
                <div className="submenuItems">
                </div>
        </Menu>
    )
}

export default Sidebar;