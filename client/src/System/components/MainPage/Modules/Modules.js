import { Fragment } from "react";

import ModuleCard from './ModuleCard';
import auth from '../../../actions/authActions';

import receipts from '../../../assets/cashier.png';
import records from '../../../assets/records.png';
import calendar from '../../../assets/calendar.png';
import invoices from '../../../assets/invoices.png';
import barbershop from '../../../assets/barbershop.png';
import dashboard from '../../../assets/dashboard.png';

const Modules = () => {
    const adminModule = auth.role() === "admin" ? (
        <ModuleCard to="/admin" text="Dashboard" desc="Business Management" img={dashboard} />
    ) : null;

    return(
        <Fragment>
            <div className="modules">
                {adminModule}
                <ModuleCard to="/app/records" text="Expedientes" desc="Información de los pacientes y los clientes" img={records}/>
                <ModuleCard to="/app/calendar" text="Citas" desc="Calendarización de citas médicas" img={calendar}/>
                <ModuleCard to="/app/receipts" text="Caja" desc="Generación de Ticket" img={receipts}/>
                <ModuleCard to="/app/invoices" text="Facturas" desc="Generación de Facturas" img={invoices}/>
                <ModuleCard to="/app/barbershop" text="Estética" desc="Calendarización de citas estéticas" img={barbershop}/>
            </div>
        </Fragment>
    )
}

export default Modules;