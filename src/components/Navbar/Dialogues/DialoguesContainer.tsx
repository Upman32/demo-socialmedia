import Dialogues from './Dialogues'
import { actions } from '../../redux/DialoguesReducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../../HOC/withAuthRedirect'
import { compose } from 'redux'
import { AppstateType } from '../../redux/reduxs'



let mapsStateToProps = (state: AppstateType) => {
  return {
    dialogues: state.messagesPage.dialogues,
    messages: state.messagesPage.messages,
  }
}

export default compose<React.ComponentType>(
  connect(mapsStateToProps, {addMesAction: actions.addMesAction}),
  withAuthRedirect
)(Dialogues)
