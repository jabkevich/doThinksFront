import React, {Component, Fragment, useState} from "react";
import {SortableContainer, SortableElement} from "react-sortable-hoc";
import styles from "./styles.scss"
import DRD from "./DRD.scss"
import {connect} from "react-redux"
import {swapMiniTasks, openMiniTask, openTask} from "../../../redux/task/tasksActions"


const SortableItem = SortableElement(({value, index}) => (
    <div className={DRD.list__card} index={index}>
        {value.title}
    </div>
));

const SortableList = SortableContainer(({items, miniTasksLoad}) => {
    if (miniTasksLoad)
        return (
            <div className={DRD.list}>
                {items.map((value, index) => (
                    <SortableItem value={value} index={index} key={value.id}/>
                ))}
            </div>
        );
    else
        return (
            <div className={DRD.list}>
            </div>
        )
});

class MainScrin extends Component {

    constructor(props) {
        super(props);
    }


    onSortEnd = ({oldIndex, newIndex}) => {
        if (oldIndex !== newIndex) {
            this.props.swapMiniTasks(newIndex, oldIndex, this.props.miniTasks)
        } else {
            this.props.openMiniTask(this.props.miniTasks[oldIndex].id)
        }
    };


    render() {
        return (
            <Fragment>
                <div className={styles.MainScreen}>
                    <SortableList items={this.props.miniTasks} miniTasksLoad={this.props.miniTasksLoad}
                                  onSortEnd={this.onSortEnd} axis="xy"/>
                </div>
            </Fragment>
        );
    }

};

const mapStateToProps = state => {
    return {
        miniTasks: state.taskReducer.miniTasks,
        miniTasksLoad: state.taskReducer.miniTasksLoad
    }
}

export default connect(mapStateToProps, {swapMiniTasks, openMiniTask})(MainScrin)



