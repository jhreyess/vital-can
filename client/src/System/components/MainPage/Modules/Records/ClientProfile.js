import { Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../../../actions/systemActions';

import Loader from '../../../Menu/Loader';
import Divider from '../../../Menu/Divider';
import Subheader from '../../../Menu/Subheader';

import pet_img from '../../../../assets/default.jpg';

import '../../../../styles/ClientProfile.css';

const ClientProfile = (props) => {
    const [data, setData] = useState({});
    const [hasLoaded, setLoading] = useState(false);
    
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

    const userData = ( hasLoaded &&
        <Fragment>
            <div className="profileHeader">
                {hasLoaded && <h1>{data.info.name} {data.info.last_name}</h1>}
            </div>
            <Divider title="Perfil"/>
            <div className="profileInfo">
                <div className="profilePets">
                    <h2>Compañeros</h2>
                    {data.pets.map((pet, idx) => 
                        <div className="pet" key={pet._id}>
                            <div className="petImage">
                                <img src={pet_img} alt=""></img>
                            </div>
                            <div className="petInfo">
                                <p>{pet.name}</p>
                                <p>{pet.breed}</p>
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
                    <ul>
                        <li>{data.info.telephone1}</li>
                        <li>{data.info.telephone2}</li>
                        <li>{data.info.address}</li>
                        <li>{data.info.email}</li>
                    </ul>
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
        </Fragment>
    )
}

export default ClientProfile;