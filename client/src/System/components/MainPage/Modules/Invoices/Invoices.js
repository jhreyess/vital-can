import {Fragment, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import Subheader from '../../../Menu/Subheader'
import Button from '../../../Menu/Button'
import Divider from '../../../Menu/Divider'
import Modal from '../../../Menu/Modal'
import Table from '../../../Menu/Table'

import Ticket from './Ticket'
import { FaAngleRight } from 'react-icons/fa';

const Invoices = () => {

    const [tickets, setTickets] = useState([]);
    const [view, setView] = useState({id: '', ticket:''});
    const [showTickets, setShowTickets] = useState([]);
    const [isVisible, setModal] = useState(false);
    const [showDeleteModal, setDeleteModal] = useState(false)

    useEffect(() => {
        setTickets(tickets => tickets = [
            {id: 1, pet: "Thor", owner: "Diego Humberto", inCharge: "Admin", desc: "Deramtitis atópica",
                cart:[ {name: "Baño", count: 1, price: 300}], 
                total: 300, given: 500, change: 200, date: "2021-09-17T22:30:25.0000Z"
            },
            {id: 2, pet: "Thor", owner: "Diego Humberto", inCharge: "Admin", desc: "Enfermedad Periodontal",
                cart:[ {name: "Nupec 5kg", count: 1, price: 300}], 
                total: 300, given: 500, change: 200, date: "2021-09-19T20:40:00.0000Z"
            },
            {id: 3, pet: "Thor", owner: "Diego Humberto", inCharge: "Admin", desc: "Cita Estética",
                cart:[ {name: "Corte", count: 1, price: 100}, {name: "Uñas", count: 1, price: 200}], 
                total: 300, given: 500, change: 200, date:"2021-09-21T18:25:00.0000Z"
            }
        ])
        setShowTickets(tickets => tickets = [
            {id: 1, pet: "Thor", owner: "Diego Humberto", inCharge: "Admin", desc: "Deramtitis atópica",
                cart:[ {name: "Baño", count: 1, price: 300}], 
                total: 300, given: 500, change: 200, date: "2021-09-17T22:30:25.0000Z"
            },
            {id: 2, pet: "Thor", owner: "Diego Humberto", inCharge: "Admin", desc: "Enfermedad Periodontal",
                cart:[ {name: "Nupec 5kg", count: 1, price: 300}], 
                total: 300, given: 500, change: 200, date: "2021-09-19T20:40:00.0000Z"
            },
            {id: 3, pet: "Thor", owner: "Diego Humberto", inCharge: "Admin", desc: "Cita Estética",
                cart:[ {name: "Corte", count: 1, price: 100}, {name: "Uñas", count: 1, price: 200}], 
                total: 300, given: 500, change: 200, date:"2021-09-21T18:25:00.0000Z"
            }
        ])
    }, [])

    const path = (
        <Fragment>
            <Link to="/app" className="nav">Página Principal</Link><div className="arrow" />
            <Link to="/app/invoices" className="nav">Tickets</Link>
        </Fragment>
    )

    const showModal = (e, id, ticket) => {
        e.preventDefault();
        setModal(show => show = true);
        setView(prev => prev = {id, ticket});
    }

    const print = (e) => {
        e.preventDefault();
        window.print();
    }

    const deleteModal = e => {
        e.preventDefault();
        setDeleteModal(show => show = true);
    }

    const deleteTicket = e => {
        e.preventDefault();
        showTickets.splice(view.id, 1);
        setModal(show => show = false);
        setDeleteModal(show => show = false);
    }

    const listTickets = (
        showTickets.map((ticket, idx) => (
            <Ticket ticket={ticket} key={idx} >
                <h2>Ticket {ticket.id}</h2>
                <div className="ticketCardInfo">
                    <p>{ticket.owner}</p>
                    <p>{new Date(ticket.date).toLocaleDateString()}</p>
                    <p>Total: ${ticket.total}</p>
                </div>
                <div className="ticketButton">
                    <button onClick={(e) => showModal(e, idx, ticket)}><FaAngleRight /></button>
                </div>
            </Ticket>
        ))
    )

    const lookFor = (e) => {
        let lookForTickets = e.target.value;
        setShowTickets(ticket => ticket = tickets.filter(ticket => ticket.owner.toLowerCase().includes(lookForTickets.toLowerCase())))
    }

    return(
        <Fragment>
            <Subheader title={path}/>
            <div className="moduleContent">
                <div className="data-subheader">
                    <Button color="green-outline" to="/app/receipts">Nuevo</Button>
                    <input type="text" placeholder="Buscar..." className="search" onChange={lookFor}/>
                </div>
                <Divider title="Tickets" />
                <div className="ticketsContainer">
                    {listTickets}
                </div>
                <Modal isActive={isVisible} setShowModal={setModal} >
                    <h3>Ticket {view.ticket.id}</h3>
                    <Divider title="Información" />
                    <div className="ticketInfo">
                        <div className="ticketColumn">
                            <p>Clinica Veterinaria VitalCan</p>
                            <p>Dirección</p>
                            <p>Código postal - Municipio</p>
                            <p>Tel: 12 3456 7890</p>
                        </div>
                        <div className="ticketColumn">
                            <p>No. {view.ticket.id}</p>
                            <p>Atendió:</p>
                            <p>{view.ticket.inCharge}</p>
                            <p>{new Date(view.ticket.date).toLocaleDateString()+" - "+new Date(view.ticket.date).toLocaleTimeString("es-MX")}</p>
                        </div>
                    </div>
                    <Table adjusted={true}>
                        <thead>
                            <tr>
                                <th>Cant.</th>
                                <th>Servicio/Producto</th>
                                <th>Precio Unitario</th>
                            </tr>
                        </thead>
                        <tbody>
                        {view.ticket.cart !== undefined ? view.ticket.cart.map((item, idx) => 
                            <tr className="table-row" key={idx}>
                                <td>{item.count}x</td>
                                <td>{item.name}</td>
                                <td>{item.price} MXN</td>
                            </tr>                        
                        ): null}
                        </tbody>
                    </Table>
                    <div className="ticketTotal">
                        <h4>Total: ${view.ticket.total}</h4>
                        <h4>Entregado: ${view.ticket.given}</h4>
                        <h4>Cambio: ${view.ticket.change}</h4>
                    </div>
                    <div className="ticketPrint">
                        <button className="btn small red" onClick={deleteModal}>Eliminar</button>
                        <button className="btn small blue-outline" onClick={print}>Imprimir</button>
                    </div>
                </Modal>
                <Modal isActive={showDeleteModal} setShowModal={setDeleteModal}>
                    <div className="modalDescription">
                        <h2>¿Estás seguro que deseas eliminar?</h2>
                        <p>Esta acción no podrá deshacerse</p>
                    </div>
                    <div className="confirmationButtons">
                        <button className="btn blue-outline" onClick={() => setDeleteModal(showModalDelete => showModalDelete = false)}>Cancelar</button>
                        <button className="btn green" onClick={deleteTicket}>Confirmar</button>
                    </div>
                </Modal>
            </div>
        </Fragment>
    )
}

export default Invoices;