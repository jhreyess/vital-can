import {Fragment} from 'react';

import logo from '../../assets/Logo.png';
import profile from '../../assets/profile.png';

import Header from '../Menu/Header';
import Subheader from '../Menu/Subheader';

import Modules from './Modules/Modules';
import ProfileSidebar from '../Menu/ProfileSidebar';

const Main = () => {
    return(
        <Fragment>
            <Header>
            <div className="imgcontainer">
                <img className="img" alt="logo" src={logo}></img>
            </div>
            <div className="nameContainer">
                <p>VetSeid Software System</p>
            </div>
            <div className="imgcontainer options">
                <img className="img" alt="logo" src={profile}></img>
            </div>
            </Header>
            <div className="content">
                <ProfileSidebar />
                <div className="data">
                    <Subheader title="Página Principal"/>
                    <Modules />
                </div>
            </div>
        </Fragment>
    )
}
export default Main;