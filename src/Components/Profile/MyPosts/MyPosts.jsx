import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Attribute} from "../../Common/FormsControls/FormsControls";


const MyPosts = React.memo(props => {
    let postsElements = [...props.posts].reverse().map(p => <Posts message={p.message} key={p.id} likes={p.likes}/>)

    let addNewPost = (values) => {
        props.onAddPost(values.newPostBody)
    }
    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <AddMessageReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

})

const Textarea = Attribute("textarea")
const maxLength10 = maxLengthCreator(10)
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostBody"} placeholder={"Enter new post"}
                       validate={[required,maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({form: 'ProfileAddPostForm'})(AddPostForm)

export default MyPosts