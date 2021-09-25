import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import PrivateRoute from './System/components/private-route/PrivateRoute';
import AdminRoute from './System/components/private-route/AdminRoute';

import Content from './System/components/Content';
import AdminContent from './Admin/AdminContent';
import Login from './System/components/Auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/app" component={Content} />
        <PrivateRoute exact path="/app/records" component={Content} />
        <PrivateRoute exact path="/app/calendar" component={Content} />
        <PrivateRoute exact path="/app/profile" component={Content} />
        <AdminRoute exact path="/admin" component={ ()=> <AdminContent url="Dashboard" />} />
        <AdminRoute exact path="/admin/users" component={ ()=> <AdminContent url="Users" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
