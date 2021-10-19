
import React from 'react'
import Paginator from './Paginator'
import User from './User'


let Users = ({currentPage, users, totalUserCount, pageSize, onPostChanged, ...props}) =>{




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