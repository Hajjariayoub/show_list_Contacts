import React, { useState } from "react";
import ListContacts from "./ListContacts";
import { useDispatch, useSelector } from "react-redux";
// import { store } from './features/store';
import { addContact, vider } from "../features/contactSlice";
import { v4 as uuidv4 } from "uuid";

const Formulaire =()=>{
    const dispatch=useDispatch();
    const contacts=useSelector(st=>st.contacts);
    const [matricule,setMatricule]=useState('');
    const [name,setName]=useState('');
    const [prenom,setPrenom]=useState('');
    const [tele,setTele]=useState('');
    const [email,setEmail]=useState('');
    

    const handlesave =(e)=>{
        e.preventDefault()
        dispatch(addContact({
        id:uuidv4(),
        matricule:matricule,
        nom:name,
        prenom:prenom,
        tel:tele,
        email:email
       }));
    }
    const hanlevide=(e)=>{
        e.preventDefault();
        dispatch(vider());
    }
   
    return(
        <div className="border border-warning border-4 m-1">
            <form className="form-group mx-3">
                <label>Matricule:</label>
                <input type="text" className="form-control" value={matricule} onChange={(e)=>setMatricule(e.target.value)} />
                <label>Nom:</label>
                <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                <label>Prenom:</label>
                <input type="text" className="form-control" value={prenom} onChange={(e)=>setPrenom(e.target.value)} />
                <label>Telephone:</label>
                <input type="text"  className="form-control"value={tele} onChange={(e)=>setTele(e.target.value)}/>
                <label>Email:</label>
                <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input type="submit" className="btn btn-outline-primary mt-2 form-control" onClick={handlesave} value='ajouter' />
                <input type="submit" className="btn btn-outline-primary mt-2 form-control" onClick={hanlevide} value='vider' />
            </form>
            <ListContacts contacts={contacts}/>

        </div>
    )
    
}
export default Formulaire;