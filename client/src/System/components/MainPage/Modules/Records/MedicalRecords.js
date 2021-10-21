import { Fragment, useState, useEffect } from 'react';

//ICONS
import { FaFileInvoiceDollar, FaCalendarAlt, FaTrashAlt, FaEdit, FaSyringe} from 'react-icons/fa';
import '../../../../styles/Icons.css';

import Divider from '../../../Menu/Divider';
import Form from '../Form';

import '../../../../styles/MedicalRecord.css';

const MedicalRecords = (props) => {

    const [prevAppointments, setPrevAppointments] = useState([]);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        setPrevAppointments(prevAppointments => prevAppointments = [
            {date: "Julio 17 - 2021", reason: "Deramtitis atópica"}, 
            {date: "Febrero 3 - 2021", reason: "Enfermedad Periodontal"}, 
            {date: "Septiembre 20 - 2020", reason: "Cita estética"},
         ]);
         setAppointments(appointments => appointments = [
            {date: "Agosto 15 - 2021", reason: "Corte de uñas"}, 
            {date: "Septiembre 20 - 2021", reason: "Baño Medicado"},
         ]);
    }, [])

    const updateInfo = (e) => {
        e.preventDefault();
    }

    const switchContent = (url = 'backstory') => {
        console.log(url);
        switch (url) {
            case 'backstory':
                return(
                    <Fragment>
                        <Form inner={true}>
                            <div className="form-column form-column-inner">
                                <div className="form-row form-row-inner">
                                    <div className="form-input form-input-inner">
                                        <label><Divider title="Historial"/></label>
                                        <textarea name="backstory" rows="10" defaultValue={props.data.health.medHistory}></textarea>
                                    </div>
                                </div>
                                <div className="form-row form-row-inner">
                                    <div className="form-input form-input-inner">
                                        <label><Divider title="Vacunas / ATP" /></label>
                                        <div className="medicalRecordVaccines">
                                            <div className="submit-row-inversed">
                                                <button className="btn green-outline small" onClick={updateInfo}>+ <FaSyringe className="icon-small" /></button>                                         
                                            </div>
                                            <table className="vaccines">
                                                <thead>
                                                <tr><th>#</th><th>Aplicada</th>
                                                    <th>Fecha</th><th>Prox. Fecha</th>
                                                    <th>Proxima</th><th className="vaccineActions">Acciones</th></tr>
                                                </thead>
                                                <tbody>
                                                {props.data.health.vaccines.map((vaccine, idx) => (
                                                    <tr key={idx} className="vaccine">
                                                        <td>{idx+1}</td>
                                                        <td>{vaccine.name}</td>
                                                        <td>{new Date(vaccine.date).toLocaleDateString("es-MX")}</td>
                                                        <td>{new Date(vaccine.nextDate).toLocaleDateString("es-MX")}</td>
                                                        <td>{vaccine.next}</td>
                                                        {/* <td><input type="text" value={vaccine.name} readOnly /></td>
                                                        <td><input type="date" value={new Date(vaccine.date).toISOString().split('T')[0]} readOnly /></td>
                                                        <td><input type="date" value={new Date(vaccine.nextDate).toISOString().split('T')[0]} readOnly /></td>
                                                        <td><input type="text" value={vaccine.next} readOnly /></td> */}
                                                        <td className="vaccineActions"><FaEdit className="icon-blue icon-margin" /> <FaTrashAlt className="icon-red icon-margin" /></td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                        <div className="submit-input">
                            <button className="btn blue-outline" onClick={updateInfo}>Guardar</button>
                        </div>
                    </Fragment>
                );
            case 'previous':
                return(
                    <Fragment>
                        {prevAppointments.map((prev, idx) => (
                            <div key={idx} className="appointment">
                                <div className="appointmentInfo">
                                    <h2>{prev.date}</h2>
                                    <p>{prev.reason}</p>
                                </div>
                                <div className="appointmentLink">
                                    <FaFileInvoiceDollar className="icon-medium"/>
                                </div>
                            </div>
                        ))}
                    </Fragment>
                )
            case 'appointments':
                return(
                    <Fragment>
                        {appointments.map((appointment, idx) => (
                            <div key={idx} className="appointment">
                                <div className="appointmentInfo">
                                    <h2>{appointment.date}</h2>
                                    <p>{appointment.reason}</p>
                                </div>
                                <div className="appointmentLink">
                                    <FaCalendarAlt className="icon-medium"/>
                                </div>
                            </div>
                        ))}
                    </Fragment>                )
            default: return null;
        }
    }

    return(
        <div className="medicalRecordInfo">
            {switchContent(props.url)}
        </div>
    )
}

export default MedicalRecords;