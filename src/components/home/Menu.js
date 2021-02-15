import React, {Component} from 'react'
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import {loadUser, groupUser, addGroup} from '../../redux/authAction'
import {Redirect} from "react-router-dom";
import "./styles/menu.css"
import Group from "./Groups";
import DailyTasks from "./DailyTasks";
import Dropdown from './DropDown'



class Menu extends Component {
    componentDidMount() {
        this.props.groupUser()
    }
    state = {
        groupName: '',
    }

    onChange = e => this.setState(
        {[e.target.name]: e.target.value}
    );

    onSubmit = e => {
        e.preventDefault();
        const {groupName} = this.state
        const group = {groupName}
        this.props.addGroup(group, this.props.user["id"])
    };
    render() {
        if (!this.props.isAuthenticated) {
            return <Redirect to='/login'/>
        }
        const {groupName} = this.state
        return (
            <div className={"Menu"}>
                <Dropdown/>
                <DailyTasks/>
                <Group group={this.props.groupsUser}/>
                <div className={"addGroup"}>
                    <form className={"groupName"} onSubmit={this.onSubmit}>
                        <input className={""} name={"groupName"} type={"text"} onChange={this.onChange} value={groupName}
                               placeholder={"Имя группы"}/>
                        <button type="submit">Добавить</button>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {

    return {
        isAuthenticated: state.auth.isAuthenticated,
        token: state.auth.token,
        user: state.auth.user,
        groupsUser: state.auth.groupsUser,
    }
}

export default connect(mapStateToProps, { loadUser, groupUser, addGroup})(Menu)