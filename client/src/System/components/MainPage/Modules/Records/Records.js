import {Fragment} from 'react'
import {Switch, Route, Link} from 'react-router-dom'

import Main from './Main'
import Patients from './Patients'
import Clients from './Clients'
import ClientProfile from './ClientProfile'
import PatientProfile from './PatientProfile'
import NewRecord from './NewRecord'

import Header from '../../../Menu/Header'
import Sidebar from '../../../Menu/Sidebar'

const Records = () => {
    
    return(
        <Fragment>
            <Header showModules={true}/>
            <div className="content">
                <Sidebar>
                    <Link to="/app/records/">Todos</Link>
                    <Link to="/app/records/patients">Pacientes</Link>
                    <Link to="/app/records/clients">Clientes</Link>
                </Sidebar>
                <div className="data">
                    <Switch>
                        <Route exact path="/app/records" component={Main}/>
                        <Route exact path="/app/records/patients" component={Patients} />
                        <Route exact path="/app/records/clients" component={Clients} />
                        <Route exact path="/app/records/patients/new" component={() => <NewRecord url="patients" /> } />
                        <Route exact path="/app/records/clients/new" component={() => <NewRecord url="clients" /> } />
                        <Route path="/app/records/patients/:id" component={PatientProfile} />
                        <Route path="/app/records/clients/:id" component={ClientProfile} />
                    </Switch>
                </div>
            </div>
        </Fragment>
    )
}

export default Records;