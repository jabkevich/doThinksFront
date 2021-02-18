import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadUser} from '../../redux/authAction'

const PrivateRoute = (auth) => (
    <Route
        render={props => {
            if (!auth.isAuthenticated)
                return <Redirect to={"/login"}/>
            else if (auth.loading) {
                auth.loadUser()
                return <h2>Loadin...</h2>
            } else if (!auth.loading && auth.user) {
                return <Redirect to={"/home"}/>
            }
        }
        }
    />
)
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        loading: state.auth.loading,
        token: state.auth.token,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, {loadUser})(PrivateRoute)