import { Fragment, useState, useEffect } from 'react';

//ICONS
import { FaFileInvoiceDollar, FaCalendarAlt, FaTrashAlt, FaEdit, FaSyringe} from 'react-icons/fa';
import '../../../../styles/Icons.css';

import Divider from '../../../Menu/Divider';
import Modal from '../../../Menu/Modal';
import Table from '../../../Menu/Table';
import Form from '../Form';

import '../../../../styles/MedicalRecord.css';
import '../../../../styles/Table.css';

const MedicalRecords = (props) => {

    const [prevAppointments, setPrevAppointments] = useState([]);
    const [appointments, setAppointments] = useState([]);    
    const [vaccines, setVaccines] = useState([]);    
    const [medHist, setMedHist] = useState('');    

    const [toModify, setToModify] = useState({  id: '', 
                                                vaccine: {
                                                    name: '', 
                                                    next: '', 
                                                    date: new Date(0), 
                                                    nextDate: new Date(0)
                                                }
                                            });

    const [showModal, setModal] = useState(false);
    const [showModalEdit, setModalEdit] = useState(false);
    const [showModalDelete, setModalDelete] = useState(false);

    useEffect(() => {
        setVaccines(vaccines => vaccines = props.data.health.vaccines);
        setMedHist(medHist => medHist = props.data.health.medHistory);
        setPrevAppointments(prevAppointments => prevAppointments = [
            {date: "Julio 17 - 2021", reason: "Dermatitis atópica"}, 
            {date: "Febrero 3 - 2021", reason: "Enfermedad Periodontal"}, 
            {date: "Septiembre 20 - 2020", reason: "Cita estética"},
         ]);
         setAppointments(appointments => appointments = [
            {date: "Noviembre 15 - 2021", reason: "Corte de uñas"}, 
            {date: "Noviembre 20 - 2021", reason: "Baño Medicado"},
         ]);
    }, [props])

    const updateInfo = (e) => {
        e.preventDefault();
    }

    const addVaccine = (e) => {
        e.preventDefault(); 
        vaccines.push(toModify.vaccine);
        setModal(showModal => showModal = false);
    }

    const editVaccine = (e) => {
        e.preventDefault();
        vaccines.splice(toModify.id, 1, toModify.vaccine);
        setModalEdit(showModalEdit => showModalEdit = false);
    }

    const dateHandler = (date, format, type="date") => {
        let date_f = new Date(date).toISOString().substr(0,10)
        let year = date_f.split('-')[0]
        let month = date_f.split('-')[1];
        let day = date_f.split('-')[2];
        if (year === "1970" && type==="text") return '';
        if (year === "1970" && type==="date") return null;
        switch(format){
            case "dd/mm/yyyy": return (day+'/'+month+'/'+year);
            default: return date_f;
        }
    }

    const updateToModify = (e) => {
        const {name, value} = e.target;
        if((name === 'date' || name === 'nextDate')){
            let date;
            if ((new Date(value) === "Invalid Date") || value==="") {
                date = new Date(0);
            }else{
                date = new Date(value);
                date.setUTCHours(5,0,0,0);
            }
            setToModify(toModify => ({
                ...toModify,
                vaccine: {
                    ...toModify.vaccine,
                    [name]: dateHandler(date.toISOString())
                }
            }));
        }else{
            setToModify(toModify => ({
                ...toModify,
                vaccine: {
                    ...toModify.vaccine,
                    [name]: value
                }
            }));
        }
    }

    const deleteVaccine = (e) => {
        e.preventDefault();
        vaccines.splice(toModify.id, 1);
        setModalDelete(showModalDelete => showModalDelete = false)
    }

    const showAddModal = (e) => {
        e.preventDefault();
        setModal(showModal => showModal = true);
        setToModify(prev => prev = {
            id: '', 
            vaccine: {
                name: '', 
                next: '', 
                date: new Date(0), 
                nextDate: new Date(0)
            }
        })
    }

    const showEditModal = (e, vaccine, id) => {
        e.preventDefault();
        setToModify(toModify => toModify = {id: id, vaccine: vaccine});
        setModalEdit(showModalEdit => showModalEdit = true);
    }

    const showDeleteModal = (e, vaccine, id) => {
        e.preventDefault();
        setToModify(toModify => toModify = {id, vaccine});
        setModalDelete(showModalDelete => showModalDelete = true);
    }

    const switchContent = (url = 'backstory') => {
        switch (url) {
            case 'backstory':
                return(
                    <Fragment>
                        <Form inner={true}>
                            <div className="form-column form-column-inner">
                                <div className="form-row form-row-inner">
                                    <div className="form-input form-input-inner">
                                        <label><Divider title="Historial"/></label>
                                        <textarea name="backstory" rows="6" defaultValue={medHist}></textarea>
                                    </div>
                                </div>
                                <div className="form-row form-row-inner">
                                    <div className="form-input form-input-inner">
                                        <label><Divider title="Vacunas / ATP" /></label>
                                        <div className="medicalRecordVaccines">
                                            <div className="submit-row-small">
                                                <button className="btn green-outline small" onClick={showAddModal}>+ <FaSyringe className="icon-small" /></button>                                         
                                            </div>
                                            <Table>
                                                <thead>
                                                <tr><th>#</th><th>Aplicada</th>
                                                    <th>Fecha</th><th>Prox. Fecha</th>
                                                    <th>Proxima</th><th className="table-actions">Acciones</th></tr>
                                                </thead>
                                                <tbody>
                                                {vaccines.map((vaccine, idx) => (
                                                    <tr key={idx} className="table-row">
                                                        <td>{idx+1}</td>
                                                        <td>{vaccine.name}</td>
                                                        <td>{dateHandler(vaccine.date, "dd/mm/yyyy", "text")}</td>
                                                        <td>{dateHandler(vaccine.nextDate, "dd/mm/yyyy", "text")}</td>
                                                        <td>{vaccine.next}</td>
                                                        <td className="table-actions">
                                                            <button onClick={(e) => showEditModal(e, vaccine, idx)}><FaEdit className="icon-blue " /></button> 
                                                            <button onClick={(e) => showDeleteModal(e, vaccine, idx)}><FaTrashAlt className="icon-red " /></button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                        <div className="submit-input">
                            <button className="btn blue-outline" onClick={updateInfo}>Guardar</button>
                        </div>
                        <Modal isActive={showModal} setShowModal={setModal}>
                            <Form inner={true}>
                                <div className="form-column">
                                    <div className="form-row">
                                        <div className="form-input">
                                            <label className="required">Vacuna Aplicada</label>
                                            <input type="text" name="name" onChange={updateToModify} required/>
                                        </div>
                                        <div className="form-input">
                                            <label className="required">Fecha Aplicada</label>
                                            <input type="date" name="date" onChange={updateToModify} required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-input">
                                            <label>Proxima Vacuna</label>
                                            <input type="text" name="next" onChange={updateToModify} />
                                        </div>
                                        <div className="form-input">
                                            <label>Fecha proxima</label>
                                            <input type="date" name="nextDate" onChange={updateToModify} />
                                        </div>
                                    </div>
                                    <div className="submit-row">
                                        <button className="btn green extended" onClick={addVaccine}>Añadir</button>
                                    </div>
                                </div>
                            </Form>
                        </Modal>
                        <Modal isActive={showModalEdit} setShowModal={setModalEdit}>
                            <Form inner={true}>
                                <div className="form-column">
                                    <div className="form-row">
                                        <div className="form-input">
                                            <label className="required">Vacuna Aplicada</label>
                                            <input type="text" defaultValue={toModify.vaccine.name} 
                                            name="name" onChange={updateToModify} required/>
                                        </div>
                                        <div className="form-input">
                                            <label className="required">Fecha Aplicada</label>
                                            <input type="date" defaultValue={dateHandler(toModify.vaccine.date)} 
                                            name="date" onChange={updateToModify} required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-input">
                                            <label>Proxima Vacuna</label>
                                            <input type="text" defaultValue={toModify.vaccine.next} 
                                            name="next" onChange={updateToModify} />
                                        </div>
                                        <div className="form-input">
                                            <label>Fecha proxima</label>
                                            <input type="date" defaultValue={dateHandler(toModify.vaccine.nextDate)} 
                                            name="nextDate" onChange={updateToModify} />
                                        </div>
                                    </div>
                                    <div className="confirmationButtons">
                                        <button className="btn blue-outline" onClick={() => setModalEdit(showModalEdit => showModalEdit = false)}>Cancelar</button>
                                        <button className="btn green" onClick={editVaccine}>Editar</button>
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
                                <button className="btn green" onClick={deleteVaccine}>Confirmar</button>
                            </div>
                        </Modal>
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
                    </Fragment>                
                )
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