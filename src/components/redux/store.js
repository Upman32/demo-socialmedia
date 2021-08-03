import DialoguesReducer from "./DialoguesReducer"
import profileReducer from "./ProfileReducer"

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_MES = 'ADD_MES'
const UPDATE_NEW_MES_TEXT = 'UPDATE_NEW_MES_TEXT'




let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'hohohohoho', likecounts: 453 },
                { id: 2, message: 'jaajajajajajja', likecounts: 332 },
                { id: 3, message: 'jaajajajajajja', likecounts: 151 },
                { id: 4, message: 'jaajajajajajja', likecounts: 263 },
                { id: 5, message: 'jaajajajajajja', likecounts: 53 }
            ],
            newPostText: 'lolkekwjs'
        },
        messagesPage: {
            messages: [
                { id: 1, message: 'LOL' },
                { id: 2, message: 'keku' },
                { id: 3, message: 'Coco Kaine' },
                { id: 4, message: 'SebastiAAAAAN' },
                { id: 5, message: 'HOW MANY SHRIMPS FLAMING CAN eat' },
                { id: 6, message: 'one thousand million dolars' }

            ],
            dialogues: [
                { id: 1, name: 'Kirill' },
                { id: 2, name: 'Kirill' },
                { id: 3, name: 'Vanya' },
                { id: 4, name: 'Denis' },
                { id: 5, name: 'Shafi' },
                { id: 6, name: 'Alex' }
            ],
            newMesText: 'hoho'
        }

    },

    getState() {
        
        return this._state
    },

    _callsubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callsubscriber = observer
    },

 
   
   
    dispatch(action){
 
this._state.profilePage = profileReducer (this._state.profilePage, action)
this._state.messagesPage = DialoguesReducer (this._state.messagesPage, action)                        

this._callsubscriber(this._state)

                                 
    } 
}
   






export default store
window.store = store;


/*      if (action.type === ADD_MES){
               let newMes = {
                   id: 5,
                   message: this._state.messagesPage.newMesText
               }
   
               this._state.messagesPage.messages.push(newMes)
               this._state.messagesPage.newMesText = ''
               this._callsubscriber(this._state)
        
            } else if (action.type === UPDATE_NEW_MES_TEXT) {
               this._state.messagesPage.newMesText = action.newText
               this._callsubscriber(this._state)
              
          
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText 
            this._callsubscriber(this._state) 
        } else if (action.type = ADD_POST) {
        
                        let newPost = {
                            id: 5,
                            message: this._state.profilePage.newPostText,
                            likecounts: 0 }

                        this._state.profilePage.posts.push(newPost)
                        this._state.profilePage.newPostText = ''
                        this._callsubscriber(this._state) */












/* 

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
 */

/* export const profileReducer = (state, action)=>
{ switch(action.type) {
    case ADD_POST:

                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likecounts: 0
        
                }
        
                state.posts.push(newPost)
                state.newPostText = ''
                return state;
                
                case UPDATE_NEW_POST_TEXT: 
                state.newPostText = action.newText
                return state;
            default: 
            return state
        }
    }

    export const addPostActionCreator = () => {
        return {
            type:'ADD_POST'
        }
    }
    export const updateNewPostTextActionCreator = (text) => {
        return {
            type:'UPDATE_NEW_POST_TEXT', newText: text
        }
    }
 */
    


      /*   export default profileReducer */
 
/* const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const DialoguesReducer = (state, action) => 
{switch(action.type){
         case ADD_MES:
            let newMes = {
                id: 5,
                message: state.newMesText
            }

            state.messages.push(newMes)
            state.newMesText = ''
            return state;
        case UPDATE_NEW_MES_TEXT:
        
            state.newMesText = action.newText
        
            return state;
        default:
        return state;
     }
    }


 
    export const addMesActionCreator = () => {
        return {
            type:'ADD_MES'
        }
    }
    export const updateNewMesTextActionCreator = (text) => {
        return {
            type:'UPDATE_NEW_MES_TEXT', newText: text
        }
    }
    
 */


/*     export default DialoguesReducer */