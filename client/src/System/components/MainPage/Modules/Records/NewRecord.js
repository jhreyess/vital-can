import { Fragment, useState, useEffect } from "react";
import {Link} from 'react-router-dom';

import Subheader from '../../../Menu/Subheader';
import Form from '../Form';

import default_img from '../../../../assets/default.jpg';
import { fetchRecords } from '../../../../actions/systemActions'

const NewRecord = (props) => {
    
    const url = props.url === 'clients' ? 'Clientes' : 'Pacientes';
    const [records, setRecords] = useState([]);
    const [hasLoaded, setLoading] = useState(false);

    useEffect(() => {
        if (props.url !== 'clients'){
            const fetch = async () => {
                let result = await fetchRecords('clients');
                setRecords(records => records = result);
                setLoading(hasLoaded => hasLoaded = true);
            }
            fetch();
        }
        
    }, [props.url])

    const path = (
        <Fragment>
            <Link to="/app" className="nav">Página Principal</Link><div className="arrow" />
            <Link to="/app/records" className="nav">Expedientes</Link><div className="arrow" />
            <Link to={`/app/records/${props.url}`} className="nav">{url}</Link><div className="arrow" />
            <Link to={`/app/records/${props.url}/new`} className="nav">Nuevo</Link>
        </Fragment>
    )

    const clearData = (e) => {
        e.preventDefault();
        let inputs = document.getElementsByTagName("input");
        for(let i = 0; i < inputs.length; i++){
            inputs[i].value = '';
        }
        let textAreas = document.getElementsByTagName("textarea");
        for(let i = 0; i < textAreas.length; i++){
            textAreas[i].value = '';
        }
    }

    const submit = (e) => {
        e.preventDefault();
    }

    const owners = records.map((record, idx) => 
        <option value={`${record.name} ${record.last_name}`} key={idx} />
    );

    const upload = (e) => {
        let file = e.target.files[0];
        let image = document.getElementById('patientpic');
        let reader = new FileReader();
        let filetypes = ['image/jpg', 'image/jpeg']
        if(filetypes.includes(file.type)){
            image.title = file.name;
        
            reader.onload = function(event) {
            image.src = event.target.result;
            };
        
            reader.readAsDataURL(file);
        }
    }

    const switchForm = (url) => {
        switch(url){
            case 'clients':
                return(
                    <Form isMain={true}>
                        <div className="form-column">
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="name" className="required" >Nombre(s):</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="last_name" className="required" >Apellidos:</label>
                                    <input type="text" id="last_name" name="last_name" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="address">Dirección:</label>
                                    <input type="text" id="address" name="address" />                            
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="city" >Municipio:</label>
                                    <input type="text" id="city" name="city" />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="email">Correo Electrónico:</label>
                                    <input type="email" id="email" name="email" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="tel1" className="required">Teléfono 1:</label>
                                    <input type="text" maxLength="10" minLength="8" id="tel1" name="tel1" required />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="tel2">Teléfono 2:</label>
                                    <input type="text" maxLength="10" minLength="8" id="tel2" name="tel2" />
                                </div>
                            </div>
                            <div className="submit-row">
                                <div className="submit-input">
                                    <button className="btn green" onClick={submit}>Agregar</button>
                                </div>
                                <div className="submit-input">
                                    <button className="btn blue-outline" onClick={clearData}>Limpiar Datos</button>
                                </div>
                            </div>
                        </div>
                    </Form>
                );
            case 'patients':
                return(
                    <Form isMain={true}>
                        <div className="form-column">
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="name" className="required" >Nombre(s):</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="age" className="required" >Edad:</label>
                                    <input type="number" min="0" max="999" id="age" name="age" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="owner" className="required" >Propietario:</label>
                                    <input list="owners" id="owner" name="owner" required />
                                    <datalist id="owners">
                                        {hasLoaded ? owners : "ERROR"}
                                    </datalist>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="breed" className="required">Raza:</label>
                                    <input type="text" id="breed" name="breed" required />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="gender" className="required">Sexo:</label>
                                    <div className="form-subgroup" id="gender">
                                        <div className="form-subinput">
                                            <input type="radio" id="male" name="gender" />
                                            <span htmlFor="male">Macho</span>
                                        </div>
                                        <div className="form-subinput">
                                            <input type="radio" id="female" name="gender" />
                                            <span htmlFor="female">Hembra</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="birthday">Fecha de nacimiento:</label>
                                    <input type="date" id="birthday" name="birthday" />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="weight">Peso (kg):</label>
                                    <input type="number" min="0" max="99" id="weight" name="weight" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="color">Color/Pelaje:</label>
                                    <input type="text" name="color" id="color" />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="castrated">Castrado:</label>
                                    <div className="form-subgroup" id="castrated">
                                        <div className="form-subinput">
                                            <input type="checkbox" id="castrated-value" name="castrated" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="alergies">Alergias:</label>
                                    <textarea id="alergies" name="alergies" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="history">Antecedentes:</label>
                                    <textarea id="history" name="history" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="submit-row">
                                <div className="submit-input">
                                    <button className="btn green" onClick={submit}>Agregar</button>
                                </div>
                                <div className="submit-input">
                                    <button className="btn blue-outline" onClick={clearData}>Limpiar Datos</button>
                                </div>
                            </div>
                        </div>
                        <div className="form-column last-column">
                            <div className="form-row">
                                <img id="patientpic" height="200px" width="100%" src={default_img} alt=""></img>
                            </div>
                            <div className="submit-row">
                                <label htmlFor="imgfile" className="btn blue-outline extended">Subir foto</label>
                                <input type="file" id="imgfile" name="imgfile" accept=".jpg, .jpeg" onChange={upload}/>
                            </div>
                        </div>
                    </Form>                
                );
            default: return null;
        }
    }



    return(
        <Fragment>
            <Subheader title={path}/>
            {switchForm(props.url)}
        </Fragment>
    )
}

export default NewRecord;