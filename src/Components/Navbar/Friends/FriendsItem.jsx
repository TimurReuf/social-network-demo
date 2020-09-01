import React from "react";
import s from "./Friends.module.css";

const FriendsItem = (props) =>{
    return(
        props.friends.map(f => <div key={f.id}>
        <div className={s.itemFriend}>
            <img src={f.img}/>
            <div>{f.name}</div>
        </div>
            </div>)
    )


}
export default FriendsItem