import React, {Component, Fragment} from 'react'
import {connect} from "react-redux"
import {updateTask, updatePoint} from "../../redux/authAction";


class Input extends Component {
    state = {
        title: this.props.data.title,
    }
    onChange = e => {
        this.setState(
            {[e.target.name]: e.target.value}
        );
        // document.getElementById("titleName").event.preventDefault()
    }


    onSubmit = e => {
        e.preventDefault();
        const {title} = this.state
        if(title!=="") {
            let data = this.props.data
            data["title"] = title
            this.props.updateTask(data, this.props.data.id)
        }else{
            this.state=this.props.title
        }
    };
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input id="titleName" name={"title"} type={"text"} onChange={this.onChange} value={this.state.title} placeholder={"Имя задания"}/>
            </form>
        )
    }
}



export default connect(null, {updateTask,updatePoint})(Input)