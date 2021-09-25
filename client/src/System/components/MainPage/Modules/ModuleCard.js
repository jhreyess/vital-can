import { Fragment } from "react";
import {Link} from 'react-router-dom';

import '../../../styles/ModuleCard.css';

const ModuleCard = (props) => {
    return(
        <Fragment>
            <Link to={props.to}>
                <div className="moduleCardwrapper">
                    <div className="moduleCard">
                        <h1>{props.text}</h1>
                        <p>{props.desc}</p>
                        <div className="image">
                            <img alt="" src={props.img}></img>
                        </div>
                    </div>
                </div>
            </Link>
        </Fragment>
    )
}

export default ModuleCard;