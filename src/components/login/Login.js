import React, {Component} from "react";
import "./styles/login.css"
import {Link, Redirect, Route} from "react-router-dom";
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import {login} from '../../redux/authAction'


export class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    onChange = e => this.setState({[e.target.name]: e.target.value})
    static proptypes = {
        login: PropTypes.func.isRequired,
        loadUser: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password)
    };

    render() {
        const {username, password} = this.state
        if (this.props.isAuthenticated) {
            return <Redirect to='/'/>
        }
        return (
            <div className={"AuthContainer"}>
                <div className={"Auth"}>
                    <div className={"Login"}>
                        <h3>doThinks</h3>
                        <form className="form post" onSubmit={this.handleSubmit}>
                            <div id="account-name">
                                <input type="text" name={"username"} placeholder={"Введите ваш логин"}
                                       onChange={this.onChange} value={username} required/>
                            </div>
                            <div id="password">
                                <input type="text" name={"password"} placeholder={"Введите ваш пароль"}
                                       onChange={this.onChange} value={password} required/>
                            </div>
                            <div className={"vhod"}>
                                <button type="submit" className="effect effect-3" title="Learn More">Войти</button>
                                <Link to={"/register"} className={"effect effect-3"}>Нет аккаунта?</Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, {login})(Login)