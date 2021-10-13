import '../../styles/Divider.css';

const Divider = (props) => {
    return(
        <hr className="divider" data-content={props.title} />
    )
}

export default Divider;