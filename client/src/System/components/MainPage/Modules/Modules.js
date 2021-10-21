import { Fragment } from "react";

import ModuleCard from './ModuleCard';
import auth from '../../../actions/authActions';

import {IconContext} from 'react-icons';
import { FaCalendarAlt, FaCashRegister, FaChartBar, FaFolderOpen, FaCut, FaFileInvoiceDollar} from 'react-icons/fa';

const Modules = () => {
    const adminModule = auth.role() === "admin" ? (
        <ModuleCard to="/admin" text="Dashboard" desc="Business Management" img={<FaChartBar />} />
    ) : null;

    return(
        <Fragment>
            <IconContext.Provider value={{className: "icon-large"}}>
            <div className="modulesWrapper">
                <div className="modules">
                    {adminModule}
                    <ModuleCard to="/app/records" text="Expedientes" desc="Información de los pacientes y los clientes" img={<FaFolderOpen />}/>
                    <ModuleCard to="/app/calendar" text="Citas" desc="Calendarización de citas médicas" img={<FaCalendarAlt />}/>
                    <ModuleCard to="/app/receipts" text="Caja" desc="Generación de Ticket" img={<FaCashRegister />}/>
                    <ModuleCard to="/app/invoices" text="Facturas" desc="Generación de Facturas" img={<FaFileInvoiceDollar/>}/>
                    <ModuleCard to="/app/barbershop" text="Estética" desc="Calendarización de citas estéticas" img={<FaCut />}/>
                </div>
            </div>
            </IconContext.Provider>
        </Fragment>
    )
}

export default Modules;