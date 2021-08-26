import '../../styles/Card.css';

const Card = (props) => {
    return(
        <div className="cardwrapper">
            <div className="cardContainer">
                <div className="card">
                    <img className="cardlogo" alt="Logo" src={props.logo}></img>
                    <div className="cardinfo">{props.children}</div>
                </div>
                <span className="margin24">Powered by VetSeid System</span>
            </div>
        </div>
    )
}

export default Card;