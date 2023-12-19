import React from 'react';

const Contact = ({contact,key}) => {
    
    return (
        <div className="card col-md-6 border-success" style={{'width': '18rem'}} key={key}>
        <div className="card-body">
            <h5 className="card-title bg-danger text-white rounded">{contact.nom}</h5>
            <h6 className="card-subtitle mb-2 ">{contact.prenom}</h6>
            <p className="card-text">{contact.tel}</p>
            <p  className="card-text">{contact.email}</p>
        </div>
        </div>
    );
}

export default Contact;
