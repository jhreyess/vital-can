import { Fragment } from "react";
import {Link} from 'react-router-dom';
import img from '../../../assets/dog.jpg';

import '../../../styles/RecordCard.css';

const RecordCard = (props) => {

    const data = props.isPatient ? (
        <Fragment>
            <div className="recordImage">
                <img alt="" src={img}></img>
            </div>
            <div className="recordInfo">
                <h2>{props.name}</h2>
                <p>{props.breed}</p>
                <p>{props.owner}</p>
            </div>
        </Fragment>
    ) : (
        <Fragment>
            <div className="recordInfo">
                <h2>{props.name}</h2>
                <p>{props.city}</p>
                <p>{props.telephone}</p>
            </div>
        </Fragment>
    );

    const card = (
        <Link to={props.to}>
        <div className="recordCardWrapper">
            <div className="recordCard">
                {data}
            </div>
        </div>
        </Link>
    )

    return(
        <Fragment>
            {card}
        </Fragment>
    )
}

export default RecordCard;