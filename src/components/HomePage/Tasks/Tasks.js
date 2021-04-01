import React, {Component, Fragment} from 'react';
import {Link, Redirect, Route} from "react-router-dom";
import { Form, Button } from 'bootstrap-4-react';
import {InputGroup} from "bootstrap-4-react/lib/components";
import AddIcon from '@material-ui/icons/Add';
import TaskList from "./TaskList";

import {addTask} from "../../../redux/task/tasksActions"
import {connect} from "react-redux";

class Tasks extends Component {
    state={
        taskName: ''
    }
    onChange = e => this.setState(
        {[e.target.name]: e.target.value}
    );

    onSubmit = e => {
        e.preventDefault();
        console.log("(this.props.user)")
        console.log((this.props.user))
        const {taskName} = this.state
        this.props.addTask({taskName}, this.props.user.id)
    };


    render() {
        const {taskName} = this.state
        return (
            <Fragment>
                <TaskList/>
                <form onSubmit={this.onSubmit}>
                    <InputGroup mt="3">
                        <Form.Input type="text" placeholder="Добавить" name={"taskName"}
                                    value={taskName} onChange={this.onChange} />
                        <InputGroup.Append>
                            <Button outline secondary>
                                <AddIcon fontSize="small"/>
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </form>
            </Fragment>
        )
    }
}

const mapStateToProps = state =>{
    console.log(state.auth.user)
    return{
        user: state.auth.user
    }
}
export default connect(mapStateToProps,{addTask})(Tasks)