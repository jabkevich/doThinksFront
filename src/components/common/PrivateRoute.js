import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom'


const PrivateRoute = () => (
    <Route
        render={props => {
            return <Redirect to={"/login"}/>
           }
        }
    />
)


export default PrivateRoute