import React, {useState} from 'react';

//Components
import Card from '../Card';

//actions
import {loginUser} from '../../actions/authActions';
//assets
import logo from '../../assets/Logo.png';

//styles
import '../../styles/Login.css';

const Login = () => {

    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({email: '', password: ''})

    const onChange = e => {
        setUser(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    const onSubmit = async e => {
        e.preventDefault();
        setErrors(await loginUser(user));
        console.log(errors);
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
                                placeholder="Email" 
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
                                placeholder="Password" 
                                value={user.password}>    
                            </input>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    {(errors.password || errors.passwordincorrect) && <div className="error margin24">{errors.password || errors.passwordincorrect}</div>}
                    <button 
                        className="btn green margin24"
                        type="submit">SIGN IN</button>
                </form>
            </Card>
        </div>
    )
}

export default Login;