import { Fragment, useState, useEffect } from "react";
import {Link} from 'react-router-dom';

import Subheader from '../../../Menu/Subheader';
import Form from '../Form';

import default_img from '../../../../assets/default.jpg';
import { fetchPatient, fetchRecords, fetchUser } from '../../../../actions/systemActions'

const NewRecord = (props) => {
    
    const url = props.url === 'clients' ? 'Clientes' : 'Pacientes';
    const [records, setRecords] = useState([]);
    const [record, setRecord] = useState({});
    const [hasLoaded, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(false);
            if(props.url === 'patients'){
                let result = await fetchRecords('clients');
                setRecords(records => records = result);
                
            }
            if (props.edit){
                let result = props.url === 'patients' ? await fetchPatient(props.match.params.id) : await fetchUser(props.match.params.id);
                if(props.url === 'clients'){
                    setRecord(record => record = result.info);
                }else{
                    setRecord(record => record = result)
               }
            }else{
                if(props.url === 'clients'){
                    setRecord({
                        name: '',
                        last_name: '',
                        telephone1: '',
                        telephone2: '',
                        city: '',
                        address: '',
                    });
                }else{
                    setRecord({
                        owner:{
                            name: '',
                            last_name: '',
                        },
                        breed: '',
                        gender: '',
                        health: {
                            medHistory: '',
                            castrated: '',
                        },
                        color: '',
                        age: '',
                        birthday: null,
                        weight: '',
                    }); 
                }
            }
            setLoading(true);
        }

        fetchData();

    }, [props])

    const path = (
        <Fragment>
            <Link to="/app" className="nav">Página Principal</Link><div className="arrow" />
            <Link to="/app/records" className="nav">Expedientes</Link><div className="arrow" />
            <Link to={`/app/records/${props.url}`} className="nav">{url}</Link><div className="arrow" />
            {props.edit
                ? <Fragment>
                    <Link to={`/app/records/${props.url}/${props.match.params.id}`} className="nav">Perfil</Link><div className="arrow" />
                    <Link to={`/app/records/${props.url}/${props.match.params.id}/edit`} className="nav">Editar</Link>
                  </Fragment>
                : <Link to={`/app/records/${props.url}/new`} className="nav">Nuevo</Link>
            }
        </Fragment>
    )

    const onChange = e => {
        setRecord(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
        console.log(record)
    }

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
        if(hasLoaded){
        switch(url){
            case 'clients':
                return(
                    <Form isMain={true}>
                        <div className="form-column">
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="name" className="required" >Nombre(s):</label>
                                    <input defaultValue={record.name} type="text" id="name" name="name" required onChange={onChange} />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="last_name" className="required" >Apellidos:</label>
                                    <input defaultValue={record.last_name} type="text" id="last_name" name="last_name" required onChange={onChange} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="address">Dirección:</label>
                                    <input defaultValue={record.address} type="text" id="address" name="address" onChange={onChange} />                            
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="city" >Municipio:</label>
                                    <input defaultValue={record.city} type="text" id="city" name="city" onChange={onChange} />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="email">Correo Electrónico:</label>
                                    <input defaultValue={record.email} type="email" id="email" name="email" onChange={onChange} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="tel1" className="required">Teléfono 1:</label>
                                    <input defaultValue={record.telephone1} type="text" maxLength="10" minLength="8" id="tel1" name="tel1" required onChange={onChange} />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="tel2">Teléfono 2:</label>
                                    <input defaultValue={record.telephone2} type="text" maxLength="10" minLength="8" id="tel2" name="tel2" onChange={onChange} />
                                </div>
                            </div>
                            <div className="submit-row">
                                <div className="submit-input">
                                    {props.edit
                                        ? <button className="btn green" onClick={submit}>Actualizar</button>
                                        : <button className="btn green" onClick={submit}>Agregar</button>
                                    }                                </div>
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
                                    <label htmlFor="name" className="required" >Nombre:</label>
                                    <input defaultValue={record.name} type="text" id="name" name="name" required onChange={onChange} />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="age" className="required" >Edad:</label>
                                    <input defaultValue={record.age} type="number" min="0" max="999" id="age" name="age" required onChange={onChange} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="owner" className="required" >Propietario:</label>
                                    <input defaultValue={`${record.owner.name} ${record.owner.last_name}`} list="owners" id="owner" name="owner" required onChange={onChange} />
                                    <datalist id="owners">
                                        {hasLoaded ? owners : "ERROR"}
                                    </datalist>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="breed" className="required">Raza:</label>
                                    <input defaultValue={record.breed} type="text" id="breed" name="breed" required onChange={onChange} />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="gender" className="required">Sexo:</label>
                                    <div className="form-subgroup" id="gender">
                                        <div className="form-subinput">
                                            <input defaultValue={record.gender === 'M' ? 'on' : 'off'} checked={record.gender === 'M' ? true : false} type="radio" id="male" name="gender" onChange={onChange} />
                                            <span htmlFor="male">Macho</span>
                                        </div>
                                        <div className="form-subinput">
                                            <input defaultValue={record.gender === 'F' ? 'on' : 'off'} checked={record.gender === 'F' ? true : false} type="radio" id="female" name="gender" onChange={onChange} />
                                            <span htmlFor="female">Hembra</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="birthday">Fecha de nacimiento:</label>
                                    <input defaultValue={record.birthday !== null ? new Date(record.birthday).toISOString().substr(0,10) : ''} type="date" id="birthday" name="birthday" onChange={onChange} />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="weight">Peso (kg):</label>
                                    <input defaultValue={record.weight} type="number" min="0" max="99" id="weight" name="weight" onChange={onChange} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="color">Color/Pelaje:</label>
                                    <input type="text" name="color" id="color" onChange={onChange} />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="castrated">Castrado:</label>
                                    <div className="form-subgroup" id="castrated">
                                        <div className="form-subinput">
                                            <input defaultValue={record.health.castrated} type="checkbox" id="castrated-value" name="castrated" onChange={onChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-input">
                                    <label htmlFor="history">Antecedentes:</label>
                                    <textarea defaultValue={record.health.medHistory} id="history" name="history" rows="5" onChange={onChange} ></textarea>
                                </div>
                            </div>
                            <div className="submit-row">
                                <div className="submit-input">
                                    {props.edit
                                        ? <button className="btn green" onClick={submit}>Actualizar</button>
                                        : <button className="btn green" onClick={submit}>Agregar</button>
                                    }
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
        }}
    } 



    return(
        <Fragment>
            <Subheader title={path}/>
            {switchForm(props.url)}
        </Fragment>
    )
}

export default NewRecord;