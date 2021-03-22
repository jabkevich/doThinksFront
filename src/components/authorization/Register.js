import React, {Component, Fragment} from 'react'
import styles from "./styles/login/styles.scss"
import remember from "./styles/login/remember/remember.scss";
import {Link, Redirect, Route} from "react-router-dom";
import Input from "./styles/input/Input";
import NeonCheckboxStyle from "./styles/checkBox/CheckBox";
import SwitchLen from "./styles/Lang/SwitchLen";
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import {login, register} from '../../redux/auth/authActions'

class Register extends Component {
    state = {
        username: null,
        password: '',
        repeatPassword: ''
    }
    updateUsername = (value) => {
        this.state.username = value
    }
    updatePassword = (value) => {
        this.state.password = value
    }
    updateRepeatPassword = (value) => {
        this.state.password = value
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.register(this.state.username, this.state.password)
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
                                Sign up
                            </div>
                            <form className={styles.Form} onSubmit={this.handleSubmit}>
                                <Input text={"Your login"} marginTo={"0px"} updateData={this.updateUsername} type={"text"}/>
                                <Input text={"Create a password"} marginTo={"30px"} updateData={this.updatePassword} type={"password"}/>
                                <Input text={"Repeat a password"} marginTo={"30px"} updateData={this.updatePassword} type={"password"}/>
                                <div className={styles.Remember}>
                                    <div className={remember.RememberMe}>
                                        <NeonCheckboxStyle/>
                                    </div>
                                </div>
                                <div className={styles.LogIn}>
                                    <button type="submit" className={styles.btn}>Sign up</button>
                                </div>
                            </form>
                            <div className={styles.NoAck}>
                                <label>Have an account?</label><Link to={"/login"} className={"effect effect-3"}>Log in!</Link>
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

export default connect(mapStateToProps, {register})(Register)


