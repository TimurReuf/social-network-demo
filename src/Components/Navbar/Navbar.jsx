import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import FriendsItemContainer from "./Friends/FriendsItemContainer";


const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={"/dialogs"} activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/users'} activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={`${s.item} ${s.itemSettings}`}>
                <NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.itemFriends}>
                FRIENDS
                <div>
                    <FriendsItemContainer/>
                </div>
            </div>
        </nav>
    )
}
export default Navbar