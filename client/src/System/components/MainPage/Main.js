import {Fragment} from 'react';

import Header from '../Menu/Header';
import Subheader from '../Menu/Subheader';

import Modules from './Modules/Modules';
import ProfileSidebar from '../Menu/ProfileSidebar';

const Main = () => {
    return(
        <Fragment>
            <Header />
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