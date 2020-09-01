import React from "react";
import {connect} from "react-redux";
import FriendsItem from "./FriendsItem";


let mapStateToProps = (state) =>{
    return{
        friends : state.sidebar.friends
    }
}
let mapDispatchToProps = (dispatch) =>{

}

export default connect(mapStateToProps,mapDispatchToProps)(FriendsItem)

