import { Fragment, useState, useEffect } from 'react';

//ICONS
import { FaFileInvoiceDollar, FaSyringe, FaCalendarAlt, FaTrashAlt, FaEdit } from 'react-icons/fa';
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
                                        <label><Divider title="Alergias" /></label>
                                        <div className="medicalRecordVaccines">
                                            {props.data.health.vaccines.map((vaccine, idx) => (
                                                <div key={idx} className="medicalRecordVaccine"><FaSyringe />  {vaccine} <FaTrashAlt className="icon-right icon-margin"/><FaEdit className="icon-right icon-margin"/></div>
                                            ))}
                                            <div className="submit-row">
                                                <button className="btn green" onClick={updateInfo}>Agregar</button>                                          
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="submit-row">
                                    <div className="submit-input">
                                        <button className="btn blue-outline" onClick={updateInfo}>Guardar</button>
                                    </div>
                                </div>
                            </div>
                        </Form>
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