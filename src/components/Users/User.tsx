import React from 'react'
import s from './users.module.css'
import userPhoto from '../common/images/Worker.jpg'
import { NavLink } from 'react-router-dom'
import { userType } from '../../Types/types'

type propsType = {
    user: userType
    processing: Array<number>
    unfollow: (userid: number) => void
    follow: (userId: number) => void
}

let User: React.FC<propsType> = ({ user, processing, unfollow, follow }, ...props) => {
    return <div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto} /></NavLink>
            </div>
            <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
        </span>
            <span>
                {user.followed
                    ? <button disabled={processing.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }}
                    >Unfollow</button>
                    : <button disabled={processing.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>Follow</button>}

            </span>
        </span>
    </div>
}


export default User