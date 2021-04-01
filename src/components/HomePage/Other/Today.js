import React, {Component, Fragment} from 'react';
import {Link, Redirect, Route} from "react-router-dom";
import {Button} from "bootstrap-4-react";

class Today extends Component {
    render() {
        return (
                <Button info lg block>Сегодня</Button>
        )
    }
}


export default Today