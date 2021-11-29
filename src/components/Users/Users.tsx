
import React from 'react'
import { userType } from '../../Types/types'
import Paginator from './Paginator'
import User from './User'



type PropsType = {
       totalUserCount: number
       pageSize: number
       currentPage: number
       onPostChanged: (pageNumber: number) => void,

       users: Array<userType>   
       processing: Array<number>
       follow: (userId: number) => void
       unfollow: (userId: number) => void   
   }

let Users: React.FC<PropsType> = ({currentPage, users, totalUserCount, pageSize, onPostChanged, ...props}) =>{

return <div>
       <Paginator currentPage={currentPage} onPostChanged={onPostChanged} totalUserCount={totalUserCount} pageSize={pageSize}  />
       
{ users.map(u => <User user={u}
          processing={props.processing}
          follow={props.follow}
          unfollow={props.unfollow}
          key={u.id} />
           )}
           
     </div>
     
}
export default Users