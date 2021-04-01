import styles from "./styles/styles.scss"
import React, {Component, Fragment} from 'react';
import {Link, Redirect, Route} from "react-router-dom";
import UserMenu from "./UserMenu/UserMenu"
import Other from "./Other/Other"
import Tasks from "./Tasks/Tasks"
import {connect} from "react-redux"
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

class Home extends Component {
    render() {
        if(!this.props.userLoad){
            return <Redirect to={"/"}/>
        }
        return (
            <Fragment>
                <div className={styles.HOME}>
                    <div className={styles.Menu}>
                            <UserMenu/>
                        <div className={styles.Other}>
                            <Other/>
                        </div>
                        <Tasks/>
                    </div>
                    <div className={styles.MainScreen}>
                        MainScreen
                    </div>
                </div>
            </Fragment>
        )
    }
}

mapStateToProps=state=>{
    return{
        userLoad: state.auth.userLoad
    }
}
export default connect(mapStateToProps, null)(Home)