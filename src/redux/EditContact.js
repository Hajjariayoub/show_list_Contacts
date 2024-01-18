import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { store } from './features/store';
import { editContact } from "../features/contactSlice";
import {useParams,useNavigate} from 'react-router-dom'


const EditContact = () => {
    const dispatch=useDispatch();
    const contacts=useSelector(store=>store.contacts);
    const par=useParams()
    const navigate=useNavigate()
    console.log(par)
    const oldContact=contacts.filter((c)=>c.id === par.id)
    const {matricule,nom,prenom,tel,email}=oldContact[0]
    console.log(oldContact[0])
    const [values,setValues]=useState({matricule,nom,prenom,tel,email});
    

    const handleUpdate=(e)=>{
        e.preventDefault()
        dispatch(editContact({
        id:par.id,
        matricule:values.matricule,
        nom:values.nom,
        prenom:values.prenom,
        tel:values.tel,
        email:values.email
       }));
       navigate('/')
    }
    return (
        <div>
            <h1>Edit Contact</h1>
            <form className="form-group mx-3">
                <label>Matricule:</label>
                <input type="text" className="form-control" value={values.matricule} onChange={(e)=>setValues({...values ,matricule:e.target.value})} />
                <label>Nom:</label>
                <input type="text" className="form-control" value={values.nom} onChange={(e)=>setValues({...values ,nom:e.target.value})} />
                <label>Prenom:</label>
                <input type="text" className="form-control" value={values.prenom} onChange={(e)=>setValues({...values ,prenom:e.target.value})} />
                <label>Telephone:</label>
                <input type="text"  className="form-control"value={values.tel} onChange={(e)=>setValues({...values ,tel:e.target.value})}/>
                <label>Email:</label>
                <input type="text" className="form-control" value={values.email} onChange={(e)=>setValues({...values ,email:e.target.value})}/><br/>
                <input type="submit" className="btn btn-outline-primary mt-2 form-control"  value='Update' onClick={ handleUpdate} />
            </form>
            
        </div>
    );
}

export default EditContact;
