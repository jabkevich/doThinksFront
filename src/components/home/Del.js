import React, {Component, Fragment} from 'react'
import {connect} from "react-redux"
import {delTask} from "../../redux/authAction";
import DeleteIcon from '@material-ui/icons/Delete';
import {IconButton} from "@material-ui/core";


class Del extends Component {

    render() {
        return (

            <button onClick={this.props.delTask.bind(this, this.props.id)}>
                {/*<IconButton edge="end" aria-label="delete">*/}
                    <DeleteIcon/>
                {/*</IconButton>*/}
            </button>

        )
    }
}



export default connect(null, {delTask})(Del)