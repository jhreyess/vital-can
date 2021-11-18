import { Fragment, useEffect, useState} from 'react';
import { Link, NavLink, Switch, Route, useLocation } from 'react-router-dom';
import { fetchPatient } from '../../../../actions/systemActions';

//ICONS
import {FaBirthdayCake, FaDumbbell, FaPhoneAlt, FaMars, FaPaw} from 'react-icons/fa';

import MedicalRecords from './MedicalRecords';
import Loader from '../../../Menu/Loader';
import Divider from '../../../Menu/Divider';
import Subheader from '../../../Menu/Subheader';
import Button from '../../../Menu/Button';
import Modal from '../../../Menu/Modal';

import pet_img from '../../../../assets/dog.jpg';

import '../../../../styles/PatientProfile.css';

const PatientProfile = (props) => {
    const location = useLocation();
    const [data, setData] = useState({});
    const [hasLoaded, setLoading] = useState(false);
    const [showModalDelete, setModalDelete] = useState(false)
    
    useEffect(() => {
        fetchPatient(props.match.params.id).then(patientData => {
            setData(data => data = patientData );
        });
    }, [props.match.params.id]);

    useEffect(() => {
        if(Object.keys(data).length !== 0){
            setLoading((hasLoaded) => hasLoaded = true);
        }
    }, [data])

    const path = (
        <Fragment>
            <Link to="/app" className="nav">Página Principal</Link><div className="arrow" />
            <Link to="/app/records" className="nav">Expedientes</Link><div className="arrow" />
            <Link to={`/app/records/patients`} className="nav">Pacientes</Link><div className="arrow" />
            {hasLoaded && 
            <Link to={`/app/records/patients/${data._id}/`} className="nav">{data.name}</Link>
            }
        </Fragment>
    );

    const showModal = (e) => {
        e.preventDefault();
        setModalDelete(prev => prev = true);
    }

    const userData = ( hasLoaded &&
        <Fragment>
            <div className="petProfileColumn">
                <div className="petProfileHeader">
                    <Fragment>
                    <div className="petProfileImage">
                        <img src={pet_img} alt=""></img>
                    </div>
                    <div className="petProfileName">
                        <h1>{data.name}</h1>
                        <h3>{data.breed}</h3>
                        <h3>{data.age} años</h3>
                    </div>
                    </Fragment>
                </div>
                <Divider title="Perfil"/>
                <div className="petProfileInfo">
                    <div className="petProfileBasicInfo">
                        <h2>Información</h2>
                        <div className="recordInformationContainer">
                            <div className="recordInformation"><FaPhoneAlt /> {data.owner.telephone}</div>
                            <div className="recordInformation"><FaPaw /> {data.health.castrated ? "Sí" : "No"} castrado</div>
                            <div className="recordInformation"><FaMars /> {data.gender}</div>
                            <div className="recordInformation"><FaDumbbell /> {data.weight} kg</div>
                            <div className="recordInformation"><FaBirthdayCake /> {new Date(data.birthday).toLocaleDateString("es-MX")}</div>
                            <div className="submit-row">
                                <div className="submit-input">
                                    <Button color="gray" to={`/app/records/patients/${data._id}/edit`}>Editar</Button>
                                </div>
                                <div className="submit-input">
                                    <button className="btn darkblue" onClick={showModal}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="petProfileColumn">
                <div className="medicalRecord">
                    <div className="medicalRecordNav">
                        <NavLink isActive={() => {
                                        if(location.pathname.split('/').pop() === ('')) return true
                                        if(location.pathname.split('/').pop() === ('backstory')) return true
                                        return false;
                                    }} 
                                to={`/app/records/patients/${props.match.params.id}/backstory`} activeClassName="medicalRecordOpen">Antecedentes</NavLink>
                        <NavLink to={`/app/records/patients/${props.match.params.id}/previous`} activeClassName="medicalRecordOpen">Citas previas</NavLink>
                        <NavLink to={`/app/records/patients/${props.match.params.id}/appointments`} activeClassName="medicalRecordOpen">Próximas Citas</NavLink>
                    </div>
                    <Switch>
                        <Route exact path={`/app/records/patients/${props.match.params.id}/backstory`} component={() => <MedicalRecords url="backstory" data={data}/>}></Route>
                        <Route exact path={`/app/records/patients/${props.match.params.id}/previous`} component={() => <MedicalRecords url="previous" data={data}/>}></Route>
                        <Route exact path={`/app/records/patients/${props.match.params.id}/appointments`} component={() => <MedicalRecords url="appointments" data={data}/>}></Route>
                        <Route path={`/app/records/patients/${props.match.params.id}/`} component={() => <MedicalRecords data={data}/>}></Route>
                    </Switch>
                </div>
            </div>
        </Fragment>
    );

    return(
        <Fragment>
            <Subheader title={path}/>
            <div className="petProfileContent">
                {hasLoaded ? userData : <Loader />}
            </div>
            <Modal isActive={showModalDelete} setShowModal={setModalDelete}>
                <div className="modalDescription">
                    <h2>¿Estás seguro que deseas eliminar?</h2>
                    <p>Esta acción no podrá deshacerse</p>
                </div>
                <div className="confirmationButtons">
                    <button className="btn blue-outline" onClick={() => setModalDelete(showModalDelete => showModalDelete = false)}>Cancelar</button>
                    <Button color="green" to='/app/records/patients'>Confirmar</Button>
                </div>
            </Modal>
        </Fragment>
    )
}

export default PatientProfile;