import axios from "axios"
import { PhotosType, ProfileType, userType } from "../Types/types"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "5bd3fbce-427e-4214-8a7a-6d6740c2fa49"
    }
})
type GetUsersItems = {
    items: Array<userType>
    totalCount: number
    error: string | null
}
export type ResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}
type SavePhotoType = {
    photos: PhotosType
}
export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaisRequired = 10
}
type MeResponseType = {
    id: number
    email: string
    login: string
}
type LoginResponseType = {
    userId: number
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, term: string = '', friend: null | boolean = null) {
        return instance.get<GetUsersItems>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
            .then(response => { return response.data })
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`).then(res => res.data)

    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<ResponseType>
    },
}

export const authAPI = {
    me: () => {
        return instance.get<ResponseType<MeResponseType>>(`auth/me`).then((res) => res.data)
    },
    login: (email: string, password: string, rememberme = false, captcha: null | string = null) => {
        return instance.post<ResponseType<LoginResponseType>>(`auth/login`, { email, password, rememberme, captcha }).then((res) => res.data)
    },
    logout: () => {
        return instance.delete(`auth/login`)
    }


}


export const profileAPI = {

    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>('profile/status/' + userId).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>('profile/status/', { status: status }).then(res => res.data)
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put<ResponseType<SavePhotoType>>('profile/photo/', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },


    saveProfile(profile: ProfileType) {
        return instance.put('profile/', profile).then(res => res.data)
    }
}

type GetCaptchaUrlType = {
    url: string
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlType>('security/get-captcha-url').then(res => res.data)
    }
}



