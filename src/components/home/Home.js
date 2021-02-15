import React, {Component} from "react";
import Menu from "./Menu";
import MainWindow from "./MainWindow";
import "./styles/Home.css"
export class Home extends Component {
    render() {

        return(
            <div className={"Home"}>
                <Menu/>
                <MainWindow/>
            </div>
        )
    }
}

export default Home