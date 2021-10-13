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
    const [hasLoaded, setLoading] = useState(false);

    const path = (
        <Fragment>
            <Link to="/app" className="nav">Página Principal</Link><div className="arrow" />
            <Link to="/app/records" className="nav">Expedientes</Link><div className="arrow" />
            <Link to="/app/records/patients" className="nav">Pacientes</Link>
        </Fragment>
    )

    const getRecords = async () => {
        let result = await fetchRecords('patients');
        setRecords(records => records = result);
        setLoading(hasLoaded => hasLoaded = true);
    }

    const listPatients = records.map((record, idx)=> 
        <RecordCard 
            key={idx}
            isPatient={true}
            to={`patients/${record._id}/`}
            img={record.img}
            name={record.name}
            breed={record.breed}
            owner={record.owner.name}
        />
    );

    useEffect(() => {
        getRecords();
    }, [])
    
    return(
        <Fragment>
            <Subheader title={path}/>
            <div className="data-subheader">
                <Button color="green-outline" to="/app/records/patients/new">Nuevo</Button>
            </div>
            <div className="moduleContent">
                <Divider title="Pacientes"/>
                <div className="records patients">
                    {hasLoaded ? listPatients : <Loader /> }
                </div>
            </div>
        </Fragment>    
    )
}

export default Patients;