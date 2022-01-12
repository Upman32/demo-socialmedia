import c from './../Dialogues.module.css'
import { NavLink } from 'react-router-dom'
import React from 'react'

type PropsType = {
  name: string
  id: number
}
const DialogueItem: React.FC<PropsType> = (props) => {
  let path = "/Dialogues/" + props.id
  return <div className={c.Dialogue + ' ' + c.active}>
    <img src='https://static.wikia.nocookie.net/wowpedia/images/8/8e/BTNPeasant-Reforged.png' />
    <NavLink to={path} className={c.dialogues_link} activeStyle={{ color: "#7B68EE" }}>{props.name}</NavLink>
  </div>


}

export default DialogueItem