import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Attribute} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";



const Dialogs = (props) => {

    let DialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}
                                                                         img={d.img}/>);
    let MessagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    let addNewMassage = (values) => {
        props.addMessageActionCreator(values.newMessageBody)
    }

    return (
        <div>
            <div className={s.dialogs}>

                <div className={s.dialogsItems}>
                    {DialogsElements}
                </div>
                <div className={s.messages}>
                    {MessagesElements}
                </div>
            </div>
            <div className={s.messages}>
            <AddMessageReduxForm onSubmit={addNewMassage}/>
            </div>
        </div>
    )
}
const maxLength50 = maxLengthCreator(50)
const Textarea =  Attribute("textarea")
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Enter your message'} validate={[required,maxLength50]} component={Textarea} name ="newMessageBody"/>
        </div>
    <div>
        <button>Send</button>
    </div>
        </form>
)
}
const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs