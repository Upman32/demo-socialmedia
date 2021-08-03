import * as axios from "axios"
import { unfollow } from "../components/redux/UsersReducer"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "5bd3fbce-427e-4214-8a7a-6d6740c2fa49"
    }
   
})



export const usersAPI = {
    getUsers(currentPage, pageSize )  {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {  return response.data})
},
follow(userId) {
    return instance.post(`follow/${userId}`)

},
unfollow(userId) {
   return instance.delete(`follow/${userId}`  )  
},
getProfile(userId) {
    console.warn('old method. Use profileAPi')
    return profileAPI.getProfile(userId)
}
}

export const authAPI = {
   me:  () => {
       return instance.get(`auth/me`)
   },
   login: (email, password, rememberme = false) => {
    return instance.post(`auth/login`, {email, password, rememberme})
},
logout: () => {
    return instance.delete(`auth/login`)
}

}


export const profileAPI = {
  
getProfile(userId) {
    return instance.get(`profile/` + userId)
},
getStatus(userId) {
    return instance.get('profile/status/' + userId)
},
updateStatus(status) {
    return instance.put('profile/status/', {status: status})
}
}
    






/* axios.delete(`follow/${u.id}`  )
.then(response => {
 if (response.data.resultCode == 0)  {
     props.unfollow(u.id);
}
})


axios.post(`follow/${u.id}`, 
 {
    withCredentials: true,
    headers: {
        "API-KEY": "af9f5ff3-b92b-4a81-92b7-b807edcf9752"
    }
})
.then(response => {
 if (response.data.resultCode == 0)  {
     props.follow(u.id);
}
}) */
