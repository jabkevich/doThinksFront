import styles from "./styles.scss";
import React, {Component, Fragment} from 'react';
import {Form, Button} from 'bootstrap-4-react';
import {getTasks, delTask, openTask, swapTasks} from "../../../../redux/task/tasksActions"
import {connect} from "react-redux";
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

import SearchIcon from '@material-ui/icons/Search';


const SortableItem = SortableElement(({task, hidden, openTask, handleInputChange}) => (
    <div tabIndex={0} className={styles.Task}>
        <div className={"form-check " + styles.Hidden} id={"hi"} hidden={hidden}>
            <input className={"form-check-input"} name={task.id} type="checkbox" value=""
                   id="defaultCheck1" onChange={() => handleInputChange(task.id)}/>
            <label className="form-check-label" htmlFor="defaultCheck1">
            </label>
        </div>
        <div className={styles.Text} > {task.title}</div>
        {/*<Button info lg outline onClick={() => openTask(task.id)}><SearchIcon/></Button>*/}
    </div>
));

const SortableList = SortableContainer(({taskss, hidden, openTask, handleInputChange}) => {
    console.log(taskss)
    return (
        <ul>
            {taskss.map((task, index) => (
                <SortableItem key={`item-${task.id}`} index={index} task={task} hidden={hidden} openTask={openTask}
                              handleInputChange={handleInputChange}/>
            ))}
        </ul>
    );
});

class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayCheck2: [],
            hidden: true,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.HiddenCheck = this.HiddenCheck.bind(this);
        this.openTask = this.openTask.bind(this);
    }

    onSubmit = e => {
        e.preventDefault();
        this.state.arrayCheck2.map(id => {
            this.props.delTask(id[0])
        })
    }


    handleInputChange(event) {
        if (this.state.arrayCheck2.indexOf(event) === -1) {
            this.state.arrayCheck2.push([event, true])
        } else {
            this.state.arrayCheck2 = this.state.arrayCheck2.filter((n) => {
                return n !== [event, true]
            });
        }
    }

    componentDidMount() {
        this.props.getTasks()

    }

    HiddenCheck(clas) {
        let blocks = document.getElementsByClassName(clas)
        let input = document.getElementsByClassName('form-check-input')
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].hidden = !blocks[i].hidden
            input[i].checked = false;
        }
        this.setState(state => ({
            hidden: !state.hidden,
            arrayCheck2: []
        }));
    }

    openTask(id) {
        this.props.openTask(id)
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        if(oldIndex!==newIndex){
            this.props.swapTasks(oldIndex, newIndex, this.props.taskss)
        }else{
            this.props.openTask(this.props.taskss[oldIndex].id)
        }

    };

    render() {
        return (
            <Fragment>
                <form id="data" className={styles.TaskList} onSubmit={this.onSubmit}>
                    <SortableList
                        taskss={this.props.taskss} hidden={this.state.hidden}
                        openTask={this.openTask} handleInputChange={this.handleInputChange} onSortEnd={this.onSortEnd}/>
                </form>
                <div className={styles.Change}>
                    <Button primary lg outline mr="3" type="submit"
                            onClick={() => this.HiddenCheck(styles.Hidden)}>{this.state.hidden ? 'Выбрать' : 'Отменить'}</Button>
                    <Button secondary lg outline block form="data" type="submit">Удалить</Button>
                </div>
            </Fragment>
        )
    }
}

export default connect(null, {getTasks, delTask, openTask, swapTasks})(TasksList)