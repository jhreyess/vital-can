import { Switch, Route } from 'react-router-dom';

import Main from '../components/MainPage/Main';
import Records from '../components/MainPage/Main';
import Calendar from '../components/MainPage/Main';
import Profile from '../components/MainPage/Main';

import '../styles/Content.css';

const Content = () => {
    return(
        <div className="main">
            <Switch>
                <Route path="/" component={Main}></Route>
                <Route path="/records" component={Records}></Route>
                <Route path="/calendar" component={Calendar}></Route>
                <Route path="/profile" component={Profile}></Route>
            </Switch>
        </div>
    )
}

export default Content;