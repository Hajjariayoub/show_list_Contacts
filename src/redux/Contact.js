import React from "react";
import { useDispatch} from "react-redux";
// import { store } from './features/store';
import { deleteContact } from "../features/contactSlice";
import { Link } from 'react-router-dom';

const Contact = ({ contact}) => {
  const dispatch=useDispatch();
    const nomStyle = {
        color: 'white', 
        fontWeight: 'bold' 
    };
    
    return (
        <div className="card border-success">
        <div className="card-body">
            <h5 className="card-title bg-danger text-white rounded">{contact.nom}</h5>
            <h6 className="card-subtitle mb-2 ">{contact.prenom}</h6>
            <p className="card-text">{contact.tel}</p>
            <p  className="card-text">{contact.email}</p>
                <button  className="btn btn-primary" onClick={() =>dispatch(deleteContact(contact.id))}>Supprimer</button> {/* onDelete function */}
                <Link to={`/edit-contact/${contact.id}`}>
                <button  className="btn btn-primary">edit</button>
                </Link>
            </div>
        </div>
    );
};

export default Contact;