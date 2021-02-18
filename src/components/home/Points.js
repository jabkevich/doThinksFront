import React, {Component, Fragment} from 'react'
import {connect} from "react-redux"
import "./styles/Points.css"
import DRDPoints from  "./drdPoints"
import AddIcon from "@material-ui/icons/Add";
import {addPoint} from "../../redux/authAction";

class Points extends Component {
    state = {
        title:"",
        other: ""
    }
    onChange = e => this.setState(
        {[e.target.name]: e.target.value}
    );

    onSubmit = e => {
        console.log(this.props.task)
        e.preventDefault();
        const {title, other} = this.state
        const data = {title,other}
        this.props.addPoint(data, this.props.task.id)
    };
    render() {

        const {title, other} = this.state
        return (
            <Fragment>
                <DRDPoints/>
                <form className={"PointName"} onSubmit={this.onSubmit}>
                    <input className={""} name={"title"} type={"text"} onChange={this.onChange} value={title}
                           placeholder={"Имя задания"}/>
                    <input className={""} name={"other"} type={"text"} onChange={this.onChange} value={other} placeholder={"Дополнительно"}/>
                    <button type="submit"><AddIcon/></button>
                </form>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}


export default connect(mapStateToProps, {addPoint})(Points)