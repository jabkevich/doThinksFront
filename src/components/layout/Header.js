import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";


export class Header extends Component {
    render() {
        return(
            <div>
                <h1>Header</h1>
                <ul className="navbar-nav mr-auto">
                    <li className={"nav-item"}>
                        <Link to={"/register"} className={"nav-link"}>Register</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/login"} className={"nav-link"}>Login</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header