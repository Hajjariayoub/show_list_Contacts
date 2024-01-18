import React, { useReducer } from 'react';
import { reducer,initialState } from './ContactReducer';
const Contact = ({contact}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div className="card border-success"  >
        <div className="card-body">
            <h5 className="card-title bg-danger text-white rounded">{contact.nom}</h5>
            <h6 className="card-subtitle mb-2 ">{contact.prenom}</h6>
            <p className="card-text">{contact.tel}</p>
            <p  className="card-text">{contact.email}</p>
            <button  className="btn btn-primary" onClick={(e)=>{e.preventDefault();dispatch({type:'SUPPRIMER_CONTACT',payload:contact.matricule})}}>Supprimer</button>
            
        </div>
        </div>
    );
}

export default Contact;
