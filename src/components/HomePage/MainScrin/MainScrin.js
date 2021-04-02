import React, {Component, Fragment} from 'react';
import styles from "./styles.scss";
import {connect} from "react-redux"

class MainScrin extends Component {
    render() {

        return (
            <Fragment>
                <div className={styles.MainScreen}>
                    {
                        this.props.miniTasks.map(miniTask => (
                            <div>{miniTask.title}</div>
                        ))
                    }
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state =>{
    return{
        miniTasks: state.taskReducer.miniTasks
    }
}

export default connect(mapStateToProps, null)(MainScrin)