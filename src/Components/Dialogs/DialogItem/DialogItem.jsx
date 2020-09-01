import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (<div className={s.dialogs + ' ' +s.active}>
            <img src={props.img}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem