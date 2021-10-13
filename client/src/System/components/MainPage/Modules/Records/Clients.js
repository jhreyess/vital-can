import { useState, useEffect } from 'react'
import {Fragment} from 'react'
import {Link} from 'react-router-dom'

import RecordCard from '../RecordCard'
import Subheader from '../../../Menu/Subheader'
import Divider from '../../../Menu/Divider'
import Loader from '../../../Menu/Loader'
import Button from '../../../Menu/Button'

import { fetchRecords } from '../../../../actions/systemActions'

const Clients = () => {

    const [records, setRecords] = useState([]);
    const [hasLoaded, setLoading] = useState(false);

    const path = (
        <Fragment>
            <Link to="/app" className="nav">Página Principal</Link><div className="arrow" />
            <Link to="/app/records" className="nav">Expedientes</Link><div className="arrow" />
            <Link to="/app/clients" className="nav">Clientes</Link>
        </Fragment>
    )
    
    const getRecords = async () => {
        let result = await fetchRecords('clients');
        setRecords(records => records = result);
        setLoading(hasLoaded => hasLoaded = true);
    }

    const listClients = records.map((record, idx) => 
        <RecordCard 
            key={idx}
            isPatient={false}
            to={`clients/${record._id}/`}
            name={record.name}
            city={record.city}
            telephone={record.telephone1}
        />
    );

    useEffect(() => {
        getRecords();
    }, [])
    

    return(
        <Fragment>
            <Subheader title={path}/>
            <div className="data-subheader">
                <Button color="green-outline" to="/app/records/clients/new">Nuevo</Button>
            </div>
            <div className="moduleContent">
                <Divider title="Clientes"/>
                <div className="records clients">
                    {hasLoaded ? listClients : <Loader /> }
                </div>
            </div>
        </Fragment>
    )
}

export default Clients;