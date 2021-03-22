import React, {Component, Fragment} from 'react'
import {HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";
import Login from "./authorization/Login";
import Register from "./authorization/Register";
import Home from "./HomePage/HomePage";

class App extends Component {

    render() {
        return (
            <Router>
                        <Switch>
                            <PrivateRoute exact path={"/"}/>
                            <Route exact path={"/login"} component={Login}/>
                            <Route exact path={"/register"} component={Register}/>
                            <Route exact path={"/home"} component={Home}/>
                        </Switch>
            </Router>
        )
    }
}



export default App