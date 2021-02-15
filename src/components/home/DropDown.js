import React, {Component} from 'react'
import "./styles/dropDown.css"
import {logout} from '../../redux/authAction'
import {connect} from 'react-redux'

class Dropdown extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.logout()
    };

    render() {
        return (
            <form className={"logout"} onSubmit={this.handleSubmit}>
                <button type="submit">Logout</button>
            </form>

        );
    }
}



export default connect(null, {logout})(Dropdown)