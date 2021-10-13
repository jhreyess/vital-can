import {Fragment} from 'react'
import {Link, Switch, Route} from 'react-router-dom'

import Main from './Main';
import NewAppointment from './NewAppointment.js';

import Header from '../../../Menu/Header'
import Subheader from '../../../Menu/Subheader'
//import Sidebar from '../../../Menu/Sidebar'

const Calendar = () => {

    const path = (
        <Fragment>
            <Link to="/app" className="nav">Página Principal</Link><div className="arrow" />
            <Link to="/app/calendar" className="nav">Citas</Link>
        </Fragment>
    )

    return(
        <Fragment>
            <Header showModules={true}/>
            <div className="content">
                <div className="data">
                    <Subheader title={path}/>
                    <Switch>
                        <Route exact path="/app/calendar" component={Main}/>
                        <Route exact path="/app/calendar/new" component={NewAppointment}/>
                    </Switch>
                </div>
            </div>
        </Fragment>
    )
}

export default Calendar;