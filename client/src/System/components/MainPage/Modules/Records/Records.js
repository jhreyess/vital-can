import {Fragment} from 'react'
import {Switch, Route} from 'react-router-dom'

import Main from './Main'
import Patients from './Patients'
import Clients from './Clients'
import ClientProfile from './ClientProfile'
import PatientProfile from './PatientProfile'
import NewRecord from './NewRecord'

const Records = () => {
    
    return(
        <Fragment>
            <Switch>
                <Route exact path="/app/records" component={Main}/>
                <Route exact path="/app/records/patients" component={Patients} />
                <Route exact path="/app/records/clients" component={Clients} />
                <Route exact path="/app/records/patients/new" component={() => <NewRecord url="patients" /> } />
                <Route exact path="/app/records/clients/new" component={() => <NewRecord url="clients" /> } />
                <Route path="/app/records/patients/:id" component={PatientProfile} />
                <Route path="/app/records/clients/:id" component={ClientProfile} />
            </Switch>
        </Fragment>
    )
}

export default Records;