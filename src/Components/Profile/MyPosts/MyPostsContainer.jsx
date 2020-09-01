import React from "react";
import {addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText : state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        onAddPost : (newPostBody) =>{
            dispatch(addPostActionCreator(newPostBody))
        }
    }
}

let MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer