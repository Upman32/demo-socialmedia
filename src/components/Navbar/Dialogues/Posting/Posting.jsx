import c from './../Dialogues.module.css'




const Message = (props) => {
  return <div className={c.message}>{props.message}</div>
    
}



export default Message