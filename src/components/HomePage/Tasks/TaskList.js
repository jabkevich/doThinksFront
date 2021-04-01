import styles from "./styles.scss";
import React, {Component, Fragment} from 'react';
import {Form, Button} from 'bootstrap-4-react';
import {getTasks, delTask, openTask} from "../../../redux/task/tasksActions"
import {connect} from "react-redux";
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';




const SortableItem = SortableElement(({value}) => (
    <li tabIndex={0}>хуй</li>
));

const SortableList = SortableContainer(({items}) => {
    return (
        <ul>
            {items.map((value, index) => (
                <SortableItem key={`item-${value}`} index={index} value={value} />
            ))}
        </ul>
    );
});


class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayCheck2: [],
            hidden: true
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
    openTask(id){
        this.props.openTask(id)
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };

    render() {
        return (
            <Fragment>
                <form id="data" className={styles.TaskList} onSubmit={this.onSubmit}>
                    {this.props.taskss.map(task => (
                        <div key={task.id} className={styles.Task}>
                            <div className={"form-check " + styles.Hidden} id={"hi"} hidden={this.state.hidden}>
                                <input className={"form-check-input"} name={task.id} type="checkbox" value=""
                                       id="defaultCheck1" onChange={() => this.handleInputChange(task.id)}/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                </label>
                            </div>
                            <Button info lg block outline onClick={()=>this.openTask(task.id)}>{task.title}</Button>
                        </div>
                    ))}
                </form>
                <div className={styles.Change}>
                    <Button primary lg outline mr="3" type="submit"
                            onClick={() => this.HiddenCheck(styles.Hidden)}>{this.state.hidden ? 'Выбрать' : 'Отменить'}</Button>
                    <Button secondary lg outline block form="data" type="submit" >Удалить</Button>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.taskReducer.tasks)
    return {
        taskss: state.taskReducer.tasks
    }
}
export default connect(mapStateToProps, {getTasks, delTask, openTask})(TasksList)