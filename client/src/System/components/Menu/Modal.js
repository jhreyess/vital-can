import { Fragment } from "react";
import { FaTimes } from "react-icons/fa";
import '../../styles/Modal.css';

const Modal = (props) => {

    return(
        <Fragment>
            {props.isActive ? 
            <div className="modalWrapper">
                <div className="modalContent">
                    {props.children}
                    <button className="modalClose" onClick={() => props.setShowModal(prev => !prev)}><FaTimes /></button>
                </div>
            </div> : null}
        </Fragment>
    )
}

export default Modal;