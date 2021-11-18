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
    const [toModify, setToModify] = useState({})
    const [records, setRecords] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModalDelete, setModalDelete] = useState(false);
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
        let result = [ {id: 0, time: "16:30", owner: "Diego Humberto", pet: "Thor", reason: "Enfermedad periodontal"},
                       {id: 1, time: "17:00", owner: "Ángel Eduardo", pet: "Rosty", reason: "Dermatitis atópica"},
                       {id: 2, time: "20:45", owner: "Cinthia Garza", pet: "Mermelada", reason: "Vacunación"},
                    ];
        setAppointments(prev => prev = result)
    }

    const showAppointments = (value, e) => {
        setDate(prev => prev = new Date(value).toLocaleDateString('es-MX', {weekday: 'long', year:'numeric', month: 'short', day: 'numeric'}));
        fetchAppointments();
    }

    const deleteModal = (e, id, appoint) => {
        e.preventDefault()
        setModalDelete(prev => prev = true)
        setToModify(toModify => toModify = {id, appoint});
        console.log(toModify)
    }

    const deleteAppointment = (e) => {
        e.preventDefault();
        let replace = [...appointments]
        replace.splice(toModify.id, 1)
        setAppointments(prev => prev = replace)
        setModalDelete(prev => prev = false)
    }

    const showAddModal = e => {
        e.preventDefault();
        setToModify(prev => prev = {id: '', appoint: ''})
        setShowModal(prev => prev = true);
    }

    const onChange = e => {
        setToModify(prevState => ({
            ...prevState,
            appoint: {
                ...toModify.appoint,
                [e.target.id]: e.target.value
            }
        }));
        if(e.target.id === 'pet'){
            let matches = records.filter(pet => pet.name.includes(e.target.value));
            let name = matches.length === 0 ? "No se encontraron resultados..." : matches[0].owner.name
            document.getElementById('owner').value = name;
            setToModify(prevState => ({
                ...prevState,
                appoint: {
                    ...prevState.appoint,
                    owner: name
                }
            }));
        }
    }

    const addAppointment = e => {
        e.preventDefault();
        let replace = [...appointments]
        replace.push(toModify.appoint)
        setAppointments(prev => prev = replace)
        setShowModal(prev => prev = false)
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
                        { appointments.length === 0
                         ? <h2>Selecciona un día para visalizar las citas</h2>
                         : appointments.map((appointment, idx) => (
                            <AppointmentCard key={idx}>
                                <div className="appointment-info">
                                    <h4>{appointment.time}</h4>
                                    <h4>{appointment.owner}</h4>
                                    <h5>Paciente: {appointment.pet}</h5>
                                    <h5>{appointment.reason}</h5>
                                </div>
                                <div className="delete">
                                    <button onClick={(e) => deleteModal(e, idx, appointment)}><FaTrashAlt className="icon-red" /></button>
                                </div>
                            </AppointmentCard>
                        ))
                        }
                    </div>
                    <div className="right-sidebar-footer">
                        <button className="btn green extended" disabled={appointments.length === 0} onClick={showAddModal}>Agendar Cita</button>
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
                                <label className="required">Paciente: </label>
                                <input name="pet" id="pet" list="patients" onChange={onChange}></input>
                                <datalist id="patients">
                                    {hasLoaded ? showPatients : null}
                                </datalist>
                            </div>
                            <div className="form-input form-input-inner">
                                <label className="required">Dueño: </label>
                                <input type="text" id="owner" name="owner" readOnly/>
                            </div>
                        </div>
                        <div className="form-row form-row-inner">
                            <div className="form-input form-input-inner">
                                <label className="required">Motivo:</label>
                                <textarea name="reason" id="reason" onChange={onChange}></textarea>
                            </div>
                            <div className="form-input form-input-inner">
                                <label className="required" >Hora:</label>
                                <input name="time" id="time" type="time" onChange={onChange} ></input>
                            </div>
                        </div>
                        <div className="submit-row">
                            <button type="submit" className="btn green extended" onClick={addAppointment}>Añadir</button>
                        </div>
                    </div>
                </Form>
            </Modal>
            <Modal isActive={showModalDelete} setShowModal={setModalDelete}>
                <div className="modalDescription">
                    <h2>¿Estás seguro que deseas eliminar?</h2>
                    <p>Esta acción no podrá deshacerse</p>
                </div>
                <div className="confirmationButtons">
                    <button className="btn blue-outline" onClick={() => setModalDelete(showModalDelete => showModalDelete = false)}>Cancelar</button>
                    <button className="btn green" onClick={deleteAppointment}>Confirmar</button>
                </div>
            </Modal>
        </Fragment>
    )
}

export default Appointments;