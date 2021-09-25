import React from 'react';
import '../../styles/Menu.css';

const Menu = (props) => {

    const changeStyle = (e) => {
        e.target.classList.toggle('active');
        let sidebar = document.getElementById('sidebar');
        let menuItems = document.getElementById('menuItems');
        sidebar.classList.toggle('open');
        menuItems.classList.toggle('hidden');
    }

    return(
        <div className="sidebar" id="sidebar">
            <div className="burgerContainer">
                <div className="burgerIcon" onClick={changeStyle}>
                    <span className="burgerLine"></span>
                    <span className="burgerLine"></span>
                    <span className="burgerLine"></span>
                </div>
            </div>
            <ul className="menuItems" id="menuItems">
                {React.Children.map(props.children, (menuItem) => (
                        <li>{menuItem}</li>
                ))}
            </ul>
        </div>
    )
}

export default Menu;