import '../styles/Card.css';

const Card = (props) => {
    return(
        <div className="cardwrapper">
            <div className="cardContainer">
                <div className="card">
                    <img className="cardlogo" alt="Logo" src={props.logo}></img>
                    <div className="cardinfo">{props.children}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;