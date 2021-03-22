import React, {Component, Fragment} from 'react';
import styles from "./styles/login/styles.scss"
import remember from "./styles/login/remember/remember.scss";
import {Link, Redirect, Route} from "react-router-dom";
import Input from "./styles/input/Input";
import NeonCheckboxStyle from "./styles/checkBox/CheckBox";
import SwitchLen from "./styles/Lang/SwitchLen";
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import {login} from '../../redux/auth/authActions'

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

    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password)
    };

    render() {
        if (this.props.userLoading) {
            return <Redirect to='/'/>
        }
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
                            <form className={styles.Form} onSubmit={this.handleSubmit}>
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
const mapStateToProps = state =>{
    return{
        userLoading: state.auth.userLoading
    }
}

export default connect(mapStateToProps, {login})(Login)