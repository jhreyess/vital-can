import '../../../styles/AppointmentCard.css';

const AppointmentCard = (props) => {
    return(
        <div className="appointment-card">
            {props.children}
        </div>
    )
}  

export default AppointmentCard;