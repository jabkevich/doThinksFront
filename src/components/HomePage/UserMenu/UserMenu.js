import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from "./styles.scss";
import DehazeIcon from '@material-ui/icons/Dehaze';
import { logout} from "../../../redux/auth/authActions"
import {connect} from 'react-redux'
import {Redirect, Route} from "react-router-dom";
import { useHistory } from "react-router-dom";
import history from './../../history'
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


function  UserMenu (props){
    const [anchorEl, setAnchorEl] = React.useState(null);

     const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout =()=>{
        console.log(props.user)
        props.logout()
    }

    return (
        <div className={styles.User}>
            <div>
                {props.user.username}
            </div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <DehazeIcon/>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}
export default connect(mapStateToProps,{logout})(UserMenu)