import React, {useState} from 'react';

//Components
import Card from '../Login/Card';

//actions
import auth from '../../actions/authActions';
//assets
import logo from '../../assets/Logo.png';

//styles
import '../../styles/Login.css';

const Login = (props) => {

    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({email: '', password: ''})

    const onChange = e => {
        setUser(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    const onSubmit = async e => {
        setErrors({});
        e.preventDefault();
        auth.loginUser(user).then(err => {
            setErrors(err);
            if(err.success) props.history.push("/app");
        });
    }



    return(
        <div className="login">
            <Card logo={logo}>
                <form className="loginform" onSubmit={onSubmit}>
                    <div className="inputWrapper">
                        <div className="formgroup">
                            <input 
                                onChange={onChange} 
                                type="text" 
                                className="logininput" 
                                id="email" 
                                value={user.email}>
                            </input>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    {(errors.email || errors.emailnotfound) && <div className="error margin24">{errors.email || errors.emailnotfound}</div>}
                    <div className="inputWrapper">
                        <div className="formgroup">
                            <input 
                                onChange={onChange} 
                                type="password" 
                                className="logininput" 
                                id="password" 
                                value={user.password}>    
                            </input>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    {(errors.password || errors.passwordincorrect) && <div className="error margin24">{errors.password || errors.passwordincorrect}</div>}
                    <button 
                        className="btn blue margin24"
                        type="submit">SIGN IN</button>
                </form>
            </Card>
        </div>
    )
}

export default Login;