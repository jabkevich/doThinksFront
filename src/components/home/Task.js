import React, {Component, Fragment} from 'react'
import {connect} from "react-redux"
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {updateTask} from "../../redux/authAction";
import {makeStyles} from "@material-ui/core/styles";
import "./styles/task.css"
import Points from "./Points";

class Task extends Component {
    state = {
        text: this.props.task.text || "",
    }
    onChange = e => this.setState(
        {[e.target.name]: e.target.value}
    );

    onSubmit = e => {
        e.preventDefault();
        const {text} = this.state
        const task = this.props.task
        task["text"] = text
        this.props.updateTask(task, this.props.task.id)
    };
    render() {
        const {text} = this.state
        return (
            <Fragment>
                <h2>{this.props.task.title}</h2>
                <form className={"TaskForm"} onSubmit={this.onSubmit}>
                       <textarea
                                 className={"textTask"}
                                 name={"text"}
                                 type={"text"}
                                 onChange={this.onChange} placeholder={"заметка"}
                                 value={text}
                                 maxLength={"1000"}
                       />
                    <input type="submit" value="сохранить" />
                </form>
                <Points points={this.props.task.point} task={this.props.task}/>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}


export default connect(mapStateToProps, {updateTask})(Task)