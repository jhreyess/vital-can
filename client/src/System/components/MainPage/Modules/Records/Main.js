import { useState, useEffect } from 'react'
import {Fragment} from 'react'
import {Link} from 'react-router-dom'

import RecordCard from '../RecordCard'
import Subheader from '../../../Menu/Subheader'
import Divider from '../../../Menu/Divider'
import Loader from '../../../Menu/Loader'

import { fetchRecords } from '../../../../actions/systemActions'

const Main = () => {

    const [clients, setClients] = useState([]);
    const [patients, setPatients] = useState([]);
    const [clientsLoaded, setClientsLoading] = useState(false);
    const [patientsLoaded, setPatientsLoading] = useState(false);

    const path = (
        <Fragment>
            <Link to="/app" className="nav">Página Principal</Link><div className="arrow" />
            <Link to="/app/records" className="nav">Expedientes</Link>
        </Fragment>
    )

    const listClients = clients.map((record, idx)=> 
        <RecordCard 
            key={idx}
            isPatient={false}
            to={`records/clients/${record._id}/`}
            name={`${record.name.split(" ")[0]} ${record.last_name.split(" ")[0]}`}
            city={record.city}
            telephone={record.telephone1}
        />
    );

    const listPatients = patients.map((record, idx)=>
        <RecordCard 
            key={idx}
            isPatient={true}
            to={`records/patients/${record._id}/`}
            img={record.img}
            name={record.name}
            breed={record.breed}
            age={record.age}
            owner={record.owner.name}
        />
    );

    useEffect(() => {
        const getRecords = async (url) => {
            let result = await fetchRecords(url);
            if(url === 'patients'){
                setPatients(patients => patients = result);
                setPatientsLoading(patientsLoaded => patientsLoaded = true);
            }else{
                setClients(clients => clients = result);
                setClientsLoading(clientsLoaded => clientsLoaded = true);
            }
        }
        getRecords('clients');
        getRecords('patients');
    }, [])
    
    return(
        <Fragment>
            <Subheader title={path}/>
            <div className="moduleContent">
                <Divider title="Pacientes"/>
                <div className="records patients">
                    {patientsLoaded ? listPatients : <Loader /> }
                </div>
                <Divider title="Clientes"/>
                <div className="records clients">
                    {clientsLoaded ? listClients : <Loader /> }
                </div>
            </div>
        </Fragment>
    )
}

export default Main;