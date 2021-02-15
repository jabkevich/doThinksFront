import React, {Component} from 'react'
import "./styles/mainWindows.css"
import {connect} from 'react-redux'




class MainWindow extends Component {


    deploy(id){
        let card = document.getElementById(`btn${id}`)
        if(card.classList.contains("deploy")){
            card.classList.remove("deploy")
            card.childNodes[0].classList.remove("deploy")
        }else{
            card.classList.add("deploy")
            card.classList.add("deploy")
            card.childNodes[0].classList.add("deploy")
        }

    }
    render() {
        return (
            <div id="me" className={"MainWindow"}>
                    {this.props.groupTasks.map(task =>(
                        <button id={`btn${task.id}`} onClick={() => this.deploy(task.id)} key={task.id} className={`button`}>
                            <div className={"tasks"}>
                                <span className={"title"}>{task.title}</span>
                            </div>
                        </button>
                    ))}
            </div>
        )
    }
}
const mapStateToProps = state => {

    return {
        groupTasks: state.auth.groupTasks
    }
}

export default connect(mapStateToProps, null)(MainWindow)