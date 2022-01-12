import c from './Dialogues.module.css'
import DialogueItem from './Dialogue/Item'
import Message from './Posting/Posting'
import React from 'react'
import {InjectedFormProps, reduxForm } from 'redux-form'
import { Element, Form } from '../../common/Forms_Control/Form_Control'
import { MaxLengthCreator, RequiredField } from '../../../Utils/Validators/Validate'
import { DialogueType, MessageType } from '../../redux/DialoguesReducer'

const Textarea = Element("textarea");
type OwnPropsType = {
  dialogues: Array<DialogueType>
  messages: Array<MessageType>
  addMesAction: (MessageText: string) => void
}
type newMessageform = {
  newMessageBody: string
}

const Dialogues: React.FC<OwnPropsType> = (props) => {
  let dialoguesElements = props.dialogues.map(chats => <DialogueItem name={chats.name} key={chats.id} id={chats.id} />)
  let messagesElements = props.messages.map(part => <Message message={part.message} key={part.id} />);
  let addNewMessage = (values: newMessageform) => {
    props.addMesAction(values.newMessageBody)
  }
  return (
    <div className={c.Dialogues}>
      <div className={c.dialoguesitems}>
        {dialoguesElements}
      </div>
      <div className={c.messages}>
        {messagesElements}
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

const maxLength50 = MaxLengthCreator(50)
type Propstype = {}
const AddMessageForm: React.FC<InjectedFormProps<newMessageform, Propstype> & Propstype> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {Form("Enter your message", 'newMessageBody', [RequiredField, maxLength50], Textarea)}
      </div>
      <div>
        <button>Add Mes</button>
      </div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm<newMessageform>({
  form: 'Dialogue_addmessageform'
})(AddMessageForm)
export default Dialogues