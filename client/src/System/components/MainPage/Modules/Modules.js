import { Fragment } from "react";

import ModuleCard from './ModuleCard';
import auth from '../../../actions/authActions';

const Modules = () => {

    const adminModule = auth.role() === "admin" ? (
        <ModuleCard to="/admin" text="Dashboard" desc="Business Management" img="" />
    ) : null;

    return(
        <Fragment>
            <div className="modules">
                {adminModule}
                <ModuleCard to="/records" text="Expedientes" desc="Información de los pacientes y los clientes" img=""/>
                <ModuleCard to="/calendar" text="Citas" desc="Calendarización de citas médicas" img=""/>
                <ModuleCard to="/receipts" text="Caja" desc="Generación de Ticket" img=""/>
                <ModuleCard to="/invoices" text="Facturas" desc="Generación de Facturas" img=""/>
                <ModuleCard to="/barbershop" text="Estética" desc="Calendarización de citas estéticas" img=""/>
            </div>
        </Fragment>
    )
}

export default Modules;