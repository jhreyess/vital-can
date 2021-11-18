import {Fragment, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { fetchRecords } from '../../../../actions/systemActions'
import auth from '../../../../actions/authActions'

import Subheader from '../../../Menu/Subheader'
import RightSidebar from '../../../Menu/RightSidebar'
import Table from '../../../Menu/Table'
import Modal from '../../../Menu/Modal'
import Divider from '../../../Menu/Divider'
import Form from '../Form'

import '../../../../styles/Table.css';
import '../../../../styles/Ticket.css';

import {FaPlus, FaMinus} from 'react-icons/fa';

const Receipts = () => {

    const [hasLoaded, setLoading] = useState(false);
    const [records, setRecords] = useState([]);

    const [services, setServices] = useState([]);
    const [showServices, setShowServices] = useState([]);

    const [products, setProducts] = useState([]);
    const [showProducts, setShowProducts] = useState([]);

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [paid, setPaid] = useState(0);

    const [showTicket, setShowTicket] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            let result = await fetchRecords('patients');
            setRecords(records => records = result);
            setLoading(hasLoaded => hasLoaded = true);
        }
        fetch();
        setServices(services => services = [
            {id: 1, name: 'Baño', price: 300},
            {id: 2, name: 'Corte', price: 100},
            {id: 3, name: 'Uñas', price: 200},
        ])
        setShowServices(services => services = [
            {id: 1, name: 'Baño', price: 300},
            {id: 2, name: 'Corte', price: 100},
            {id: 3, name: 'Uñas', price: 200},
        ])
        setProducts(products => products = [
            {id: 4, name: 'Nupec 5kg', price: 300},
            {id: 5, name: 'Correa', price: 100},
            {id: 6, name: 'Treats Nupec', price: 200},
        ])
        setShowProducts(products => products = [
            {id: 4, name: 'Nupec 5kg', price: 300},
            {id: 5, name: 'Correa', price: 100},
            {id: 6, name: 'Treats Nupec', price: 200},
        ])

    }, [])

    const addToCart = (e, item) => {
        e.preventDefault();
        let found = false;
        let toSum = 0;
        cart.forEach(cart_item => {
            if(cart_item.id === item.id){
                cart_item.count++;
                toSum = item.price;
                found = true;
            }
        })
        if(!found) {
            let new_item = item;
            new_item.count = 1;
            toSum = new_item.price;
            setCart(prevItems => [...prevItems, new_item])
        }
        console.log(cart);
        setTotal(total => total += toSum);
    }

    const removeFromCart = (e, item) => {
        e.preventDefault();
        let found = false;
        let toSubstract = 0;
        cart.forEach((cart_item, idx) => {
            if(cart_item.id === item.id){
                cart_item.count--;
                toSubstract = item.price;
                found = true;
                if(cart_item.count === 0) cart.splice(idx, 1);
            }
        })
        if(found) setTotal(total => total -= toSubstract);
    }

    const path = (
        <Fragment>
            <Link to="/app" className="nav">Página Principal</Link><div className="arrow" />
            <Link to="/app/receipts" className="nav">Caja</Link>
        </Fragment>
    )

    const patients = records.map((record, idx) => 
        <option value={record.name} key={record.owner.name}>{record.owner.name}</option>
    );

    const showServicesTable = showServices.map((service, idx) => 
        <tr key={idx} className="table-row">
            <td>{idx+1}</td>
            <td>{service.name}</td>
            <td>${service.price}</td>
            <td className="table-actions">
                <button className="quantity" onClick={(e) => removeFromCart(e, service)}><FaMinus className="icon-red" /></button>
                <button className="quantity" onClick={(e) => addToCart(e, service)}><FaPlus className="icon-blue" /></button>
            </td>
            <td></td>
        </tr>
    );

    const showProductsTable = showProducts.map((product, idx) => 
        <tr key={idx} className="table-row">
            <td>{idx+1}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td className="table-actions">
                <button className="quantity" onClick={(e) => removeFromCart(e, product)}><FaMinus className="icon-red" /></button>
                <button className="quantity" onClick={(e) => addToCart(e, product)}><FaPlus className="icon-blue" /></button>
            </td>
            <td></td>
        </tr>   
    );

    const setOwner = (e) => {
        let matches = records.filter(pet => pet.name.includes(e.target.value));
        document.getElementById('owner').value = matches.length === 0 ? "No se encontraron resultados..." : matches[0].owner.name;
    }

    const makeTicket = (e) => {
        e.preventDefault();
        // Save on DB
        setShowTicket(showTicket => showTicket = true);
    }

    const lookFor = (e, type) => {
        let lookForItems = e.target.value;
        switch(type){
            case "products": setShowProducts(prevState => prevState = products.filter(item => item.name.toLowerCase().includes(lookForItems.toLowerCase()))); break;
            case "services": setShowServices(prevState => prevState = services.filter(item => item.name.toLowerCase().includes(lookForItems.toLowerCase()))); break;
            default: return;
        }
    }

    const print = () => {
        window.print();
    }

    return(
        <Fragment>
            <Subheader title={path}/>
            <div className="moduleContent-cols">
                <Form noPadding={true} grow={true}>
                    <div className="form-column">
                        <div className="form-row">
                            <div className="form-input">
                                <label className="required">Paciente</label>
                                <input list="patients" id="patient" name="patient" required onChange={setOwner} />
                                <datalist id="patients">
                                        {hasLoaded ? patients : "ERROR"}
                                </datalist>       
                                <input type="text" id="owner" name="owner" readOnly/>
                            </div>
                            <div className="form-input">
                                <label>Descripción</label>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-input">
                                <label>Servicios</label>
                                <Table adjusted={true}>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th className="table-actions">Cantidad</th>
                                            <th className="searchTable"><input type="text" placeholder="Buscar" onChange={(e) => lookFor(e, "services")}/></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {showServicesTable}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-input">
                                <label>Productos</label>
                                <Table adjusted={true}>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th className="table-actions">Cantidad</th>
                                            <th className="searchTable"><input type="text" placeholder="Buscar" onChange={(e) => lookFor(e, "products")}/></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {showProductsTable}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </Form>
                <RightSidebar>
                    <div className="right-sidebar-info">
                        <h2>Atiende:</h2>
                        <p>{auth.name()}</p>
                        <p>{new Date().toLocaleDateString('es-MX', {weekday: 'long', year:'numeric', month: 'short', day: 'numeric'})}</p>
                    </div>
                    <div className="payment-cart">
                        <Table adjusted={true}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                            {cart.map((item, idx) => 
                                <tr key={idx} className="table-row table-dark">
                                    <td>{idx+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.count}</td>
                                    <td>{item.price} MXN</td>
                                </tr>                        
                            )}
                            </tbody>
                        </Table>
                    </div>
                    <div className="right-sidebar-footer">
                        <h1>Total: ${total}</h1>
                        <button className="btn green extended" disabled={cart.length === 0} onClick={makeTicket}>Generar Ticket</button>
                    </div>
                </RightSidebar>
            </div>
            <Modal isActive={showTicket} setShowModal={setShowTicket} >
                <h3>Ticket 001</h3>
                <Divider title="Información" />
                <div className="ticketInfo">
                    <div className="ticketColumn">
                        <p>Clinica Veterinaria VitalCan</p>
                        <p>Dirección</p>
                        <p>Código postal - Municipio</p>
                        <p>Tel: 12 3456 7890</p>
                    </div>
                    <div className="ticketColumn">
                        <p>No. 001</p>
                        <p>Atendió:</p>
                        <p>{auth.name()}</p>
                        <p>{new Date().toLocaleDateString()+' - '+new Date().toLocaleTimeString()}</p>
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
                    {cart.map((item, idx) => 
                        <tr key={idx} className="table-row">
                            <td>{item.count}x</td>
                            <td>{item.name}</td>
                            <td>{item.price} MXN</td>
                        </tr>                        
                    )}
                    </tbody>
                </Table>
                <div className="ticketTotal">
                    <h4>Total: ${total}</h4>
                    <h4>Entregado: $<input type="number" min="0" defaultValue={paid} onChange={(e) => setPaid(paid => paid = e.target.value)} /></h4>
                    <h4>Cambio: ${paid-total}</h4>
                </div>
                <div className="ticketPrint">
                    <button className="btn small blue" onClick={(e) => e.preventDefault()}>Guardar</button>
                    <button className="btn small blue-outline" onClick={print}>Imprimir</button>
                </div>
            </Modal>
        </Fragment>
    )
}

export default Receipts;