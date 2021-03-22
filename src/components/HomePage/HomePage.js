import styles from "./styles/styles.scss"
import React, {Component, Fragment} from 'react';
import {Link, Redirect, Route} from "react-router-dom";
import UserMenu from "./UserMenu"


class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className={styles.HOME}>
                    <div className={styles.Menu}>
                        <div className={styles.User}>
                            <UserMenu/>
                        </div>
                        <div className={styles.Other}>
                            Other
                        </div>
                        <div className={styles.Tasks}>
                            Tasks
                        </div>
                    </div>
                    <div className={styles.MainScreen}>
                        MainScreen
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default Home