import React from "react";
import s from './Posts.module.css'

const Posts = (props) => {

    return <div className={s.item}>
        <img src={'https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'}/>
        {props.message}
        <div>
            <span> Like</span> {props.likes}
        </div>
    </div>


}
export default Posts