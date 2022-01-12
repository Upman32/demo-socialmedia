import { InferActionsTypes } from "./reduxs"

 const ADD_MES = 'ADD_MES'
export type MessageType = {
    id:number 
    message: string
}
export type DialogueType = {
    id:number 
    name: string
}
let initialState = {
        messages: [
            { id: 1, message: 'LOL' },
            { id: 2, message: 'Sendor flyed awayed' },
            { id: 3, message: 'Nice vibrations!' },
            { id: 4, message: 'SebastiAN' },
            { id: 5, message: 'HOW MANY SHRIMPS FLAMING CAN eat' },
            { id: 6, message: 'one thousand million dolars' }

        ] as Array<MessageType>,
        dialogues: [
            { id: 1, name: 'Kirill' },
            { id: 2, name: 'Kirill' },
            { id: 3, name: 'Vanya' },
            { id: 4, name: 'Denis' },
            { id: 5, name: 'Shafi' },
            { id: 6, name: 'Alex' }
        ] as Array<DialogueType>,
      
}

export type initialStateType = typeof initialState
type ActionsType  = InferActionsTypes<typeof actions>


const DialoguesReducer = (state = initialState, action: ActionsType) => 

{

 
    switch(action.type){
       
         case ADD_MES:
            let newMes = action.newMessageBody
           return  {
                ...state,
               messages: [...state.messages,{id:6, message:newMes, }]
            }           
        default:
        return state;
     }
    }
export const actions  = {
  addMesAction: (newMessageBody: string) => ({type:'ADD_MES', newMessageBody} as const)
}
 
 export default DialoguesReducer