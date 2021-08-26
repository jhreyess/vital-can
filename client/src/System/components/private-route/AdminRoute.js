import {Redirect, Route} from 'react-router-dom';
import auth from '../../actions/authActions';
//<PrivateRoute exact path="/records" component={SecretComponent} />
// component: SecretComponent, ...rest: exact path="/records"
//<Route exact path="/records" render={SecretComponent} />
const AdminRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest}
            render = {(props) => {
                if(auth.isAuthenticated() && auth.role() === "admin"){
                    return <Component {...props} />
                }else{
                    return <Redirect to="/" />    
                }
            }} 
        />
    )
}

export default AdminRoute;