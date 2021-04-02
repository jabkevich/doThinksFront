import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadUser} from '../../redux/auth/authActions'
import {getTasks} from '../../redux/task/tasksActions'
const PrivateRoute = (auth) => (
    <Route
        render={props => {
            if(!auth.isAuthenticated && !auth.userLoading){
                return <Redirect to={"./login"}/>
            }else if ((auth.isAuthenticated || auth.userLoading) && !auth.userLoad){
                auth.loadUser();
                return <h2>Loadin...</h2>
            }else if(!auth.taskLoaded ){
                auth.getTasks();
                return <h2>Loadin...</h2>
            }
            else if(auth.userLoad && auth.taskLoaded){
                return <Redirect to={"./home"}/>
            }
           }
        }
    />
)
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        userLoading: state.auth.userLoading,
        userLoad: state.auth.userLoad,
        taskLoading: state.taskReducer.taskLoading,
        taskLoaded: state.taskReducer.taskLoaded
    }
}


export default connect(mapStateToProps, {loadUser, getTasks})(PrivateRoute)