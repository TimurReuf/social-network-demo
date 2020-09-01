import * as axios from "axios";
import timur from "../assets/images/timur.jpg"


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "bdce0a8b-8017-4f46-bb08-16095aa0415c"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count =${pageSize}`)
            .then(response => {
                return response.data
            })

    }
}
export const followUnFollowAPI = {
    follow(id) {
        return instance.post(`follow/${id}`)

    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)

    },
    login(email,password,rememberMe =false) {
        return instance.post(`auth/login`,{email,password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`,{status:status})
    },
    setPhoto() {
        return instance.put(`profile/photo`,{photo:timur})
    }


}



