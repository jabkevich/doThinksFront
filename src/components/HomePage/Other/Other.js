import React, {Component, Fragment} from 'react';
import {Link, Redirect, Route} from "react-router-dom";
import PlanTask from "./PlanTask";
import Tomorrow from "./Tomorrow";
import Today from "./Today";
class Other extends Component {
    render() {
        return (
            <Fragment>
                <PlanTask/>
                <Tomorrow/>
                <Today/>
            </Fragment>
        )
    }
}


export default Other