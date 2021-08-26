import {Redirect, Route} from 'react-router-dom';
import auth from '../../actions/authActions';
//<PrivateRoute exact path="/records" component={SecretComponent} />
// component: SecretComponent, ...rest: exact path="/records"
//<Route exact path="/records" render={SecretComponent} />
const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest}
            render = {(props) => {
                if(auth.isAuthenticated()){
                    return <Component {...props} />
                }else{
                    return <Redirect to="/" />    
                }
            }} 
        />
    )
}

export default PrivateRoute;