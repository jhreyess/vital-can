import { Fragment } from "react";
import {Link} from 'react-router-dom';

import '../../../styles/ModuleCard.css';

const ModuleCard = (props) => {
    return(
        <Fragment>
            <Link to={props.to}>
                <div className="moduleCardwrapper">
                    <div className="moduleCard">
                        <div className="moduleInfo">
                            <h1>{props.text}</h1>
                            <p>{props.desc}</p>
                        </div>
                        <div className="moduleImage">{props.img}</div>
                    </div>
                </div>
            </Link>
        </Fragment>
    )
}

export default ModuleCard;