import { Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../../../actions/systemActions';

import Loader from '../../../Menu/Loader';
import Divider from '../../../Menu/Divider';
import Subheader from '../../../Menu/Subheader';
import Button from '../../../Menu/Button';
import Modal from '../../../Menu/Modal';

import pet_img from '../../../../assets/dog.jpg';

import {FaHouseUser, FaMailBulk, FaPhoneAlt} from 'react-icons/fa';

import '../../../../styles/ClientProfile.css';

const ClientProfile = (props) => {
    const [data, setData] = useState({});
    const [hasLoaded, setLoading] = useState(false);
    const [showModalDelete, setModalDelete] = useState(false)

    useEffect(() => {
        fetchUser(props.match.params.id).then(userData => {
            setData(data => data = userData );
        });
    }, [props.match.params.id]);

    useEffect(() => {
        if(Object.keys(data).length !== 0){
            setLoading((hasLoaded) => hasLoaded = true);
            console.log(data);
        }
    }, [data])

    const path = (
        <Fragment>
            <Link to="/app" className="nav">Página Principal</Link><div className="arrow" />
            <Link to="/app/records" className="nav">Expedientes</Link><div className="arrow" />
            <Link to={`/app/records/clients`} className="nav">Clientes</Link><div className="arrow" />
            {hasLoaded && 
            <Link to={`/app/records/clients/${data.info._id}/`} className="nav">{data.info.name}</Link>
            }
        </Fragment>
    );

    const showModal = (e) => {
        e.preventDefault();
        setModalDelete(prev => prev = true);
    }        

    const userData = ( hasLoaded &&
        <Fragment>
            <div className="profileHeader">
                {hasLoaded && <h1>{data.info.name} {data.info.last_name}</h1>}
                <button className="btn darkblue" onClick={showModal}>Eliminar cliente</button>
            </div>
            <Divider title="Perfil"/>
            <div className="profileInfo">
                <div className="profilePets">
                    <h2>Compañeros</h2>
                    {data.pets.map((pet, idx) => 
                        <div className="pet" key={pet._id}>
                            <div className="petImage">
                                <Link to={`/app/records/patients/${pet._id}/`} className="petLink">
                                    <img src={pet_img} alt=""></img>
                                </Link>
                            </div>
                            <div className="petInfo">
                                <h5>{pet.name}</h5>
                                <h6>{pet.breed}</h6>
                            </div>
                        </div>
                    )}
                    <div className="newPet">
                        <Link to="/app/records/patients/new">
                            <button className="btn blue-outline extended">Agregar</button>
                        </Link>
                    </div>
                </div>
                <div className="profileContact">
                    <h2>Información de Contacto</h2>
                    <div className="recordInformationContainer">
                        <div className="recordInformation"><FaPhoneAlt /> {data.info.telephone1}</div>
                        <div className="recordInformation"><FaPhoneAlt /> {data.info.telephone2}</div>
                        <div className="recordInformation"><FaHouseUser /> {data.info.address}</div>
                        <div className="recordInformation"><FaMailBulk /> {data.info.email}</div>
                        <Button color="gray" to={`/app/records/clients/${data.info._id}/edit`}>Editar</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );

    return(
        <Fragment>
            <Subheader title={path}/>
            <div className="profileContent">
                {hasLoaded ? userData : <Loader />}
            </div>
            <Modal isActive={showModalDelete} setShowModal={setModalDelete}>
                <div className="modalDescription">
                    <h2>¿Estás seguro que deseas eliminar?</h2>
                    <p>Esta acción no podrá deshacerse</p>
                </div>
                <div className="confirmationButtons">
                    <button className="btn blue-outline" onClick={() => setModalDelete(showModalDelete => showModalDelete = false)}>Cancelar</button>
                    <Button color="green" to='/app/records/clients'>Confirmar</Button>
                </div>
            </Modal>
        </Fragment>
    )
}

export default ClientProfile;