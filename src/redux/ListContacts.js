import React from 'react';
import Contact from './Contact';
  
const Listcontact = ({contacts}) => {
    return (
        <div className='container my-4 border border-4 border-warning'>
            <h1 className=''>Liste Contacts :</h1>
        <div className='d-flex justify-content-around my-4 row text-center'>
        {contacts.length>0 ?
            contacts.map((contact,key)=>(
                <div className="col-md-4 " key={key}>
                 <Contact contact={contact} />
                 </div>

            ))
             :
             <h3>liste des contacts vide</h3>
        }
        </div>
        </div>
    );
}

export default Listcontact;
