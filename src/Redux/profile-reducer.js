import {authAPI, profileAPI} from "../Api/api";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_USER_STATUS = "SET-USER-STATUS"
const SET_PHOTO = "SET_PHOTO"
const DELETE_POST = "DELETE_POST"


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: '15'},
        {id: 2, message: 'It\'s my first post', likes: '20'},
        {id: 3, message: 'BlaBla', likes: '27'},
        {id: 4, message: 'DaDA', likes: '29'}
    ],
    profile: null,
    status: "",
    photos: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostBody, likes: 0}],
            }
        }
        case SET_USER_PROFILE : {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS : {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST : {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        case SET_PHOTO : {
            return {
                ...state,
                photo: action.photo
            }
        }
        default :
            return state
    }

}
export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_USER_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setPhoto = (photos) => ({type: SET_USER_STATUS, photos})

export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const updatePhoto = () => async (dispatch) => {
    let response = await profileAPI.setPhoto()
    if (response.data.resultCode === 0) {
        dispatch(setUserProfile(response.small))
    }
}
export default profileReducer