import '../../styles/Header.css';
import {Link} from 'react-router-dom';

import logo from '../../assets/Logo.png';
import profile from '../../assets/profile.png';

const Header = () => {
    return(
        <nav className="header">
            <div className="imgcontainer">
                <Link to="/app"><img className="img" alt="logo" src={logo}></img></Link>
            </div>
            <div className="nameContainer">
                <p>VetSeid Software System</p>
            </div>
            <div className="imgcontainer options">
                <img className="img" alt="logo" src={profile}></img>
            </div>
        </nav>
    )
}

export default Header;