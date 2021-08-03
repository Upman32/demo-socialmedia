import c from './../Dialogues.module.css'
import { NavLink } from 'react-router-dom'

const DialogueItem = (props) => {
  let path = "/Dialogues/" + props.id
  return <div className={c.Dialogue + ' ' + c.active}>
    <img src='https://i.pinimg.com/originals/50/ee/c4/50eec4082bceec8547dba21ddfc45326.jpg' />
    <NavLink to={path} className={c.dialogues_link} activeStyle={{color: "#7B68EE"}}>{props.name}</NavLink>
  </div>
 

}

export default DialogueItem