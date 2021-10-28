import { useState, useEffect } from 'react'
import {Fragment} from 'react'
import {Link} from 'react-router-dom'

import RecordCard from '../RecordCard'
import Subheader from '../../../Menu/Subheader'
import Divider from '../../../Menu/Divider'
import Loader from '../../../Menu/Loader'
import Button from '../../../Menu/Button'

import { fetchRecords } from '../../../../actions/systemActions'

const Patients = () => {
    const [records, setRecords] = useState([]);
    const [showRecords, setShowRecords] = useState([]);
    const [hasLoaded, setLoading] = useState(false);

    const path = (
        <Fragment>
            <Link to="/app" className="nav">Página Principal</Link><div className="arrow" />
            <Link to="/app/records" className="nav">Expedientes</Link><div className="arrow" />
            <Link to="/app/records/patients" className="nav">Pacientes</Link>
        </Fragment>
    )

    const lookFor = (e) => {
        let lookForRecords = e.target.value;
        setShowRecords(showRecords => showRecords = records.filter(client => client.name.toLowerCase().includes(lookForRecords.toLowerCase())))
    }

    const listPatients = () => {
        return showRecords.length !== 0
            ? showRecords.map((record, idx)=> 
                <RecordCard 
                    key={idx}
                    isPatient={true}
                    to={`patients/${record._id}/`}
                    img={record.img}
                    name={record.name}
                    breed={record.breed}
                    owner={record.owner.name}
                />)
            : <h2 className="notFound" >No se encontraron resultados...</h2>
    }

    useEffect(() => {
        const getRecords = async () => {
            let result = await fetchRecords('patients');
            setRecords(records => records = result);
            setShowRecords(showRecords => showRecords = result);
            setLoading(hasLoaded => hasLoaded = true);
        }
        getRecords();
    }, [])
    
    return(
        <Fragment>
            <Subheader title={path}/>
            <div className="moduleContent">
                <div className="data-subheader">
                    <Button color="green-outline" to="/app/records/patients/new">Nuevo</Button>
                    <input type="text" placeholder="Buscar..." className="search" onChange={lookFor}/>
                </div>
                <Divider title="Pacientes"/>
                <div className="records patients">
                    {hasLoaded ? listPatients() : <Loader /> }
                </div>
            </div>
        </Fragment>    
    )
}

export default Patients;