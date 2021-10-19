import c from './Dialogues.module.css'
import DialogueItem from './Dialogue/Item'
import Message from './Posting/Posting'
import React from 'react'
import { Redirect } from 'react-router'
import { Field as button, Field, reduxForm } from 'redux-form'
import { Element } from '../../common/Forms_Control/Form_Control'
import { maxLength30, MaxLengthCreator, RequiredField } from '../../../Utils/Validators'

const Textarea = Element("textarea");


const Dialogues = (props) => {


  let dialoguesElements = props.dialogues.map(chats => <DialogueItem name={chats.name} key={chats.id} id={chats.id} />)
  let messagesElements = props.messages.map(part => <Message message={part.message} key={part.id} />);


  let NewMesElement = React.createRef();




  let addNewMessage = (values) => {

    props.addMes(values.newMessageBody)
  }





  if (!props.isAuth) return <Redirect to={"/Login"} />
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
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>

      <div>
        <Field
          placeholder='Enter your message'
          name='newMessageBody'
          component={Textarea}
          validate={[RequiredField, maxLength50]}
        />
      </div>

      <div>
        <button>Add Mes</button>
      </div>

    </form>
  )
}
const AddMessageFormRedux = reduxForm({
  form: 'Dialogue_addmessageform'
})(AddMessageForm)
export default Dialogues