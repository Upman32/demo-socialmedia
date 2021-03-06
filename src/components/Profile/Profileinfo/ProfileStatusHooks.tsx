
import c from './Profileinfo.module.css'
import React, { ChangeEvent, useEffect, useState } from 'react'

type Propstype = {
   status: string
   updateStatus: (status: string) => void
}

const ProfileStatusHooks: React.FC<Propstype> = (props) => {
   let [editMode, seteditMode] = useState(false)
   let [status, setStatus] = useState(props.status)
   useEffect(
      () => {
         setStatus(props.status)
      }, [props.status]
   )
   const activate = () => {
      seteditMode(true)
   }
   const deactivate = () => {
      seteditMode(false);
      props.updateStatus(status)
   }

   const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(
         e.currentTarget.value
      )
   }
   return (

      <div>
         {!editMode &&
            <div className={c.Background}>
               <b className={c.Background}>Status: </b>
               <span className={c.Background} onDoubleClick={activate} >
                  {props.status || "==="}
               </span>
            </div>
         }
         {editMode &&
            <div>
               <input
                  onChange={onStatusChange} autoFocus={true} onBlur={deactivate} value={status}
               />
            </div>}
      </div>)
}

export default ProfileStatusHooks