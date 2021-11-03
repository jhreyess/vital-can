import {Fragment, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import { fetchRecords } from '../../../../actions/systemActions'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../../../styles/Calendar.css';

import AppointmentCard from '../AppointmentCard';

import Form from '../Form';
import Subheader from '../../../Menu/Subheader';
import RightSidebar from '../../../Menu/RightSidebar';
import Modal from '../../../Menu/Modal';
import Divider from '../../../Menu/Divider';

import { FaTrashAlt } from 'react-icons/fa';


const Appointments = () => {
    const [date, setDate] = useState(new Date().toLocaleDateString('es-MX', {weekday: 'long', year:'numeric', month: 'short', day: 'numeric'}));
    const [appointments, setAppointments] = useState([]);
    const [records, setRecords] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [hasLoaded, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            let result = await fetchRecords('patients');
            setRecords(records => records = result);
            setLoading(hasLoaded => hasLoaded = true);        
        })();
    }, []);

    const path = (
        <Fragment>
            <Link to="/app" className="nav">Página Principal</Link><div className="arrow" />
            <Link to="/app/calendar" className="nav">Citas</Link>
        </Fragment>
    )

    const fetchAppointments = () => {
        let result = [ {time: "16:30", owner: "Diego Humberto", pet: "Thor", reason: "Enfermedad periodontal"},
                       {time: "17:00", owner: "Ángel Eduardo", pet: "Rosty", reason: "Dermatitis atópica"},
                       {time: "20:45", owner: "Cinthia Garza", pet: "Mermelada", reason: "Vacunación"},
                    ];
        setAppointments(prev => prev = result)
    }

    const showAppointments = (value, e) => {
        setDate(prev => prev = new Date(value).toLocaleDateString('es-MX', {weekday: 'long', year:'numeric', month: 'short', day: 'numeric'}));
        fetchAppointments();
    }

    const appointmentsList = (
        appointments.map((appointment, idx) => (
            <AppointmentCard>
                <div className="appointment-info">
                    <h4>{appointment.time}</h4>
                    <p>{appointment.owner}</p>
                    <p>{appointment.pet}</p>
                    <p>{appointment.reason}</p>
                </div>
                <div className="delete"><FaTrashAlt className="icon-red" /></div>
            </AppointmentCard>
        ))
    );

    const addAppointment = e => {
        e.preventDefault();
        setShowModal(prev => prev = true);
    }

    const showPatients = records.map((record, idx) => 
        <option value={record.name} key={record.owner.name}>{record.owner.name}</option>
    );

    return(
        <Fragment>
            <Subheader title={path}/>
            <div className="moduleContent-cols">
                <Calendar onClickDay={showAppointments} />
                <RightSidebar>
                    <div className="right-sidebar-info">
                        {date}
                    </div>
                    <div className="appointmentsContainer">
                        {appointmentsList}
                    </div>
                    <div className="right-sidebar-footer">
                        <button className="btn green extended" disabled={appointments.length === 0} onClick={(e) => addAppointment(e)}>Agendar Cita</button>
                    </div>
                </RightSidebar>
            </div>
            <Modal isActive={showModal} setShowModal={setShowModal} >
            <h3>Agendar cita</h3>
                <Divider title="Información" />
                <Form inner={true}>
                    <div className="form-column-inner">
                        <div className="form-row form-row-inner">
                            <div className="form-input form-input-inner">
                                    <label className="required">Paciente</label>
                                    <input list="patients"></input>
                                    <datalist id="patients">
                                        {hasLoaded ? showPatients : null}
                                    </datalist>
                            </div>
                            <div className="form-input form-input-inner">
                                <label className="required">Hora</label>
                                <input type="time"></input>
                            </div>
                        </div>
                        <div className="form-row form-row-inner">
                            <div className="form-input form-input-inner">
                                <label>Motivo</label>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div className="submit-row">
                            <button className="btn green extended" onClick={(e) => e.preventDefault()}>Añadir</button>
                        </div>
                    </div>
                </Form>
            </Modal>
        </Fragment>
    )
}

export default Appointments;