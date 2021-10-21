import { Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Main from '../components/MainPage/Main';
import Records from '../components/MainPage/Modules/Records/Records';
import Calendar from '../components/MainPage/Modules/Calendar/Calendar';
import Receipts from '../components/MainPage/Modules/Receipts/Receipts';
import Invoices from '../components/MainPage/Modules/Invoices/Invoices';
import Barbershop from '../components/MainPage/Modules/Barbershop/Barbershop';
import Profile from '../components/MainPage/Modules/Profile/Profile';

import Sidebar from './Menu/Sidebar';
import Header from './Menu/Header';

import '../styles/Content.css';

const Content = () => {

    const location = useLocation();

    return(
        <div className="main">
            <Sidebar type={location.pathname.split('/').pop() === 'app' ? 'profile' : 'def'} />
            <div className="content">
                <Header />
                <div className="data">
                    <Switch>
                        <Route exact path="/app" component={Main}></Route>
                        <Route path="/app/records" component={Records}></Route>
                        <Route path="/app/calendar" component={Calendar}></Route>
                        <Route path="/app/receipts" component={Receipts}></Route>
                        <Route path="/app/invoices" component={Invoices}></Route>
                        <Route path="/app/barbershop" component={Barbershop}></Route>
                        <Route path="/app/profile" component={Profile}></Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Content;