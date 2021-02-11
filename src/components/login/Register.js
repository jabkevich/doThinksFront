import React, {Component} from "react";
import "./styles/register.css"
import {Link} from "react-router-dom";

export class Login extends Component {
    render() {
        return(
            <div className={"Auth"}>
                <div className={"Login"}>
                    <h3>Войти в doThinks</h3>
                    <form className={"form"}>
                        <div id="new-account-name">
                            <input type="text" placeholder={"придумайте логин"}/>
                        </div>
                        <div id="new-password">
                            <input  type="text" placeholder={"Придумайте пароль"}/>
                            <input  type="text" placeholder={"Придумайте пароль"}/>
                        </div>
                    </form>
                    <Link to={"/login"} className={"nav-link"}>есть аккаунт??</Link>
                </div>
            </div>
        )
    }
}
//disabled
export default Login