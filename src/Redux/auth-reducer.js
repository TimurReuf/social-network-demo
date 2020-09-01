import {authAPI} from "../Api/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = "samurai-network/auth/SET_USERS_DATA"


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    password: null,
    rememberMe: false

}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload
            }
        default :
            return state
    }

}
export const setAuthUsersData = (userId, email, login, isAuth) => ({
    type: SET_USERS_DATA, payload:
        {userId, email, login, isAuth}
})
export const getLoginAuth = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {login, id, email} = response.data.data
        dispatch(setAuthUsersData(id, email, login, true))
    }
}


export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getLoginAuth())
    } else {
        let massages = response.data.messages.length > 0 ? response.data.messages : "Some error"
        dispatch(stopSubmit("login", {_error: massages}))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUsersData(null, null, null, false))
    }
}


export default authReducer