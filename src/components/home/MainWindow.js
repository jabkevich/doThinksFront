import React, {Component} from 'react'
import "./styles/mainWindows.css"

import DRD from "./drd";
import {MuiThemeProvider} from "material-ui/styles";
import {connect} from "react-redux";
import {addTask, updateTask} from "../../redux/authAction";
import AddIcon from '@material-ui/icons/Add';

class MainWindow extends Component {
    state = {
        title: '',
        deadline: '',
        other: '',
        group: this.props.openTasks
    }
    onChange = e => this.setState(
        {[e.target.name]: e.target.value}
    );

    onSubmit = e => {
        e.preventDefault();
        console.log("group")
        console.log(this.state.group)
        console.log(this.props.user["id"])
        const {title, deadline, other} = this.state
        const data = {title, deadline, other}
        console.log(data)
        this.props.addTask(data, this.props.user["id"], this.props.openTasks)
    };

    render() {
        const {title, deadline, other} = this.state
        return (
            <div id="me" className={"MainWindow"}>
                <DRD/>
                {this.props.openTasks?<form className={"taskName"} onSubmit={this.onSubmit}>
                    <input className={""} name={"title"} type={"text"} onChange={this.onChange} value={title}
                           placeholder={"Имя задания"}/>
                    <input className={""} name={"other"} type={"text"} onChange={this.onChange} value={other}
                           placeholder={"Дополнительно"}/>
                    <input name="deadline" className="form-control" type="datetime-local" onChange={this.onChange}
                           value={deadline}/>
                    <button type="submit"><AddIcon/></button>
                </form>:""
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        groupTasks: state.auth.groupTasks,
        user: state.auth.user,
        openTasks: state.auth.openTasks
    }
}

export default connect(mapStateToProps, {addTask})(MainWindow)