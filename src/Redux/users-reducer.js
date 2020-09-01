import {authAPI, followUnFollowAPI, usersAPI} from "../Api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 10,
    isFetching: false,
    followingInProgress: []

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId, "id",{followed:true})
            }


        case UNFOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId, "id",{followed:false})
            }
        case SETUSERS :
            return {
                ...state, users: [...action.users]
            }
        case SET_CURRENT_PAGE :
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT :
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING :
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS :
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default :
            return state
    }

}
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SETUSERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(page))
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(setIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow =async(userId,dispatch,apiMethod,actionCreator) =>{
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const unFollow = (userId) => async (dispatch) => {
    followUnfollowFlow(userId, dispatch, followUnFollowAPI.unFollow.bind(followUnFollowAPI), unFollowSuccess)
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(userId, dispatch, followUnFollowAPI.follow.bind(followUnFollowAPI), followSuccess)
}


export default usersReducer