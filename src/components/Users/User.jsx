import React from 'react'
import s from './users.module.css'
import userPhoto from '../../images/Worker.jpg' 
import { NavLink } from 'react-router-dom'


let User = ({user, processing, unfollow, follow}, ...props) =>{

    
return <div>

    <span> 
    
        <div>
            <NavLink to={'/profile/' + user.id}>
    <img src={ user.photos.small != null ? user.photos.small : userPhoto } className={s.userPhoto}/></NavLink>

        </div>
        <div>








        {user.follow 
        ? <button disabled={processing.some(id => id === user.id)} onClick = {()=> {
         unfollow(user.id)
           
        
        }}
           
         
         >Unfollow</button> 


        : <button disabled={processing.some(id => id === user.id) } onClick = {()=> {
            follow(user.id)
        
        }}>Follow</button> } 
            
        </div>
    </span>
    <span>
        <span>
<div>{user.name}</div>
<div>{user.status}</div>
        </span>
        <span>
            <div>{"user.location.city"}</div>
            <div>{"user.location.country"}</div>
        </span>
    </span>
  
    </div>
}


export default User