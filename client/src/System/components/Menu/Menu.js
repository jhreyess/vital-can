import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Menu.css';

import {FaCog, FaPowerOff} from 'react-icons/fa';

const Menu = (props) => {

    const changeStyle = (e) => {
        e.target.classList.toggle('active');
        let sidebar = document.getElementById('sidebar');
        let menuItems = document.getElementById('menuItems');
        let logout = document.getElementById('logout');
        logout.classList.toggle('hidden');
        menuItems.classList.toggle('hidden');
        sidebar.classList.toggle('collapse');
    }

    return(
        <div className="sidebar" id="sidebar">
            <div className="burgerContainer">
                <div className="burgerIcon active" onClick={changeStyle}>
                    <span className="burgerLine"></span>
                    <span className="burgerLine"></span>
                    <span className="burgerLine"></span>
                </div>
            </div>
            <div className="menuItems" id="menuItems">
                {React.Children.map(props.children, (menuItem) => (
                        <div className="menuItem">{menuItem}</div>
                ))}
            </div>
            {/*<Link to="/app/profile" id="logout" className="logout"><FaCog/> <div>Opciones</div></Link>*/}
            <Link to="/" id="logout" className="logout"><FaPowerOff /> <div>Cerrar Sesión</div></Link>
        </div>
    )
}

export default Menu;