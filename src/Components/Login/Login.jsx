import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {compose} from "redux";
import {login} from "../../Redux/auth-reducer";
import {Attribute} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import style from "../Common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit,error}) =>{
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} validate={[required]} component ={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} validate={[required]} component ={Input}/>
            </div>
            <div>
                <Field component ={"input"} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div><button>Login</button> </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Input = Attribute("input")

const Login = ({login,isAuth}) =>{

    const onSubmit = (formData) =>{
        login(formData.email,formData.password,formData.rememberMe)
    }
    if(isAuth){
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps =(state) =>({
    isAuth:state.auth.isAuth
})

export default compose(
    connect(mapStateToProps,{login})
)(Login)