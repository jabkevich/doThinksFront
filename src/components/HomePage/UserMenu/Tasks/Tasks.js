import React, {Component, Fragment} from 'react';
import {Link, Redirect, Route} from "react-router-dom";
import { Form, Button } from 'bootstrap-4-react';
import {InputGroup} from "bootstrap-4-react/lib/components";
import AddIcon from '@material-ui/icons/Add';
import TaskList from "./TaskList";

import {addTask, getTasks} from "../../../../redux/task/tasksActions"
import {connect} from "react-redux";

class Tasks extends Component {
    state={
        taskName: '',
    }
    onChange = e => this.setState(
        {[e.target.name]: e.target.value}
    );

    onSubmit = e => {
        e.preventDefault();
        const {taskName} = this.state
        this.props.addTask({taskName}, this.props.user.id)
    };
    componentDidMount() {
        this.props.getTasks()
    }

    render() {
        const {taskName} = this.state
        return (
            <Fragment>
                <TaskList taskss = {this.props.tasks}/>
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
    return{
        user: state.auth.user,
        tasks: state.taskReducer.tasks,
        taskLoaded: state.taskReducer.taskLoaded,
    }
}
export default connect(mapStateToProps,{addTask, getTasks})(Tasks)