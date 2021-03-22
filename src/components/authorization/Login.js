import React, {Component, Fragment} from 'react';
//import styles from "./styles/login/desktops_.module.scss";
//import styles from "./styles/login/phones_.modules.scss";
import styles from "./styles/login/styles.scss"
import remember from "./styles/login/remember/remember.scss";
import {Link, Redirect, Route} from "react-router-dom";
import Input from "./styles/input/Input";
import NeonCheckboxStyle from "./styles/checkBox/CheckBox";
import SwitchLen from "./styles/Lang/SwitchLen";

class Login extends Component {
    state = {
        username: null,
        password: ''
    }
    updateUsername = (value) => {
        this.state.username = value
    }
    updatePassword = (value) => {
        this.state.password = value
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
                            <SwitchLen/>
                        </div>
                    </div>
                    <div className={styles.MID}>
                        <div className={styles.INFO}>
                            <div>Welcome to the doThinks</div>
                            <div>
                                We will help you optimize your day and your tasks.
                            </div>
                        </div>
                        <div className={styles.Login}>
                            <div className={styles.logIN}>
                                Log in
                            </div>
                            <form className={styles.Form}>
                                <Input text={"Your login"} marginTo={"0px"} updateData={this.updateUsername} type={"text"}/>
                                <Input text={"Your password"} marginTo={"30px"} updateData={this.updatePassword} type={"password"}/>
                                <div className={styles.Remember}>
                                    <div className={remember.RememberMe}>
                                        <NeonCheckboxStyle/>
                                    </div>
                                    <div className={styles.dontRemember}>
                                        <Link to={"/register"} className={"effect effect-3"}>forgot password?</Link>
                                    </div>
                                </div>
                                <div className={styles.LogIn}>
                                    <button type="submit" className={styles.btn}>Log in</button>
                                </div>
                            </form>
                            <div className={styles.NoAck}>
                                <label>Don't have an account yet?</label><Link to={"/register"} className={"effect effect-3"}>Apply</Link>
                            </div>
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