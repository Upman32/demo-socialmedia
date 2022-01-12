import React from 'react'
import c from './../Dialogues.module.css'

type Propstype = {
  message: string
}
const Message: React.FC<Propstype> = (props) => {
  return <div className={c.message}>{props.message}</div>
}

export default Message