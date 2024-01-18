import React, { useReducer } from 'react';
import Listcontact from './ListContact';
import { reducer,initialState } from './ContactReducer';
const Fourmailaire = () => {
    // const list=[
    //     {matricule:1,prenom:'ayoub',nom:'hajj',tel:'0655443322',email:'hajj@gmail.com'},
    //     {matricule:2,prenom:'yassine',nom:'venom',tel:'0609433220',email:'venom@gmail.com'},
    //     {matricule:3,prenom:'ayob',nom:'haj',tel:'0608833220',email:'hhhhhh@gmail.com'},
    // ]
    // const [contacts,setContacts]=useState(list)
    // const [prenom,setprenom]=useState()
    // const [matricule,setmatricule]=useState()
    // const [nom,setnom]=useState()
    // const [tel,settel]=useState()
    // const [email,setemail]=useState()
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleChange=(e)=>{
        const {name,value}=e.target
    //     switch (name){
    //         case "matricule": setmatricule(value);break;
    //         case "nom": setnom(value);break;
    //         case "prenom": setprenom(value);break;
    //         case "tel": settel(value);break;
    //         case "email": setemail(value);break;
    //         default : ; break;
    //  }
    switch (name) {
        case 'matricule':
          dispatch({ type: 'SET_MATRICULE', payload: value });
          break;
        case 'nom':
          dispatch({ type: 'SET_NOM', payload: value });
          break;
        case 'prenom':
          dispatch({ type: 'SET_PRENOM', payload: value });
          break;
        case 'tel':
          dispatch({ type: 'SET_TEL', payload: value });
          break;
        case 'email':
          dispatch({ type: 'SET_EMAIL', payload: value });
          break;
        default:
          break;
      }
    }
    const handleClick=(e)=>{
        e.preventDefault()
        // setContacts((prev)=>[...prev,{"matricule":matricule,"nom":nom,"prenom":prenom,"tel":tel,"email":email}])
        dispatch({ type: 'ADD_CONTACT' });
    }
    return (
        <div className='border border-warning mt-4 p-4 border-4 '>
        <h1> Entrer les données d'un nouveau contact :</h1>
        <form className='form-group   my-3  mx-3 '>
            <label for='matricule' >Matricule :</label>
            <input type='number' className="form-control" placeholder='Saisir votre matricule 'name='matricule' onChange={handleChange}/>

            
            <label for='nom' >Nom :</label>
            <input className="form-control" type='text' placeholder='Saisir votre nom ' name='nom'  onChange={handleChange}/>

            <label for='prenom' >prenom :</label>
            <input className="form-control" type='text' placeholder='Saisir votre prenom ' name='prenom'  onChange={handleChange}/>

            <label for='tel' >Numero telephone  :</label>
            <input className="form-control" type='text' placeholder='Saisir votre num de tel ' name='tel'  onChange={handleChange}/>

            <label for='email' >Numero email  :</label>
            <input className="form-control" type='email' placeholder='Saisir votre num de email ' name='email'  onChange={handleChange}></input>

            <input className="btn btn-outline-primary mt-2 form-control" type='button' onClick={handleClick} value='Envoyer'/>
            <button  className="btn btn-primary" onClick={()=>{dispatch({type:'VIDER'})}}>vider</button>

        </form>
        <Listcontact contacts={state.contacts}/>
    </div>
    );
}

export default Fourmailaire;
