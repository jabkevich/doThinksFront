import React, {Component} from "react";
import "./styles/login.css"
import {Link, Redirect, Route} from "react-router-dom";
import axios from "axios";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

export class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    onChange = e => this.setState({[e.target.name]:e.target.value})


    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.username)
        console.log(this.state.password)
        axios.post('http://127.0.0.1:8000/auth/token/login/', {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            console.log(res.data)
        }).catch(err => console.log(err))
    };

    render() {
        const {username, password } = this.state
        return (
            <div className={"Auth"}>
                <div className={"Login"}>
                    <h3>Войти в doThinks</h3>
                    <form className="form post" onSubmit={this.handleSubmit}>
                        <div id="account-name">
                            <input type="text" name={"username"} placeholder={"Введите ваш логин"}
                                   onChange={this.onChange} value={username} required/>
                            {/*<button className="effect effect-3" href="#" title="Learn More">далее</button>*/}
                        </div>
                        <div id="password">
                            <input type="text" name={"password"} placeholder={"Введите ваш пароль"}
                                   onChange={this.onChange} value={password} required/>
                            {/*<button className="effect effect-3" href="#" title="Learn More">далее</button>*/}
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <Link to={"/register"} className={"nav-link"}>Нет аккаунта?</Link>
                </div>
            </div>
        )
    }
}



//disabled
export default Login