export const initialState = {
    contacts: [
      { matricule: 1, prenom: 'ayoub', nom: 'hajj', tel: '0655443322', email: 'hajj@gmail.com' },
      { matricule: 2, prenom: 'yassine', nom: 'venom', tel: '0609433220', email: 'venom@gmail.com' },
      { matricule: 3, prenom: 'ayob', nom: 'haj', tel: '0608833220', email: 'hhhhhh@gmail.com' },
    ],
    prenom: '',
    matricule: '',
    nom: '',
    tel: '',
    email: '',
  };

export const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_PRENOM':
        return { ...state, prenom: action.payload };
      case 'SET_MATRICULE':
        return { ...state, matricule: action.payload };
      case 'SET_NOM':
        return { ...state, nom: action.payload };
      case 'SET_TEL':
        return { ...state, tel: action.payload };
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
    case 'SUPPRIMER_CONTACT':
        let newContactsList = state.contacts.filter(c =>{return  c.matricule !== action.payload});
        return {...state, contacts : newContactsList};
    case 'VIDER':
        let vid=state.splice(0,state.length)
        return {vid}
      case 'ADD_CONTACT':
        return {
          ...state,
          contacts: [
            ...state.contacts,
            {
              matricule: state.matricule,
              nom: state.nom,
              prenom: state.prenom,
              tel: state.tel,
              email: state.email,
            },
          ],
        };
      default:
        return state;
    }
  };