import {Fragment} from 'react';

import Subheader from '../Menu/Subheader';
import Modules from './Modules/Modules';

const Main = () => {
    return(
        <Fragment>
            <Subheader title="Página Principal"/>
            <Modules />    
        </Fragment>
    )
}
export default Main;