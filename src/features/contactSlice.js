import { createSlice } from "@reduxjs/toolkit";
;
export const initialState = [    

]
const contactSlice=createSlice({
    name:'contacts',
    initialState,
    reducers:{
        addContact:(state,action)=>{
            state.push(action.payload);
           
        },
        editContact:(state,action)=>{
            const {id,matricule,nom,prenom,tel,email}=action.payload
            const exictingContact=state.find(contact=>contact.id === id)
           if(exictingContact){

            exictingContact.matricule=matricule
            exictingContact.nom=nom
            exictingContact.prenom=prenom
            exictingContact.tel=tel
            exictingContact.email=email
           }
        },
        deleteContact: (state, action) => {
            return state.filter((contact) => contact.id !== action.payload);
            // const exictingContact=state.find(contact=>contact.id === action.payload)
            // let index  = state.indexOf(exictingContact)
            // console.log(exictingContact)
            // console.log(index)
            // state.splice(index ,1)
        },
        vider:(state)=>{
            state.splice(0,state.length);
        }
        
    }
});
export const{addContact,vider,deleteContact,editContact}=contactSlice.actions;
export default contactSlice.reducer;
