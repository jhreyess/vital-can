import {Link} from 'react-router-dom';

import '../../styles/Button.css';

const Button = (props) => {
    return(
        <Link to={props.to}>
            <button className={`btn ${props.color}`}>
                {props.children}
            </button>
        </Link>
    )
}

export default Button;