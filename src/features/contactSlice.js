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
// exictingContact ila kan fih chi contact , hit ghi that fih contact li 3ndo dak id ljna fi payload , bhl 9litlh mn contacts ghatchd dk contact tbdl fih ama filter tched mn contacts toht fi array jdida find la tkhedm nichan m3a contact lfi contacts l3ndo dk id
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