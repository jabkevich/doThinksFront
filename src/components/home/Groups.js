import React, {Component} from 'react'
import {openGroup, delGroup} from "../../redux/authAction";
import {connect} from 'react-redux'
import "./styles/group.css"

class Group extends Component {
    render() {
        return (
            <div className={"Group"}>
                    {this.props.group.map(group =>(
                        <div key={group.id} className={"group"}>
                            <button onClick={this.props.openGroup.bind(this, group.id)}>{group.title}</button>
                            <button onClick={this.props.delGroup.bind(this, group.id)}>Удалить</button>
                        </div>
                    ))}
            </div>
        )
    }
}

const mapStateToProps = state => {

    return {
        user: state.auth.user,
    }
}
export default connect(mapStateToProps, {delGroup, openGroup})(Group)


