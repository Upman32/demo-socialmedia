import Dialogues from './Dialogues'
import { addMesActionCreator} from '../../redux/DialoguesReducer'
import {connect} from 'react-redux'
import { withAuthRedirect } from '../../../HOC/withAuthRedirect'
import { compose } from 'redux'
import { withRouter } from 'react-router'



let mapsStateToProps = (state) =>{
  return {
dialogues: state.messagesPage.dialogues,
messages: state.messagesPage.messages,
newMessageBody:state.messagesPage.newMessageBody,



   }
}
let mapDispatchToProps = ( dispatch) =>{
  return {
   
   
 


    addMes: (newMessageBody) => {
      let action = addMesActionCreator(newMessageBody);
  dispatch(action)
    }
}
}
export default compose(
  connect(mapsStateToProps, mapDispatchToProps),
    withAuthRedirect
 ) ( Dialogues  )
