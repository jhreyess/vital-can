import '../../../../styles/Ticket.css';

const Ticket = (props) => {
    return (
        <div className="ticketWrapper">
            <div className="ticketCard">
                {props.children}
            </div>
        </div>
    )
}

export default Ticket;