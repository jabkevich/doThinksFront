import React, {Component, Fragment} from 'react'



class Input extends Component {
    state = {
        title: 'Задание',
    }
    onChange = e => {
        this.setState(
            {[e.target.name]: e.target.value}
        );
        // document.getElementById("titleName").event.preventDefault()
    }


    onSubmit = e => {
           console.log("изменино")
    };
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input id="titleName" name={"title"} type={"text"} onChange={this.onChange} value={this.state.title} placeholder={"Имя задания"}/>
            </form>
        )
    }
}



export default Input