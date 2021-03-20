import React, {Component, Fragment} from 'react'
import styles from "./styles/login/desktops_.module.scss"
import remember from "./remember/remember.scss"
import {Link, Redirect, Route} from "react-router-dom";
import Input from "./input/Input"
import BorderSelect from "./Lang/Switch2"
import BannerCheckboxStyle from "./checkBox/CheckBox"
import NeonCheckboxStyle from "./checkBox/CheckBox";
class Login extends Component {
    state = {
        username: null,
        password: ''
    }
    updateUsername = (value) => {
        this.state.username = value
        console.log("this.state.username")
        console.log(this.state.username)
    }
    updatePassword = (value) => {
        this.state.password = value
        console.log("this.state.password")
        console.log(this.state.password)
    }

    render() {

        return (
            <Fragment>
                <div className={styles.Content}>
                    <div className={styles.Header}>
                        <div className={styles.HeaderContent}>
                            <div className={styles.Logo}>
                                doThinks
                            </div>
                            <BorderSelect/>
                        </div>
                    </div>
                    <div className={styles.Login}>
                        <div className={styles.logIN}>
                            Log in
                        </div>
                        <form className={styles.Form}>
                            <Input text={"Your login"} marginTo={"0px"} updateData={this.updateUsername}/>
                            <Input text={"Your password"} marginTo={"10px"} updateData={this.updatePassword}/>
                            <div className={styles.Input}>
                                {/*<div className={remember.Remember}>*/}
                                {/*    <input  type="checkbox" value="indigo" className={remember.customCheckbox}  id="color-1"/>*/}
                                {/*    <label htmlFor ="color-1">Remember me</label>*/}
                                {/*</div>*/}
                                <div className={remember.Remember}>
                                    <NeonCheckboxStyle/>
                                </div>

                                <button type="submit" className={styles.btn}>Log in</button>
                            </div>
                        </form>
                        <div className={styles.NoAck}>
                            <label>Don't have an account yet?</label><Link to={"/register"} className={"effect effect-3"}>Apply</Link>
                        </div>
                    </div>
                    <div className={styles.Footer}>
                        <div className={styles.FooterContent}>
                            <div className={styles.Logo}>
                                email
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}



export default Login